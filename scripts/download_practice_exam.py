"""Build the site's practice exam bank from the source's 'Real Exam' questions.

Source HTML and auxiliary exports stay in Git-ignored artifacts/. The question bank
is bundled in practice-exam-data.js. Run with --from-cache to rebuild a previous
download without accessing the network. Uses the Python standard library.
"""
from __future__ import annotations

import argparse
from collections import Counter
from concurrent.futures import ThreadPoolExecutor
from datetime import datetime, timezone
from hashlib import sha256
from html.parser import HTMLParser
import json
from math import log, sqrt
from pathlib import Path
import re
from urllib.parse import urljoin, urlsplit
from urllib.request import Request, urlopen


ROOT = Path(__file__).resolve().parents[1]
BASE = "https://ai200prep.com"
INDEX = BASE + "/practice-sets/"
TERMS = BASE + "/terms/"
VOID = set("area base br col embed hr img input link meta param source track wbr".split())
BLOCKS = set("p div section article aside li ul ol h1 h2 h3 h4 pre tr table blockquote details summary".split())


class Node:
    def __init__(self, tag, attrs=None):
        self.tag, self.attrs, self.children = tag, attrs or {}, []

    @property
    def classes(self):
        return set(self.attrs.get("class", "").split())

    def find_all(self, predicate):
        found = []
        for child in self.children:
            if isinstance(child, Node):
                if predicate(child):
                    found.append(child)
                found.extend(child.find_all(predicate))
        return found

    def by_class(self, name):
        return self.find_all(lambda n: name in n.classes)

    def text(self):
        if self.tag in {"script", "style"} or "sr-only" in self.classes or self.attrs.get("aria-hidden") == "true":
            return ""
        chunks = []
        for child in self.children:
            if isinstance(child, str):
                chunks.append(child)
            elif child.tag == "br":
                chunks.append("\n")
            else:
                value = child.text()
                chunks.append("\n" + value + "\n" if child.tag in BLOCKS else value)
        return re.sub(r"\n[ \t]*\n(?:[ \t]*\n)+", "\n\n", "".join(chunks).replace("\xa0", " ")).strip()


class Document(HTMLParser):
    def __init__(self, html):
        super().__init__(convert_charrefs=True)
        self.root = Node("document")
        self.stack = [self.root]
        self.feed(html)

    def handle_starttag(self, tag, attrs):
        node = Node(tag, dict(attrs))
        self.stack[-1].children.append(node)
        if tag not in VOID:
            self.stack.append(node)

    def handle_startendtag(self, tag, attrs):
        self.handle_starttag(tag, attrs)
        if tag not in VOID:
            self.handle_endtag(tag)

    def handle_endtag(self, tag):
        for i in range(len(self.stack) - 1, 0, -1):
            if self.stack[i].tag == tag:
                del self.stack[i:]
                break

    def handle_data(self, text):
        self.stack[-1].children.append(text)


def one(nodes, description):
    if len(nodes) != 1:
        raise ValueError(f"Expected one {description}; found {len(nodes)}")
    return nodes[0]


def discover(html):
    links = {urljoin(INDEX, n.attrs["href"]) for n in Document(html).root.find_all(
        lambda n: n.tag == "a" and re.fullmatch(r"/practice-sets/set-\d+/?", n.attrs.get("href", "")))}
    if not links:
        raise ValueError("No practice-set links found; source markup may have changed")
    return sorted(links, key=lambda url: int(re.search(r"set-(\d+)", url)[1]))


def parse_set(url, html):
    number = int(re.search(r"set-(\d+)", url)[1])
    questions, contexts, active_context, total = [], [], None, 0
    events = Document(html).root.find_all(lambda n: "case-panel" in n.classes or "q-card" in n.classes)
    for node in events:
        if "case-panel" in node.classes:
            active_context = {
                "id": f"set-{number:02}-case-{len(contexts) + 1}",
                "title": one(node.by_class("case-title"), "case title").text(),
                "body": one(node.by_class("case-body"), "case body").text(),
                "requirements": [li.text() for ul in node.by_class("case-reqs") for li in ul.find_all(lambda n: n.tag == "li")],
            }
            contexts.append(active_context)
            continue
        total += 1
        # Priority alone is insufficient: require the visible source label.
        tags = [tag.text() for tag in node.by_class("q-tag")]
        if not any(re.search(r"\breal\s+exam\b", tag, re.I) for tag in tags):
            continue
        local_number = int(re.fullmatch(r"q(\d+)", node.attrs["id"])[1])
        source_url = urljoin(BASE, one(node.by_class("q-num"), "source link").attrs["href"])
        if urlsplit(source_url).netloc != "ai200prep.com":
            raise ValueError(f"Unexpected source link: {source_url}")
        options, answers = [], []
        for option in node.by_class("qr-opt"):
            letter = one(option.by_class("q-opt-letter"), "option label").text()
            text = one(option.by_class("qr-opt-text"), "option text").text()
            if not text or letter != chr(65 + len(options)):
                raise ValueError(f"Invalid answer option: {url} Q{local_number}")
            options.append({"id": letter, "text": text})
            if option.attrs.get("data-correct") == "true":
                answers.append(letter)
        if len(options) < 2 or not answers:
            raise ValueError(f"Missing options or answer key: {url} Q{local_number}")
        # Prefer the full explanation to its sometimes shortened preview.
        explanations = node.by_class("q-exp") or node.by_class("qr-shortcut")
        explanation = "\n\n".join(dict.fromkeys(re.sub(r"^Shortcut:\s*", "", n.text()).strip() for n in explanations))
        if not explanation:
            raise ValueError(f"Missing source explanation: {url} Q{local_number}")
        context_id = None
        if "q-card-cased" in node.classes:
            if active_context is None:
                raise ValueError(f"Missing case context: {url} Q{local_number}")
            context_id = active_context["id"]
        questions.append({
            "id": source_url.rstrip("/").split("/")[-1], "setNumber": number,
            "number": local_number, "sourceUrl": source_url, "setUrl": url + f"#q{local_number}",
            "domain": int(re.search(r"Domain (\d)", one(node.by_class("q-weight"), "domain").text())[1]),
            "service": one(node.by_class("q-domain"), "service").text(),
            "prompt": one(node.by_class("q-text"), "question").text(),
            "instructions": [tag for tag in tags if not re.search(r"priority|real\s+exam", tag, re.I)],
            "options": options, "correctAnswers": answers, "explanation": explanation,
            "contextId": context_id, "tags": ["Real Exam"],
        })
    used = {q["contextId"] for q in questions}
    if not total:
        raise ValueError(f"No questions found: {url}")
    return {
        "number": number, "url": url, "totalCount": total, "selectedCount": len(questions),
        "sha256": sha256(html.encode()).hexdigest(),
    }, questions, [c for c in contexts if c["id"] in used]


def normalized(text):
    return re.sub(r"\s+", " ", text).strip().casefold()


def deduplicate(questions, contexts):
    cases = {c["id"]: c for c in contexts}
    seen, unique, duplicates = {}, [], []
    for q in questions:
        context = cases.get(q["contextId"], {})
        key = (normalized(q["prompt"]), normalized(context.get("body", "")),
               tuple(normalized(r) for r in context.get("requirements", [])),
               tuple(sorted(normalized(o["text"]) for o in q["options"])))
        correct_text = {normalized(o["text"]) for o in q["options"] if o["id"] in q["correctAnswers"]}
        if key in seen:
            original, original_correct = seen[key]
            if correct_text != original_correct:
                raise ValueError(f"Conflicting source answer keys: {original['id']} and {q['id']}")
            original.setdefault("alsoAppearsAt", []).append(q["setUrl"])
            duplicates.append({"kept": original["id"], "duplicate": q["id"], "setUrl": q["setUrl"]})
        else:
            seen[key] = q, correct_text
            unique.append(q)
    if len({q["id"] for q in unique}) != len(unique):
        raise ValueError("Source IDs reused for different questions")
    return unique, duplicates


def near_duplicates(questions):
    # Candidate generation only. Reviewed semantic matches, not scores, decide
    # which questions are excluded from new attempts.
    stop = set("a an and are as at be by for from how in is it its of on or that the their then this to what when which with you your".split())
    tokens = lambda text: Counter(word for word in re.findall(r"[a-z0-9]+", normalized(text)) if word not in stop)
    documents = [(tokens(q["prompt"]), tokens(" ".join(o["text"] for o in q["options"] if o["id"] in q["correctAnswers"]))) for q in questions]
    frequency = Counter(word for prompt, answer in documents for word in (prompt | answer))
    weights = {word: log((len(questions) + 1) / (count + 1)) + 1 for word, count in frequency.items()}

    def vector(counts):
        values = {word: count * weights[word] for word, count in counts.items()}
        norm = sqrt(sum(value * value for value in values.values()))
        return {word: value / norm for word, value in values.items()} if norm else {}

    vectors = [(vector(prompt), vector(answer)) for prompt, answer in documents]
    cosine = lambda left, right: sum(value * right.get(word, 0) for word, value in left.items())
    pairs = []
    for i, a in enumerate(questions):
        for j in range(i + 1, len(questions)):
            prompt_score = cosine(vectors[i][0], vectors[j][0])
            answer_score = cosine(vectors[i][1], vectors[j][1])
            score = (prompt_score + 2 * answer_score) / 3
            if score >= .55:
                pairs.append({"ids": [a["id"], questions[j]["id"]], "similarity": round(score, 3),
                              "promptSimilarity": round(prompt_score, 3), "answerSimilarity": round(answer_score, 3)})
    return sorted(pairs, key=lambda pair: -pair["similarity"])


def review_fingerprint(question, context=None):
    content = {key: question[key] for key in ("id", "domain", "prompt", "instructions", "options", "correctAnswers", "explanation", "contextId")}
    content["context"] = context
    return sha256(json.dumps(content, ensure_ascii=False, sort_keys=True).encode()).hexdigest()


def reviewed_duplicates(questions, contexts, review=None):
    if review is None:
        review = json.loads((ROOT / "data/practice-exam-review.json").read_text(encoding="utf-8"))
    if review.get("schemaVersion") != 1 or not isinstance(review.get("groups"), list):
        raise ValueError("Invalid practice exam duplicate review")
    by_id, cases = {q["id"]: q for q in questions}, {c["id"]: c for c in contexts}
    duplicate_of, audit = {}, []
    for group in review["groups"]:
        kept, duplicates = group["keep"], group["duplicates"]
        if not duplicates or len(set(duplicates)) != len(duplicates) or kept in duplicates or not group.get("reason", "").strip():
            raise ValueError(f"Invalid reviewed duplicate group: {kept}")
        present = [identifier for identifier in duplicates if identifier in by_id]
        if not present:
            continue
        if kept not in by_id:
            raise ValueError(f"Missing retained question for reviewed duplicates: {kept}")
        for identifier in [kept, *present]:
            q = by_id[identifier]
            if group.get("fingerprints", {}).get(identifier) != review_fingerprint(q, cases.get(q["contextId"])):
                raise ValueError(f"Question changed since duplicate review: {identifier}")
        for identifier in present:
            if identifier in duplicate_of:
                raise ValueError(f"Question excluded by multiple review groups: {identifier}")
            duplicate_of[identifier] = kept
            audit.append({"kept": kept, "duplicate": identifier, "reason": group["reason"], "setUrl": by_id[identifier]["setUrl"]})
    if any(kept in duplicate_of for kept in duplicate_of.values()):
        raise ValueError("A retained question cannot itself be a reviewed duplicate")
    return duplicate_of, audit


def export(parsed, destination, downloaded_at):
    sets = [s for s, _, _ in parsed]
    tagged = [q for _, questions, _ in parsed for q in questions]
    contexts = [c for _, _, cases in parsed for c in cases]
    questions, duplicates = deduplicate(tagged, contexts)
    if not questions:
        raise ValueError("No questions carry the Real Exam label; source markup may have changed")
    used = {q["contextId"] for q in questions}
    contexts = [c for c in contexts if c["id"] in used]
    duplicate_of, semantic_duplicates = reviewed_duplicates(questions, contexts)
    pool = [q for q in questions if q["id"] not in duplicate_of]
    # Keep source questions and their identity stable so saved attempts, including
    # attempts containing an excluded paraphrase, can still resume and be graded.
    bank_id = sha256(json.dumps([questions, contexts], sort_keys=True).encode()).hexdigest()
    bank = {
        "schemaVersion": 1, "bankId": bank_id,
        "source": {"name": "AI-200 Prep", "url": INDEX, "termsUrl": TERMS,
                   "attribution": "Questions, answer choices and explanations: AI-200 Prep / ai200prep.com.",
                   "use": "Personal, non-commercial study.",
                   "downloadedAt": downloaded_at, "filterLabel": "Real Exam",
                   "labelNotice": "Real Exam is the provider's label, not verification that a question appeared on Microsoft's exam."},
        "download": {"setCount": len(sets), "totalQuestions": sum(s["totalCount"] for s in sets),
                     "taggedQuestions": len(tagged), "exactDuplicatesRemoved": len(duplicates),
                     "questionCount": len(questions), "uniqueQuestionCount": len(pool),
                     "reviewedDuplicatesExcluded": len(duplicate_of)},
        "duplicateOf": duplicate_of,
        "sets": sets, "contexts": contexts, "questions": questions,
    }
    destination.mkdir(parents=True, exist_ok=True)
    content = json.dumps(bank, ensure_ascii=False, indent=2) + "\n"
    (destination / "real-exam.json").write_text(content, encoding="utf-8")
    audit = {"exactDuplicates": duplicates, "reviewedDuplicates": semantic_duplicates, "similarQuestions": near_duplicates(pool),
             "note": "Similar questions are reported for review, not merged automatically: changed constraints can change the answer."}
    (destination / "real-exam-audit.json").write_text(json.dumps(audit, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    cases = {c["id"]: c for c in contexts}
    lines = ["AI-200 PREP: REAL EXAM-LABELLED QUESTIONS", "", bank["source"]["attribution"],
             INDEX, TERMS, bank["source"]["use"], bank["source"]["labelNotice"],
             f"Downloaded: {downloaded_at}", f"Questions: {len(questions)}", ""]
    for i, q in enumerate(questions, 1):
        lines += ["=" * 80, f"{i}. {q['id']} | Set {q['setNumber']:02} Q{q['number']} | Domain {q['domain']} | {q['service']}", q["setUrl"], ""]
        if q["contextId"]:
            case = cases[q["contextId"]]
            lines += [case["title"], case["body"], *["- " + r for r in case["requirements"]], ""]
        lines += [*q["instructions"], q["prompt"], "", *[f"{o['id']}. {o['text']}" for o in q["options"]],
                  "", "ANSWER: " + ", ".join(q["correctAnswers"]), q["explanation"], ""]
    (destination / "real-exam-questions-and-answers.txt").write_text("\n".join(lines), encoding="utf-8")
    return bank, audit


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--from-cache", action="store_true", help="Rebuild from the saved HTML without network access")
    parser.add_argument("--output", type=Path, default=ROOT / "artifacts/ai200prep")
    parser.add_argument("--site-output", type=Path, default=ROOT / "practice-exam-data.js",
                        help="JavaScript question bank bundled with the exam page")
    args = parser.parse_args()
    cache = args.output / "real-exam-source"
    cache.mkdir(parents=True, exist_ok=True)

    def get(url):
        name = re.sub(r"[^a-zA-Z0-9]+", "-", urlsplit(url).path).strip("-") + ".html"
        path = cache / name
        if args.from_cache:
            return path.read_text(encoding="utf-8")
        with urlopen(Request(url, headers={"User-Agent": "AI200PersonalStudy/1.0"}), timeout=30) as response:
            html = response.read().decode(response.headers.get_content_charset() or "utf-8")
        path.write_text(html, encoding="utf-8")
        return html

    index = get(INDEX)
    urls = discover(index)
    terms = get(TERMS)
    with ThreadPoolExecutor(max_workers=3) as pool:
        pages = list(pool.map(get, urls))
    parsed = [parse_set(url, html) for url, html in zip(urls, pages)]
    reported = re.search(r"([\d,]+)\s+exam-style questions", Document(index).root.text())
    total = sum(s["totalCount"] for s, _, _ in parsed)
    if reported and total != int(reported[1].replace(",", "")):
        raise ValueError(f"Source reports {reported[1]} questions; downloaded {total}")
    manifest_path = cache / "source-manifest.json"
    if args.from_cache:
        downloaded_at = (json.loads(manifest_path.read_text(encoding="utf-8"))["downloadedAt"] if manifest_path.exists()
                         else datetime.fromtimestamp((cache / "practice-sets.html").stat().st_mtime, timezone.utc).isoformat())
    else:
        downloaded_at = datetime.now(timezone.utc).isoformat()
    manifest = {"downloadedAt": downloaded_at,
                "pages": [{"url": url, "sha256": sha256(html.encode()).hexdigest()}
                          for url, html in [(INDEX, index), (TERMS, terms), *zip(urls, pages)]]}
    manifest_path.write_text(json.dumps(manifest, indent=2) + "\n", encoding="utf-8")
    bank, audit = export(parsed, args.output, downloaded_at)
    args.site_output.write_text("// Generated by scripts/download_practice_exam.py.\nwindow.AI200_EXAM_BANK = " +
                                json.dumps(bank, ensure_ascii=False, indent=2) + ";\n", encoding="utf-8")
    print(json.dumps({**bank["download"], "caseStudies": len(bank["contexts"]),
                      "multiAnswerQuestions": sum(len(q["correctAnswers"]) > 1 for q in bank["questions"]),
                      "uniqueMultiAnswerQuestions": sum(len(q["correctAnswers"]) > 1 for q in bank["questions"] if q["id"] not in bank["duplicateOf"]),
                      "similarPairs": len(audit["similarQuestions"]), "output": str(args.output)}, indent=2))


if __name__ == "__main__":
    main()
