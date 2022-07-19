---
title: Computer music diary
summary: Develop your skills and discuss in class.
permalink: /assessments/lens-diary/
show_toc: true
---

## Outline

- **Due date:**
- **Mark weighting:** 0% but required for portfolio
- **Submission:** submit your videos & portfolio submissions according to the
  instructions below
- **Policies:** late submissions not accepted without an extension.

## Description

Your computer music diary is a way to try things, keep track of ideas and
generally develop your creative practice through a series of videos. It's like a
weekly vlog, except that you don't have to say "like and subscribe" at the end.

In this course each week you'll learn about a particular computer music concept
(through our [flipped lectures]({% link _workshops/index.md %})), and the
lecture content will include a particular "creative provocation" for you to
respond to in your diary entry.

The videos you'll produce aren't just dumb "box-ticking" assessments,
though---we're going to listen to, play with & discuss the things that you and
your classmates have made _during the [workshop timeslot]({% link
_workshops/index.md %})_.

## Weekly videos {#weekly-videos}

{:.info-box}

Remember: the specification & submission instructions for your diary are in
two parts---this information relates to the weekly video part.

{:.warn-box}

The "week numbering" for the diary entries can be a bit confusing, especially
because it's a flipped class (where you create your video _ahead_ of the week's
class). Just remember: in week _N_ you submit the diary entry for week _N_, e.g.
in week 2 you'll submit your first diary video in response to the
[week 2 provocation](https://comp.anu.edu.au/courses/comp2710-lens/workshops/02-synthesis-1/).

### Specification {#weekly-videos-spec}

Each week's submission must include:

- a 60 second video of your own work exploring the week's theme, which

  - has the filename `week-N.mp4`, `week-N.mov` or `week-N.mkv` (with `N`
    replaced by the week number of the submission date, so the _first_
    submission is `week-2`)
  - is 1920x1080 (full HD) resolution
  - has sound (obviously!)
  - uses one of the [computer music software environments we're covering in this
    course]({% link _resources/02-tools.md %}#software)
  - uses a video and audio codec which is supported by
    [ffmpeg](https://ffmpeg.org)

- all files (e.g., patches, source code files, sound files &
  other assets) required to re-produce your submission (in a subfolder called
  `materials`)

- a 200-word reflection on how your work responds to the weekly provocation (as
  a [markdown](https://www.markdownguide.org) file called
  `week-N-reflection.md`)

It doesn't matter how the files are named in your `materials/` folder, but for
the main video & reflection files you must name things exactly as requested
(note the lowercase!) because otherwise they won't play nice with my
scripts---and I've only got a couple of hours turnaround between the submission
deadline and the weekly workshop in the afternoon.

As an example, for week 2 your folder structure should look something like this:

```plaintext
├── week-2
│   ├── materials
│   │   ├── README.md
│   │   └── week-2.pd
│   ├── week-2-refection.md
│   └── week-2.mp4
```

This might seem complicated, but we've created (blank) template files for you in
the GitLab repo---you just need to modify them.

Note: if you're _not_ willing to share your patch files & other materials with
other LENSers, let the course convenor know asap. The default will be that
everyone's patch files will be shared (just within this LENS cohort).

### Submission process {#weekly-videos-submission-process}

You must submit your 60sec (or 180sec for group weeks) video and associated
files every week (from weeks 2--9 inclusive) through
[GitLab](https://gitlab.cecs.anu.edu.au/laptop-ensemble/2021/2021-av-diary-submissions).

If you're familiar with git & GitLab, then you can do this however you like---as
long as the video & reflection document is pushed to GitLab before the
submission time.

If you're new to this sort of thing, here are a couple of walkthrough videos showing how to use [VSCode](https://code.visualstudio.com) to edit the
`week-2-reflection.md` file, commit the `week-2.mkv` video file and push it to
GitLab. If there's any language in there that's not familiar that's completely
ok---hit us up on Teams to ask questions, we'd love to help you out.

#### How to fork the project

{% include video.html video="lecture-recordings/2021/lens-fork-av-diary-project" %}

#### How to add your video & reflection document & push it to GitLab

{% include video.html video="lecture-recordings/2021/lens-add-av-diary-video-and-push" %}

### Tips on making a good weekly video

1. small & focussed is ok---you don't have to build a huge thing every week

2. think deeply about the provocation: brainstorm 10 ideas, try out 3 of them,
   pick the best 1 (this will help with the "small & focussed" aspect as well)

3. you don't have to record it all in one take---you can record several
   screencasts and cut together the best bits

4. think about the layout of your patch (font size, object positions, comments,
   etc.) to make sure it's going to be interesting _viewing_ (as well as
   listening)

5. if you saw something interesting in a classmate's video the previous week,
   ask them (on Teams) how they did it (yes, collaboration is ok as long as you cite your sources!)

6. have a look at the ["screen recording software" section of the Tools page]({%
   link _resources/02-tools.md %}#screen-recording-software)

### Tips on writing a good weekly reflection

1. it's ok to mention the inspiration (either an abstract concept, or a specific
   thing you saw/listened to) for your work

2. don't spend too much time on the _what_ (we can watch the video for that),
   talk more about the _why_

3. discuss any particular challenges or tensions you felt between competing
   ideas/priorities (if there were any)

4. don't overthink it---it's only 200 words

