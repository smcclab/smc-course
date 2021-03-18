---
title: "Week 5: networks & collaboration"
summary: making computer music with multiple computers & musicians
---

# {{ page.title }}

{:.diary-provocation-box}

**Group AVD**: create a piece where every member controls a different aspect of
the sound

{:.info-box}

This is the first **group AV diary** (although you've been making music together
in the ad-hoc workshop ensembles since week 2). As usual, we'll [spin the
wheel]({% link _lectures/group-picker-wheel.md %}) to assign people into groups
during the [week 4 workshop]({% link _workshops/04-envelopes-note-structure.md
%}).

In this week's workshop session we're looking at **networks & collaboration**.
We've already been collaborating together (every week!) but only by sending all
the individual audio streams to the mixing desk---not by communicating directly
between laptops.

Network connections are used to connect musicians together from different
locations, to connect devices together in one studio, and to connect different
pieces of software on one computer. This week you'll explore how to use networks
for collaboration in your laptop music making.

## Goals for this week

1. explore the history (and present) of networked music to see what artists have
   been doing when they're connected together, and find out about systems for
   sending musical data over networks

2. reflect on the affordances of the technology you're using in this course for
   computer music collaboration (both Pd specifically, and the socio-technical
   assemblage that is a bunch of humans with laptops and internet connections
   more generally)

3. with your group, design and carry out a collaboration workflow which allows
   you to deliver a **3min** AV diary entry by the week 5 workshop slot

## Resources

- Charles' 2020 [presentation on network music
  making](https://youtu.be/1J7EAu5g5zw)

- [Network Music (Cambridge Companion to Electronic
  Music)](https://www-cambridge-org.virtual.anu.edu.au/core/services/aop-cambridge-core/content/view/C2A04A1DAE6EDE05909CF97DFEAD8B86/9781316459874c8_p138-153_CBO.pdf/network_music.pdf)

- the [`3-new-interfaces` folder in the ComputerMusicIntro
  project](https://github.com/cpmpercussion/ComputerMusicIntro) has some cool
  patches for getting started with OSC, MIDI, etc.

### Open Sound Control (OSC) & Midi

[OSC](https://en.wikipedia.org/wiki/Open_Sound_Control) is a great way to send
messages (especially "control" messages) between different audio programming
environments.

Here are a couple of YouTube videos which explain things further:

- Andrew Johnston's [Pure Data and Open Sound
  Control](https://youtu.be/TTd57stEr_g)

- cheetomoskeeto's [Pure Data: 23 Open Sound Control
  1](https://youtu.be/rxHIJx-O3iU)

For example code, look at the `3-new-interfaces/5-OSC-in-pd.pd` patch in the
example repo.

{:.info-box}

Pd didn't have OSC built in until fairly recently (v0.46), look at the
`oscformat` and `oscparse` objects which need `netsend` and `netreceive` to
work. Older videos will show how to import special libraries for OSC---not
needed anymore!

[MIDI](https://en.wikipedia.org/wiki/MIDI) is the other main standard for this
stuff, which is a bit older & less flexible, but it's supported by _every_ piece
of musical hardware under the sun.

For example code, look at the `3-new-interfaces/1-MIDI-in-pd.pd` patch in the
example repo.

### Audio over networks

If you want to send "audio" data (i.e. a stream of bits that's meant to be
interpreted as an audio signal and sent to a DAC at some stage) then there are
few different options as well.

- [SonoBus](https://sonobus.net) is an easy to use application for streaming
  high-quality, low-latency peer-to-peer audio between devices over the internet
  or a local network. I (Ben) haven't used it myself yet---I only found out
  about it earlier this year---but it looks useful.

- [JackTrip](https://www.jacktrip.org) is a bunch of tools for live performance
  of music over the internet, including the [JackTrip audio conference
  server](https://youtu.be/wcyqRHYo-xo) and instructions on a [remote setup for
  Live Music Performance using Jacktrip & Aseqnet](https://youtu.be/duoCM70vQ44)

- The [Mumble open source voice chat server](https://www.mumble.info) is fairly
  easy to set up for doing live audio linkups with a number of people, but we
  don't know how well it might work for music. It's designed for voice, so the
  quality might limit what we can do with it.

{:.warn-box}

Remember that your [first AV Diary portfolio]({% link
_deliverables/01-audiovisual-diary.md %}#portfolio) is due at the end of this
week.

## Things to think about

- how is your group going to meet & chat? if it's going to be online, then you
  should get it set up for your first discussion ASAP---if you need us to create
  a separate Teams channel for you then just ask

- which parts of the collaborative workflow need to be synchronous, and which
  parts could be async? do you want to collaborate sequentially, or in parallel?

- have a look at collaborative "parlour games" like [layer
  tennis](https://www.layertennis.com) or [exquisite
  corpse](https://en.wikipedia.org/wiki/Exquisite_corpse)---can you think of
  ways to adapt them for a LENS context?

- what's the collaborative songwriting process of your favourite bands (or art
  collectives), and are there ideas you can poach from them?

- what does networked music even mean? did it exist before computers? when
  looking for famous examples, how far back can you go? if you find anything
  cool, drop a link in the #inspo channel on Teams

- remember that you can send control messages over the network, or audio, or
  both, or a signal that's somewhere in between, or something else entirely---be
  creative!

- think about the specific network music context you're dealing with; is it lots
  of musicians in the same room connected via ethernet to the LAN, or is it a
  couple of musicians on opposite sides of the globe trying to improvise
  together in real-time? Can you design your piece to minimise the challenges or
  emphasise the opportunities provided by this specific networked context?
