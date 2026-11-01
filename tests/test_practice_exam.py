"""Check extraction with invented questions and validate the committed review."""
import copy
from hashlib import sha256
import importlib.util
import json
from pathlib import Path
import unittest


ROOT = Path(__file__).resolve().parents[1]
spec = importlib.util.spec_from_file_location("download_practice_exam", ROOT / "scripts/download_practice_exam.py")
exam = importlib.util.module_from_spec(spec)
spec.loader.exec_module(exam)


def card(number=1, label="Priority · Real Exam", correct=("B",), cased=False):
    options = "".join(f'<li class="qr-opt" data-correct="{str(letter in correct).lower()}">'
                      f'<span class="q-opt-letter">{letter}</span><span class="qr-opt-text">{text}</span></li>'
                      for letter, text in [("A", "First option"), ("B", "x &lt;=&gt; y"), ("C", "Third option")])
    return (f'<article class="q-card {"q-card-cased" if cased else ""}" id="q{number}" data-priority>'
            f'<a class="q-num" href="/questions/example-{number}/">Q{number}</a>'
            '<span class="q-domain">Example service</span><span class="q-weight">Domain 2</span>'
            f'<span class="q-tag q-tag-priority">{label}</span><p class="q-text">Which option fits?</p>'
            f'<ol>{options}</ol><div class="qr-shortcut">Shortcut: Short preview.</div>'
            '<div class="q-exp">The full explanation includes <code>x &lt;=&gt; y</code>.</div></article>')


CASE = ('<section class="case-panel"><h2 class="case-title">A team scenario</h2>'
        '<p class="case-body">A team needs to store data.</p><ul class="case-reqs">'
        '<li>Retain the original requirement.</li></ul></section>')
URL = "https://ai200prep.com/practice-sets/set-01/"


class PracticeExamTests(unittest.TestCase):
    def reviewed_pair(self):
        _, questions, _ = exam.parse_set(URL, card(1) + card(2))
        questions[1]["prompt"] = "A paraphrase asking for the same decision."
        review = {"schemaVersion": 1, "groups": [{"keep": "example-1", "duplicates": ["example-2"],
                  "reason": "Both ask for the same decision.",
                  "fingerprints": {q["id"]: exam.review_fingerprint(q) for q in questions}}]}
        return questions, review

    def test_requires_real_exam_label_not_just_priority(self):
        summary, questions, _ = exam.parse_set(URL, card(1, "Priority") + card(2))
        self.assertEqual(summary["totalCount"], 2)
        self.assertEqual(summary["selectedCount"], 1)
        self.assertEqual(questions[0]["id"], "example-2")
        self.assertEqual(questions[0]["tags"], ["Real Exam"])

    def test_full_explanation_code_and_all_correct_options_are_preserved(self):
        _, questions, _ = exam.parse_set(URL, card(correct=("A", "B")))
        self.assertEqual(questions[0]["correctAnswers"], ["A", "B"])
        self.assertEqual(questions[0]["options"][1]["text"], "x <=> y")
        self.assertEqual(questions[0]["explanation"], "The full explanation includes x <=> y.")

    def test_case_requirements_stay_attached_to_selected_questions(self):
        _, questions, cases = exam.parse_set(URL, CASE + card(cased=True))
        self.assertEqual(questions[0]["contextId"], cases[0]["id"])
        self.assertEqual(cases[0]["requirements"], ["Retain the original requirement."])
        with self.assertRaisesRegex(ValueError, "Missing case context"):
            exam.parse_set(URL, card(cased=True))

    def test_missing_answer_key_fails_instead_of_guessing(self):
        with self.assertRaisesRegex(ValueError, "Missing options or answer key"):
            exam.parse_set(URL, card(correct=()))

    def test_deduplication_keeps_provenance_and_rejects_conflicting_keys(self):
        _, questions, _ = exam.parse_set(URL, card(1) + card(2))
        unique, duplicates = exam.deduplicate(questions, [])
        self.assertEqual(len(unique), 1)
        self.assertEqual(duplicates[0]["duplicate"], "example-2")
        self.assertEqual(unique[0]["alsoAppearsAt"], [URL + "#q2"])
        questions[1]["correctAnswers"] = ["A"]
        with self.assertRaisesRegex(ValueError, "Conflicting source answer keys"):
            exam.deduplicate(questions, [])

    def test_different_case_constraints_are_not_merged(self):
        _, questions, _ = exam.parse_set(URL, card(1) + card(2))
        questions[0]["contextId"], questions[1]["contextId"] = "case-1", "case-2"
        cases = [{"id": "case-1", "body": "Different workload", "requirements": ["One region"]},
                 {"id": "case-2", "body": "Different workload", "requirements": ["Two regions"]}]
        self.assertEqual(len(exam.deduplicate(questions, cases)[0]), 2)

    def test_discovers_only_set_links(self):
        self.assertEqual(exam.discover('<a href="/practice-sets/set-02/">Two</a>'
                                       '<a href="/questions/example/">Question</a>'
                                       '<a href="/practice-sets/set-01/">One</a>'),
                         [URL, "https://ai200prep.com/practice-sets/set-02/"])

    def test_reviewed_paraphrases_are_excluded_without_mutating_source_questions(self):
        questions, review = self.reviewed_pair()
        before = copy.deepcopy(questions)
        mapping, audit = exam.reviewed_duplicates(questions, [], review)
        self.assertEqual(mapping, {"example-2": "example-1"})
        self.assertEqual(audit[0]["reason"], review["groups"][0]["reason"])
        self.assertEqual(questions, before)

    def test_stale_reviews_and_missing_retained_questions_fail_instead_of_dropping_content(self):
        questions, review = self.reviewed_pair()
        for field, value in [("prompt", "A different requirement"), ("correctAnswers", ["A"]),
                             ("explanation", "A different rule")]:
            changed = copy.deepcopy(questions)
            changed[1][field] = value
            with self.subTest(field=field), self.assertRaisesRegex(ValueError, "changed since duplicate review"):
                exam.reviewed_duplicates(changed, [], review)
        with self.assertRaisesRegex(ValueError, "Missing retained question"):
            exam.reviewed_duplicates(questions[1:], [], review)
        self.assertEqual(exam.reviewed_duplicates(questions[:1], [], review), ({}, []))

    def test_a_changed_case_invalidates_its_semantic_review(self):
        questions, review = self.reviewed_pair()
        case = {"id": "case-1", "title": "Example", "body": "One requirement", "requirements": ["One region"]}
        questions[1]["contextId"] = case["id"]
        review["groups"][0]["fingerprints"]["example-2"] = exam.review_fingerprint(questions[1], case)
        exam.reviewed_duplicates(questions, [case], review)
        changed = dict(case, requirements=["Two regions"])
        with self.assertRaisesRegex(ValueError, "changed since duplicate review"):
            exam.reviewed_duplicates(questions, [changed], review)

    def test_the_committed_bank_matches_the_review_and_preserves_the_outbox_source(self):
        script = (ROOT / "practice-exam-data.js").read_text(encoding="utf-8")
        bank = json.loads(script.split("window.AI200_EXAM_BANK = ", 1)[1].strip().removesuffix(";"))
        review = json.loads((ROOT / "data/practice-exam-review.json").read_text(encoding="utf-8"))
        mapping, audit = exam.reviewed_duplicates(bank["questions"], bank["contexts"], review)
        self.assertEqual(mapping, bank["duplicateOf"])
        self.assertEqual(len(bank["questions"]), review["reviewedQuestionCount"])
        self.assertEqual(bank['bankId'], sha256(json.dumps([bank['questions'], bank['contexts']], sort_keys=True).encode()).hexdigest())
        self.assertEqual(len(audit), bank["download"]["reviewedDuplicatesExcluded"])
        self.assertEqual(len(bank["questions"]) - len(mapping), bank["download"]["uniqueQuestionCount"])
        self.assertEqual(mapping["c-fb-001"], "p-sb-006")
        self.assertEqual(mapping['p-kv-021'], 'p-kv-m01')
        self.assertEqual(len(mapping), 33)
        self.assertEqual(bank['download']['uniqueQuestionCount'], 326)
        self.assertEqual(mapping['p-mon-002'], 'c-tw-004')
        self.assertEqual(mapping['p-mon-020'], 'c-tw-004')
        self.assertTrue({"c-fb-001", "p-sb-006"}.issubset({q["id"] for q in bank["questions"]}))
        retained = {q["id"] for q in bank["questions"] if q["id"] not in mapping}
        for example in review["retainedExamples"]:
            self.assertTrue(set(example["ids"]).issubset(retained), example)

    def test_similarity_candidates_find_the_reworded_outbox_questions(self):
        script = (ROOT / "practice-exam-data.js").read_text(encoding="utf-8")
        bank = json.loads(script.split("window.AI200_EXAM_BANK = ", 1)[1].strip().removesuffix(";"))
        candidates = exam.near_duplicates(bank["questions"])
        self.assertIn({"p-sb-006", "c-fb-001"}, [set(pair["ids"]) for pair in candidates])

    def test_answer_containment_finds_narrow_variants_inside_longer_answers(self):
        questions = [
            {'id': 'short', 'service': 'Example broker', 'prompt': 'How is successful work acknowledged?',
             'options': [{'id': 'A', 'text': 'Complete removes a processed message.'}], 'correctAnswers': ['A']},
            {'id': 'combined', 'service': 'Example broker', 'prompt': 'Match all processing outcomes to their settlement actions.',
             'options': [{'id': 'A', 'text': 'Complete removes a processed message. Abandon releases a lock for redelivery. Defer retains pending work for later retrieval. Dead-letter isolates unusable payloads for investigation.'}], 'correctAnswers': ['A']},
        ]
        candidates = exam.near_duplicates(questions)
        self.assertEqual(len(candidates), 1)
        self.assertEqual(candidates[0]['answerContainment'], 1)
        self.assertLess(candidates[0]['similarity'], .55)

    def test_field_names_and_case_variants_are_candidates_but_never_removed_without_review(self):
        script = (ROOT / 'practice-exam-data.js').read_text(encoding='utf-8')
        bank = json.loads(script.split('window.AI200_EXAM_BANK = ', 1)[1].strip().removesuffix(';'))
        pairs = [set(pair['ids']) for pair in exam.near_duplicates(bank['questions'])]
        self.assertIn({'p-mon-002', 'c-tw-004'}, pairs)
        # Identical answer terms can still represent different operational rules.
        self.assertNotIn('p-eh-008', bank['duplicateOf'])


if __name__ == "__main__":
    unittest.main()
