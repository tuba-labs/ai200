"""Validate the recorded question-level review; never infer scope for new cards."""
from hashlib import sha256
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def load_review():
    return json.loads((ROOT / 'data/ai200-card-review.json').read_text(encoding='utf-8'))


def fingerprint(card):
    value = {key: card[key] for key in ('question', 'answers', 'domain', 'category')}
    if card.get('example'):
        value['example'] = card['example']
    return sha256(json.dumps(value, ensure_ascii=False, sort_keys=True).encode('utf-8')).hexdigest()


def validate_deck(deck):
    review = load_review()
    cards = {card['id']: card for card in deck['cards']}
    removed = {card['id'] for card in review['removed']}
    if set(cards) != set(review['retained']) or removed.intersection(cards):
        raise ValueError('Update the AI-200 scope review when adding or retiring cards.')
    if len(cards) + len(removed) != review['sourceDeckSize']:
        raise ValueError('The scope review must account for every original card.')
    for identifier, item in review['retained'].items():
        if item['objective'] not in review['objectives'] or item['level'] not in {'objective', 'foundation'}:
            raise ValueError('Invalid scope mapping: ' + identifier)
        if item['fingerprint'] != fingerprint(cards[identifier]):
            raise ValueError('Review the scope of the changed question/answer: ' + identifier)
    return review
