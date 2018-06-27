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

Sometimes you want to add images to your content:

{% asset labs/hen.jpg alt:'a hen. cluck!' %}
