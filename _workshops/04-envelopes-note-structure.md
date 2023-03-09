---
title: "Week 4: envelopes, notes and compositions"
tagline: Shaping sound in the short (and long) term
show_toc: true
image: assets/workshops/2013-balloon-charles-martin.jpg
image_alt: Photo by Charles Martin
---

{:.warn-box}
**Solo Diary**: With a _single_ sound source, create a piece using envelopes.

The past two weeks of workshops have shown several different ways to create
sound "sources"; single oscillators, more complex networks of oscillators &
filters, soundfile playback objects, noise sources, etc. In building your
patches for performance, you've even found several different ways to shape the
relative trajectories of these sound sources over time; such as multiplying
signals with slider values.

This week, we look at
[envelopes](<https://en.wikipedia.org/wiki/Envelope_(music)>)---the more general
term for this type of "sound event shaping". Envelopes are a key part of taking
the "raw signals" you've been generating so far and shaping them into more
structured and recognisable musical elements like notes, bars, choruses, and
movements.

![The effect of applying an envelope to a carrier
wave.]({{site.baseurl}}/assets/digital-synthesis/envelope-sound.png){:style="width:100%;"}




## Goals for this week

1. be able to control the sound sources in your patch in a reliable & repeatable
   manner

2. to explore how different envelope parameters can be used from a compositional
   perspective

3. to start using processing sound with more effects.

4. **to get your laptop ensemble assignment for the rest of the semester!**


### Laptop Ensemble Assignment

So far you have been jamming with a new group of computer musicians each week getting to know lots of people in your workshop.
Now that you are settled in your workshop we are going to divide you into _laptop ensembles_ that you will work with for the rest of the semester. 
In particular, you will collaborate with this ensemble for your _laptop ensemble_ assessment, and for the two _group_ computer music diaries.
The reason we **set** these groups now is so that you have time to get to know everybody over the two low-stakes group diaries before you need to prepare your assessment. 
This doesn't mean you will never speak to the rest of the class (we still do randomised jams each week), just that you have your own close collaborators to learn from over the semester.

Laptop Ensembles in SMC have **four or five** students in them. This means that in your workshop group of 20--25 students there will be 5 or 6 ensembles.
Your tutors already know the number and size of each group based on the number of people in your workshop so the task in week 4 workshop is to:

1. fill the ensemble groups appropriately
2. give each laptop ensemble a name
3. decide on a time to create and record your week 5 _group computer music diary_

{:.warn-box}
**Don't miss this workshop!** You need to be at the week 4 workshop in person to have a say in what ensemble you are assigned to. 
If you can't make it for any reason, **use your workshop channel on Teams to talk to your tutors**, explain why you can't attend and answer their questions so that they can help put you in an appropriate group.
If you don't actively participate in this lab and miss the next computer music diary you **will lose marks in your first portfolio** as you can't make up a group entry at the last minute.

Your tutors will help fill ensembles up by following some flexible criteria:

1. **ensembles should be new**: We don't want super close friends / work colleagues forming groups or to have the same group as you might have in a different class. Your laptop ensemble should be mainly people you don't know (yet!), you have the whole semester to build a great new group of computer music colleagues!
2. **groups should show diversity**: We _do_ want to have a range of gender identities, backgrounds, academic levels (under-/post-grad), interests, and style preferences in each group. Groups should have some "note" people and some "sound" people, some people who like techno, some who like classical, some who run Linux and some who run Windows.
3. **groups should be (a bit) comfortable**: We don't want to isolate people by putting them in a certain group. If someone looks like they will be lonely or uncomfortable we might rebalance groups so that they can have a productive experience
4. **groups should be practical**: groups will need to start working together _this week_ so schedules and life circumstances will need to be discussed **today**. Find a time to record your group diary in the next seven days. If you can't then you won't be able to later in the semester and the group will need to change.

If you have _any_ concerns about the group formation process you can let your tutor know during the workshop. 
If you have a concern that you don't want to bring to your tutor, please email the course convenor to raise it and we can help :-)



## Resources

- [Charles' Pd examples (start with `11-EnvelopeGenerator.pd`)](https://github.com/cpmpercussion/ComputerMusicIntro)
- The envelopes section of the [digital synth]({% link _lectures/index.md %}) lecture.
- [PureData tutorials - rich synthesis (2) - simple envelopes](https://www.youtube.com/watch?v=gqpvIwYko3o)
- the Pd help for the `line~` & `vline~` objects, as well as the `bang` and
  `metro` objects for triggering your envelopes

You've probably already tried the `line~` object for scheduling a slow change to a value. The `vline~` object lets you "schedule" several changes in sequence. The syntax is a bit tricky, so you'll have to look at the resources above to help.

![Anatomy of a vline
message]({{site.baseurl}}/assets/digital-synthesis/pd-using-vline.png){:style="width:100%;"}

An **extra goal** for this week is to start experimenting with some basic
digital effects. You might have some experience with popular effects like
"reverb", "chorus", "tremolo", or "distortion". Effects like these can modify
both the envelope and timbre of sound (depending on the effect) and effects
like reverb can help to make synth sounds _sound better_, or blend perceptually
with other sounds. The Pd examples features a few demo effects, try adding one
or two to your work to see whether they help with your ideas for this week.

## Creative Notes

- does an envelope have to control the _amplitude_ of a sound source? or can it
  control other things? can envelopes control other envelopes?

- when is an ADSR (attack-decay-sustain-release) envelope the right choice, and
  when do you want a different type of envelope?

- can you take a patch (or part of a patch) that you've made in a previous week
  and add an envelope to it? you might want to try the `metro` object to
  generate a sequence of "bangs" to keep triggering your envelope generator

- for some further reading,
  e.g.
  [ADSR Envelopes: How to Build The Perfect Sound](https://blog.landr.com/adsr-envelopes-infographic/)
