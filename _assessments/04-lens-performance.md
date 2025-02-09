---
title: LENS Performance
tagline: Now's the time to make some noise.
permalink: /assessments/lens-performance/
show_toc: true
image: assets/photos/2022-lh3.jpg
image_alt: Photo by Charles Martin
template_repo: https://gitlab.cecs.anu.edu.au/laptop-ensemble/2023/SMC-2023-submissions
hidden: true
---

## Outline

- **Performance Dates:** May 28--30, 2025 (**in person assessment only**).
- **Artefact Submission Date:** 30/5/2025 23:59 AEST
- **Mark weighting:** 40%
- **Submission:** submit your assignment according to the
  [instructions below](#submission-process)
- **Policies:** Late submission not permitted, this an individual assessment (one performance per ensemble member)
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
- **must** be presented at a LENS performance

We'll make a recording of the performances for archival purposes and also
to put on the YouTube channel.

{:.info-box}

You will perform a concert with the members of your group. Each group member must present their own work and be prepared to participate in everybody else's piece.

{:.warn-box}
**Computer Music Languages studied this semester** are: Pure Data (Vanilla) and Strudel. Your performance is expected to work in Pd-vanilla and `strudel.cc`. If extensions or libraries are required, these **must** be documented in your performance materials.

### Performance materials

You must submit your **performance materials** through GitLab in the `final-performance` folder in your submission repo

Your performance materials:

- **must** include all patches, code, sound files, scores, instructions required to produce your performance (upload to GitLab)
- **must** include a `README.md` file explaining how to get your performance up and running and including screenshots and code listings of the important part of this performance.
- you **must** download the PDF artefact of the README file and upload to wattle by the due date. 

The primary part of your performance materials is the PDF uploaded to Wattle. We _may_ check your Gitlab repository if further information is required about your performance, but basically your work should be represented clearly in your PDF file.

{:.info}

Please use good judgement about the size of media files you upload to GitLab. It's ok if you _need_ to upload large files (e.g., up to 100MB or so), but better if you can keep sound files smaller.

## Rules

### Performance Dates and Times

See the practical information [below]({% link _assessments/04-lens-performance.md %}/#practical-matters).
Your performance will be a public event! Feel free to advertise it, create a poster, and invite your friends.

### Technical Setup

We will provide for each laptop:

- HDMI input (for your video and sound)
- power outlet (for your laptop power adapter)

We will also provide a WiFi router with internet.

You need to provide whatever **adapters or cables** that are necessary to connect _HDMI_ to your computer, you should also bring your **power adapter**.
By default, we expect every member of the ensemble to connect their laptop to _HDMI_ and a power outlet and **leave it plugged in** for your performance.

### External Equipment

You are allowed to use equipment external to your laptop for the purpose of controlling your computer music software in the final performance. This includes MIDI controllers, human-interface devices, microbits, etc. There are a few caveats:

- You may not use any equipment that requires AC power (that is, USB-powered or battery powered equipment only).
- You may not use any equipment that requires more than one person to carry.
- You may not use any equipment that creates sound which is used in your performance (i.e., external synthesisers, DJ decks, samplers are not allowed).
- Any external equipment you use must be clearly documented and listed **as a referennce** in your performance materials.

### External Software

- You are allowed to use libraries or extensions for the computer music systems used in the course, but these should be clearly documented and listed **as a reference** in your performance materials.
- You are allowed to use middleware that goes in between computer music software and an external or internal hardware interface (e.g., Osculator, Wekinator, MobMuPlat, Python scripts).
- You are not allowed to use music production software such as Ableton Live, ProTools or Logic in your performance. 
- Any external libraries that you use should be used in a sophisticated, original, and independent way in order to show your attainment of the learning outcomes.

{:.warn-box}
Use of non-referenced software in your performance is a breach of [academic integrity](https://services.anu.edu.au/learning-teaching/academic-integrity/academic-integrity-best-practice-principles-for-learners) at ANU. Investigating such a breach, even unintentional mistakes, is time consuming and stressful. It could delay your completion of this class. Please be very careful about your references and the software you have used.

## Marking Rubric {#rubric}

The marking rubric for this task is different between COMP4350 and COMP8350 as these courses have different learning outcomes (see [the links to Class Summaries]({% link 01-policies.md %})).

### COMP4350 Rubric

| Criteria | HD | D | CR | P | N |
|---|---|---|---|---|---|
| Sophistication of application of fundamental concepts in sound and music computing. (50%) | Excellent to outstanding SMC implementations going beyond learning materials. | Very good application of SMC concepts, but not beyond learning materials. | Application of SMC at level of learning materials. May have gaps in some areas. | Some effort to replicate SMC learning materials resulting in functional SMC software. May have only applied some SMC concepts covered. | Very little SMC software or software that is below the level of learning materials. |
| Technical Quality (20%) | A performance showing an outstanding level of stability, technical polish, and consideration of staging. | A performance showing an very good level of stability and technical polish with good consideration of staging. | A performance showing a good level of stability but some lack of technical polish. Staging has been considered. | A performance that may have some issues with stability but lacks technical polish. Staging considerations may be lacking. | A performance with serious stability issues and a lack of technical polish. Staging considerations may be lacking. |
| Demonstrated capacity for expression and collaboration (20%) | Performance demonstrates an excellent to outstanding capacity for expression (creative control) by all performers and collaboration that goes beyond learning materials. | A performance that shows very good capacity for expression and creative control by the performers. Collaboration is demonstrated and necessary for the performance. | A performance that shows some capacity for expression and creative control by the performers. A good capacity for collaboration is demonstrated but it may not be completely necessary. | A performance with some capacity for expression by the performers, but it may not lead to fully collaborative creative control. | Performance does not demonstrate a capacity for expression (creative control) by the performers and the level of collaboration is below acceptable standards. |
| Presentation and communication through performance materials (10%) | An outstanding presentation of performance materials clearly communicating the submissions and performance procedure. | A very good presentation of performance materials clearly communicating the submissions and performance procedure. | A good presentation of performance materials. The submission and performance procedure may not be fully communicated. | A satisfactory presentation of the performance materials. The submission and performance procedure may be only weakly communicated. | Unsatisfactory performance materials that may have minimal or no communication of the performance and submission.  |

### COMP8350 Rubric

| Criteria | HD | D | CR | P | N |
|---|---|---|---|---|---|
| Sophistication of application of fundamental concepts in sound and music computing. (50%) | Excellent to outstanding SMC implementations going beyond learning materials that reflects recent developments in SMC. | Very good application of SMC concepts, but not beyond learning materials. Reflects recent developments in SMC. | Application of SMC at level of learning materials. May have gaps in some areas. May not fully reflect recent developments in SMC. | Some effort to replicate SMC learning materials resulting in functional SMC software. May have only applied some SMC concepts covered and may not reflect recent developments in SMC. | Very little SMC software or software that is below the level of learning materials. May not reflect recent developments in SMC. |
| Technical Quality (20%) | A performance showing an outstanding level of stability, technical polish, and consideration of staging. | A performance showing an very good level of stability and  technical polish with good consideration of staging. | A performance showing a good level of stability but some lack of  technical polish. Staging has been considered. | A performance that may have some issues with stability but lacks technical polish. Staging considerations may be lacking. | A performance with serious stability issues and a lack of technical polish. Staging considerations may be lacking. |
| Demonstrated capacity for expression and collaboration (20%) | Performance demonstrates an excellent to outstanding capacity for  expression (creative control) by all performers and collaboration that goes beyond learning materials. | A performance that shows very good capacity for expression and creative control by the performers. Collaboration is demonstrated and necessary for the performance. | A performance that shows some capacity for expression and creative control by the performers. A good capacity for collaboration is demonstrated but it may not be completely necessary. | A performance with some capacity for expression by the performers, but it may not lead to fully collaborative creative control. | Performance does not demonstrate a capacity for expression (creative control) by the performers and the level of collaboration is below acceptable standards. |
| Presentation and communication through performance materials (10%) | An outstanding presentation of performance materials clearly communicating the submissions and performance procedure. Clearly articulates recent developments in SMC. | A very good presentation of performance materials clearly communicating the submissions and performance procedure. Clearly articulates recent developments in SMC. | A good presentation of performance materials. The submission and performance procedure may not be fully communicated. Articulates recent developments in SMC but may not be clear. | A satisfactory presentation of the performance materials. The submission and performance procedure may be only weakly communicated. May not articulate recent developments in SMC. | Unsatisfactory performance materials that may have minimal or no communication of the performance and submission. May not articulate recent developments in SMC. |

## Practical Matters for the Concert {#practical-matters}

Here is some more practical information about the LENS performance assessment concerts.

Make sure you have read **all** the information on this page, and in the ["Concert" lecture]({% link _lectures/13-concert.md %}) so that you are aware of our expectations and standards.

### Place

All concerts will take place at the **[Big Band Room 1.55](https://studentvip.com.au/anu/main/maps/140822)**, **[Peter Karmel Building 121](https://studentvip.com.au/anu/main/maps/140745)**.

### Date and Time

Concerts are on May 28, 29, 30. Specific group times will be arranged by Week 10.

{% comment %}
The time for your group is in the following table:

| **Date** | **Concert Time** | **Group** | **Group Name**       | **Arrival Time** | **Tutor** |
|----------|----------|-----------|----------------------|-------------|-----------|
| 2 Jun    | 12:00    | G02       | CyberSymphony        | 11:00       | Mingrui   |
| 2 Jun    | 13:00    | G07       | Beat Bots            | 12:00       | Xinran    |
| 2 Jun    | 15:00    | G08       | Binary Beats Brigade | 14:00       | Madelyn   |
| 2 Jun    | 16:00    | G14       | Techno Troupe        | 15:00       | Rachel    |
| 5 Jun    | 10:00    | G11       | Digital Domain       | 09:00       | Madelyn   |
| 5 Jun    | 11:00    | G04       | Glitch Garden        | 10:00       | Sandy     |
| 5 Jun    | 12:00    | G16       | Circuitry Symphony   | 11:00       | Madelyn   |
| 5 Jun    | 14:00    | G12       | Sonic Algorithms     | 13:00       | Xinran    |
| 5 Jun    | 15:00    | G15       | Audio Architects     | 14:00       | Sandy     |
| 5 Jun    | 16:00    | G13       | Electro Ensemble     | 15:00       | Rachel    |
| 6 Jun    | 11:00    | G06       | ElectroPhonic        | 10:00       | Rachel    |
| 6 Jun    | 12:00    | G01       | Machine Musician     | 11:00       | Mingrui   |
| 6 Jun    | 14:00    | G10       | Pixelated Players    | 13:00       | Sandy     |
| 6 Jun    | 15:00    | G09       | Midi Masters         | 14:00       | Mingrui   |
{% endcomment %}

### Arrival and Warmup

You must arrive at the venue **60 minutes before your scheduled performance time**. 
A tutor will meet you at the entrance and guide your group to a [greenroom](https://www.dictionary.com/browse/greenroom) where you can test your setups and get ready with your group. This tutor will stay with you throughout your concert experience to make sure you know where to go.

The schedule for each ensemble is as follows (times in minutes relative to your performance time).

- -60m **Arrive at venue**, meet your tutor at the front, move to "green room" to test setups and get ready
- -30m **Pack up in green room** and get ready to move to the venue
- -20m **arrive at the venue** and get ready to walk carefully on stage when previous group finishes
- -15m when other group is finished, come onto stage and plug in laptops (HDMI + power supplies)
- -10m - Confirm sound and video coming out of each laptop 
- 00m! (Concert time), stop testing, get ready for first piece
- 5m - Start of your concert
	- Each piece is played in order given on poster
	- 3min pause for changeover between each piece
	- Confirm ready to start each piece with the stage manager  Brent before starting (he will be right in front)
- ~45m - finish concert, unplug, move off stage (ready for next group)

### Concert order and procedures

The order of pieces in the concert is as given in the [concert lecture]({% link _lectures/13-concert.md %}).

This is not up for discussion, you may not change the concert order. My worst
nightmare is assessing the wrong person so please make sure you get the order
correct.

During the concert, you will be guided by a tutor about when to start each piece. 
The tutor will confirm the author of each piece with you before you begin.

### Supporting each other and being awesome

I know that everybody in the class wants to help each other. In the stress
leading up to the concert, you may find yourself a bit more frustrated with
your group if and when things go a bit wrong. Please keep in mind how important
supporting each other is for learning. You gain a lot from the experience of
helping others when they need it and going through a difficult assessment with
a team is a memorable and worthwhile experience. 

Please be your best self and act respectfully in all interactions over the next
few weeks.

### Deferred Assessment

This assessment is arranged as a non-centrally administered
exam. If have an extenuating circumstance that prevents you from attending, 
please apply for [Extenuating Circumstances]({% link 01-policies.md %}). 
This is defined as circumstances that are unexpected
and unavoidable and must be a serious matter that would prevent you from
physically attending your performance assessment.

If you apply for extenuating circumstances in this course, please inform the course
convenor.
