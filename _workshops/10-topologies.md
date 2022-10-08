---
title: "Week 10: topologies"
summary: "Thinking about the parts of your performance and how they fit together"
show_toc: true
---

{:.warn-box} 
**Solo Diary**: Think about the _topology_ of your final performance and sketch out a minimum example of how different data sources can connect. You don't have to use multiple computers/performers in your sketch, just create multiple patches in Pd or code blocks in gibber and create a simple 1-minute musical example of how information flows between them. If you're thinking of creating visuals as well as music, now is a good time to try out a first idea!

{:.info-box style="margin-bottom:2rem;"}

This is the final diary entry for the semester! 

"Topology" is the way in which a set of _things_ is connected or arranged. In
the context of computer music, we can imagine a performance involving
connections between different performers, computers, interfaces, audience
members, etc.

This week we'll zoom out and think about the topology of a laptop ensemble
performance. We will particularly think about what the topology of your final
performance is, and what you might be able to do to make it more interesting.

Before this week's workshop, have a think about:

- **what are the components of your final gig topology?** this includes people
  (your ensemble-mates, audience), software (Pd, Gibber, Processing, web
  things) hardware (laptops, midi controllers, Goon-a-trons) and the
  infrastructure required to connect them all

- **what are the flows of information in this topology?** this includes audio
  signals (both digital and carried over wires, plus what's coming out of the PA
  loudspeakers), data/control messages (MIDI, OSC, FB Messenger chats), visual
  information (HDMI streams, data projectors and audience eyeballs, non-verbal
  communication protocols you set up with your ensemble-mates)

## Goals for this week

1. to think about how multiple performers in your piece will work together

2. to think about the parts of your [final performance]({% link
   _assessments/04-lens-performance.md %}) and how they fit together

## Resources

This is mostly pointers to things we've already covered, but hopefully these are
helpful reminders of the things you already know. Also, these are some good
suggestions about ways to do things, but they're not iron-clad rules. If you're
unsure about the best way to achieve your creative goals, discuss it with 
the rest of your class during the workshop slot.

### Code

- most of you folks must have tried Gabber for a live collaborative music performance and know the joy and pain :)

- alternatively, manually sharing code through a chat
  window (which is displayed to the audience) can be fine (great, even!) but
  still requires some careful thought

### Data/control messages 

#### Software

- OSC (in [Pd]({% link _workshops/05-networks-collaboration.md %}#pd-resources),
  [js](https://github.com/colinbdclark/osc.js)) is probably going to be your
  best bet for sending data/control messages between pieces of software,
  _especially_ if you want to do it over a network

#### Software/hardware

- if you're trying to connect a piece of hardware (i.e. a MIDI controller) to a
  piece of software, then MIDI might be a good option if both "ends" of the
  connection can speak MIDI (less flexible than OSC, but most musical hardware
  devices speak MIDI by default, and only the more esoteric ones speak OSC)

### Networking (hardware)

- if you can manage it (i.e. if all the devices have Ethernet ports) then using
  a simple wired router/switch is the most stable way to connect things, and
  then just typing in the IP addresses manually (there are usually few enough
  devices that this manual process isn't too tiresome)

- if you need wireless connections (i.e. you've got mobile devices involved)
  then using a separate wireless LAN (with no devices on it other than the ones
  you need for your performance) is the next best thing---much safer than trying
  to use the gig venue's (or ANU's) wifi

{:.info-box}

We will provide a wireless + wired router for the final performance. You should make it clear in your technical rider whether your piece requires wired or wireless internet router.

### Video

- video mixing can be done either in software (using
  [OBS](https://obsproject.com)) or (by default) hardware (using the LENS's
  [ATEM Mini Extreme](https://www.blackmagicdesign.com/au/products/atemmini/techspecs/W-APS-17)

- You are able to tell us how the video should appear, i.e., which video inputs should be displayed. The video mixing possibilities of the ATEM Mini Extreme are _pretty extreme_ (e.g., four inputs up in boxes and one input used as a background)

### Audio

- as discussed in [week 5]({% link _workshops/05-networks-collaboration.md %})
  there are several ways to send audio over the network, but (as you _also_
  figured out in putting together your week 5 diary) some of them are hard to get
  working

- we'll have a mixing desk at the gig and provide a 3.5mm audio connector for each performer.

- audio from the HDMI inputs will also be mixed

- if you want a line _in_ to your
  machine (e.g. a mixdown of the output of the other participants) then there
  are ways to handle audio input in Pd/Gibber

## Things to think about

- you still get to exercise your own creative agency in your diary---you get to
  select which specific aspect(s) of your classmates' work you'll try and pay
  homage to

- sketch out a diagram of the flows of audio/code/control messages/visuals/human
  communication in your planned LENS performance---if you have any questions
  about how to make it happen (either technically or aesthetically) then now is
  a good chance to ask them

- how are the audience going to perceive what you're doing? are there flows of
  information you can add (or remove) from your topology to communicate more
  clearly with your audience?
