---
title: Tools
tagline:
  The software and hardware tools you need to take part in SMC.
image: assets/photos/2022-lens-kambri.jpg
image_alt: Photo by Charles Martin
image-tint: "medium"
permalink: /resources/tools/
show_toc: true
---

Here are the software and hardware tools you'll need for SMC.

{:.info-box}

If you're having trouble getting things working on your machine, 
ask for help in the `#techsupport` channel on Teams. If there's a
deadline approaching, don't leave it to the last minute.

## Laptop

SMC involves using a laptop in class and for the assessments, and you will have
to install some software listed below. All of our classes are scheduled in
rooms with no computers provided so you must bring your own to participate in class.

You should also bring:

- your laptop charger
- some headphones (any are fine, but we also have reccomendations below)
- an HDMI adapter[^hdmi] (if there isn't a regular HDMI port on your laptop).
  E.g., you might need a [USB type-C](https://amzn.asia/d/8zh11mq) or
  [Mini-DP](https://amzn.asia/d/bxJ2c11) adapter. I suggest buying
  [**two**](https://www.forbes.com/sites/work-in-progress/2011/06/21/two-is-one-and-one-is-none/)
  and having them in your bag at all times.

In general, any Apple or Windows laptop purchased in the last five years will
be fine and many older laptops will also work very well. Laptops with Linux are
also usually fine but can have some issues with audio[^2]. 

If you have an issue where you need a loaner laptop for a short time (e.g., one
class), we may be able to help, but in general, ANU students are expected to be
able to bring a computer to on-campus classes.

[^2]: Linux audio is one of humankind's greatest intellectual challenges. As a Linux user in this course you have bravely signed up for your turn to face it. Glory to you, courageous warrior of the one true OS.

[^hdmi]: HDMI output is the main way that we will record video and audio from multiple laptops during class and in the assessments. If you don't have an HDMI adapter you won't be able to participate in these activities.


## Software {#software}

Learning the basics of computer music programming is a core part of this course.
There are two primary computer music software environments we'll use in SMC
 [Pure Data (Pd)](https://puredata.info) and
[Gibber](https://gibber.cc)

### Pure Data (Pd) {#pure-data}

Pd is a visual computer music programming system. You download the Pd program to your computer and open it to start programming computer music.

The programming concept in Pd involves making visual diagram for flow of signals and data. We call this activity "patching" as it recalls using physical wires (patch cables) to connect different pieces of electronic equipment. This is a bit different to text programming, but quite easy and fun for experimenting.

Pd is free software and works on Windows, macOS & Linux. 

To install it, go to
the [Pd downloads page](http://msp.ucsd.edu/software.html) and get the latest
version of "vanilla" Pd for your platform (as shown in the screenshot).

{:.info-box}
N.B., Pd v0.53-1 has [issues on MacOS 13 (late 2022 release)](https://github.com/pure-data/pure-data/issues/1857). The test release Pd 0.53-2test1 should be used until a new stable version is released. 

You may also find Pd downloads (and lots of extra related goodies) on [puredata.info](https://puredata.info/), but we don't recommend browsing here until you have completed a few workshops. The _latest test releases_ are generally on Miller Puckette's [website](http://msp.ucsd.edu/software.html).

<!-- ![download box on the Pd website]({% link assets/resources/pd-download-box.png %}) -->

#### Example code/patches

- All of the built-in Pd objects come with an example patch which explains how
  to use them. You can access this help browser using the `Help > Browser...`
  menu.

- Charles has written a series of introductory examples to Pure Data which can help you to grasp the basics: [ComputerMusicIntro examples](https://github.com/cpmpercussion/ComputerMusicIntro)


- [puredata.info](https://puredata.info/) has the main pure data community resources, e.g., forums, downloads, mailing list.

- [rjlib is a library of "pure Pd" patches](https://github.com/rjdj/rjlib/) with typical synth, effect, and sequencer designs. This is a great resource for learning but many of the patches will need to be adapted to be used in your own work.


#### Books

- _Kreidler, J._ [Programming Electronic Music in
  Pd](http://www.pd-tutorial.com) (2013). This book is freely available online,
  and is a good "from the ground up" introduction to how to make music in Pd.
  Some of the screenshots are a bit out of date, but since Pd hasn't changed
  very much since it was written the actual content is still quite current and
  useful.

- _Puckette, M._ [Theory and Technique of Electronic
  Music](http://msp.ucsd.edu/techniques.htm) (2007). This is a book by the
  creator of Pd, and even though it uses Pd for all the examples it's really a
  more general book about how computer music works. It covers a bunch of the
  mathematical & signal processing foundations of the techniques you'll learn
  in the course, and if you're into that sort of thing then you might enjoy
  this book. However, in this course understanding the maths is less important
  than understanding the use of these things in a SMC context, so we won't
  cover the more maths-y stuff in this course.


### Gibber {#gibber}

[Gibber](https://gibber.cc) is a live-coding in-browser music programming
system created with JavaScript. Unlike Pd, Gibber works entirely within a web
browser so you don't have to download or install anything to get started, just
head to <https://gibber.cc>.

Actually, you _might_ find that Gibber works best with Chrome/Chromium so you
might want to install one of those browsers for your Gibber experiments.

Gibber actually involves quite a few moving parts and is under active
development by the author, [Charlie Roberts](https://charlie-roberts.com) and
the live coding community. During the course you may hear about components of
gibber like `genish`, `gibberish` and `gibber.audio.lib` which you can read
about
[here](https://gist.github.com/charlieroberts/67a0eb9db0b346c159f33f72d6a228a1).

#### Example Code

- See the examples within the Gibber [playground interface](https://gibber.cc/playground/index.html)

#### References

- Gibber's [resources page](https://gibber.cc/resources.html) 
- [A brief description of genish, gibberish, and gibber.audio.lib](https://gist.github.com/charlieroberts/67a0eb9db0b346c159f33f72d6a228a1).

### OBS {#screen-recording-software}

Recording videos of your computer screen (with audio) is a crucial part of this course, you'll be doing
it every week for your diary submissions. 

We will use [OBS](https://obsproject.com) (free, macOS/Windows/Linux) to record
your screen in this course. This is the absolute best way to record your screen
and include audio. It works across all macOS, Windows, and Linux.

Here's some helpful links for OBS:

- [Record Your Computer Screen with OBS (Windows 11)](https://youtu.be/oCpRIH0k8NM)
- [How to Record Screen With Desktop Audio on Mac Using OBS - macOS Ventura or Newer (2022)](https://youtu.be/WIpqoK6zYlQ)
- [Set Up OBS to Record Computer Audio and Microphone - Ubuntu 20.04.3](https://youtu.be/ZfPS9XPZ2Vw)

It's a good idea to set up OBS and test a screen recording with computer audio before the course starts so that you know how to do it.

A few more tips:

1. You may want to trim your videos to time, cut & stitch separate parts of the
   video together, etc. OBS doesn't really do that, so you may want to find
   some basic video editing software (may already be on your computer) to help.

2. When you're recording, make sure it's capturing the direct audio output as
   well (which can sometimes be a bit tricky). With OBS on macOS, this used to be tricky (but may now be fixed)
   ---you might need to use something like
   [BlackHole](https://github.com/ExistentialAudio/BlackHole) to route the audio
   into OBS so that it records properly.

### Big Counter

This website is just a big countdown timer, it's useful for jams in class and rehearsal

- <https://big-counter.netlify.app>

You change the length of time for the countdown with a URL parameter `seconds`, e.g.: <https://big-counter.netlify.app/?seconds=150>

The source code is on github here: <https://github.com/cpmpercussion/big-counter> feel free to make it better and submit a pull request.

### Visual Studio Code {#vscode}

For editing Markdown or Javascript code in Sound and Music Computing, we will use [Visual
Studio Code](https://code.visualstudio.com/) (we'll usually call it **VSCode**
for short). VSCode is a generic text editor, which means that it's really good
at editing text, but doesn't care too much what that text is/represents.

You will specifically use VSCode to edit your class repository and add diary reflections each week.

THere's only one step to install VSCode:

1. [download & install VSCode](https://code.visualstudio.com/) (works on macOS,
   Linux & Windows)


## git {#git}

[Git](https://git-scm.com/) is an amazing bit of software for storing and
tracking changes to source code; you can think of it as Dropbox (or Google Drive
or iCloud etc.) on steroids. It's also the way you'll keep track of your diary reflections, patches, and code, and generate your assignment submissions.

Luckily, the people who make Git provide a couple of convenient ways to get everything installed on your computer:

- If you're on Windows, you can install Git by going to the [Windows download section](https://git-scm.com/download/win) then downloading and running the `.exe` file.
- If you're on macOS, the easiest way to download Git is to use the ["Binary Installer"](https://sourceforge.net/projects/git-osx-installer/) linked on the [macOS download page](https://git-scm.com/download/mac).

{:.warn-box}
After installing Git, you'll need to close and re-open VSCode!

## Hardware {#hardware}

{:.info-box}

If you have a laptop and some headphones already then you don't _need_ to buy
anything to take this course, but if you _want_ to buy something, we
understand, computer music gear is _fun!_

Here are a few things you might like to look at:

- Some **nice headphones**. You can get _great_ headphones from 
  $50--$150, for a cheaper option we like
  [Audio Technica's ATH-M20x](https://www.audio-technica.com/cms/headphones/2d52765b7d84656c/index.html)
  and for a more expensive option, have a look at
  [Sony MDR-7506](https://www.storedj.com.au/sony-mdr-7506-stereo-professional-monitoring-headphones)
  or
  [BeyerDynamic DT770 pro](https://www.storedj.com.au/search?ProductSearch=BEY-DT770PRO8).

- An **audio interface** for your laptop. If you only need two outputs, you
  might be fine with the headphone output on your laptop. External audio
  interfaces connect to your computer over USB and give you more audio inputs
  and outputs with higher quality sound and more (physical) connector options.
  They sometimes have better audio drivers and provide a smoother audio
  experience (particularly in Windows). There are lots of great audio interfaces
  with 2 microphone inputs and 2 line outputs for about $200 (e.g.,
  [PreSonus Studio 24c](https://www.storedj.com.au/presonus-studio-24c-2x2-usb-c-interface-w-studio-one-artist-and-ableton-live-lite)).
  You can get more expensive interfaces if you want that have more
  [inputs and outputs](https://www.storedj.com.au/presonus-studio-1824c-18x20-192khz-usb-c-audio-interface-w-studio-one-artist-daw)
  if you want, but these are more useful if you're setting up a small studio,
  not for SMC.

- A **hardware MIDI Controller**. It's often more fun to control music with your
  hands rather than with a keyboard and mouse (unless you're a live coder)! We
  like the
  [Korg NanoKontrol](https://www.storedj.com.au/search?ProductSearch=KOR-NANOKONT2BK)
  which gives you some knobs and sliders for about $100 and works nicely with Pd
  or Extempore. The
  [Akai LPD8](https://www.storedj.com.au/akai-lpd8-ultra-portable-pad-controller-w-8-pads)
  gives you knobs and pads, but not sliders.

We don't recommend "keyboard"-style interfaces for this class, as they
tend to distract from rather than enhance the kind of computer music
interactions we study.

Here's what's not required for this class:

- **Expensive synthesisers, Ableton Live, Eurorack systems, etc.** Well all of
  this stuff is awesome and fun, but you can do a lot of learning and music
  making with just a laptop and a pair of headphones so stick with those for the
  moment!

## Other books {#other-books}

Here's a few other books that you might find useful for your exploration. These
are about more general computer music techniques and artistic practices rather
than guides to specific programming systems.

- _Dean, R.T. and McLean, A._
  [The Oxford Handbook of Algorithmic Music](https://www.oxfordhandbooks.com/view/10.1093/oxfordhb/9780190226992.001.0001/oxfordhb-9780190226992).
  Oxford University Press, (2018) (not free for everyone, but available to ANU
  students on the ANU network)

- _Rowe, R._
  [Interactive Music Systems: Machine Listening and Composing](https://wp.nyu.edu/robert_rowe/text/interactive-music-systems-1993/chapter-1-interactive-music-systems/).
  The MIT Press (1993) (free online)

- [Cambridge Companion to Electronic
  Music](https://www-cambridge-org.virtual.anu.edu.au/core/books/cambridge-companion-to-electronic-music/51F366EA55DAE2CBCCB191E2D8349C9F)
  (available through ANU library online). A great resource that covers all the
  concepts in this course with chapters written by current computer music
  composers and researchers.


- _Müller, M._
  [Fundamentals of Music Processing](https://link.springer.com/book/10.1007/978-3-319-21945-5).
  Springer International Publishing, Switzerland (2015)


{% comment %}
### SuperCollider {#supercollider}

[SuperCollider](https://supercollider.github.io/) is a text-based computer music environment often used for live coding.

It includes its own IDE (text editor) and help system, but you can also drive it from your editor of choice if you wish.

We will be broadly following Nick Collins' [SuperCollider Tutorial](https://composerprogrammer.com/teaching/supercollider/sctutorial/tutorial.html) throughout the semester.

### Extempore {#extempore}

{:.info-box}

Extempore was used in SMC in 2020 and 2021, but not in 2022, this section is for your information only :-)

[Extempore](https://extemporelang.github.io) is a text-based computer music
environment (developed by Andrew Sorensen and [Ben Swift](https://benswift.me) at ANU!).

#### Books

If you're new to Extempore, start with the
[Quickstart](https://extemporelang.github.io/docs/overview/quickstart/) page in
Extempore's online documentation, which includes instructions on how to install
it on your laptop. Like Pd, Extempore is free & works on Windows, macOS & Linux.

#### Example code

As far as example code goes, Extempore comes with a bunch of example code (it's
in the `examples/` folder). One cool place to start is the
`examples/sharedsystem` folder. You can also read around the Extempore
documentation website, (for example to learn to make music with the
[Extempore pattern language](https://extemporelang.github.io/docs/guides/pattern-language/)).
{% endcomment %}

