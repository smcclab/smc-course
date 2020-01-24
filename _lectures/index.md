---
title: Lectures
permalink: /lectures/
hidden: true
---

Link to your slides here: ppt, pdf, HTML---it's up to you how you put them
together. If I told you had to do it a specific way you'd ignore me anyway.

If you put your slides in the top-level `_assets/` folder then you can use the 
link like this (although you can use whatever directory structure you like):

- [Week 1 slides]({{ 'assets/lectures/compXXXX-week-1.pdf' | relative_url }})

Although if the slides are hosted somewhere else, you can just point to
them---it's a link, after all.

You can also do segmentation, etc. Create a structure which works for your
content.

## Week 2

Alternatively you can write your slides in Markdown and have them hosted on your coursepage automatically using [reveal.js](https://revealjs.com/).

- [Week 2 slides (reveal.js demo)](week-one)

To do this, create a new page and set the layout to 'reveal'.

```
title: Lecture Title
layout: reveal
```

From there you can write Markdown as you wish, with each instance of either a `<section>`, `<h1>`, or `<h2>` tag (or, naturaly, `#` and `##`) creating a new slide.

```
...

# This is the first slide

this is content on the first slide

## this is the second slide

# This is a new topic, so it has a big header (third slide)
```
