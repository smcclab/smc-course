---
title: "Week 2: synthesis 1"
tagline: so what types of beeps and boops can we make, actually?
show_toc: true
image: assets/workshops/synths-charles-martin.jpg
image_alt: Photo by Charles Martin
---

{:.warn-box}
**Solo Diary**: create a piece which has two perceptually distinct
waveforms/sounds

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

## Goals for this week

1. to learn what an oscillator _sounds_ like

2. to learn the correspondence between different creative/musical goals (e.g.
   how to make something softer/louder, how to change the pitch of the sound)
   and the mathematical operations (addition, multiplication, chaining Pd
   outlets to inlets) which make them happen

3. to begin to understand how the different types of things in Pd (objects,
   numbers, messages) work together

## Pd resources {#pd-resources}

Here's a video lecture about Pd to get you started with additive synthesis. 

<iframe width="560" height="315" src="https://www.youtube.com/embed/AC7-MpwIZ8w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Go through the slides (linked above) to

{% comment %}
{% include video.html video="lecture-recordings/2021/week-2-hello-sine" %}
https://youtu.be/AC7-MpwIZ8w
{% endcomment %}

Here are some links:

- [Charles' slides about synthesis in Pd]({% link _lectures/02-lens-digitalsynth.md %}) (these slides actually cover weeks 1-4)
- [Charles' examples from the video](https://github.com/cpmpercussion/ComputerMusicIntro)
- the
  [Programming Electronic Music in Pd](https://www.pd-tutorial.com/english/index.html)
  book (as mentioned on the [tools
  page]({% link _resources/02-tools.md %}#other-books))

and a few more useful resources (not necessarily Pd-specific, and might be too )

- [Music theory for nerds](https://eev.ee/blog/2016/09/15/music-theory-for-nerds/)

- Toby Rush's
  [Music Theory for Musicians and Normal People](https://tobyrush.com/theorypages/index.html)
  is a bunch of posters which you could print out and put on your wall (spans
  everything from the basics to intermediate/advanced stuff)

- Lightnote's
  [How Music Works: Interactive Music Theory Lessons](https://www.lightnote.co/music-theory/harmony)
  is, well, interactive (which is nice)

{:.info-box}

There's _lots_ of info in the above resources, so don't feel like you understand
it all at the end of LENS week 2. We include these links here because different
people come to LENS from different places---some have done a bunch of
coding/patching but don't know the music theory stuff, some are the other way
round. This week the coding stuff is pretty simple (we're only in week 2, after
all) but if you're not sure _what_ frequencies and wave shapes to use and why
then we want to point you in good directions 😊

## Things to think about

- what does "low" or "high" frequency mean in the context of synthesis? what's
  the useful frequency range of an oscillator?
- are there any basic building blocks which aren't "built in" to Pd? can you
  make them yourself?
- can you look at a given Pd patch and try and guess what it will sound like
  before you turn on the DSP? is being able to do that even important/useful?
