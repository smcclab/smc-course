---
title: "Week 7: algorithmic composition"
tagline: Triggering events in pitch and time using algorithmic processes
show_toc: true
image: assets/workshops/2013-visualisation-charles-martin.jpg
image_alt: Photo by Charles Martin
---

{:.warn-box}
**No Diary**: No computer music diary this week.

{:.warn-box}
This workshop is the first time we will use [Strudel](https://strudel.cc) in this course. This workshop will get you up to speed on Strudel so that you're ready to make music with it for next week's diary.

This week we flip the switch to making computer music with a _text_-based programming
system. Depending on your background, this could feel freeing, confusing or a bit of both.

The programming system will use now is called [Strudel](https://strudel.cc).
Strudel is a web-based programming system for live coding music. Strudel first
[appeared in
2022](https://algorithmicpattern.org/2023/05/15/strudel-live-coding-patterns-on-the-web/)
and it's under [fairly active
development](https://github.com/tidalcycles/strudel). In contrast, Pd, released
in 1996, hasn't changed all that much over the last 10 years.

The broad idea of live-coding is to set up musical processes in a text-based
programming system, and then edit your program over time to create a changing
piece of music. Rather than triggering notes and sounds directly with a
keyboard, they are likely to be triggered by an algorithm, so you'll be making
_algorithmic music_.

Music making in Strudel tends to be at a somewhat higher level than in Pd.
Strudel comes with pre-made synths and the craft of live-coding tends to be in
creating algorithms to control those synths. You can still build your own
synths from the ground up, just like in Pd (and it's pretty interesting), but
that's not our focus this week.

In this week's workshop you will use some of Strudel's algorithmic music feature
to create music with multiple parts. 

To get started on this task we suggest running through the [Strudel
Workshop](https://strudel.cc/workshop/first-sounds/) which introduces the music
making concepts.


## Goals for this week 

1. complete the Strudel tutorial [here](https://strudel.cc/workshop/first-sounds/)

2. see how musical concepts (pitch, loudness, duration) can be represented &
   manipulated in a textual computer music language

3. create algorithmic music with multiple parts (e.g., drums, bass, lead, and freaky noises) that you can manipulate in real time. Now you're a live coder!

{:.info-box}
Pd and Strudel are both great systems for musical expression but their design tends to emphasis different kinds of music. It might be better to lean into _Strudel-y_ music this week rather than to replicate what you were doing in Pd.

## Hints for live coding

- It's a good idea to create some text files in your portfolio 2 repository to store your work. Strudel uses the JavaScript programming language so you coudl create files like "2025-05-01-live-coding.js".

- Strudel can do a lot of exciting stuff, but it's a bit experimental and some parts are not well documented. Be gentle on it and yourself and if you can't work something out, ask on the [forum]({{ site.course_forum }}).

- Strudel works fine on the web (Chrome/Chromium preferred), but if you want to run it locally, you can clone the [github repository](https://github.com/tidalcycles/strudel), and follow the instructions to run a development server on your computer. 

- Strudel's source code is probably not too hard to modify if you want to start hacking. There's some [technical documentation](https://github.com/tidalcycles/strudel/wiki/Technical-Manual) introducing the main concepts.

{:.info-box} Strudel is actually a JavaScript port of
[Tidal](https://tidalcycles.org/) created by Alex Mclean who popularised the
idea of [live coding
music](https://www.perl.com/pub/2004/08/31/livecode.html/). Tidal itself is
written in Haskell. At this point somebody is about to start asking on the
forum "Whyyyyyy can't we just live code in Haskell???!". Well. Tidal is
awesome, but by using a web-based system, we get a lot of convenience and
access to collaborative tools like [Flok](https://flok.cc/) which we will
explore next week.

### Strudely Links

- Main [strudel.cc REPL](https://strudel.cc)

- Strudel [documentation](https://strudel.cc/workshop/getting-started/)

- Making new [sounds in strudel](https://strudel.cc/technical-manual/sounds/)

- Strudel [source code](https://github.com/tidalcycles/strudel)

- Paper: ["Strudel: Live Coding Patterns on the Web"](https://zenodo.org/records/7842142)

## Resources

- Nick Collins et al. 2003. [Live Coding in Laptop Performance](https://slab.org/writing/laptop_performance.pdf)

- Magnusson, Thor (2014) [Herding cats: observing live coding in the wild](http://sro.sussex.ac.uk/id/eprint/47039/1/comj_a_00216.pdf)

- Shelly Knotts (2016) [Algorithmic Interfaces for Collaborative Improvisation](http://users.sussex.ac.uk/~thm21/ICLI_proceedings/2016/Colloquium/137_ICLI2016_DC_ShellyKnotts.pdf)

There are a couple of maths-y/music-y pre-reqs which you've probably already
seen before, but are often helpful in algorithmic composition:

- [pitch classes](https://en.wikipedia.org/wiki/Pitch_class) provide a way to
  think about which notes fit with which other notes (scales, intervals, chords)

- [modular arithmetic](https://en.wikipedia.org/wiki/Modular_arithmetic) is
  handy for both rhythmic and harmonic (pitch) algorithms

- all the music theory crash course stuff [mentioned in week 1]({% link
  _workshops/02-synthesis-1.md %}#pd-resources) will be helpful here as well, especially
  because now you're working in a textual programming langugage you might be interested
  in doing more "note-based" stuff

### Algorithmic Composition Resources

A few more places to get ideas for algorithmic composition:

- [Brief History of Algorithmic Composition (John A. Maurer)](https://ccrma.stanford.edu/~blackrse/algorithm.html)

- [Getting Starting with Algorithmic Composition: Donya Quick](http://donyaquick.com/algorithmic-composing-advice/)

- [The Concert Programmer](https://www.youtube.com/watch?v=yY1FSsUV-8c)

- Check out [Ben Swift's livecoding sets](https://benswift.me/livecoding/index.html)
  and ask him to explain anything you have questions about

- D. Herremans, C.-H. Chuan, and E. Chew. A functional taxonomy of music
  generation systems. ACM Comput. Surv., 50(5):69:1–69:30, Sept. 2017.
  [DOI:10.1145/3108242](https://doi.acm.org/10.1145/3108242)

- [Oxford Handbook of Algorithmic Music (available through ANU library)](https://virtual.anu.edu.au/login/?url=https://www.oxfordhandbooks.com/view/10.1093/oxfordhb/9780190226992.001.0001/oxfordhb-9780190226992)

- [Algorithmic Composition: Computational Thinking in Music (Michael Edwards)](https://cacm.acm.org/magazines/2011/7/109891-algorithmic-composition/fulltext)

- [Algorithmic Composition - Cambridge Companion to Electronic Music (Karlheinz Essl)](https://www-cambridge-org.virtual.anu.edu.au/core/books/cambridge-companion-to-electronic-music/algorithmic-composition/5390BDB514BF6EDABD6DA031A6395407)

- Euclidean rhythms; here's a [blog post
  version](https://splice.com/blog/euclidean-rhythms/) and here's a [deep dive
  academic
  paper](https://www.sciencedirect.com/science/article/pii/S0925772108001156)
  (note that Extempore has a `euclid` function for generating Euclidean rhythms)

- <https://generative.fm/> is a super-cool website full of
  generative/algorithmic compositions

- this [google sheet with various drum
  patterns](https://docs.google.com/spreadsheets/d/19_3BxUMy3uy1Gb0V8Wc-TcG7q16Amfn6e8QVw4-HuD0/)

- evolutionary algorithms for music composition (e.g.,
  [darwintunes](http://darwintunes.org),
  [evolutionary music slides](http://igm.rit.edu/~jabics/EvoMusic/BilesEvoMusicSlides.pdf))

- AI/ML composition (e.g., [Magenta project](https://magenta.tensorflow.org))

- cool algorithmic artists: [Renick Bell](https://renickbell.net),
  [kindohm/Mike Hodnick](https://kindohm.com),
  [William Fields](https://williamfields.com)

## Creative Notes

