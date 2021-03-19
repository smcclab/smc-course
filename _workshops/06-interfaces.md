---
title: "Week 6: interfaces"
summary: musical collaboration over computer networks
---

# {{ page.title }}

You've implicitly been building interfaces every week (every Pd patch is an
interface, and so is even a piece of live code that you interact with during a
performance). The field of _New Interfaces for Musical Expression_ (NIME) is a
whole thing with its [own conference and everything](https://www.nime.org).

This week we'll think more specifically about what it means to design a good
interface for a LENS instrument. In computing more generally, interface design
(or UX, or Human-Computer Interaction) is a topic which many people have thought
a lot about over many years. There's even a [course you can
take](https://programsandcourses.anu.edu.au/course/COMP3900) on the subject.

{:.diary-provocation-box}

**Solo AVD**: pick [someone else's patch/code from a previous
workshop](https://gitlab.cecs.anu.edu.au/laptop-ensemble/2021/2021-av-diary-materials),
put a new interface on it, and play something

## Goals for this week

1. think about what it means to make a **n**ew **i**nterface for **m**usical
   **e**xpression

2. 

## Resources

Building on last week's [networks & collaboration workshop]({% link
_workshops/05-networks-collaboration.md %}), we'll think about how to control
the computer music systems we've been building through interfaces of various
types.

- like last week, the [`3-new-interfaces` folder in the ComputerMusicIntro
  project](https://github.com/cpmpercussion/ComputerMusicIntro) has some cool
  patches for getting started with OSC, MIDI, etc.

- if you've got a smartphone, there are a bunch of configurable OSC apps which
  (combined with your knowledge from last week) you can probably turn into an
  interface if you like

- for a wild & wonderful tour of what's possible in the world of NIMEs, you can
  check out the [NIME community website](https://www.nime.org), including the
  [full archive of papers submitted to the NIME
  conference](https://www.nime.org/archives/)

## Things to think about

- what is an interface, exactly? thinking back over your previous Pd work (e.g.
  your AV Diary submissions), is each part of your patch equally "interface-y"?
  or are some parts of the patch more "interface-y" than others? was that a
  deliberate choice, or did it just work out that way?

- the "start with someone else's work" aspect of this week's provocation is
  super important: you shouldn't have to spend any time this week doing the
  actual "sound generation" work, you should be exclusively thinking about new
  ways of controlling the noisemaking infrastructure that's already there

- can computer programs be interfaces? what does the "I" in API stand for?

- imagine you're not going to be the one playing your instrument/interface...
  what does virtuosity look like? how have you tried to design a low floor/high
  ceiling? or do you have other design priorities?

- since you're starting with someone else's work, think about what _they_ might
  consider their patch's interface to be? can you do something with their patch
  which might really surprise them?
