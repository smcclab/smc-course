---
title: "Extempore Resources"
tagline: Live Coding in Extempore
show_toc: true
image: assets/workshops/2022-live-coding-charles-martin.jpg 
image_alt: Photo by Charles Martin
hidden: true
---

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

## Extempore Resources 2

### Synthesis

The main course material this week is the
[analogue synth guide](https://extemporelang.github.io/docs/guides/analogue-synth/)
on the Extempore documentation website.

### Sampling

The sharedsystem setup process that you've been using for the [last couple]({%
link _workshops/07-algorithmic-composition-1.md %}) [of weeks]({% link
_workshops/08-synthesis-and-sampling-2.md %}) creates one sampler (called
`samp1`) which contains:

- piano samples in banks `0`--`2`
- TR808 drum samples in bank `3`
- acoustic drumkit samples in bank `4`

You can see how this is all set up in `examples/sharedsystem/audiosetup.xtm`
(start looking at around line 30).

As covered in the
[sampler guide](https://extemporelang.github.io/docs/guides/sampler/), to access
the samples in a given bank you need an additional argument to `play`, e.g.
using the pattern language you could try:

```extempore
;; play slot 60 (middle C) from bank 1, i.e. the mf piano
(play samp1 @1 60 dur 1)

;; play slot 60 (middle C) from either bank 0, 1, or 2
(play samp1 @1 60 dur (random 3))
```

Remember that the "bank" argument is a parameter just like all the others, so
you can use whatever algorithmic process you like to determine which bank to
select the sample from (again, see [this
guide](https://extemporelang.github.io/docs/guides/sampler/) for more info about
banks, slots & samplers).

## Things to think about

- since Extempore's analogue synth is based around the exact same concepts as a
  hardware (or software) modular synth, have a look at some of the many YouTube
  videos on patch design & modular synthesis and try and re-create that sound
  yourself

- think of the different timescales involved in a piece of computer
  music---you've got things which cycle thousands of times per second (like
  actual waveforms), things which change over the course of a note (envelopes),
  things which change slowly over the course of a piece, etc... how can you vary
  different parameters at different timescales?

- patch files can be saved & shared (with
  `analogue-save-preset`/`analogue-load-preset`), so ask your classmates if
  they're willing to share their patches around (remember: it's a **group diary**
  this week)

- can you use any of the [algorithmic composition]({% link
  _workshops/07-algorithmic-composition-1.md %}) concepts from last week to
  algorithmically modify the synthesis parameters of your piece?

- can you make something melodic with only unpitched[^pitched] sounds? how about
  making something that's primarily rhythmic with only pitched sounds?

[^pitched]:
    pitched vs unpitched isn't a binary, it's a
    [bit more complicated than that](<https://en.wikipedia.org/wiki/Pitch_(music)#Definite_and_indefinite_pitch>),
    but that doesn't make the distinction any less interesting as a creative
    prompt

- Extempore's sampler allows you to pitch-shift the sample data on playback;
  what are the limits to how far you can push this idea?

- can you make a whole piece by playing back (with different pitches and
  offsets) from a single audio file? what does "composing" look like under this
  constraint?

- what are the _roles_ in a group diary collaboration, anyway? are there any new
  roles in your group music-making which didn't even exist in your week 5
  collaboration?

- are there any ideas/aspects of your final LENS performance that you're not
  sure about, or want feedback on? can you incorporate something of that into
  your collaborative contribution this week?
