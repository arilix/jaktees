"""Convert the <main>/<footer> markup of a saved jaktees.com SSR page into a JSX component file."""
import html, re, sys
from html.parser import HTMLParser

VOID = {"br", "img", "input", "hr", "meta", "link"}
RENAME = {"class": "className", "for": "htmlFor", "tabindex": "tabIndex", "itemprop": "itemProp",
          "itemscope": "itemScope", "itemtype": "itemType", "maxlength": "maxLength",
          "autocomplete": "autoComplete", "readonly": "readOnly", "charset": "charSet",
          "viewbox": "viewBox", "srcset": "srcSet", "hreflang": "hrefLang", "colspan": "colSpan"}
BOOL = {"required", "disabled", "selected", "checked", "readonly", "open", "autofocus"}
REVEAL = [("scale(0)", "pop"), ("translatey(40px)", "up"), ("scale(0.9)", "scale"), ("translatex(40px)", "right")]
IMG_MAP = {}

def attr_name(n):
    if n in RENAME: return RENAME[n]
    if n.startswith(("aria-", "data-")): return n
    if "-" in n: return re.sub(r"-(\w)", lambda m: m.group(1).upper(), n)
    return n

def jsx_str(v):
    return '"' + v.replace("\\", "\\\\").replace('"', "&quot;") + '"' if "{" not in v else "{" + repr(v) + "}"

class Conv(HTMLParser):
    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.out = []; self.uses_link = False; self.has_img = False
    def handle_comment(self, d): pass
    def handle_decl(self, d): pass
    def handle_data(self, d):
        if not d: return
        if re.search(r"[{}<>]", d):
            self.out.append("{" + repr(d).replace("'", '"') if False else "{" + __import__("json").dumps(d, ensure_ascii=False) + "}")
        else:
            self.out.append(d)
    def tag(self, tag, attrs, selfclose):
        if tag == "script": return None
        parts = []; reveal = None; href = None
        for k, v in attrs:
            if k in ("data-status", "aria-current"): continue
            if k == "style":
                low = (v or "").replace(" ", "").lower()
                for pat, name in REVEAL:
                    if pat in low and ("opacity:0" in low or pat == "scale(0)"): reveal = name
                if reveal: continue
                if re.fullmatch(r"opacity:1;transform:none|transform:translatex\(100px\)", low): continue
                css = []
                for decl in (v or "").split(";"):
                    if ":" in decl:
                        p, val = decl.split(":", 1)
                        css.append("%s: %s" % (re.sub(r"-(\w)", lambda m: m.group(1).upper(), p.strip()), __import__("json").dumps(val.strip())))
                parts.append("style={{ %s }}" % ", ".join(css)); continue
            n = attr_name(k)
            if v is None or (k in BOOL and v in ("", k)):
                parts.append(n); continue
            if k == "selected": continue
            if k in ("rows", "cols", "tabindex", "maxlength", "width", "height") and v.isdigit():
                parts.append("%s={%s}" % (n, v)); continue
            if k == "href": href = v
            if k == "src" and "/assets/" in v:
                v = "/images/" + v.rsplit("/", 1)[1]
            if k == "class": v = v.strip()
            parts.append("%s=%s" % (n, jsx_str(v)))
        if reveal: parts.append('data-reveal="%s"' % reveal)
        name = tag
        if tag == "a" and href and href.startswith("/"):
            name = "Link"; self.uses_link = True
        if tag == "img": self.has_img = True
        return name, " ".join(parts)
    def handle_starttag(self, tag, attrs):
        r = self.tag(tag, attrs, False)
        if r is None: self.skip = tag; return
        name, a = r
        self.stack = getattr(self, "stack", []) + [name]
        if tag in VOID: self.out.append("<%s%s />" % (name, " " + a if a else "")); self.stack.pop()
        else: self.out.append("<%s%s>" % (name, " " + a if a else ""))
    def handle_startendtag(self, tag, attrs):
        r = self.tag(tag, attrs, True)
        if r is None: return
        name, a = r
        self.out.append("<%s%s />" % (name, " " + a if a else ""))
    def handle_endtag(self, tag):
        if tag == "script": return
        if tag in VOID: return
        name = self.stack.pop()
        self.out.append("</%s>" % name)

def extract(src, start, end):
    i = src.index(start); j = src.rindex(end)
    frag = src[i:j + len(end)]
    frag = re.sub(r"<script.*?</script>", "", frag, flags=re.S)
    return frag

def convert(frag):
    c = Conv(); c.feed(frag)
    return "".join(c.out), c

if __name__ == "__main__":
    src_file, start, end, outfile, comp = sys.argv[1:6]
    frag = extract(open(src_file).read(), start, end)
    body, c = convert(frag)
    head = ""
    if c.uses_link: head += 'import Link from "next/link";\n'
    pre = "/* eslint-disable @next/next/no-img-element */\n" if c.has_img else ""
    open(outfile, "w").write('%s%s\nexport function %s() {\n  return (\n    %s\n  );\n}\n' % (pre, head, comp, body))
