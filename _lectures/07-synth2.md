---
title: Advanced Synth Design 
tagline: Getting deeper into sutractive and modulation synthesis
lecturer: Dr Charles Martin
image: assets/workshops/2013-rpi-charles-martin.jpg
image_alt: Photo by Charles Martin
---

{% include slides/title.html %}

## Outline

- Filters (analogue, digital, `vcf~`, `bob~`, filter math (light)
- Subtractive Synthesis (from phasor to Moog Model-D clone)
- FM Synthesis (recall week 3, feedback, algorithms, operator-based design)
- Phase Vocoder + spectral synthesis.

# Filters




{% include slides/background-image.html image="lectures/synth-design/ismael-paramo-7LQ9b9V-Ffo-unsplash.jpg" heading="Subtractive Synthesis" %}



## Subtractive Synthesis

Let's take a complex sound and **remove** some content.

![]({% link assets/digital-synthesis/pd-filterfm.png %})



## Popular Subtractive Synths


Subtractive synthesis is often used in analogue synth designs, particular with those associated with [Bob Moog (famous synth designer)](https://en.wikipedia.org/wiki/Robert_Moog).

E.g.,:

- Minimoog Model-D (1970)
- Moog Mother 32 (2015) _~AUD1100_
- Korg Volca Keys (2013) _~AUD250_
- Arturia Microfreak (2014) _~AUD550_

It's good for _analogue_ designs because you can get a lot of timbral variation out of few (2 or 3) basic oscillators.

## Subtractive Synth Layout

![]({% link assets/lectures/synth-design/diagram-subtractive-synth.png %}){: style="width:70%"}

- Sound is produced by 1+ summed oscillators and/or noise generator, processed by filter
- Two envelope generators: output volume and to change the filter cut-off frequency
- Missing: low frequency oscillator for modulation

## Minimoog in Pd

![]({% link assets/lectures/synth-design/subtractive-design.png %}){: style="width:30%;float:right;"}

Here's a basic design for an analogue synthesiser with two sawtooth oscillators.

- "detune" changes the frequency of the second oscillator, try a number close to 1, e.g., 1.05 for a rich phase-y sound.
- the filter env gives the sound a nice changing timbre over a note
- for extra fun, try the `bob~` object. Similar to `vcf~` but modelled on actual Moog filter designs.

N.B.: the _synthesis_ part here is quite simple, but processing note information is tricky and requires lots of supporting objects.


{% include slides/background-image.html image="lectures/synth-design/monika-sojcakova-ehZ9Aeu2Elo-unsplash.jpg" heading="FM Synthesis" %}

## Simple two-oscillator FM

![]({% link assets/lectures/synth-design/simple-fmsynth.png %}){:style="width:30%;float:right"}

We introduced FM synthesis earlier in the course as a way to make interesting sounds with just two oscillators.

This `fmsynth.pd` patch has been used a lot!

- `$1` is harmonicity (modulation frequency divided by carrier frequency)
- `$2` is the index (modulation depth divided by modulation frequency)

This allows us to create a consistent timbre for any frequency input. Can we do more with more oscillators?

## Revision: Phase Modulation 

![]({% link assets/lectures/pd-phase-mod.png %}){:style="width:50%;float:right"}

Let's just revise how "frequency modulation" works.

- FM can be implemented by modifying the _phase_ of an oscillator.
- In this patch, the phase is modified in between the `phasor~` and `cos~` objects.


## FM Operators

![]({% link assets/lectures/synth-design/diagram-fm-algorithm.png %}){: style="width:30%;float:right;"}

We can take the concept of a phase-modulation oscillator and abstract to a reuseable unit: an FM operator.

- An _op_ can serve as a carrier, or as a modulator.
- An _op_ can self-modulate (crazy sounds).

Combining multiple oscillators allows lots of sounds to work together. Typical FM synths will have 4 or 6 operators.

In FM lingo, the wiring diagram between operators is called an _algorithm_.

## Implementing 6-op FM

![]({% link assets/lectures/synth-design/diagram-fm-algorithm.png %}){: style="width:30%;float:right;"}

Each operator needs:

- an envelope generator
- amplitude and envelope parameters
- some pitch-ratio control 
- pitch ratio parameters

This gets complicated quickly... 

Volca FM has 23 parameters per operator, and 16 global parameters, that's 154 params for one patch!


# Spectral Synthesis



## Back to the frequency domain

Remember the Fourier transform? This allowed us to extract the amplitude each frequency component of a sound.

In practice, the FT can't be used as it requires an infinite input (who has time for that).

We _can_ use a similar construction called: Short-Time Discrete Fourier Transform (STDFT):

- _short-time_: operates on a finite-length signal instead of an infinite signal

- _discrete_: operates on sampled information

We often refer to DSTFT as _FFT_, or "fast Fourier transform" (e.g., the `fft~` object in Pd). 
FFT is actually a clever algorithm for accomplishing a DSTFT quickly, so it's ok to use the acronyms interchangeably.

## Short-Time Discrete Fourier Transform

For a signal with $N$ samples, the STDFT equations providing the sine and cosine amplitudes at certain frequencies are:

- $R_k = \sum\limits_{i=0}^{N-1} x_i cos(2\pi k i \ N)$

- $X_k = - \sum\limits_{i=0}^{N-1} x_i sin(2\pi k i \ N)$

The STDFT also only focuses on $N$ frequencies that we call "bins" between 0 and the sampling frequency. 

- If the sampling rate is $S$ then the frequency of the $k$th bin is: $k * \frac{S}{N}$

N.B.: the frequency "resolution" is limited by the length of the signal we are analysing!

## FFT on a long signal


![]({% link assets/lectures/diagram-STDFT-windowing.png %}){: style="width:35%;float:right;"}

Typically we want to apply FFT to a "chunk" of a signal rather than the whole thing.

Usually we can set the length of the chunk (window length) and an envelope function.

The usual choice for envelope function is the _Hann_ function, it looks kind of like a Gaussian distribution.

The window length is flexible, but will determine the number of frequency bins that can be analysed! Usually the window length is required to be a power of 2 (e.g., 512 or 2048)

## Inverse FFT

The FFT procedure actually also works backwards! 

- From a finite sequence of frequencies we can (re-)create a sampled signal!

The exclamation mark is doing a lot of work here! _Imagine what we can do with full control over a spectrum!!_

In fact, the IFFT algorithm is almost identical to the FFT algorithm

It _is_ important when doing an FFT to cope with the sine **and** cosine elements (or the _real_ and _complex_ outputs of a frequency. These interact in a certain way to make the ouput sound "work".

## FFT in Pd

Pure Data can do an

## Timbre Stamp

## Phase Vocoder

