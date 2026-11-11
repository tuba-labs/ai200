"""Build static workshop docs and synchronize snippets with executable files."""
import argparse
from html import escape, unescape
import json
from pathlib import Path
import re

from build_jargon import attach_assets

ROOT = Path(__file__).resolve().parents[1]
WORKSHOP = ROOT / 'workshop'
CHAPTERS = json.loads((WORKSHOP / 'content/chapters.json').read_text(encoding='utf-8'))
EXTRAS = [
    ('reference', 'Versions, decisions and sources', 'Architecture decisions, selected exam objectives, costs and official documentation.'),
    ('maintainer', 'First-run walkthrough checklist', 'A maintainer acceptance path with expected outcomes and diagnostics.'),
    ('validation', 'Validation report', 'Observed local checks and Azure-specific checks still required.'),
    ('source', 'Source explorer', 'Read and download the exact executable files used in this workshop.'),
]


def language(path):
    if path.name in {'Dockerfile', 'mvnw'}:
        return 'bash'
    return {'.sh':'bash', '.ps1':'powershell', '.py':'python', '.java':'java', '.sql':'sql', '.bicep':'bicep', '.yaml':'yaml', '.yml':'yaml',
            '.json':'json', '.html':'html', '.xml':'xml'}.get(path.suffix, 'text')


def source_path(name):
    path = (WORKSHOP / name).resolve()
    if not path.is_relative_to(WORKSHOP.resolve()) or not path.is_file() or {'.state', '.tools', 'target'}.intersection(path.parts):
        raise ValueError('Missing or unsafe workshop source reference: ' + name)
    return path


def source_link(name):
    source_path(name)
    return f'<a href="./source.html#{escape(name, quote=True)}"><code>{escape(name)}</code></a>'


def code_block(text, kind='bash', title='Bash · repository root'):
    return (f'<div class="code-block"><div class="code-toolbar"><span>{escape(title)}</span>'
            '<button class="copy-button" type="button" data-copy aria-label="Copy code">Copy</button></div>'
            f'<pre><code data-language="{kind}">{escape(text.rstrip())}\n</code></pre></div>')


def expand(content):
    def snippet(match):
        name, section = match.groups()
        source = source_path(name).read_text(encoding='utf-8')
        found = re.search(r'^# region ' + re.escape(section) + r'\n(.*?)^# endregion', source, re.S | re.M)
        if not found:
            raise ValueError(f'Missing command region {name}:{section}')
        kind = language(source_path(name))
        title = 'PowerShell · Windows Downloads folder' if kind == 'powershell' else 'Bash · repository root'
        return code_block(found[1], kind, title) + '<p class="source-caption">Canonical commands: ' + source_link(name) + '</p>'
    content = re.sub(r'\{\{snippet:([^:}]+):([^}]+)\}\}', snippet, content)
    def code(match):
        name = match[1]
        path = source_path(name)
        return code_block(path.read_text(encoding='utf-8'), language(path), name) + '<p class="source-caption">Source: ' + source_link(name) + '</p>'
    content = re.sub(r'\{\{code:([^}]+)\}\}', code, content)
    content = re.sub(r'\{\{file:([^}]+)\}\}', lambda match: source_link(match[1]), content)
    if '{{' in content:
        raise ValueError('Unexpanded workshop directive')
    return content


def navigation(current):
    links = []
    for number, chapter in enumerate(CHAPTERS, 1):
        active = ' aria-current="page"' if chapter['id'] == current else ''
        links.append(f'<li><a href="./{chapter["file"]}" data-chapter-link="{chapter["id"]}" data-number="{number:02}"{active}>'
                     f'<span class="chapter-number">{number:02}</span><span>{chapter["title"]}<small class="chapter-time">~{chapter["minutes"]} min</small></span></a></li>')
    extras = '<a href="../jargon.html">Shared jargon and definitions</a>' + ''.join(f'<a href="./{identifier}.html">{escape(title)}</a>' for identifier, title, _ in EXTRAS)
    return ('<aside class="sidebar" id="chapter-navigation"><p class="sidebar-label">The core path · ~4 hours</p>'
            '<nav aria-label="Workshop chapters"><ol class="chapter-list">' + ''.join(links) + '</ol></nav>'
            '<div class="progress-panel"><span id="progress-count">0 of 10 chapters completed</span><progress id="docs-progress" max="10" value="0" aria-label="Completed chapters"></progress>'
            '<p id="storage-note">Saved only in this browser.</p><button id="reset-progress" type="button">Reset progress</button></div>'
            '<nav class="sidebar-links" aria-label="Workshop reference">' + extras + '</nav></aside>')


def page(identifier, title, summary, content, number=None, minutes=None):
    headings = re.findall(r'<h2 id="([^"]+)">(.*?)</h2>', content)
    toc = '<aside class="toc" aria-label="On this page"><strong>On this page</strong>' + ''.join(f'<a href="#{anchor}">{label}</a>' for anchor, label in headings) + '</aside>'
    meta = (f'<span>~{minutes} minutes · estimate</span><span>Bash · repository root</span><span>Core path</span>' if minutes else '<span>Reference · use as needed</span>')
    continuation = ''
    if number:
        index = number - 1
        previous = CHAPTERS[index - 1] if index else None
        following = CHAPTERS[index + 1] if index + 1 < len(CHAPTERS) else None
        prev_link = f'<a rel="prev" href="./{previous["file"]}"><small>← Previous</small>{previous["title"]}</a>' if previous else '<span></span>'
        next_link = f'<a rel="next" href="./{following["file"]}"><small>Continue →</small>{following["title"]}</a>' if following else '<a href="./maintainer.html"><small>Next steps →</small>Maintainer walkthrough checklist</a>'
        continuation = f'<section class="chapter-end" aria-label="Chapter completion"><button type="button" class="complete-button" data-complete-chapter="{identifier}" aria-pressed="false">Mark chapter complete</button><p class="completion-note">A reading checklist, not proof of a successful Azure deployment.</p><nav class="previous-next" aria-label="Previous and next chapters">{prev_link}{next_link}</nav></section>'
    crumb = f'Chapter {number:02} of 10' if number else 'Workshop reference'
    html = f'''<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="description" content="{escape(summary, quote=True)}"><meta name="color-scheme" content="light dark">
<title data-keep-english>{escape(title)} · Azure RAG workshop</title><link rel="stylesheet" href="./assets/workshop.css"><script src="./assets/workshop.js" defer></script></head>
<body><a class="skip" href="#content" data-keep-english>Skip to chapter content</a>
<!-- site-header -->
<nav class="workshop-toolbar" aria-label="Workshop tools" data-keep-english lang="en"><a class="workshop-title" href="./index.html">Azure RAG workshop</a><div class="workshop-actions"><button class="plain-button" type="button" id="open-search">Search <kbd>/</kbd></button><button class="plain-button mobile-menu" id="chapter-menu" aria-controls="chapter-navigation" aria-expanded="false">Chapters</button></div></nav>
<div class="docs-layout" data-keep-english lang="en">{navigation(identifier)}<div class="reading-grid"><main class="article" id="content"><p class="breadcrumb">Self-paced / {crumb}</p><h1>{escape(title)}</h1><p class="chapter-summary">{escape(summary)}</p><div class="chapter-meta">{meta}</div>{content}{continuation}<footer class="site-footnote">AI-200 · Selected objectives, not complete exam coverage. Sources checked 11 November 2026. <a href="./validation.html">What has actually been verified?</a></footer></main>{toc}</div></div>
<dialog class="search-dialog" id="docs-search" aria-labelledby="search-heading" data-keep-english lang="en" data-no-jargon><div class="search-top"><strong id="search-heading">Search the workshop</strong><button type="button" id="close-search" class="plain-button">Close</button></div><label for="search-input">Find a chapter, concept or diagnostic</label><input id="search-input" type="search" autocomplete="off" placeholder="For example: KEDA identity or duplicate event"><p id="search-status" role="status"></p><ul class="search-results" id="search-results"></ul></dialog></body></html>
'''
    return attach_assets(html, '../', 'laerestoff.html')


def source_files():
    roots = ['apps', 'contracts', 'infra', 'k8s', 'samples', 'scripts', 'tools', 'tests']
    suffixes = {'.java', '.py', '.xml', '.properties', '.html', '.css', '.js', '.json', '.yaml', '.yml', '.sql', '.bicep', '.txt', '.sh', '.ps1', '.kql', '.toml', '.md'}
    paths = [path for folder in roots for path in (WORKSHOP / folder).rglob('*')
             if path.is_file() and not {'target', '__pycache__', '.pytest_cache'}.intersection(path.parts)
             and (path.suffix in suffixes or path.name in {'Dockerfile', 'mvnw', 'mvnw.cmd', '.dockerignore', '.funcignore'})]
    paths.extend(WORKSHOP / name for name in ['commands.sh', 'config.example.json', 'requirements.txt', 'requirements-test.txt', 'constraints.txt', 'README.md', 'VERSIONS.md', 'VALIDATION.md'])
    return sorted(set(paths))


def outputs():
    rendered, search = {}, []
    for number, chapter in enumerate(CHAPTERS, 1):
        content = expand((WORKSHOP / f'content/{chapter["id"]}.inc').read_text(encoding='utf-8'))
        rendered[chapter['file']] = page(chapter['id'], chapter['title'], chapter['summary'], content, number, chapter['minutes'])
        search.append(dict(title=chapter['title'], summary=chapter['summary'], url=chapter['file'], text=unescape(re.sub('<[^>]+>', ' ', content))))
    for identifier, title, summary in EXTRAS:
        content = expand((WORKSHOP / f'content/{identifier}.inc').read_text(encoding='utf-8'))
        rendered[identifier + '.html'] = page(identifier, title, summary, content)
        search.append(dict(title=title, summary=summary, url=identifier + '.html', text=unescape(re.sub('<[^>]+>', ' ', content))))
    rendered['search-index.json'] = json.dumps(search, ensure_ascii=False, indent=2) + '\n'
    files = [dict(path=path.relative_to(WORKSHOP).as_posix(), language=language(path), text=path.read_text(encoding='utf-8')) for path in source_files()]
    rendered['source-index.json'] = json.dumps(files, ensure_ascii=False, indent=2) + '\n'
    return rendered


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--check', action='store_true')
    args = parser.parse_args()
    stale = []
    for name, content in outputs().items():
        path = WORKSHOP / name
        if args.check:
            if not path.exists() or path.read_text(encoding='utf-8') != content:
                stale.append(name)
        else:
            path.write_text(content, encoding='utf-8', newline='\n')
    if stale:
        raise SystemExit('Regenerate workshop: ' + ', '.join(stale))
    print(f'Workshop: {len(CHAPTERS)} complete chapters, {len(EXTRAS)} reference pages, canonical code and source indexes checked.')


if __name__ == '__main__':
    main()
