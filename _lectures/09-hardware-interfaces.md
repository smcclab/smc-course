---
title: Making Hardware Interfaces
tagline: Creating physical computer instruments
lecturer: Yichen Wang & Dr Charles Martin
image: assets/lectures/2015-arduino-charles-martin.jpg
image_alt: Photo by Charles Martin
---

{% include slides/title.html %}

## Outline

## Recap: Incorporating Hardware Interface in Pd

- Keyboard: `key`, `mouse`, `joystick`, etc.
- External library: Processing

![]({% link assets/lectures/hardware-interface/yichen-pd-processing-interface.jpg %}){: style="width:50%;"}

More interaction options beyond your computer?

## Hardware Interface Devices

- Phones and OSC interfaces
  - [TouchOSC app](https://hexler.net/touchosc)
  - [Heartbeat sounds demo by Federico Visi](https://www.instagram.com/reel/CgXLQNWLNzx/?utm_source=ig_web_copy_link)

- Microcontrollers + sensors
  - E.g., Micro:bit, Arduino, [Bela](https://learn.bela.io), etc.
  - [Dialogues in Space](https://youtu.be/3aZNt6G2dko) by Sandy Ma
- You can also do something even [wilder](https://www.instagram.com/reel/CjK4XviOKv_/?utm_source=ig_web_copy_link) (not in this course!) with custom MIDI controllers, webcam and so on...

## Recap: A Simple Workflow

![]({% link /assets/nimes/nime-workflow.png %}){: style="width:100%" }

{% include slides/background-image.html image="lectures/hardware-interface/yichen-ozchi-performance-2022.jpg" heading=" Where do I start ?" %}

## Instrumental Approach

<!-- examples discussion ...! -->

- Inspired by the acoustic instrument and well-established music tradition
- Task-oriented interface design

- Classifications (Miranda and Wanderlay, 2006):
  - Augmented musical instruments: extended by sensors and/or controllers
  - Instrument-like gestural controllers: model an acoustic instrument as closely as possible
  - Instrument-inspired gestural controllers: inspired by acoustic ones + new configuration
  - Alternate gestural controllers: not directly modeled or inspired (say - "imaginary")

{% include slides/background-image.html image="https://blog.bela.io/images/nime2020/svampolin.jpg" heading="Svampolin (2019) / Laurel S. Pardue et al. " %}

{:.fragment}
Augmented musical instrument

{:.fragment}

[Separating sound from source: sonic transformation of the violin through electrodynamic pickups and acoustic actuation, NIME2019](http://instrumentslab.org/data/laurel/sound-from-source.pdf)

{% include slides/background-image.html image="http://instrumentslab.org/images/research/accessible/Strummi-all-versions.png" heading="The Adapted Bass Guitar and The Strummi / Jacob Harrison " %}

{:.fragment}
Accessible guitar instrument

{:.fragment}

[When is a Guitar not a Guitar? Cultural Form, Input Modality and Expertise, NIME2018](https://www.nime.org/proceedings/2018/nime2018_paper0063.pdf)

{% include slides/background-image.html image="lectures/2014-metatone.jpg"
heading="Phaserings (2015) / Charles Martin " %}

{:.fragment}
Percussion-inspired?

{% include slides/background-image.html image="lectures/hardware-interface/yichen-ozchi.jpeg"
heading="Cubing Sound (2022) / Yichen Wang" bgsize="contain"%}

{:.fragment}
Imaginary ?

{:.fragment}
... or I haven't clearly figured out yet!

## Compositional Approach

- Focuses on the concept of a performance
- You are the _composer_
- Week 6: algorithmic composition and interactive music system


{% include slides/background-image.html image="https://i.ytimg.com/vi/chA-4GRCb-I/maxresdefault.jpg"
heading="Twilight (2013) / SLOrk" %}

{:.fragment}
[Video](https://vimeo.com/100624271)

{:.fragment}
Inspired by the classic science-fiction short story “Twilight” by John W. Campbell

{:.fragment}
Another description

{% include slides/background-image.html image="https://i.ytimg.com/vi/chA-4GRCb-I/maxresdefault.jpg"
heading="Synesthetic" %}

## The Question of Mapping

- Connection between an action in the environment to sonic output

- Steps in Mapping:
  - How do you want to control the sound & what is the interface?
    - E.g., Micro:bit, computer keyboard
  - What sonic / musical process is controlled by the interface?
  - What is the representation od sound and music that you are working with?
    - FM synth
    - String synth
    - Sequenced-based melody (Gibber)

## Steps in Mapping

- Gesture/Input action
- Sensor
- Accessing data from hardware (sometimes over network and can be tricky!)
- Computational model (E.g.,algorithmic composition, synth mechanism, sampling)
- Sound output

{% include slides/background-image.html image="https://usercontent.one/wp/www.captaincredible.com/wp-content/uploads/2021/11/cleanPatA.png"
heading="Live demo: Micro:bit + Pd making interactive musical system"%}

## Live demo: steps in mapping

{:.fragment}

1. Gesture/Input action - hold micro:bit and move around
2. Sensor -  Micro:bit sensors
3. Accessing data from Micro:bit hardware and to Pd over radio
4. Computational model - Simple osc
5. Sound output - Pd

## Micro:bit

- [Hardware description](https://tech.microbit.org/hardware/#hardware-description) 
- Sensors: 
  - Accelerometer
  - Temperature sensing
  - [Code examples](https://microbit.org/get-started/first-steps/sensors/)
- [Radio communications](https://lancaster-university.github.io/microbit-docs/ubit/radio/)

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

```
radio.setGroup(1)
let accelx = 0

// set midi channel
let accelx_send = midi.channel(1)

basic.forever(function () {
  // access accelerometer data
    accelx = input.acceleration(Dimension.X)
  // some sound representation
  ...
  // note "bang"
  accelx_send.noteOn(accelx_note)

})

// send midi messages over radio transmission
midi.setTransport(function (data: Buffer) {
    radio.sendBuffer(data);

})
````

## Radio Serial to Pd in your computer

- MacOs: [SerialMidiBridge](https://github.com/RuudMulder/SerialMidiBridge)
- Windows & Linux: [HairlessMIDI](http://projectgus.github.io/hairless-midiserial/) & loopMIDI
- Pd midi set-up
- [More](https://vulpestruments.com/2018/11/21/how-to-connect-your-mini-mu-to-puredata/)

## Midi and sound process in Pd


## If you want to try Arduino

Thanks to Charles - he got you something to [start with](https://github.com/cpmpercussion/EMS-ArduinoTutorial).
