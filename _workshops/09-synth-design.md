---
title: "Week 9: synth design"
tagline: Composing music live with code
show_toc: true
image: assets/workshops/2013-rpi-charles-martin.jpg  
image_alt: Photo by Charles Martin
---

It's another group week! Get organised early so that you can find a time to work with your ensemble.

{:.warn-box}
**Group Diary**: Create a **3-minute** piece in Strudel with a focus on _modulation_ where each performer has a different role.

{:.warn-box}
This workshop is yet-to-be-updated for 2025 where we will use [Strudel](https://strudel.cc) as the live-coding language.

You've created a few piece of music with Strudel now so you should have a good grasp of the basics. This week you need to go deeper, completing most (if not all) of the tutorials in the Strudel website. You will need to apply the synth design concept "modulation" in your group diary. Think about all the aspects of a computer music performance: sounds, synths, notes, rhythms, sequences, patterns. All of these things can be distorted, warped, mutated and evolved over time and it's your job to find ways to do that with your group. When you're putting your group together, make sure everybody has a different role (although everybody should be modulating something).

## Goals for this week

1. Dive deeper into the synth designs provided in Gibber (well, in [gibberish](https://github.com/gibber-cc/gibberish/tree/v3/js/instruments) actually, see below). Create sounds with a synth you haven't used before such as `fm` or `karplusstrong`.

2. Read through the [`modulation` tutorial](https://github.com/gibber-cc/gibber/blob/main/playground/examples/modulation.js) and the [`arpeggios and signals as sequences` tutorial](https://github.com/gibber-cc/gibber/blob/main/playground/examples/arp.js) and learn about how to create custom modulations for synth parameters and sequences.

3. Look at the [`making synths` tutorial](https://github.com/gibber-cc/gibber/blob/main/playground/examples/make.js) and create your own synth design in Gibber using the Genish DSP library.

5. Try the `tidalcycles` tutorial for a different (some would say better) way of defining sequences in Gibber. The full syntax for tidalcycles mininotation is [here](http://tidalcycles.org/docs/reference/mini_notation/).

4. Use Gibber's built-in collaboration features to create a group performance with your ensemble!

## Resources

The main resources for this week are the Gibber playground and the built in tutorials. You should try to complete all of the music and sound design tutorials so that you have a grasp of some of the features that are available. Gibber can feel a bit opaque, so here's the list of different projects it brings together. If you want to try some new sounds quickly, try the "presets" (under \#2 below).

1. The [gibber playground](https://github.com/gibber-cc/gibber): Gibber's user interface, clone this repo to run Gibber locally.
2. [gibber.audio.lib](https://github.com/charlieroberts/gibber.audio.lib): Audio components for Gibber, most of this wraps `gibberish` (see below), but it does include the [presets](https://github.com/charlieroberts/gibber.audio.lib/tree/main/js/presets).
3. [gibber.graphics.lib](https://github.com/charlieroberts/gibber.graphics.lib): Graphics components for Gibber.
4. [gibber.core.lib](https://github.com/charlieroberts/gibber.core.lib): A few shared objects and function for Gibber, mostly for sequencing. `euclid`, `seq`, and `tidal` are defined here.
5. [gibberish](https://github.com/gibber-cc/gibberish): a "fast JavaScript DSP library". If you want to know where `Synth` or `Sampler` are defined, look here (actually look in `gibberish/js/instruments`).
6. [genish](https://github.com/charlieroberts/genish.js): this is a lower-level DSP library for doing "per-sample audio processing" (inspired by the `gen~` object from Max/MSP). To understand why this is cool, look at the [genish tutorial](http://www.charlie-roberts.com/genish/tutorial/index.html).

## Creative Notes

- This is your _second_ chance to work with your group. Think about your experience last time. Is there a way to collaborate more effectively and efficiently?

- It's a good time to remember that we don't put people in "boxes" in this course. Nobody is the boss in a laptop ensemble and the best performances will have big contributions from each member. Even if you think you are a beginner, we value your contribution. Beginner's mind can sometimes be an advantage for creativity.

- Gibber makes it quick and easy to load up advanced synth designs like the `monosynth`, `FM`, and `karplusstrong` synths. Given that everybody has access to these synths, how are you going to sound "unique" in your group?

- Now that you've made a lot of computer music, look back at the examples of laptop ensemble performances from [week 1]({% link _workshops/01-hello-sine.md %}). Do these performance make more sense now?

### Videos and Sounds

- [Volca Drum Techno Session](https://youtu.be/Io4cAqBeT_M)

- [Sam Aaron live coding an ambient electro set w/ Sonic Pi](https://youtu.be/G1m0aX9Lpts)

- [DJ_Dave & Char Stiles Livecoding Performance @ Algowave Algorave](https://youtu.be/7qfCeIgtllY)

- [Algorave: algorithmic dance culture Alex McLean TEDxHull](https://youtu.be/nAGjTYa95HM)

