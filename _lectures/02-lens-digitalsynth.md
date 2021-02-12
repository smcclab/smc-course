---
title: "Digital Synthesis with Pure Data"
layout: reveal
lecturer: Dr Charles Martin
---

{% include slides/title.html %}

## Pure Data (Pd)

Free tool for making computer music

Developed by Miller Puckette, maintained by MSP and the community ([download](https://puredata.info/downloads)).

![]({{site.baseurl}}/assets/digital-synthesis/pd-blankscreen.png)

{% include slides/background-image.html image="digital-synthesis/steve-harvey-unsplash.jpg" heading="patching to make sound" %}

## Today's talk:

Look at some basic synthesis techniques with Pd!

Workshop Examples: [site](https://github.com/cpmpercussion/ComputerMusicIntro), [download zip](https://github.com/cpmpercussion/ComputerMusicIntro/archive/master.zip)

- what _is_ digital sound
- {additive, subtractive, modulation} synthesis
- sound files and granular synthesis
- effects!

## Beyond Pd...

Fun note, you can use Pd patches in other projects using...

- [libpd](https://github.com/libpd) - just the internal parts of Pd as
an embeddable library for other software.
- [pd-party](https://danomatika.com/code/pdparty) - an iOS app for performing with Pd patches
- [mobmuplat](https://danieliglesia.com/mobmuplat/) - an iOS/Android app
for performing with Pd Patches.

![](https://danieliglesia.com/mobmuplat/MMP_flow1.png)

## Digital Sound

- Monty Montgomery (Xiph.org) [Youtube](https://xiph.org/video/vid2.shtml) [Original Video](https://xiph.org/video/vid2.shtml)
- Technology Connections Nyquist-Shannon [Youtube](https://youtu.be/pWjdWCePgvA)

![]({{site.baseurl}}/assets/digital-synthesis/digital-sound.png)

---

### Digital to Analogue Conversion

this is the bit that turns "dots" into sounds... let's try it.

![]({{site.baseurl}}/assets/digital-synthesis/pd-messing-with-dac.png)

---

### Making a Sound

this is the "hello world" of computer music

![]({{site.baseurl}}/assets/digital-synthesis/pd-hellosine.png)

---

### Changing the volume?

what changes the volume here?

![]({{site.baseurl}}/assets/digital-synthesis/pd-hellosine-volume.png)

For making different kinds of boxes, try the "put" menu, and **try the
key combinations...**

---


### Playing two sounds at once

To play two notes at once, just plug both outputs into one input.

![]({{site.baseurl}}/assets/digital-synthesis/pd-twonotes.png)

---

### Additive Synthesis

![]({{site.baseurl}}/assets/digital-synthesis/pd-additive.png)

---

### Playing some "notes"

"These frequencies are just sounds. I want to play **NOTES**"

![]({{site.baseurl}}/assets/digital-synthesis/pd-additive-notes.png)

---

### Exercise:

Make an additive synth with a couple of `osc~` objects. Try different "multipliers" on the frequency to create interesting sounds!

You might want to try practicing with number boxes and `s` (send) and `r` (receive) boxes to eliminate some patch cables.

---

### Two effects!

Let's make some digital effects, vibrato and tremolo.

![]({{site.baseurl}}/assets/digital-synthesis/pd-vibrato-tremolo.png)

---

### Modulation Synthesis

What if the "vibrato" was **really** fast? Like in the audio range?

![]({{site.baseurl}}/assets/digital-synthesis/pd-fmsynth.png)

---

### Filters and EQ

Filters "remove" parts of a sound that correspond to certain frequencies.

`lop~`: low-pass filter, `hip~`: high-pass filter, `bp~`: band-pass filter.

![]({{site.baseurl}}/assets/digital-synthesis/pd-filter.png)

---

### Subtractive Synthesis

Let's take a complex sound and **remove** some content.

![]({{site.baseurl}}/assets/digital-synthesis/pd-filterfm.png)

---

### Shaping a sound with filters

![]({{site.baseurl}}/assets/digital-synthesis/pd-subtractive-chime.png){:style="width:60%; float:right;"}

1. Start with `noise~`
2. Add filters to remove lots of sound
3. Profit!

--- 

### Shaping a note

Notes need a dynamic shape over time right?

![]({{site.baseurl}}/assets/digital-synthesis/envelope-sound.png){:style="width:95%;"}

---

### envelopes

combining `vline~` and `*~` turns the sound up and down to shape a note.

![]({{site.baseurl}}/assets/digital-synthesis/pd-envelope.png)

---

### vline envelope

![]({{site.baseurl}}/assets/digital-synthesis/pd-using-vline.png){:style="width:80%;"}

---

### Exercise:

Make an modulation or subtractive synth with an envelope generator.

Make sure you know how to use get **help** about an object by right-clicking (or control-click).

You might want to try the `metro` object to generate a sequence of "bangs" to keep triggering your envelope generator.

---


### Playing back sound files

You can use `readsf~` to open and play back a sound file. Is that enough??

![pd-soundfile-open]({% link /assets/digital-synthesis/pd-soundfile-open.png %})

---

### More fun to "perform" with a sound file

![]({% link /assets/digital-synthesis/pd-soundfile-perform.png %}){: style="width:50%; float: right;" }

1. load file into a "table" with `soundfiler`
2. set up a `tabread4~` object to access the table
3. use a `phasor~`, or any other audio rate object to playback bits of the file.
4. you can even just scribble around in the file with `line~`

---

### Wavetables

![]({% link /assets/digital-synthesis/pd-wavetable.png %}){: style="width:90%;" }

`tabosc4~` scrolls through a table at a certain frequency.

---

### Grains of Audio

![]({% link /assets/digital-synthesis/pd-grains.png %}){: style="width:50%; float: right;" }

Try just reading a bit of a soundfile over and over to make a continuous sound.

Note the `cos~` bit here, what does that do?

See `B13.sampler.overlap` in the Pd help for a better version.

---

### Exercise:

Make an synth with the uses soundfiles or try modifying the granular example. Load in some of your own audio to make it unique.

Check out the help "Browser" in Pd's help menu to see all the cool patches the creators have left for us to explore...

---

### Reverb?

![]({% link /assets/digital-synthesis/pd-reverb.png %}){: style="width:50%; float: right;" }

What's reverb?

Can we simulate it?

---

### Distortion?

![]({% link /assets/digital-synthesis/pd-distortion.png %}){: style="width:50%; float: right;" }

Distortion is when a signal is "clipped" resulting in _undesirable_ extra sounds.

Are they really undesirable?

1. amplify signal---a lot! (e.g., `*~ 150`)

2. clip! Either with `clip~` (hard clipping) or the `tanh` function (soft clipping).


---

### Compression?

![]({% link /assets/digital-synthesis/pd-compression.png %}){: style="width:50%; float: right;" }

A compressor turns down the volume if a signal rises above a threshold.

---

### Exercise:

Try adding some **effects** to your synthesiser.

Maybe you could set up a signal chain that control the level and parameters of each effect?

---

### Links

Workshop Examples: [site](https://github.com/cpmpercussion/ComputerMusicIntro), [download zip](https://github.com/cpmpercussion/ComputerMusicIntro/archive/master.zip)

Books:

- [Programming Electronic Music in Pd - Johannes
  Kreidler](https://www.pd-tutorial.com/english/index.html)
- [Excerpt from Designing Sound by Andy Farnell](https://aspress.co.uk/ds/pdf/pd_intro.pdf)
- [More tutorial links](https://puredata.info/docs/tutorials)
- [RjLib patches](https://github.com/rjdj/rjlib)
