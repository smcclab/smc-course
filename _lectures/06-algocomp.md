---
title: Algorithmic Composition 
tagline: Programs to compose for you.
lecturer: Dr Charles Martin
image: assets/workshops/2013-visualisation-charles-martin.jpg
image_alt: Photo by Charles Martin
---

{% include slides/title.html %}

## What's this?

![]({% link /assets/algocomp/formalized-music.jpg %}){: style="width:25%; float:
right;" }

Algorithmic composition: using a program to make choices for musical parameters
(e.g., pitch, rhythm, timbre).

Existed since before computers...

## A few extra objects...

![]({% link /assets/algocomp/control-objects.png %}){: style="width:50%; float:
right;" }

there's a few useful control objects in the put menu.

try right-clicking and adjusting "properties" or looking at "help".

you can encapsulate something complicated in a `pd` object (aka a subpatch).

## Random Numbers

![]({% link /assets/algocomp/random-notes.png %}){: style="width:50%; float:
right;" }

you can use `random` numbers to create pitches.

Pd really only has one kind of `random`: integers between 0 and `$1` (the first
argument)

want to trigger different things randomly? try `select`

## Rhythms with Metro

![]({% link /assets/algocomp/metro-and-random.png %}){: style="width:30%; float:
right;" }

we can schedule repeating notes with `metro`

you have to supply the number of milliseconds in between bangs.

## Making a Composition with Random

![]({% link /assets/algocomp/random-composition.png %}){: style="width:80%;" }

## Using Scales

![]({% link /assets/algocomp/scale-maker.png %}){: style="width:70%; text-align:
center;" }

## Composing with Scales

![]({% link /assets/algocomp/fmcomp.png %}){: style="width:100%; float: right" }

## Controlled Randomness

![]({% link /assets/algocomp/weighted-random.png %}){: style="width:30%; float:
right" }

Suppose you want to take one action 20% of the time, and another 80% of the
time?

You can split random numbers with the `moses` object to achieve this.

This extends to more weighted decisions if you want.

## Markov Process

![]({% link /assets/algocomp/markov-sequence.png %}){: style="width:75%; float:
right" }

What about having a different weighted decision depending on what the last
decision was?

This is called a _Markov Process_. You can do it with the `moses` method, but it
might get out of hand quickly.

Maybe try `c_markov.pd` in `rjlib`?

## Fader Jam

![]({% link /assets/algocomp/fader-jam-screen.png %}){: style="width:60%; float:
left" }

<video controls autoplay style="width:20%; float:right;">
    <source data-src="{% link /assets/algocomp/faderjam-demo.mp4 %}" type="video/mp4"/>
</video>

![]({% link /assets/algocomp/faderjam-action.jpg %}){: style="width:25%; float:
left" }

## Further directions...

- rule-based compositions
- [functional programming for composition](https://functional-art.org)
- evolutionary algorithms for music composition (e.g.,
  [darwintunes](https://darwintunes.org),
  [evolutionary music slides](https://igm.rit.edu/~jabics/EvoMusic/BilesEvoMusicSlides.pdf))
- AI/ML composition (e.g., [Magenta project](https://magenta.tensorflow.org))

Live coding... kind of doing algorithmic composition in the moment?

## Exercise: Today you make an algorithmic composition.

Get started, you have to make something today that includes:

- synths.
- randomness.
- high-level controls.

Want some extra tools?

- [ComputerMusicIntro examples](https://github.com/cpmpercussion/ComputerMusicIntro)
- [rjlib](https://github.com/rjdj/rjlib/)

## Links

- Oxford Handbook of Algorithmic Music
  ([available online through ANU Library](https://www.oxfordhandbooks.com/view/10.1093/oxfordhb/9780190226992.001.0001/oxfordhb-9780190226992))
- D. Herremans, C.-H. Chuan, and E. Chew. A functional taxonomy of music
  generation systems. ACM Comput. Surv., 50(5):69:1–69:30, Sept. 2017.
  [DOI:10.1145/3108242](https://doi.acm.org/10.1145/3108242)
- [Getting Starting with Algorithmic Composition: Donya Quick](https://donyaquick.com/algorithmic-composing-advice/)
- [Wolfram Tones](https://tones.wolfram.com)
