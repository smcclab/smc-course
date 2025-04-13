---
title: Live Coding
tagline: Programming as performance
lecturer: Dr Charles Martin
image: assets/workshops/2022-live-coding-charles-martin.jpg
image_alt: Photo by Charles Martin
---

{% include slides/title.html %}

## Outline

- What is live coding?
- Live coding history
- Live coding present
- The big concepts
- Demos and Technology in Strudel

# What is live coding

- [TOPLAP manifesto 2004](https://tidalcycles.org/docs/around_tidal/toplap_manifesto/)

# Live coding history

- [hacking Perl in night clubs](https://www.perl.com/pub/2004/08/31/livecode.html/) 
- [Tidal history](https://tidalcycles.org/docs/around_tidal/tidal_history)
- SuperCollider
- ixi

# Live coding present

- Strudel
- Gibber, 
- Extempore (?), 
- Glicol, 
- Sema (or whatever those folks are doing these days, the ones where you make your own DSL)
- sonic pi

# The big concepts

  - live coding and domain specific languages
  - scheduling and temporal manipulation
  - just-in-time compilation
  - more?

## Question...

What are the _technical_ turning points of live coding? How can we integrate into this class to connect with (e.g.): 

- compilers, 
- principles of programming languages, 
- real-time systems

Live coding is the most "core CS" part of computer music (e.g., JIT in Extempore was/is cutting edge), but it's not discussed as such.

# Learning Live Coding with Strudel

![]({% link assets/lectures/strudel-screen.png %}){: style="width:70%;float:right;"}

[Strudel](https://strudel.cc) is a programming system for making computing music in your web browser.

Developed by [Felix Roos](https://loophole-letters.vercel.app) and [Alex McLean](https://en.wikipedia.org/wiki/Alex_McLean). "New" (circa 2022), under _active_ development, based on the existing [Tidal Cycles](https://tidalcycles.org) system.

Start using it at [strudel.cc](https://strudel.cc).

## Strudel is about Patterns

Strudel is focussed on patterns (sequences) of musical events. It provides two important features:

- A compact but expressive syntax for patterns called "mini-notation".
- Functions for transforming patterns dynamically 

```javascript
"60 62 64" // this is  pattern in mini-notation
"60 62 64".note().sound("piano") // this pattern is transformed into notes and synthesised with a piano sound
```
N.B.: The dot notation `xxx().yyy()` in Strudel can be interpreted as chaining functions together.

## What are patterns made of?

Functions. 

Pure [functional reactive programming](https://en.wikipedia.org/wiki/Functional_reactive_programming).

Read [Roos and McLean (2023)](https://zenodo.org/records/7842142) for more.

## Let's try out some different sounds

So far we can sequence a simple pattern like:
```javascript
note("60 62 67 64").sound("piano") // to use the more conventional notation.
```
We can change the sound easily by replacing `piano` with another sound or sample. 

Try `sine`, `supersaw`, `triangle`, `gm_koto`, or `pipeorgan_quiet_pedal`

Hint: there's a list of synths and samples In the "sounds" tab of the REPL. Some of these will take a few seconds to load.


## Writing Patterns in Mini-Notation

Mini-Notation is a custom language for writing rhythmic patterns with few characters. All of your sequences in Strudel are expressed in Mini-Notation!

```javascript
"<g3 b3 e4 [a3,c3,e4] [b3,d3,f#4]>*2"
```
Mini-notation uses strings with special punctuation to represent complex looping sequences. Unlike a step sequencer, you can change the rhythm inside a sequence and make dramatic musical changes with few edits.



## Mini-notation: Events and Rests

## Mini-notation: Sub-sequences 

You can create sub-sequences within a step with square brackets `[ ]`:




## Mini-notation: Playing two things together

## Mini-notation: Euclidean rhythms


 

# Demos and Tech

  - playing sounds, notes, and sequences
  - randomness in sequences
  - Tidal mininotation
  - sequencing parameters
  - modulators with genish
  - visuals in p5
  - visuals with hydra
  - where is the code for `Synth`
  - new synthdefs

