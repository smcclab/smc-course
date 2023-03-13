---
title: Musical Interfaces 
tagline: Controlling computer instruments
lecturer: Dr Charles Martin
image: assets/workshops/2010-interface-charles-martin.jpg
image_alt: Photo by Charles Martin
---

{% include slides/title.html %}

## Today...

- connecting other stuff to your computer music environment...
- connecting computer music rigs to each other...

{% include slides/background-image.html
           image="nimes/arduino-heartbeat.jpg"  %}

{% include slides/background-image.html
           image="nimes/arduino-actor-interface.jpg"  %}

{% include slides/background-image.html
           image="nimes/arduino-looper.jpg"  %}

{% include slides/background-image.html
           image="nimes/arduino-vernier.jpg"  %}

{% include slides/background-image.html
           image="nimes/Sonami_Laetitia_LadysGLove.jpg"  %}

{% include slides/background-image.html
           image="nimes/satellite-ccrma.jpg"  %}

{% include slides/background-image.html
           image="nimes/HEADER_Reshaping_Excellence_Imogen_Heap.jpg" %} {% include slides/image-credit.html
           author="SENNHEISER / PHILIP PEINE" %}

{% include slides/background-image.html
           image="nimes/mad_interface.jpg"  %}

## The [NIME community](https://nime.org)

- ...new kinds of musical instruments...
- ...new kinds of musicianship...
- ...and new kinds of music?

![]({% link /assets/nimes/nime.jpg %}){: style="width:100%" }

## Typical NIME workflow...

![]({% link /assets/nimes/nime-workflow.png %}){: style="width:100%" }

## MIDI

![]({% link /assets/nimes/Synth_rack_Choking_Sun_Studio.jpg %}){:
style="width:25%; float:right" }

- "Musical Instrument Digital Interface" (1981)
- A way to send musical "instructions" to a synthesiser.
- E.g., (CC BY 2.0, Blurred Ren)
- "note on", "note off", "control change", "pitch shift", "aftertouch"...

## MIDI messages

- One status byte, one or more data bytes
- Status byte has a "status" (4 bits) and (usually) a channel or address (4
  bits)
- Data byte is a `0` followed by a 7 bit number.

![]({% link /assets/nimes/midi-message.png %}){: style="width:100%;" }

## MIDI status byte

MIDI messages have specific meanings defined by the [MIDI Association](https://www.midi.org/specifications-old/item/table-2-expanded-messages-list-status-bytes). The upper nibble of the status byte defines the meaning. The lower nibble defines the _channel_ that these apply to (1-16).

| Status Nibble Binary | Decimal | Function                                    |
|---------------|-----|---------------------------------------------|
| `0b1000`        | 8   | Note Off                                    |
| `0b1001`        | 9   | Note On                                     |
| `0b1010`        | 10  | Polyphonic Aftertouch                       |
| `0b1011`        | 11  | Control/Mode Change                         |
| `0b1100`        | 12  | Program Change                              |
| `0b1101`        | 13  | Channel Aftertouch                          |
| `0b1110`        | 14  | Pitch Bend Change                           |
| `0b1111`        | 15  | System Exclusive, song control, tempo, etc  |

## MIDI message formats

The Note on/off messsages have the same pattern of data bytes: (pitch value, velocity). 

Because the top bit must be `0` for a data message, you get 7-bit resolution.

Other messages have different formats, e.g., 

- Pitch bend change has two data bytes combined into a 14-bit number (although most devices only use the upper 7 bits).
 
- Control change (CC) messages are for non-note control data and are of the form (function, value). 


## Control Change Messages

- Some of the CC functions are specified the MIDI standard, e.g. (1) modulation wheel, (64) sustain pedal, (2) breath controller.

- Many control change numbers are only partly specificed (e.g., 12 "Effect Control 1"), or "undefined" (14, 15, 20-31).

- Pd isn't a "synthesiser" so doesn't respond to MIDI messages, it passes them to you to action.

- Hardware interfaces will often use specific CC controls or allow you to specify them.

- Hardware synths usually respond in specific (often nonstandard) ways to CC messages (you'll have to read the manual)

## MIDI in Pd

![]({% link /assets/nimes/midi-in-pd.png %}){: style="width:50%; float: right;"
}

Pd has lots of MIDI objects for interchanging MIDI with a hardware or software port.

- Raw MIDI bytes: `midiin`, `midiout`
- Note messages: `notein`, `noteout`
- Control changes: `ctlin`, `ctlout`

## Receiving from controllers...

![]({% link /assets/nimes/korg-controller-pd.png %}){: style="width:100%;" }

## Making MIDI notes

![]({% link /assets/nimes/makenote-pd.png %}){: style="width:100%; float:
right;" }

`makenote` can handle timing for notes with duration

## A bit about lists...

![]({% link /assets/nimes/list-packing-pd.png %}){: style="width:25%; float:
right;" }

- messages in Pd can contain multiple values (as you know!)
- you can append or prepend values to a `list`...
- and `pack` or `split` values.
- there's a bit of weirdness about this.

## Advanced list packing...

![]({% link /assets/nimes/list-packing-pd2.png %}){: style="width:30%; float:
right;" }

Use `list append` and `list prepend` to add items to a list.

Good way to accumulate an envelope message, or all the parameters for a synth
note...

## OSC (open sound control)

- standard way to send messages between synth software over (local) network
  connections
- normally UDP messages...
- one message can have many pieces of data, both numbers and text

![]({% link /assets/nimes/osc-message-structure.png %}){: style="width:100%;" }

## Sending and receiving OSC in Pd.

- very simple OSC implementation... (but it works)
- address chunks and all arguments end up in a list: up to you to do what you
  want with them.

![]({% link /assets/nimes/osc-in-pd.png %}){: style="width:60%;" }

## Connecting interfaces

![]({% link /assets/nimes/in2change-setup.jpg %}){: style="width:50%; float:
right;" }

- most commercial interfaces use MIDI over _USB_
- some fancy things use MIDI over _Bluetooth_
- digital mixing desks and other equipment sometimes uses OSC over _ethernet_
- some DIY interfaces use _serial over USB_

## Connecting ensembles...

![]({% link /assets/nimes/LPN-vs-EDA.png %}){: style="width:50%;" }

## Local connections

- MIDI-over-network: `RTP-MIDI` (easy in MacOS)
- OSC connections (need to specify IP addresses...)
- OSC messages to broadcast addresses (e.g., _192.168.255.255_ - not always
  allowed by library/router)

Need to use local router or wired connections...

## Server solutions

- Run one computer as "server" to look after ensemble
- Run a virtual server or web service on the internet to look after ensemble
  (hard mode)

## Interfacing with audio...

![]({% link /assets/nimes/fiddle-bonk-pd.png %}){: style="width:50%; float:
right;" }

- easy way to get some NOISE into your system, try interfacing with audio.
- pitch detection: `fiddle`
- onset detection: `bonk`
- try with voice, contact microphones, input from other performers, mix-down of
  the performance.

## Ensemble Feedback Instruments?

![]({% link /assets/nimes/ensemble-feedback-diagram.png %}){: style="width:60%;
float: right;" }
![]({% link /assets/nimes/ensemble-feedback-instruments.png %}){:
style="width:60%; float: right;" }

Cite: Ensemble Feedback Instruments, Rosli et al., NIME 2015.

## Mobiles and Pd

![mobmuplat](https://danieliglesia.com/mobmuplat/MMP_flow1.png){:style="width:60%;float:right;"}

mobile devices already have a lot of sensors (touchscreen, accelerometer,
microphone, etc).

you can use `mobmuplat` or `PdParty` to run Pd patches on a mobile, and use
these sensors for great good!

## Go do it:

Make an `interface` to your composition/synth.

You can use the MIDI keyboards, sound input, or anything else you might want.


{% comment %}

## Real Composers

[Margaret Schedel](https://www.schedel.net)

[Tomie Hahn](https://www.arts.rpi.edu/~hahnt/interactive.html)


## Mobmuplat in action

<iframe src="https://player.vimeo.com/video/92575444" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
<p><a href="https://vimeo.com/92575444">Reality Denied Comes Back to Haunt</a> from <a href="https://vimeo.com/danieliglesia">Daniel Iglesia</a> on <a href="https://vimeo.com">Vimeo</a>.</p>

## Beyond Pd...

Fun note, you can use Pd patches in other projects using...

- [libpd](https://github.com/libpd) - just the internal parts of Pd as an
  embeddable library for other software.
- [pd-party](https://danomatika.com/code/pdparty) - an iOS app for performing
  with Pd patches
- [mobmuplat](https://danieliglesia.com/mobmuplat/) - an iOS/Android app for
  performing with Pd Patches.

{% endcomment %}
