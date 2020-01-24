---
title: Labs
permalink: /labs/
hidden_in_sidebar: true
---

Put any generally useful about the labs here, and put the individual lab content
in markdown files with the `01-*.md`, `02-*.md`, `03-*.md`, etc. naming scheme.

Or just have this landing page (`index.md`) with link to pdfs, or and external
website, or whatever. It's your course, you can supply the lab materials in
whatever format you like.

You can also list the lab times in a table like so (see the [kramdown table
syntax docs](https://kramdown.gettalong.org/syntax.html#tables) for the
details). Obviously you should modify it to reflect the information for the labs
in your course.

| Day       | Time     | Room      | FAIS ID |
|-----------|----------|-----------|---------|
| Monday    | 8am-11am | CSIT N112 | mon8am  |
| Wednesday | 11am-2pm | CSIT N114 | wed11am |

If you want to include a list of the lab (title & summary) then use the
following `_postlist.html` include, otherwise just remove the line (the lab
content will still be accessible via the sidebar).

{% include postlist.html posts=site.labs show_date=true %}
