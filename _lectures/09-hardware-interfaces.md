---
title: Making Hardware Interfaces
tagline: Creating physical computer instruments
lecturer: Dr Charles Martin
image: assets/lectures/2015-arduino-charles-martin.jpg
image_alt: Photo by Charles Martin
---

{% include slides/title.html %}

## Outline

- Digression: LENS Performance Assessment
- High-level concepts and discussion about physical computer instruments
- Two appoarches: instrumental and compositional (adapted from "Composing Interactions" - Marije Baalman)
- The question of mapping
- Micro:bit live demo making a simple movement-based MIDI interface

{% include slides/background-image.html image="lectures/yichen-sandy-nime2024.jpg" heading="Digression: LENS Performance Assessment" %}

# LENS Performance

Let's talk about practical matters for the final LENS performances.

- Final assessment for this course (40%)
- an in-person ensemble performance that you will participate in with your group
- **individual** assessment, one performance per ensemble member.

## What you are making

> You will create a computer music system that can be performed live by a group of students at a live concert. This could take the form of a new computer music instrument or composition that a group of performers can control.

This means:

a computer music system **created by you** performing **original music** with your group.

Do not play covers or music created by other people. That is not acceptable in this assessment or this course.

## Part 1: Your Ensemble Performance

- **must** involve all members of your LENS ensemble (at least 3 people)
- **must** be created with one or more of the computer music languages **studied this semester**
- **must** be 4-5 minutes in length (i.e., 240--300 seconds)
- **must** be presented at a LENS performance and recorded through our HDMI mixer system.
- **must** have the video uploaded into your GitLab repository by the due date.

## Part 2: Your Performance Materials

You must submit your **performance materials** through GitLab in your fork of the [LENS performance repository]({{ page.template_repo }}).

Your performance materials:

- **must** include all patches, code, sound files, scores, instructions required to produce your performance (upload to GitLab)
- **must** include a `README.md` file explaining how to get your performance up and running and including screenshots and code listings of the important part of this performance.
- **must** include the video of your ensemble performance from your concert.

Everything is marked from the GitLab Repo; it's **all due on 6 June, 2025, 23:59**.

## Concert Dates, Times, Location

Dates and Times between **May 28 and June 6, 2025**.

1. **[Big Band Room 1.55](https://studentvip.com.au/anu/main/maps/140822)**, Ground Floor, [Peter Karmel Building 121](https://studentvip.com.au/anu/main/maps/140745).
2. **[Lecture Theatre 1](https://studentvip.com.au/anu/main/maps/139508)** (LT1) Room 509, Level 5, [ANU School of Music Building 100](https://studentvip.com.au/anu/main/maps/139508).

⛔️ You **can't** complete your ensemble performance outside of our provided dates and times, this counts as an exam. ⛔️

## Concerts

![Concert]({% link assets/photos/2019-rehearsal-rohan.jpg %}){:style="width:50%;float:right"}

- Each group gets `one` timeslot to perform each of your pieces (3-4) in one 45 minute concert.
- You must be prepared to play each piece in sequence with little changeover time (<5mins changeover).
- Technical setup will be very strictly controlled.

You can test your computers on our HDMI system at drop-in sessions in Week 11 and 12.

## Allocation

![Concert]({% link assets/photos/2022-lens-kambri-hi.jpg %}){:style="width:50%;float:right"}

- Discuss with your group what your time constraints are (i.e., other exams)
- In week 10 workshop, book a time that your group is available.

You will need to be flexible and organised. We cannot guarantee you won't have a concert on the same day as another exam.

## Technical Setup

![Technical Setup]({% link assets/photos/2023-tech-setup.jpg %}){:style="width:50%;float:right"}

We will provide for each laptop:

- **HDMI input** (for your video and sound)
- power outlet for your laptop
- WiFi router (hopefully with internet)

You need to provide whatever **adapters or cables** are necessary to connect _HDMI_ to your computer, you should also bring your **power adapter**.

## External Equipment

You are allowed to use equipment external to your laptop for the purpose of controlling your computer music software in the final performance. This includes MIDI controllers, human-interface devices, arduinos, microbits, etc. There are a few caveats:

- You may not use any equipment that requires AC power (that is, USB-powered or battery powered equipment only).
- You may not use any equipment that requires more than one person to carry.
- You may not use any equipment that creates sound which is used in your performance (i.e., external synthesisers, DJ decks, samplers are not allowed).

Keep in mind that you are creating an _ensemble_ performance and any equipment used should contribute to how your ensemble works together to create music. 

## External Software

- You are allowed to use libraries or extensions for the computer music systems used in the course, but these should be clearly documented and listed **as a reference** in your performance materials.

- You are allowed to use middleware that goes in between computer music software and an external or internal hardware interface (e.g., Osculator, Wekinator or MobMuPlat).

- You are not allowed to use music production software such as Ableton Live,
ProTools or Logic in your performance. 

- Any external libraries that you use
should be used in a sophisticated, original, and independent way in order to
show your attainment of the learning outcomes.

## Integrity

Use of external non-referenced software in your performance is a breach of [academic
integrity](https://services.anu.edu.au/learning-teaching/academic-integrity/academic-integrity-best-practice-principles-for-learners)
at ANU. 

You must reference:

- any software not created by you
- any hardware systems required for your performance
- any software developed in collaboration with another student

We **expect** collaboration in this course---the tradeoff is we **expect** precise and complete referencing.

Don't claim other's work is your own---even by accident!!

## Interactive Ensemble Music Making

![Concert]({% link assets/photos/2019-city-pop.jpg %}){:style="width:50%;float:right"}

The big challenge in a LENS performance:

- ~~writing some synths that sound cool~~
- figuring out who does what
- figuring out how to structure a performance (= organised sound, composition)

Give each performer **less** to do than you think you need to. Expect performers to think and communicate. Give performers **creative control**. Good performance is **risky!**

{% comment %}
On to the actual lecture content
{% endcomment %}

{% include slides/background-image.html image="lectures/2015-arduino-charles-martin.jpg" heading="Making Hardware Interfaces" %}

## Recap: Incorporating Soft-/Hardware Interfaces in Pd

![]({% link assets/lectures/hardware-interface/yichen-pd-processing-interface.jpg %}){: style="width:40%;float:right"}

- Buttons, sliders, selectors.
- Keyboard: `key`, `mouse`, etc.
- External library [Processing](https://processing.org) for more complex interactions.

Are there more interaction options beyond your computer?

## Hardware Interface Devices

![]({% link assets/nimes/2024-nime-soft.jpg %}){: style="width:40%;float:right"}

- Phones/Tablets can talk to your laptop via OSC
  - [TouchOSC app](https://hexler.net/touchosc)
  - [MobMuPlat](https://www.danieliglesia.com/mobmuplat/)

- Microcontrollers + sensors can talk via OSC, Serial, USB, Bluetooth, etc.
  - E.g., Micro:bit, Arduino, [Bela](https://learn.bela.io), etc.
  - [Dialogues in Space](https://youtu.be/3aZNt6G2dko) by Sandy Ma

**Custom hardware:** Let's you experiment with _new kinds of computing interfaces_.

## A Simple NIME Workflow

![]({% link /assets/nimes/nime-workflow.png %}){: style="width:100%" }

Some kind of sensors for input, microcontroller to process values and send serial/bluetooth/midi/OSC to your laptop.

{% include slides/background-image.html image="lectures/hardware-interface/yichen-ozchi-performance-2022.jpg" heading="Designing New Musical Interfaces" %}

## Instrumental Approach

Making things that are _like_ regular musical instruments. 

Inspired by the acoustic instrument and well-established music tradition, design related to the task of making sound.

Classifications ([Miranda and Wanderlay, 2006](https://archive.org/details/newdigitalmusica0021mira)):

- **Augmented** musical instruments: extended by sensors and/or controllers
- **Instrument-like** gestural controllers: model an acoustic instrument as closely as possible
- **Instrument-inspired** gestural controllers: inspired by acoustic ones but with new configuration
- **Alternate** gestural controllers: not directly modeled or inspired ("imaginary")

{% include slides/background-image.html image="https://d3i71xaburhd42.cloudfront.net/2d72f5d4d42ff1e5789d6320148302b7bb39c467/5-Figure6-1.png" heading="The extended clarinet (2016) / Carl Normark et al. " bgsize="contain" %}

{:.fragment}
Digital sound layer

{:.fragment}
Preserve the interaction complexity and playing virtuosity

{:.fragment}
Extending the [clarinet's bell](https://zenodo.org/record/1176090#.ZEnG_i8RpCA) through the performer's motion and gestures

{:.fragment}
Extra pitch bending and note playback options with visuals

{% include slides/background-image.html image="https://blog.bela.io/images/nime2020/svampolin.jpg" heading="Svampolin (2019) / Laurel S. Pardue et al. " %}

{:.fragment}
A custom-designed electrodynamic pickup capturing the velocity of each string

{:.fragment}

[Separating sound from source: sonic transformation of the violin through electrodynamic pickups and acoustic actuation, NIME2019](http://instrumentslab.org/data/laurel/sound-from-source.pdf)

{% include slides/background-image.html image="http://instrumentslab.org/images/research/accessible/Strummi-all-versions.png" heading="The Adapted Bass Guitar and The Strummi (2015 & 2018)/ Jacob Harrison " %}

{:.fragment}
Accessible guitar instrument - touch screen guitar (?!)

{:.fragment}

[When is a Guitar not a Guitar? Cultural Form, Input Modality and Expertise, NIME2018](https://www.nime.org/proceedings/2018/nime2018_paper0063.pdf)

{% include slides/background-image.html image="lectures/2014-metatone.jpg"
heading="Phaserings (2015) / Charles Martin " %}

{:.fragment}
Percussion inspired: tap, rub, swirl gestures in a new kind of instrument.

{:.fragment}
A granular synthesis component in Pd

{:.fragment}
[Paper](https://www.nime.org/proc/cmartin2015/), [Someone's review on Youtube](https://youtu.be/rLI-vE4wuJE?si=nKXHnb1VBbr6ZDPT)

{% include slides/background-image.html image="nimes/2024-YichenCubingSound.jpg"
heading="Cubing Sound (2022) / Yichen Wang" bgsize="cover"%}

{:.fragment}
Exploring "imaginary" augmented reality instruments with freehand gestures

{:.fragment}
Performance practice around Canberra and beyond.

{:.fragment}
[Paper and Videos](https://www.nime.org/proc/nime22_27/)

## Other cool physical computer instruments

![]({% link assets/nimes/2024-xyborg.jpg %}){: style="width:40%;float:right"}

- [Multi Rubbing Tactile Instrument](https://zenodo.org/record/1176084#.ZEnHBy8RpCA)
- [An Easily Removable, wireless Optical Sensing System (EROSS) for the Trumpet](https://zenodo.org/record/1178562#.ZEnG9i8RpCA)
- [Kontrol: Hand Gesture Recognition for Music and Dance Interaction](https://zenodo.org/record/1178496#.ZE32HC8RphE) - more like an interface?

See [nime.org](https://www.nime.org/archives/) for more, and next week's lecture.

## Compositional Approach

![]({% link assets/lectures/setups/constructions-nime2017-worm.jpg %}){: style="width:30%;float:right"}

Focuses on the concept of a musical composition, interface allows the composition to unfold.

> "From providing instructions for performers to create music, to creating contexts for performances in which music may be experienced" - Marije Baalman

- You are the _composer_
- What systems, environments, connections, etc, are needed to enable your composition to be played?

{% include slides/background-image.html image="https://charlesmartin.au/assets/projects/lmtd/Benjamin-codes-and-Hanna-sets-the-masks.jpg"
heading="Vital LMTD (2009) / Last Man to Die" %}

Exploring three art forms: acting, percussion, and drawing through new interactive technologies and experimental performance

[Video](https://vimeo.com/14152601) and [more](https://charlesmartin.au/projects/lmtd/)

{% include slides/background-image.html image="lectures/slork-twilight-2013.jpg"
heading="Twilight (2013) / SLOrk" %}

{:.fragment}
Inspired by the classic science-fiction short story “Twilight” by John W. Campbell

{:.fragment}
[Video](https://vimeo.com/100624271)

## The Mapping Problem

![]({% link assets/lectures/interfaces/faderjam-prototype.jpg %}){: style="width:40%;float:right"}

Connection between an action to a sonic output. **Problem is that there are so many ways of connecting sensors to parameters!**

- How do you want to control the sound & what is the interface?
- What sonic / musical process is controlled by the interface?
- What is sound modality / synth process are working with?

## Mapping Questions

![]({% link assets/lectures/setups/unplugged-bela.jpg %}){: style="width:40%;float:right"}

- Are the actions _triggering_ sounds, _modifying_ them or _both_?
- What parameters should be controlled?
- What range should be controlled?
- Is the mapping linear? Non-linear?
- Should the parameter be restricted to the "interesting part"?
- What about computational models with state? (e.g., algorithmic composition, synth mechanism, sampling)
- How does the sound output work?


{% include slides/background-image.html image="lectures/desk-devices.jpg"
heading="Live demo: Micro:bit + Pd making interactive musical system"%}

{% comment %}
## Live demo: Steps in mapping

1. Gesture/Input action - hold micro:bit and move around
2. Sensor -  Micro:bit sensors
3. Accessing _MIDI data_ from Micro:bit hardware and to Pd over radio
4. Computational model - Playing different pitches of an osc (envelope parameters, FM synthese, etc)
5. Sound output - Pd
{% endcomment %}


## Micro:bit

- [Hardware description](https://tech.microbit.org/hardware/#hardware-description) 
- Sensors: 
  - Accelerometer
  - Temperature sensing
  - [Code examples](https://microbit.org/get-started/first-steps/sensors/)
- [Radio communications](https://lancaster-university.github.io/microbit-docs/ubit/radio/)

## Accelerometer to Serial

{:. style="font-size:.5em;"}
```python
from microbit import *
import math

def norm_acc(x):
    new = round(min(max((x + 2000)/4000, 0.0), 1.0), 4)
    return new

def send_accelerometer_data():
    x, y, z = accelerometer.get_values()
    accs = [norm_acc(x), norm_acc(y), norm_acc(z)]
    out = ' '.join([str(i) for i in accs]) + ';'
    print(out)
    return accs

def display_pixel_mapping(x):
    return 4 - min(math.floor((x + 0.2) * 4), 4)

def display_values(values):
    display_values = [display_pixel_mapping(x) for x in values]
    display.clear()
    display.set_pixel(0, display_values[0], 9)
    display.set_pixel(2, display_values[1], 9)
    display.set_pixel(4, display_values[2], 9)

uart.init(baudrate=115200)

while True:
    values = send_accelerometer_data()
    display_values(values)
```

## Serial to Sound in Pd

![]({% link assets/lectures/microbit-serial-receiver-pd.png %}){: style="width:40%;float:right"}

We have programmed the microbit to send messages in [FUDI format](https://en.wikipedia.org/wiki/FUDI). So messages look like:
```ascii
0.435 0.211 0.988;\n
```
To receive from a serial port in Pure Data we need to:

1. install the `comport` external
2. figure out which serial port is our microbit
3. read bytes in (yes bytes!)
4. assemble bytes into lines
5. decode lines from FUDI format to a list
6. unpack the list
7. **do something** with the values!

## Serial to Sound in Strudel

A bit harder, no serial support automatically in Strudel.

But it's just Javascript, so use the [Web Serial API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Serial_API#examples)

Would be good to have an example...

## Arduino

I have a little course in doing this hardware NIME design with Arduino:

<https://github.com/cpmpercussion/EMS-ArduinoTutorial>

(old stuff there...)

## Outro 

Anything else to do here?

A lot! 

This could be a whole course, can only give inspiration and basic introduction today.

Hardware is _hard_, systems like microbit and arduino do their best to make it a more forgiving process but it requires time investment to get things working.

{% comment %}
## Radio Serial to Pd in your computer

- MacOs: [SerialMidiBridge](https://github.com/RuudMulder/SerialMidiBridge)
- Windows & Linux: [HairlessMIDI](http://projectgus.github.io/hairless-midiserial/) & loopMIDI
- Pd midi set-up
- [More](https://vulpestruments.com/2018/11/21/how-to-connect-your-mini-mu-to-puredata/)

## MIDI and sound process in Pd

![]({% link assets/lectures/hardware-interface/microbit-midi-example.png %}){: style="width: 40%; float: right; "}

- Read MIDI data
- Transform it to other forms ...
{% endcomment %}

{% comment %}
## Accessing data from Micro:bit and radio transmission

- Get accelerometer data from Micro:bit
- Sending data over radio communication
- Receiving data at the laptop-end
- Therefore, you need a sender & receiver



## Receiver

{:. style="font-size:.8em;"}

```
// set communication channel
radio.setGroup(1)

// proxies all radio buffers to serial
radio.onReceivedBuffer(function (buffer) {
    serial.writeBuffer(buffer)
    // light on showing receiving in-progress
    led.toggle(4, 4)
})

```

## Sender

{:. style="font-size:.7em;"}
```python
radio.setGroup(1)
let accelx = 0

// set midi channel
let accelx_send = midi.channel(1)

basic.forever(function () {
  // access accelerometer data
  accelx = input.acceleration(Dimension.X)
  // some sound representation
  accelx_send.noteOn(accelx_note)
})

// send midi messages over radio transmission
midi.setTransport(function (data: Buffer) {
    radio.sendBuffer(data);
})
```
{% endcomment %}