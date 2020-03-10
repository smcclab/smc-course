---
title: "Week 2: synthesis 1"
summary: so what types of beeps and boops can we make, actually?
---

{:.diary-provocation-box}
what does a conversation between waveforms sound like?

Synthesis is the process of generating musical signals "synthetically", i.e. by
some process _other than_ hitting/plucking/rubbing a resonant body like a guitar
string or a drum head. You've probably heard of people talk about
[synths](https://en.wikipedia.org/wiki/Synthesizer) (which are dedicated bits of
hardware & software for making these musical signals) and
[synthpop](https://www.last.fm/tag/synthpop) (a genre of music from the 80s
where these machines really started to take off in mainstream music), the stuff
you'll be doing here (in Pd) is based on the same basic ideas.

There are several different basic techniques for creating interesting
signals[^wiki], and you can't expect to master them all in one week (or even in
one semester). So this week we'll focus on just making noise with the basic sine
tone oscillator from [last week]({% link _workshops/01-hello-sine.md %}),
looking at how we can apply a few basic mathematical transformations to the
signal and hearing what those transformations sound like.

[^wiki]:
    That [Synthesizer wikipedia page](https://en.wikipedia.org/wiki/Synthesizer)
    has several links to these fundamental techniques in the opening paragraph.

### Goals for this week

1. to learn what an oscillator _sounds_ like

2. to learn the correspondence between different creative/musical goals (e.g.
   how to make something softer/louder, how to change the pitch of the sound)
   and the mathematical operations (addition, multiplication, chaining Pd
   outlets to inlets) which make them happen

3. to begin to understand how the different types of things in Pd (objects,
   numbers, messages) work together

### Pd resources

{% include video.html video="lecture-recordings/2019/week-2-hello-sine" %}

Here are the links that I mention at the end of the video:

- most of [Charles' video from last week]({% link _workshops/01-hello-sine.md
  %}) is still relevant
- the [Programming Electronic Music in
  Pd](http://www.pd-tutorial.com/english/index.html) book (as mentioned on the
  [tools page]({% link _resources/02-tools.md %}#other-books))
- [Charles' examples](https://github.com/cpmpercussion/ComputerMusicIntro)

### Things to think about

- what does "low" or "high" frequency mean in the context of synthesis? what's
  the useful frequency range of an oscillator?
- are there any basic building blocks which aren't "built in" to Pd? can you
  make them yourself?
- can you look at a given Pd patch and try and guess what it will sound like
  before you turn on the DSP? is being able to do that even important/useful?
