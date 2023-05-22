---
title: LENS Performance
tagline: Now's the time to make some noise.
permalink: /assessments/lens-performance/
show_toc: true
image: assets/photos/2022-lh3.jpg
image_alt: Photo by Charles Martin
template_repo: https://gitlab.cecs.anu.edu.au/laptop-ensemble/2023/SMC-2023-submissions
---

## Outline

- **Performance Dates:** June 2, 5, 6 (**in person assessment only**).
- **Artefact Submission Date:** 23:59 2/6/2023
- **Mark weighting:** 40%
- **Submission:** submit your assignment according to the
  [instructions below](#submission-process)
- **Policies:** Late submission not permitted. 
- **GitLab Repo:** [link]({{ page.template_repo }})


## Description

The LENS (Laptop Ensemble) performance is the major project for this course.
You will create a computer music system that can be performed live by a group
of students at a live concert. This could take the form of a new computer music
instrument or composition that a group of performers can control.

Your performance must be sophisticated in terms of fundamental concepts in
music computing, have high technical quality as a coherent performance, and
demonstrate a high level of expression and collaboration by the performers. 

In order to create your LENS Performance, you will be assigned to a laptop
ensemble during the semester  and you must involve all members of the ensemble
in your performance.

You will also submit all of your performance materials (code) and a readme PDF
explaining how your performance works after your concert.

## Specification

Your LENS performance consists of:

1. an in-person **ensemble performance** that you will participate in with your group
2. **performance materials** PDF submitted through Wattle

There are two representations of your LENS performance: the **ensemble
performance** at the final gig, and the **performance materials** you'll submit
through GitLab.

### Ensemble performance

Your performance is the primary representation of
your work. As described in the [marking criteria](#marking) this includes
all aspects of the performance.

Your ensemble performance:

- **must** involve all members of your LENS ensemble
- **must** be created with one of the computer music languages **studied this semester**
- **must** be 5-7 minutes in length
- **must** be presented at a LENS performance in the exam period

We'll make a video & audio recording of the performances for archival purposes and also
to put on the YouTube channel.

{:.info-box}

You will perform a concert with the members of your group. Each group member must present their own work and be prepared to participate in everybody else's piece.

{:.warn-box}
**Computer Music Languages studied this semester** are: Pure Data and Gibber. Your performance is expected to work in Pd-vanilla and `gibber.cc/playground`. If extensions or libraries are required, these **must** be documented in your performance materials.

### Performance materials

You must submit your **performance materials** through GitLab in the `final-performance` folder in your submission repo

Your performance materials:

- **must** include all patches, code, sound files, scores, instructions required to produce your performance (upload to GitLab)
- **must** include a `README.md` file explaining how to get your performance up and running and including screenshots and code listings of the important part of this performance.
- you **must** download the PDF artefact of the README file and upload to wattle by the due date. 

The primary part of your performance materials is the PDF uploaded to Wattle. We _may_ check your Gitlab repository if further information is required about your performance, but basically your work should be represented clearly in your PDF file.

{:.info}

Please use good judgement about the size of media files you upload to GitLab. It's ok if you _need_ to upload large files (e.g., up to 100MB or so), but better if you can keep sound files smaller.

{:.warn-box} 

The performance materials due date is the same for everybody in the class, but may be before your performance. Your readme PDF upload needs to be finalised by the due date, but you may make changes to your gitlab repository up to your performance day.

## Process {#submission-process}

### Performance Times

See the practical information [below]({% link _assessments/04-lens-performance.md %}/#practical-matters).

{:.info}
Concert day is likely to be intense, try to get good sleep, eat properly, and bring a water bottle.

{:.info}
Your performance will be a public event! Feel free to advertise it, create a poster, and invite up to 100 of your best friends and foes.

### Technical Setup

We will provide for each laptop:

- HDMI input (for your video and sound)
- power outlet (for your laptop power adapter)

We will also provide a WiFi router with internet.

You need to provide whatever **adapters or cables** that are necessary to connect _HDMI_ to your computer, you should also bring your **power adapter**.

By default, we expect every member of the ensemble to connect their laptop to all of: _HDMI_  and a power outlet and leave it plugged in for the duration of your setup, run through and performance.

- We will provide a big PA system and foldback speakers in the venue.
- There will be technical support available at the performance, support is limited to connectivity issues, not stability of your piece :-)
- You will need to confirm the **order of works** in your group's concert and any special instructions for the **HDMI** and **audio** inputs by the week 12 workshop.

{:.info}
If you have trouble getting your laptop to output video and audio over HDMI please sort this out well before the final performance.

### External Equipment

You are allowed to use equipment external to your laptop for the purpose of controlling your computer music software in the final performance. This includes MIDI controllers, human-interface devices, microbits, etc. There are a few caveats:

- You may not use any equipment that requires AC power (that is, USB-powered or battery powered equipment only).
- You may not use any equipment that requires more than one person to carry.
- You may not use any equipment that creates sound which is used in your performance (i.e., external synthesisers, DJ decks, samplers are not allowed).

Keep in mind that you are creatinng an _ensemble_ performance and any equipment used should contribute to how your ensemble works together to create music. Any external equipment you use must be clearly documented annd listed **as a referennce** in your performance materials.


### External Software

- You are allowed to use libraries or extensions for the comupter music systems used in the course, but these should be clearly documented and listed **as a reference** in your performance materials.

- You are allowed to use middleware that goes in between computer music software and an external or internal hardware interface (e.g., Osculator, Wekinator or MobMuPlat).

- You are not allowed to use music production software such as Ableton Live,
ProTools or Logic in your performance. 

- Any external libraries that you use
should be used in a sophisticated, original, and independent way in order to
show your attainment of the learning outcomes.

{:.warn-box}
Use of non-referenced software in your performance is a breach of [academic integrity](https://services.anu.edu.au/learning-teaching/academic-integrity/academic-integrity-best-practice-principles-for-learners) at ANU. Investigating such a breach, even unintentional mistakes, is time consuming and stressful for both the student and course convenor. It could delay your completion of this class. Please be very careful about your references and the software you have used.


### Reference format {#reference-format}

We prefer ACM reference format: <https://www.acm.org/publications/authors/reference-formatting>

Some example references in Markdown format are as follows:

```
# References

1. Alice McGuffing. 2022. Ideas for creating the animated ripple effect
2. Jerry Wang. 2022. Background Artwork (artwork.jpg)
3. Howzit (StackOverflow user). 2018. p5js-image-array (CC BY-SA 2.5). Retrieved from: <https://stackoverflow.com/questions/51233447/p5js-image-array>
4. p5 Reference. No Date. MouseWheel Example (CC BY-NC 4.0). Retrieved from: <https://p5js.org/reference/#/p5.Element/mouseWheel>
5. Scott Bauer. 2004. Photo of Potatoes (Public Domain). Retrieved from: <https://en.wikipedia.org/wiki/Potato#/media/File:Patates.jpg>
6. Aaron Wu. 2018. Boat Photo on Unsplash. Retrieved from: <https://unsplash.com/photos/_8rjlHwN4uk>
7. Wikipedia. 2022. J M W Turner Article. Retrieved from: <https://en.wikipedia.org/wiki/J._M._W._Turner>
```

## Marking

### Marking criteria {#marking}

Your LENS artefact will be assessed based on the representations above. The
marking criteria are:

- Sophistication of application of fundamental concepts in sound and music computing. (50%)
- Technical Quality (20%)
- Demonstrated capacity for expression and collaboration (20%)
- Presentation and communication through performance materials (10%)

### Marking Rubric {#rubric}

| Criteria | HD | D | CR | P | N |
|---|---|---|---|---|---|
| Sophistication of application of fundamental concepts in sound and music computing. (50%) | Excellent to outstanding SMC implementations going beyond learning materials. | Very good application of SMC concepts, but not beyond learning materials. | Application of SMC at level of learning materials. May have gaps in some areas. | Some effort to replicate SMC learning materials resulting in functional SMC software. May have only applied some SMC concepts covered. | Very little SMC software or software that is below the level of learning materials. |
| Technical Quality (20%) | A performance showing an outstanding level of stability, technical polish, and consideration of staging. | A performance showing an very good level of stability and technical polish with good consideration of staging. | A performance showing a good level of stability but some lack of technical polish. Staging has been considered. | A performance that may have some issues with stability but lacks technical polish. Staging considerations may be lacking. | A performance with serious stability issues and a lack of technical polish. Staging considerations may be lacking. |
| Demonstrated capacity for expression and collaboration (20%) | Performance demonstrates an excellent to outstanding capacity for expression (creative control) by all performers and collaboration that goes beyond learning materials. | A performance that shows very good capacity for expression and creative control by the performers. Collaboration is demonstrated and necessary for the performance. | A performance that shows some capacity for expression and creative control by the performers. A good capacity for collaboration is demonstrated but it may not be completely necessary. | A performance with some capacity for expression by the performers, but it may not lead to fully collaborative creative control. | Performance does not demonstrate a capacity for expression (creative control) by the performers and the level of collaboration is below acceptable standards. |
| Presentation and communication through performance materials (10%) | An outstanding presentation of performance materials clearly communicating the submissions and performance procedure. | A very good presentation of performance materials clearly communicating the submissions and performance procedure. | A good presentation of performance materials. The submission and performance procedure may not be fully communicated. | A satisfactory presentation of the performance materials. The submission and performance procedure may be only weakly communicated. | Unsatisfactory performance materials that may have minimal or no communication of the performance and submission.  |

## Practical Matters for the Concert {#practical-matters}

Here is some more practical information about the LENS performance assessment concerts.

Make sure you have read **all** the information on this page, and in the ["Concert" lecture]({% link _lectures/13-concert.md %}) so that you are aware of our expectations and standards.

### Place

All concerts will take place at **Llewellyn Hall, ANU School of Music, Building 100**.

### Date and Time

Concerts are on June 2, 5, 6. The time for your group is in the following table:

| **Date** | **Concert Time** | **Group** | **Group Name**       | **Arrival Time** |
|----------|------------------|-----------|----------------------|------------------|
| 2 Jun    | 12:00            | G02       | CyberSymphony        | 11:00            |
| 2 Jun    | 13:00            | G07       | Beat Bots            | 12:00            |
| 2 Jun    | 15:00            | G08       | Binary Beats Brigade | 14:00            |
| 2 Jun    | 16:00            | G14       | Techno Troupe        | 15:00            |
| 5 Jun    | 10:00            | G11       | Digital Domain       | 09:00            |
| 5 Jun    | 11:00            | G04       | Glitch Garden        | 10:00            |
| 5 Jun    | 12:00            | G16       | Circuitry Symphony   | 11:00            |
| 5 Jun    | 14:00            | G12       | Sonic Algorithms     | 13:00            |
| 5 Jun    | 15:00            | G15       | Audio Architects     | 14:00            |
| 5 Jun    | 16:00            | G13       | Electro Ensemble     | 15:00            |
| 6 Jun    | 11:00            | G06       | ElectroPhonic        | 10:00            |
| 6 Jun    | 12:00            | G01       | Machine Musician     | 11:00            |
| 6 Jun    | 14:00            | G10       | Pixelated Players    | 13:00            |
| 6 Jun    | 15:00            | G09       | Midi Masters         | 14:00            |

### Arrival and Warmup

You must arrive at the School of Music **60 minutes before your scheduled performance time**. A tutor will meet you at the entrance and guide your group to a [greenroom](https://www.dictionary.com/browse/greenroom) where you can test your setups and get ready with your group. This tutor will stay with you throughout your concert experience to make sure you know where to go.

The schedule for each ensemble is as follows (times in minutes relative to your performance time).

- -60m **Arrive at School of Music**, meet your tutor at the front, move to "green room" to test setups and get ready
- -30m **Pack up in green room** and get ready to move to Llewellyn Hall
- -20m **arrive at Llewellyn Hall** and get ready to walk carefully on stage when previous group finishes
- -15m when other group is finished, come onto stage and plug in laptops (HDMI + power supplies)
- -10m - Confirm sound and video coming out of each laptop 
- 00m! (Concert time), stop testing, get ready for first piece
- 5m - Start of your concert
	- Each piece is played in order given on poster
	- 3min pause for changeover between each piece
	- Confirm ready to start each piece with the stage manager  Brent before starting (he will be right in front)
- ~45m - finish concert, unplug, move off stage (ready for next group)

### Concert order and procedures

The order of pieces in the concert is as given on the posters available on Teams and in the [concert lecture]({% link _lectures/13-concert.md %}).

This is not up for discussion, you may not change the concert order. My worst
nightmare is assessing the wrong person so please make sure you get the order
correct.

During the concert, you will be guided by your tutor and stage manager Brent
about when to start each piece. Brent will confirm with you who the author of
each piece is so that you perform in the correct order.

### Supporting each other and being awesome

I know that everybody in the class wants to help each other. In the stress
leading up to the concert, you may find yourself a bit more frustrated with
your group if and when things go a bit wrong. Please keep in mind how important
supporting each other is for learning. You gain a lot from the experience of
helping others when they need it and going through a difficult assessment with
a team is a memorable and worthwhile experience. 

Please be your best self and act respectfully in all interactions over the next
few weeks.


