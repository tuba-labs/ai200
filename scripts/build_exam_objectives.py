"""Build shared numbered objectives, homepage labels and reviewed exam mappings."""
import argparse
from hashlib import sha256
from html import escape
import json
from pathlib import Path
import re

ROOT = Path(__file__).resolve().parents[1]


def load_objectives(data=None):
    if data is None:
        data = json.loads((ROOT / 'data/learning-objectives.json').read_text(encoding='utf-8'))
    objectives = data.get('objectives', [])
    if data.get('schemaVersion') != 1 or len(objectives) != 27 or len({o['id'] for o in objectives}) != 27:
        raise ValueError('Define exactly 27 unique learning objectives.')
    if sorted(o.get('number', 0) for o in objectives) != list(range(1, 28)):
        raise ValueError('Objective numbers must be unique and cover 1–27.')
    for objective in objectives:
        if objective.get('domain') not in (1, 2, 3, 4) or not re.fullmatch(r'[a-z0-9-]+', objective['id']):
            raise ValueError('Invalid objective ID or domain.')
        if any(not objective.get(key, {}).get(lang, '').strip() for key in ('label', 'short') for lang in ('nb', 'en')):
            raise ValueError('Provide short and full objective labels in both languages.')
    return sorted(objectives, key=lambda o: o['number'])


def homepage_objectives(html, translations=None):
    objectives = load_objectives()
    actual = re.findall(r'data-objective="([a-z0-9-]+)"', html)
    if len(actual) != 27 or set(actual) != {o['id'] for o in objectives}:
        raise ValueError('The homepage checklist must contain the same 27 objectives.')
    return objectives


def render_homepage(html, objectives):
    by_id = {o['id']: o for o in objectives}
    def item(match):
        objective = by_id[match[1]]
        identifier, number = objective['id'], objective['number']
        return (f'<li class="objective-item" id="objective-{number}" data-no-jargon>'
                f'<label class="check-item objective-check" data-objective-help="{identifier}" '
                f'title="{escape(objective["label"]["nb"], quote=True)}"><input type="checkbox" data-objective="{identifier}">'
                f'<span><span class="objective-number">{number}.</span> <span>{escape(objective["short"]["nb"])}</span></span></label></li>')
    pattern = r'<li\b[^>]*>\s*<label class="check-item objective-check"[^>]*><input\b[^>]*data-objective="([a-z0-9-]+)"[^>]*>.*?</label>(?:\s*<button\b[^>]*data-objective-help[^>]*>.*?</button>)?\s*</li>'
    rendered, count = re.subn(pattern, item, html, flags=re.S)
    if count != 27:
        raise ValueError('Could not update all 27 homepage objective labels.')
    return rendered


def reviewed_mappings(review, objectives, question_ids):
    if review.get('schemaVersion') != 1 or not isinstance(review.get('groups'), list):
        raise ValueError('Invalid question objective review.')
    known = {o['id'] for o in objectives}
    questions = {}
    for group in review['groups']:
        ids = group.get('objectives')
        if not isinstance(ids, list) or len(set(ids)) != len(ids) or any(identifier not in known for identifier in ids):
            raise ValueError('Invalid or repeated learning objective in the review.')
        if not ids and not group.get('reason', '').strip():
            raise ValueError('Supporting questions need a review reason.')
        if not isinstance(group.get('questions'), list) or not group['questions']:
            raise ValueError('Empty question review group.')
        for identifier in group['questions']:
            if identifier in questions:
                raise ValueError('Question reviewed more than once: ' + identifier)
            questions[identifier] = {'objectives': ids, **({'reason': group['reason']} if not ids else {})}
    if set(questions) != set(question_ids):
        raise ValueError(f"Update the review for added/removed questions: missing={sorted(set(question_ids) - set(questions))}; unknown={sorted(set(questions) - set(question_ids))}")
    return questions


def catalog():
    review = json.loads((ROOT / 'data/practice-exam-objectives.json').read_text(encoding='utf-8'))
    bank_files = ('practice-exam-data.js', 'practice-exam-interactive-data.js')
    for name in bank_files:
        content = (ROOT / name).read_text(encoding='utf-8')
        if review.get('bankHashes', {}).get(name) != sha256(content.encode()).hexdigest():
            raise ValueError('Recheck learning objective mappings for the changed bank: ' + name)
    original = (ROOT / bank_files[1]).read_text(encoding='utf-8')
    bank = json.loads((ROOT / bank_files[0]).read_text(encoding='utf-8').split('window.AI200_EXAM_BANK = ', 1)[1].strip().removesuffix(';'))
    question_ids = [q['id'] for q in bank['questions']] + re.findall(r"question\('([a-z0-9-]+)'", original)
    objectives = homepage_objectives((ROOT / 'index.html').read_text(encoding='utf-8'))
    return {'schemaVersion': 1, 'objectives': objectives, 'questions': reviewed_mappings(review, objectives, question_ids)}


def output(data=None):
    return '// Generated by scripts/build_exam_objectives.py.\nwindow.AI200_EXAM_OBJECTIVES = ' + json.dumps(data or catalog(), ensure_ascii=False, indent=2) + ';\n'


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--check', action='store_true')
    args = parser.parse_args()
    data = catalog()
    outputs = {'practice-exam-objectives.js': output(data),
        'learning-objectives-data.js': '// Generated by scripts/build_exam_objectives.py.\nwindow.AI200_LEARNING_OBJECTIVES = ' + json.dumps(data['objectives'], ensure_ascii=False, indent=2) + ';\n',
        'index.html': render_homepage((ROOT / 'index.html').read_text(encoding='utf-8'), data['objectives'])}
    for name, content in outputs.items():
        target = ROOT / name
        if args.check:
            if not target.exists() or target.read_text(encoding='utf-8') != content:
                parser.exit(1, 'Run python scripts/build.py to update numbered learning objectives.\n')
        else:
            target.write_text(content, encoding='utf-8')
    print('27 learning objectives; all practice question mappings checked.')


if __name__ == '__main__':
    main()
