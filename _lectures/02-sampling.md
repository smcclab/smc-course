---
title: "Audio files and sampling"
lecturer: Dr Charles Martin
image: assets/workshops/recorder-charles-martin.jpg
image_alt: Photo by Charles Martin
---

{% include slides/title.html %}

## Where do your sounds come from?

Last week: creating sound from scratch (basic waveforms/shapes).

Today: finding sounds from the real world.

## Stockhausen vs Schaeffer

## What's a sound file?



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

![]({% link /assets/digital-synthesis/pd-wavetable.png %}){: style="width:90%;"
}

`tabosc4~` scrolls through a table at a certain frequency.

## Grains of Audio

![]({% link /assets/digital-synthesis/pd-grains.png %}){: style="width:50%;
float: right;" }

Try just reading a bit of a soundfile over and over to make a continuous sound.

Note the `cos~` bit here, what does that do?

See `B13.sampler.overlap` in the Pd help for a better version.

## Exercise:

Make an synth with the uses soundfiles or try modifying the granular example.
Load in some of your own audio to make it unique.

Check out the help "Browser" in Pd's help menu to see all the cool patches the
creators have left for us to explore...
