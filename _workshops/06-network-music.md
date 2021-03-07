---
title: "Week 6: interfaces"
summary: musical collaboration over computer networks
---

<!-- TODO: have an "interfaces" week (see [Chuckles NIME slides from 2019]). -->
<!-- TODO: change content to be about interfaces, not networking -->

# {{ page.title }}

Network connections are used to connect musicians together from different
locations, to connect devices together in one studio, and to connect different
pieces of software on one computer. This week you'll explore how to use networks
in your laptop music making.

{:.diary-provocation-box}

**Solo AVD**: pick someone else's patch/code from a previous workshop, put a
new interface on it, and play something

## Goals for this week

1. explore the history (and present) of networked music to see what artists have
   been doing when they're connected together. find out about systems for
   sending musical data over networks.

2. have _at least one_ network music making session with some of your LENS
   classmates

## Resources

- Network Music Making [YouTube: charles](https://youtu.be/1J7EAu5g5zw)
- [Network Music (Cambridge Companion to Electronic Music)](https://www-cambridge-org.virtual.anu.edu.au/core/services/aop-cambridge-core/content/view/C2A04A1DAE6EDE05909CF97DFEAD8B86/9781316459874c8_p138-153_CBO.pdf/network_music.pdf)

### Open Sound Control (OSC)

- Andrew Johnston: [Pure Data and Open Sound
  Control](https://youtu.be/TTd57stEr_g)
- Pure Data: 23 Open Sound Control 1 [YouTube:
  cheetomoskeeto](https://youtu.be/rxHIJx-O3iU)

{:.info-box}

Pd didn't have OSC built in until fairly recently (v0.46), look at the
`oscformat` and `oscparse` objects which need `netsend` and `netreceive` to
work. Older videos will show how to import special libraries for OSC --- not
needed anymore!

### Audio over networks

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

There's a LENS mumble server which is set up for you to explore synchronous
network musicmaking---login details are:

- host: `mb1.cheapmumble.com`
- port: 2193

### Things to think about

- this week is an "individual" AV diary week, you're allowed to have
  collaborators as part of your work (e.g., Ben _feat._ Charles), you could also
  have a network music piece that doesn't involve other players.

- what does networked music even mean? did it exist before computers? when
  looking for famous examples, how far back can you go? if you find anything
  cool, drop a link in the #inspo channel on Teams

- remember that you can send control messages over the network, or audio, or
  both, or something else entirely---be creative

- think about the specific network music context you're dealing with; is it lots
  of musicians in the same room connected via ethernet to the LAN, or is it a
  couple of musicians on opposite sides of the globe trying to improvise
  together in real-time? Can you design your piece to minimise the challenges or
  emphasise the opportunities provided by this specific networked context?
