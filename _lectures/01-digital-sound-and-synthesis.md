---
title: Intro; Digital Sound and Synthesis 
tagline: First steps in making sound with computers.
lecturer: Dr Charles Martin
image: assets/lectures/2015-mixer-charles-martin.jpg
image_alt: Photo by Charles Martin
---

{% include slides/title.html %}

{% include slides/acknowledgecountry.html %}

## Sound and Music Computing

two big goals:

1. learning to make _sound_ with _code_ on laptop _computers_

2. learning to create computer _music_ in a group

{% include slides/background-image.html image="photos/2015-ems-workshop.jpg" %}
{% include slides/background-image.html image="photos/2018-lens-showcase.jpg" %}
{% include slides/background-image.html image="photos/2019-rehearsal-rohan.jpg" %}
{% include slides/background-image.html image="photos/2020-brent-performance.jpg" %}
{% include slides/background-image.html image="photos/2021-yichen-performance.jpg" %}
{% include slides/background-image.html image="photos/2022-lh.jpg" %}

{% include slides/impact.html %}

who are we?

{% include slides/background-image.html image="lectures/welcome/charlesmartin-synth-profile.jpg" heading="Charles Martin" %}

Senior Lecturer, ANU School of Computing

computer musician, percussionist

[homepage](https://charlesmartin.au)

[SMCCLAB: Sound, Music, and Creative Computing Lab](https://charlesmartin.au/lab)

[@charlesmartin@aus.social](https://aus.social/@charlesmartin)

{% include slides/background-image.html image="lectures/welcome/yichen-wang.jpg" heading="Yichen Wang" %}

PhD researcher, ANU School of Computing

AR musician, photographer

[homepage](https://yichenwangs.github.io)

[@yichenwangs](https://twitter.com/yichenwangs)

{% comment %}
{% include slides/background-image.html image="lectures/welcome/alec-hunter.jpg" heading="Alec Hunter" %}

[ANU School of Music](https://music.cass.anu.edu.au/people/dr-alexander-hunter)

[Performer, composer](https://alexanderhunter.co.uk/)

{% include slides/background-image.html image="lectures/welcome/ben-smiths-sounscapes.jpg" heading="Ben Swift" %}

[livecoder](https://benswift.me/livecoding/index.html)

[ANU School of Cybernetics](https://cybernetics.anu.edu.au/people/ben-swift)

[@benswift](https://twitter.com/benswift)
{% endcomment %}

{% include slides/impact.html %}

how does this work?

## step 1

Learn and experiment with computer audio in the **lecture**.

- learn about digital synthesis and computer music in
  [Pd](https://puredata.info)

- reinforce and extend your knowledge by live-coding in
  [Gibber](https://gibber.cc)

There will be new material and challenges every week.

## step 2

Level up _music computing_ skills in the **workshop**.

- a workshop each week for collaboration and critique

- create and discuss 10 short computer music pieces over the semester

This is the fun part: an open environment where you will work together to make music from week 1.

## step 3

Collaborate and perform in the ANU LENS (laptop ensemble).

- work with an ensemble of 4-5 students

- everybody creates a computer music work to perform at their final concert

After 12 weeks of tinny laptop speakers, playing on a big PA system will blow your mind.

## assessments

Look at the [assessments page]({% link _assessments/index.md %}) or the [class summary]({% link 01-policies.md %}).

## computer music diary

- Look at the workshop content well _before_ the workshop.

- Record a short piece of computer music following the weekly provocations, upload by Monday.

- There are solo and group diaries.

- Watching & discussing diary videos is half of what we do in the workshop time.

## expectations

**Show up.** Seriously, this course doesn't work if you are not here.

**The only rule is work** ([rule 7](https://www.corita.org/tenrules)): this means, do your weekly diary videos!

**Trust us** to help you succeed. We have all the resources needed for you to create a [great performance](https://www.youtube.com/watch?v=2EdxJ_aJRHA&list=PLKm3iGh1D7Mur62hvm6BHBNqlObABGDgY).

**Read** the [website]({% link index.md %}) for more info!

{% include slides/impact.html %}

who has a question?

## Digital Sound

- Monty Montgomery (Xiph.org) [Youtube](https://xiph.org/video/vid2.shtml)
  [Original Video](https://xiph.org/video/vid2.shtml)
- Technology Connections Nyquist-Shannon [Youtube](https://youtu.be/pWjdWCePgvA)

![]({{site.baseurl}}/assets/digital-synthesis/digital-sound.png)

## Pure Data (Pd)

Free tool for making computer music

Developed by Miller Puckette, maintained by MSP and the community
([download](https://puredata.info/downloads)).

![]({{site.baseurl}}/assets/digital-synthesis/pd-blankscreen.png)

{% include slides/background-image.html image="digital-synthesis/steve-harvey-unsplash.jpg" heading="patching to make sound" %}

## Today's talk:

Look at some basic synthesis techniques with Pd!

Workshop Examples: [site](https://github.com/cpmpercussion/ComputerMusicIntro),
[download zip](https://github.com/cpmpercussion/ComputerMusicIntro/archive/master.zip)

- what _is_ digital sound
- {additive, subtractive, modulation} synthesis
- effects!

## Beyond Pd...

Fun note, you can use Pd patches in other projects using...

- [libpd](https://github.com/libpd) - just the internal parts of Pd as an
  embeddable library for other software.
- [pd-party](https://danomatika.com/code/pdparty) - an iOS app for performing
  with Pd patches
- [mobmuplat](https://danieliglesia.com/mobmuplat/) - an iOS/Android app for
  performing with Pd Patches.

![](https://danieliglesia.com/mobmuplat/MMP_flow1.png)

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

## Two effects!

Let's make some digital effects, vibrato and tremolo.

![]({{site.baseurl}}/assets/digital-synthesis/pd-vibrato-tremolo.png)

## Modulation Synthesis

What if the "vibrato" was **really** fast? Like in the audio range?

![]({{site.baseurl}}/assets/digital-synthesis/pd-fmsynth.png)

## Filters and EQ

Filters "remove" parts of a sound that correspond to certain frequencies.

`lop~`: low-pass filter, `hip~`: high-pass filter, `bp~`: band-pass filter.

![]({{site.baseurl}}/assets/digital-synthesis/pd-filter.png)

## Subtractive Synthesis

Let's take a complex sound and **remove** some content.

![]({{site.baseurl}}/assets/digital-synthesis/pd-filterfm.png)


## Shaping a sound with filters

![]({{site.baseurl}}/assets/digital-synthesis/pd-subtractive-chime.png){:style="width:60%;
float:right;"}

1. Start with `noise~`
2. Add filters to remove lots of sound
3. Profit!


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


## Links

- [Charles' ComputerMusicIntro workshop examples (Pd)](https://github.com/cpmpercussion/ComputerMusicIntro)

Books:

- [Programming Electronic Music in Pd - Johannes Kreidler](https://www.pd-tutorial.com/english/index.html)
- [Excerpt from Designing Sound by Andy Farnell](https://aspress.co.uk/ds/pdf/pd_intro.pdf)
- [More tutorial links](https://puredata.info/docs/tutorials)
- [RjLib patches](https://github.com/rjdj/rjlib)