---
title: "Week 1: Introduction"
summary: Getting the hang of things...
layout: page
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

## Part 2

Sometimes you want to add images to your content.

{% asset labs/hen.jpg alt='a hen. cluck!' %}

{% asset labs/hen.jpg alt='a hen. centered.' class='center' %}

{% asset labs/hen.jpg alt='the same hen, but full-width' style='width:100%;' %}

Note the use of the key:value `class` and `style` attributes---this will pass
these attributes through to the `<img>` tag in the output. You can use the ANU
stylesheet stuff (that's where the `center` style comes from) or write your own
css in `_sass/_custom.scss`, and the bottom `style` example shows how you can
just write the css styling information directly.

[^attr]: If you don't know what that means, don't stress.
