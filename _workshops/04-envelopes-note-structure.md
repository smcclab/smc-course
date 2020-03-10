---
title: "Week 4: envelopes & note structure"
summary: shaping sound in the short (and long) term
---

{:.diary-provocation-box}
the long and the short of it is...

### Pd resources

- [Charles' Pd examples (start with
  `11-EnvelopeGenerator.pd`)](https://github.com/cpmpercussion/ComputerMusicIntro)
- [PureData tutorials - rich synthesis (2) - simple
  envelopes](https://www.youtube.com/watch?v=gqpvIwYko3o)
- the Pd help for the `line~` & `vline~` objects

### Theory

Notes need a dynamic shape over time, right?

![]({{site.baseurl}}/assets/digital-synthesis/envelope-sound.png){:style="width:95%;"}

Combining `vline~` and `*~` turns the sound up and down to shape a note.

![]({{site.baseurl}}/assets/digital-synthesis/pd-envelope.png)

Here's a `vline` envelope

![]({{site.baseurl}}/assets/digital-synthesis/pd-using-vline.png){:style="width:80%;"}

#### Exercise:

Take one of the sound generation things (e.g. a synth or a sampler) that you've
made in a previous week and add an envelope to it. You might want to try the
`metro` object to generate a sequence of "bangs" to keep triggering your
envelope generator.

#### Further reading

- [ADSR Envelopes: How to Build The Perfect
  Sound](https://blog.landr.com/adsr-envelopes-infographic/)
