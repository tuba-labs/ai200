"""Parser checks use invented questions; the downloaded source is not a fixture."""
import importlib.util
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


if __name__ == "__main__":
    unittest.main()
