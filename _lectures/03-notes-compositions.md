---
title: Envelopes, Notes and Compositions
tagline: Abstractions from sound to music.
lecturer: Dr Charles Martin
image: assets/workshops/2013-balloon-charles-martin.jpg
image_alt: Photo by Charles Martin
---

{% include slides/title.html %}

## Shaping a note

Notes need a dynamic shape over time right?

![]({{site.baseurl}}/assets/digital-synthesis/envelope-sound.png){:style="width:95%;"}


## envelopes

combining `vline~` and `*~` turns the sound up and down to shape a note.

![]({{site.baseurl}}/assets/digital-synthesis/pd-envelope.png)


## vline envelope

![]({{site.baseurl}}/assets/digital-synthesis/pd-using-vline.png){:style="width:80%;"}


## Exercise:

Make an modulation or subtractive synth with an envelope generator.

Make sure you know how to use get **help** about an object by right-clicking (or
control-click).

You might want to try the `metro` object to generate a sequence of "bangs" to
keep triggering your envelope generator.

# Modulation

The idea of modulation is to change a parameter of a _ugen_ in time.

We can do this by running the output of a ugen into a different ugen.

Let's make some digital effects, vibrato and tremolo.

![]({% link assets/digital-synthesis/pd-vibrato-tremolo.png %})

## Modulation Synthesis

What if the "vibrato" was **really** fast? Like in the audio range?

![]({% link assets/digital-synthesis/pd-fmsynth.png %})

# Effects

## Reverb?

![]({% link /assets/digital-synthesis/pd-reverb.png %}){: style="width:50%;
float: right;" }

What's reverb?

Can we simulate it?

## Distortion?

![]({% link /assets/digital-synthesis/pd-distortion.png %}){: style="width:50%;
float: right;" }

Distortion is when a signal is "clipped" resulting in _undesirable_ extra
sounds.

Are they really undesirable?

1. amplify signal---a lot! (e.g., `*~ 150`)

2. clip! Either with `clip~` (hard clipping) or the `tanh` function (soft
   clipping).

## Compression?

![]({% link /assets/digital-synthesis/pd-compression.png %}){: style="width:50%;
float: right;" }

A compressor turns down the volume if a signal rises above a threshold.

## Exercise:

Try adding some **effects** to your synthesiser.

Maybe you could set up a signal chain that control the level and parameters of
each effect?