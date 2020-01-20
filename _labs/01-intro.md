---
title: "Week 1: Introduction"
summary: Getting the hang of things...
layout: default
---

Welcome to the {{site.title}} labs.

## Part 1

Here's some haskell code:

```haskell
data Grades
  = Fail
  | Pass
  | Credit
  | Distinction
  | HighDistinction
  deriving (Show)

grade :: Integer -> Grades
grade mark
  | mark >= 80 && mark <= 100 = HighDistinction
  | mark >= 70 && mark < 80 = Distinction
  | mark >= 60 && mark < 70 = Credit
  | mark >= 50 && mark < 60 = Pass
  | mark >= 0 && mark < 50 = Fail
  | mark < 0 || mark > 100 = error "Program error: Not a valid mark"
```

And some Scheme:

```scheme
(println "list")
```

And even some ARMv7 assembly code:

```ARM
mov r3, #0xAB
```

## Images

Sometimes you want to add images to your content.

{% comment %}
{% asset labs/hen.jpg alt='a hen. cluck!' %}

{% asset labs/hen.jpg alt='a hen. centered.' class='center' %}

{% asset labs/hen.jpg alt='the same hen, but full-width' style='width:100%;' %}
{% endcomment %}

Note the use of the key:value `class` and `style` attributes---this will pass
these attributes through to the `<img>` tag in the output. You can use the ANU
stylesheet stuff (that's where the `center` style comes from) or write your own
css in `_sass/_custom.scss`, and the bottom `style` example shows how you can
just write the css styling information directly.

[^attr]: If you don't know what that means, don't stress.

## Callout boxes

You might want to highlight important information, warnings or other parts of
your content. There are some scss helpers in `_sass/_custom.scss` to help you
out. Here's how to use them:

{:.error-box}

This is an error box.

{:.warn-box}

This is a warning box.

{:.info-box}

This is an info box.

{:.success-box}

This is a success box.

<div class="info-box" markdown="1" style="margin-bottom: 20px;">

If you want more than a single paragraph, you'll need to wrap it in a `<div>`
element like so---make sure the `markdown=1` attribute is set if you want to
still write markdown inside the div.

And here's the second paragraph. It includes a list:
- one
- two
- three

Wow.

</div>
