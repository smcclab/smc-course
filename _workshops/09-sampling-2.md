---
title: "Week 9: sampling 2"
summary: "manipulating & triggering playback of recorded sounds"
---

{:.diary-provocation-box}
**Group AVD**: it doesn't matter what the _end-product_ is, but you have to play
a different role in the _process_ to the role you played in the first group AV
diary submission ([week 5]({% link _workshops/05-collaboration.md %}))

### Goals for this week

1. to be able to load in and play with recorded sounds in Extempore

2. to go beyond just triggering pre-recorded "one-shot" samples, to explore the
   compositional possibilities of _manipulating_ pre-recorded sounds during
   playback

### Extempore resources

The sharedsystem setup process that you've been using for the [last couple]({%
link _workshops/07-algorithmic-composition-1.md %}) [of weeks]({% link
_workshops/08-synthesis-2.md %}) creates one sampler (called `samp1`) which
contains:

- piano samples in banks `0`--`2`
- TR808 drum samples in bank `3`
- acoustic drumkit samples in bank `4`

You can see how this is all set up in `examples/sharedsystem/audiosetup.xtm`
(start looking at around line 30).

As covered in the [sampler
guide](https://extemporelang.github.io/docs/guides/sampler/), to access the
samples in a given bank you need an additional argument to `play`, e.g. using
the pattern language you could try:

```scheme
;; play slot 60 (middle C) from bank 1, i.e. the mf piano
(play samp1 @1 60 dur 1)

;; play slot 60 (middle C) from either bank 0, 1, or 2
(play samp1 @1 60 dur (random 3))
```

Remember that the "bank" argument is a parameter just like all the others, so
you can use whatever algorithmic process you like to determine which bank to
select the sample from (again, see [this
guide](https://extemporelang.github.io/docs/guides/sampler/) for more info about
banks, slots & samplers).

### Things to think about

- can you make something melodic with only unpitched[^pitched] sounds? how about
  making something that's primarily rhythmic with only pitched sounds?
  
[^pitched]:
    pitched vs unpitched isn't a binary, it's a [bit more complicated than
    that](https://en.wikipedia.org/wiki/Pitch_(music)#Definite_and_indefinite_pitch),
    but that doesn't make the distinction any less interesting as a creative
    prompt

- Extempore's sampler allows you to pitch-shift the sample data on playback;
  what are the limits to how far you can push this idea?

- can you make a whole piece by playing back (with different pitches and
  offsets) from a single audio file? what does "composing" look like under this
  constraint?

- you can still incorporate some [synth]({% link _workshops/08-synthesis-2.md
  %}) material alongside your sampled sounds---ask your classmates if they're
  willing to share their patches (or look in the
  [lens-materials](https://gitlab.cecs.anu.edu.au/laptop-ensemble/2021/lens-materials)
  repo)

- what are the _roles_ in a group AVD collaboration, anyway? are there any new
  roles in your group music-making which didn't even exist in your week 5
  collaboration?

- are there any ideas/aspects of your final LENS performance that you're not
  sure about, or want feedback on? can you incorporate something of that into
  your collaborative contribution this week?
