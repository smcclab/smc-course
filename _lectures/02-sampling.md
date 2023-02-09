---
title: "Audio files and sampling"
lecturer: Dr Charles Martin
image: assets/workshops/recorder-charles-martin.jpg
image_alt: Photo by Charles Martin
---

{% include slides/title.html %}

{% include slides/background-image.html image="lectures/radigue.jpg" heading="so far: synthesisers" %}

{:.fragment}
creating sound from scratch with basic waveforms/shapes

{% include slides/image-credit.html
   artist="Éliane Radigue (b. 1932)"
   title="Éliane Radigue in her studio, Paris"
   year="c. 1970s"
   materials="📷 Yves Arman"
   link="[listen: Trilogie de la Mort](https://xirecords.bandcamp.com/album/trilogie-de-la-mort)"
%}


{% include slides/background-image.html image="lectures/GRM1.jpg" heading="now: recordings" %}

{:.fragment}
finding sounds from the real world, recording and manipulating

{% include slides/image-credit.html
   artist="Musique Concrete Research Group (GRM)"
   title="François Bayle, Pierre Schaeffer and Bernard Parmegiani at GRM"
   year="1972"
   link="[listen: Études de bruits (1948)](https://youtu.be/CTf0yE15zzI)"
%}

# Musique Concrete

## Stockhausen vs Schaeffer

- Musique Concrete (Charles notes)

{% include slides/background-image.html image="workshops/recorder-charles-martin.jpg" heading="getting some sound" %}

Why does sampling work?

What information is there in the sound file?

# Sampling Theory

![]({% link assets/lectures/example-bouncing-ball.png %})

What is the possible path that the ball can take?








# Sampling Theory 

- (Dannenberg Chapter 3)

## What's a sound file?

## Frequency domain FFT

- Freq domain FFT (DC3)

## Granular Synthesis

- Granular Synthesis (DC6.2)

## Sampling Synthesis

- Sampling Synthesis (DC7)


## Playing back sound files

You can use `readsf~` to open and play back a sound file. Is that enough??

![pd-soundfile-open]({% link /assets/digital-synthesis/pd-soundfile-open.png %})

## More fun to "perform" with a sound file

![]({% link /assets/digital-synthesis/pd-soundfile-perform.png %}){:
style="width:50%; float: right;" }

1. load file into a "table" with `soundfiler`
2. set up a `tabread4~` object to access the table
3. use a `phasor~`, or any other audio rate object to playback bits of the file.
4. you can even just scribble around in the file with `line~`

## Wavetables

![]({% link assets/digital-synthesis/pd-wavetable.png %}){: style="width:90%;"}

`tabosc4~` scrolls through a table at a certain frequency.

## Grains of Audio

![]({% link assets/digital-synthesis/pd-grains.png %}){: style="width:50%;float: right;" }

Try just reading a bit of a soundfile over and over to make a continuous sound.

Note the `cos~` bit here, what does that do?

See `B13.sampler.overlap` in the Pd help for a better version.

## Exercise:

Make an synth with the uses soundfiles or try modifying the granular example.
Load in some of your own audio to make it unique.

Check out the help "Browser" in Pd's help menu to see all the cool patches the
creators have left for us to explore...
