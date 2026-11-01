"""Keep question-level objective ratings aligned with the homepage checklist."""
import copy
import json
from pathlib import Path
import sys
import unittest

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT / 'scripts'))
import build_exam_objectives as objectives


class ExamObjectivesTests(unittest.TestCase):
    def test_the_generated_catalog_uses_the_same_27_bilingual_homepage_objectives(self):
        catalog = objectives.homepage_objectives((ROOT / 'index.html').read_text(encoding='utf-8'),
            json.loads((ROOT / 'data/site-translations.json').read_text(encoding='utf-8')))
        output = (ROOT / 'practice-exam-objectives.js').read_text(encoding='utf-8')
        self.assertEqual(output, objectives.output())
        built = json.loads(output.split('window.AI200_EXAM_OBJECTIVES = ', 1)[1].strip().removesuffix(';'))
        self.assertEqual(built['objectives'], catalog)
        self.assertEqual(len(catalog), 27)
        self.assertEqual([len([o for o in catalog if o['domain'] == d]) for d in range(1, 5)], [7, 12, 4, 4])
        self.assertEqual(len(built['questions']), 368)
        self.assertEqual([o['number'] for o in catalog], list(range(1, 28)))
        self.assertEqual(catalog[19]['id'], 'integrations-service-bus')
        self.assertEqual(catalog[19]['short']['en'], 'Message processing in Service Bus')
        self.assertIn('dead-letter', catalog[19]['label']['en'])
        html = (ROOT / 'index.html').read_text(encoding='utf-8')
        self.assertEqual(html, objectives.render_homepage(html, catalog))
        self.assertEqual(html.count('data-objective-help='), 27)
        translations = json.loads((ROOT / 'data/site-translations.json').read_text(encoding='utf-8'))['messages']
        for objective in catalog:
            self.assertIn([objective['short']['nb'], objective['short']['en']], translations)
            self.assertIn(f'id="objective-{objective["number"]}"', html)
        # A query's service context, not just its generic wording, determines the mapping.
        self.assertEqual(built['questions']['p-pg-023']['objectives'], ['data-postgresql-sdk'])
        self.assertEqual(built['questions']['i-kql-code']['objectives'], ['security-kql'])
        self.assertEqual(built['questions']['p-eh-001']['objectives'], [])
        self.assertTrue(built['questions']['p-eh-001']['reason'])

    def test_numbered_objectives_reject_duplicate_numbers_and_incomplete_tooltip_labels(self):
        original = json.loads((ROOT / 'data/learning-objectives.json').read_text(encoding='utf-8'))
        for change in [
            lambda data: data['objectives'][1].update(number=1),
            lambda data: data['objectives'][0].update(number=28),
            lambda data: data['objectives'][0]['short'].pop('en'),
            lambda data: data['objectives'][0]['label'].update(nb=''),
        ]:
            changed = copy.deepcopy(original)
            change(changed)
            with self.assertRaises(ValueError):
                objectives.load_objectives(changed)

    def test_missing_repeated_and_unknown_question_mappings_fail_instead_of_silently_skewing_scores(self):
        catalog = [{'id': 'one'}, {'id': 'two'}]
        review = {'schemaVersion': 1, 'groups': [{'objectives': ['one'], 'questions': ['q1']},
            {'objectives': [], 'reason': 'Supporting knowledge.', 'questions': ['q2']}]}
        self.assertEqual(set(objectives.reviewed_mappings(review, catalog, ['q1', 'q2'])), {'q1', 'q2'})
        for change in [
            lambda r: r['groups'].pop(),
            lambda r: r['groups'][0]['questions'].append('q2'),
            lambda r: r['groups'][0]['questions'].append('unknown'),
            lambda r: r['groups'][0].update(objectives=['missing']),
            lambda r: r['groups'][0].update(objectives=['one', 'one']),
            lambda r: r['groups'][1].pop('reason'),
        ]:
            changed = copy.deepcopy(review)
            change(changed)
            with self.assertRaises(ValueError):
                objectives.reviewed_mappings(changed, catalog, ['q1', 'q2'])


if __name__ == '__main__':
    unittest.main()
