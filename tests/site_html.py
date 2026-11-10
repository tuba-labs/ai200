"""Parse local destinations, IDs and code blocks in published study pages."""
from html.parser import HTMLParser


class Page(HTMLParser):
    def __init__(self, text):
        super().__init__(convert_charrefs=True)
        self.ids, self.links, self.code = [], [], []
        self.pre = None
        self.in_code = False
        self.feed(text)

    def handle_starttag(self, tag, attributes):
        attrs = dict(attributes)
        if "id" in attrs:
            self.ids.append(attrs["id"])
        self.links.extend(attrs[key] for key in ("href", "src") if key in attrs)
        if tag == "pre":
            self.pre = {"text": ""}
        if tag == "code" and self.pre is not None:
            self.in_code = True

    def handle_data(self, text):
        if self.pre is not None and self.in_code:
            self.pre["text"] += text

    def handle_endtag(self, tag):
        if tag == "code":
            self.in_code = False
        if tag == "pre" and self.pre is not None:
            self.code.append(self.pre)
            self.pre = None
