---
title: "Week 7: algorithmic composition 1"
summary: triggering events in pitch & time using algorithmic processes
show_toc: true
---

This week we flip the switch to making computer music with a _text_-based programming
system. Depending on your background, this could feel freeing, confusing or a bit of both.

The programmng system we will use now is called [Gibber](https://gibber.cc).
It's a web-based programming system for live-coding music. Gibber first
[appeared in
2012](http://www.charlie-roberts.com/pubs/Gibber_charles_roberts_icmc_2012.pdf),
but it's still under development as the capabilities of web audio have changed
a lot since then (in contrast, Pd, released in 1996, hasn't changed all that
much over the last 10 years).

The broad idea of live-coding is to set up musical processes in a
text-based programming system, and then edit your program over time to create a
changing piece of music. Rather than triggering notes and sounds directly with
a keyboard, they are likely to be triggered by an algorithm, so you'll be
making _algorithmic music_.

Music making in Gibber tends to be at a somewhat higher level than in Pd.
Gibber comes with pre-made synths and the craft of live-coding tends to be in
creating algorithms to control those synths. You can still build your own
synths from the ground up, just like in Pd (and it's pretty interesting), but
that's not our focus this week.

In this week's workshop you will use some of Gibber's algorithmic music feature
to create music with multiple parts. To get started on this task we suggest
running through a [Gibber
tutorial](https://charlesmartin.au/blog/2021/01/10/laptop-music-workshop) which
introduces the music making concepts.

{:.warn-box}
**Solo AVD**: write a piece with three algorithmic parts: drums, bass and lead.

## Goals for this week 

1. complete the Gibber tutorial [here](https://charlesmartin.au/blog/2021/01/10/laptop-music-workshop).

2. see how musical concepts (pitch, velocity, duration) can be represented &
   manipulated in a textual computer music language

3. create some algorithmic processes which generates music and modifies the musical concepts listed above.

{:.info-box}
Pd and Gibber are both great systems for musical expression but their design tends to emphasis different kinds of music. It might be better to lean into _Gibber-y_ music this week rather than to replicate what you were doing in Pd.

## Hints for live coding

- Gibber has no concept of "saving" code, we suggest you create some text files in your laptop ensemble GitLab repository to store your work. Gibber uses the javascript programming language so you could create files like "2022-09-01-live-coding.js".

- Gibber can do a lot of exciting stuff, but it's a bit experimental and the documentation is still in progress. Be gentle on it and yourself and if you can't work something out, ask on Teams.

- Gibber works fine on the web (Chrome/Chromium preferred, then other modern browsers), but if you want to run it locally, you can clone the [github repository](https://github.com/gibber-cc/gibber), and use VSCode's live server. This is the preferred method for loading your own samples (next week).

- Gibber's source code is a bit confusing. There are (at least) six important repositories:

1. The [gibber playground](https://github.com/gibber-cc/gibber): Gibber's user interface, clone this repo to run Gibber locally.
2. [gibber.audio.lib](https://github.com/charlieroberts/gibber.audio.lib): Audio components for Gibber, most of this wraps `gibberish` (see below), but it does include the [presets](https://github.com/charlieroberts/gibber.audio.lib/tree/main/js/presets).
3. [gibber.graphics.lib](https://github.com/charlieroberts/gibber.graphics.lib): Graphics components for Gibber.
4. [gibber.core.lib](https://github.com/charlieroberts/gibber.core.lib): A few shared objects and function for Gibber, mostly for sequencing. `euclid`, `seq`, and `tidal` are defined here.
5. [gibberish](https://github.com/gibber-cc/gibberish): a "fast JavaScript DSP library". If you want to know where `Synth` or `Sampler` are defined, look here (actually look in `gibberish/js/instruments`).
6. [genish](https://github.com/charlieroberts/genish.js): this is a lower-level DSP library for doing "per-sample audio processing" (inspired by the `gen~` object from Max/MSP). To understand why this is cool, look at the [genish tutorial](http://www.charlie-roberts.com/genish/tutorial/index.html).

Why are there six repos? Gibber is provides much higher level musical tools than Pd as well as graphics. If we provided Pd, plus Gem (Pd's usual graphical sidekick), plus 5-6 externals, plus the `ComputerMusicIntro` repo, there would be a lot of code to get across as well!


## Background

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


{% comment %}
 1. download, install & make a sound with **Extempore** (the
   [VSCode Quickstart page](https://extemporelang.github.io/docs/overview/quickstart/)
   is probably a good place to start) (make sure you can get the sound out of
   Extempore and into your video recording, too)


## Extempore resources

{:.info-box}

Lots of new stuff this week, although because of the two week lecture-free
period you actually have a bit longer to get on top of it. Don't be
overwhelmed---we'll guide you through some example code which will (hopefully)
be fun to play with, and don't worry if you don't understand everything about it
at first. And **if you have questions, hit us up on Teams**.

### Quickstart

The best way to get started with Extmpore is to follow the
[Quickstart](https://extemporelang.github.io/docs/overview/quickstart/); it'll
help you download & install Extempore and also a text editor (VSCode) which
you'll need to write Extempore code.

After that's all working, all you need to do is create a new `.xtm` file, start
& connect Extempore (as you learned to do in the _Quickstart_ guide) and you're
off and racing.

### Launch points

Extempore (like Pd) can do lots of things, and the best way to learn is probably
to dive in and start making noise. Here's a good place to start:

- The
  [Extempore Pattern Language](https://extemporelang.github.io/docs/guides/pattern-language/),
  as well as looking at all the covers in the `examples/sharedsystem/covers/`
  directory

After that, what you do (and what parts of the documentation & sample code are
relevant) will depend on what you're trying to do. A few potential "launch
points":

- The pattern language isn't the only way to make loops in Extempore---you can
  also use regular Scheme code and a design pattern called
  [temporal recursion](https://extemporelang.github.io/docs/overview/time/), and
  check out e.g. the fmsynth example (`examples/core/fmsynth.xtm`) or the
  electrofunk example (`examples/external/electrofunk.xtm`)

- If you're more interested in making algorithmic beats & rhythms, then the
  Extempore sharedsystem loads up a sampler which has some drum samples in it
  (an 808 in bank 3 and an acoustic kit in bank 4)---have a look at the
  [sampler](https://extemporelang.github.io/docs/guides/sampler/) guide and
  maybe even load in and trigger your _own_ samples

- Extempore has a few different ways of generating random numbers; e.g. explore
  the differences between these random calls:

```extempore
;; option 1
(random)

;; option 2
(random 10 100)

;; option 3
(random '(60 63 64 67))

;; option 4
;; for this one you need to (sys:load "libs/core/pc_ivl.xtm") first
(pc:random 60 72 '(0 2 3 5 7))
```

Seriously, though, if you've got an idea and are wondering about how to make it
happen then hit us up on Teams and we can probably point you in the right
direction.

{% endcomment %}

