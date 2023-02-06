---
title: Digital Sound and Synthesis 
tagline: First steps in making sound with computers.
lecturer: Dr Charles Martin
image: assets/lectures/2015-mixer-charles-martin.jpg
image_alt: Photo by Charles Martin
---

{% include slides/title.html %}

{% include slides/acknowledgecountry.html %}

# Sound

# Digital Sound

## Digital Sound

- Monty Montgomery (Xiph.org) [Youtube](https://xiph.org/video/vid2.shtml)
  [Original Video](https://xiph.org/video/vid2.shtml)
- Technology Connections Nyquist-Shannon [Youtube](https://youtu.be/pWjdWCePgvA)

![]({{site.baseurl}}/assets/digital-synthesis/digital-sound.png)

# Unit Generators

# Additive Synthesis

# Waveforms

# Modulation

## Pure Data (Pd)

Free tool for making computer music

Developed by Miller Puckette, maintained by MSP and the community
([download](https://puredata.info/downloads)).

![]({{site.baseurl}}/assets/digital-synthesis/pd-blankscreen.png)

{% include slides/background-image.html image="digital-synthesis/steve-harvey-unsplash.jpg" heading="patching to make sound" %}





## Digital to Analogue Conversion

this is the bit that turns "dots" into sounds... let's try it.

![]({{site.baseurl}}/assets/digital-synthesis/pd-messing-with-dac.png)

## Making a Sound

this is the "hello world" of computer music

![]({{site.baseurl}}/assets/digital-synthesis/pd-hellosine.png)

## Changing the volume?

what changes the volume here?

![]({{site.baseurl}}/assets/digital-synthesis/pd-hellosine-volume.png)

For making different kinds of boxes, try the "put" menu, and **try the key
combinations...**

## Playing two sounds at once

To play two notes at once, just plug both outputs into one input.

![]({{site.baseurl}}/assets/digital-synthesis/pd-twonotes.png)

## Additive Synthesis

![]({{site.baseurl}}/assets/digital-synthesis/pd-additive.png)

## Playing some "notes"

"These frequencies are just sounds. I want to play **NOTES**"

![]({{site.baseurl}}/assets/digital-synthesis/pd-additive-notes.png)

## Exercise:

Make an additive synth with a couple of `osc~` objects. Try different
"multipliers" on the frequency to create interesting sounds!

You might want to try practicing with number boxes and `s` (send) and `r`
(receive) boxes to eliminate some patch cables.

## Modulation

The idea of modulation is to change a parameter of a _ugen_ in time.

We can do this by running the output of a ugen into a different ugen.

Let's make some digital effects, vibrato and tremolo.

![]({{site.baseurl}}/assets/digital-synthesis/pd-vibrato-tremolo.png)

## Modulation Synthesis

What if the "vibrato" was **really** fast? Like in the audio range?

![]({{site.baseurl}}/assets/digital-synthesis/pd-fmsynth.png)


## Links

- [Charles' ComputerMusicIntro workshop examples (Pd)](https://github.com/cpmpercussion/ComputerMusicIntro)

Books:

- [Programming Electronic Music in Pd - Johannes Kreidler](https://www.pd-tutorial.com/english/index.html)
- [Excerpt from Designing Sound by Andy Farnell](https://aspress.co.uk/ds/pdf/pd_intro.pdf)
- [More tutorial links](https://puredata.info/docs/tutorials)
- [RjLib patches](https://github.com/rjdj/rjlib)

## Beyond Pd...

Fun note, you can use Pd patches in other projects using...

- [libpd](https://github.com/libpd) - just the internal parts of Pd as an
  embeddable library for other software.
- [pd-party](https://danomatika.com/code/pdparty) - an iOS app for performing
  with Pd patches
- [mobmuplat](https://danieliglesia.com/mobmuplat/) - an iOS/Android app for
  performing with Pd Patches.

![](https://danieliglesia.com/mobmuplat/MMP_flow1.png)

