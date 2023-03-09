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

# Subtractive Synthesis

## Subtractive Synthesis

Let's take a complex sound and **remove** some content.

![]({{site.baseurl}}/assets/digital-synthesis/pd-filterfm.png)


# FM Synthesis


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

