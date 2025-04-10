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

# Tidal Mini-Notation

Mini-Notation is a custom language for writing rhythmic patterns with few characters. All of your sequences in Strudel are expressed in Mini-Notation!

```javascript
"<g3 b3 e4 [a3,c3,e4] [b3,d3,f#4]>*2"
```
Mini-notation uses strings with special punctuation to represent complex looping sequences. Unlike a step sequencer, you can change the rhythm inside a sequence and make dramatic musical changes with few edits.


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

