---
title: Envelopes, Notes and Compositions
tagline: Abstractions from sound to music.
lecturer: Dr Charles Martin
image: assets/workshops/2013-balloon-charles-martin.jpg
image_alt: Photo by Charles Martin
---

{% include slides/title.html %}

## So far:

- making sound from nothing (synthesis)
- making sound from recordings (sampling)

Is this enough?

{% include slides/background-image.html image="lectures/poeme-electronique.jpg" heading="Organising Sound" %}

we now turn our attention to making "music", not just "sound"

in this class, we're open in terms of defining "music", it doesn't have to follow a particular style or emphasise traditional aspects such as melody and harmony.

broadly, we follow Edgard Varese's idea of music as ["organised sound"](https://doi.org/10.2307/832385).

today we look at methods for _organising_ sound in time, allowing us to start to define compositions

## _Slope_ is the key

`/` + `\` 

In programming we are used to having _static_ variables

Now we want _dynamic_ numbers that are _scheduled_ to change in specific ways.

## Shaping a note

What defines a "note"?  A beginning, an end, and a shape over time.

![]({{site.baseurl}}/assets/digital-synthesis/envelope-sound.png){:style="width:95%;"}

The shape can be made by changing amplitude, but in computer music we can adjust other properties as well.

## shapes over time

`line`, `line~`, `vline` and `vline~`

- `line` is a slope generator
- You provide it with a destination (a number) and a time (in ms) and it changes it's output over time.

## What does the tilde mean in `line~` vs `line`?

Pd has two kinds of "connections" between objects:

1. audio
2. messages

Audio connections are processed at the audio frame rate: fast enough to get blocks of 64 samples to the DAC at 44.1kHz.

Message processing is [interleaved with block processing](https://msp.puredata.info/Pd_documentation/x2.htm) which usually happens every 1.45ms. 

Objects with a `~` in the title, output or operate with audio connections. Those without `~` are the message variants.

## line and `line~`

- `line`: outputs numbers as _messages_ at a (default) rate of one ever 20ms (slow!)
- `line~`: outputs an audio rate signal.

If you make a volume control with `line` you will have audible clicks as the volume changes 50 times per second. You need to use `line~` for smooth sounding control over audio.

## `vline~`

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