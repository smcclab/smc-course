---
title: "Week 4: envelopes, notes and compositions"
summary: shaping sound in the short (and long) term
show_toc: true
---

{:.warn-box}
**Solo Diary**: with a _single_ sound source, create a piece using envelopes

The past two weeks of workshops have shown several different ways to create
sound "sources"; single oscillators, more complex networks of oscillators &
filters, soundfile playback objects, noise sources, etc. In building your
patches for performance, you've even found several different ways to shape the
relative trajectories of these sound sources over time; such as multiplying
signals with slider values.

This week, we look at
[envelopes](<https://en.wikipedia.org/wiki/Envelope_(music)>)---the more general
term for this type of "sound event shaping". Envelopes are a key part of taking
the "raw signals" you've been generating so far and shaping them into more
structured and recognisable musical elements like notes, bars, choruses, and
movements.

![The effect of applying an envelope to a carrier
wave.]({{site.baseurl}}/assets/digital-synthesis/envelope-sound.png){:style="width:100%;"}




## Goals for this week

1. be able to control the sound sources in your patch in a reliable & repeatable
   manner

2. to explore how different envelope parameters can be used from a compositional
   perspective

3. to start using processing sound with more effects.

## Pd resources

- [Charles' Pd examples (start with `11-EnvelopeGenerator.pd`)](https://github.com/cpmpercussion/ComputerMusicIntro)
- The envelopes section of the [digital synth]({% link _lectures/index.md %}) lecture.
- [PureData tutorials - rich synthesis (2) - simple envelopes](https://www.youtube.com/watch?v=gqpvIwYko3o)
- the Pd help for the `line~` & `vline~` objects, as well as the `bang` and
  `metro` objects for triggering your envelopes

You've probably already tried the `line~` object for scheduling a slow change to a value. The `vline~` object lets you "schedule" several changes in sequence. The syntax is a bit tricky, so you'll have to look at the resources above to help.

![Anatomy of a vline
message]({{site.baseurl}}/assets/digital-synthesis/pd-using-vline.png){:style="width:100%;"}

An **extra goal** for this week is to start experimenting with some basic
digital effects. You might have some experience with popular effects like
"reverb", "chorus", "tremolo", or "distortion". Effects like these can modify
both the envelope and timbre of sound (depending on the effect) and effects
like reverb can help to make synth sounds _sound better_, or blend perceptually
with other sounds. The Pd examples features a few demo effects, try adding one
or two to your work to see whether they help with your ideas for this week.

## Things to think about

- does an envelope have to control the _amplitude_ of a sound source? or can it
  control other things? can envelopes control other envelopes?

- when is an ADSR (attack-decay-sustain-release) envelope the right choice, and
  when do you want a different type of envelope?

- can you take a patch (or part of a patch) that you've made in a previous week
  and add an envelope to it? you might want to try the `metro` object to
  generate a sequence of "bangs" to keep triggering your envelope generator

- for some further reading,
  e.g.
  [ADSR Envelopes: How to Build The Perfect Sound](https://blog.landr.com/adsr-envelopes-infographic/)
