---
title: Computer music diary
summary: Develop your skills and discuss in class.
permalink: /assessments/lens-diary/
show_toc: true
---

## Outline

- **Due date:**23:59 every Tuesday in weeks 2--8, 10 
- **Mark weighting:** 0% but required for portfolio
- **Submission:** submit your videos & portfolio submissions according to the
  instructions below
- **Policies:** late submissions not accepted without an extension.
- **GitLab Repo:** <https://gitlab.cecs.anu.edu.au/laptop-ensemble/2022/laptop-ensemble-2022-submissions>
- **MS Stream Group:** [link](https://web.microsoftstream.com/group/576eed06-09b9-47a9-bb90-9c1ffb8cd5dd?view=channels)

## Description

Your computer music diary is a way to try out sound and music computing ideas and techniques through short videos and reflections that you create each week.

Each week you'll work through pre-reading, -watching, and -listening material in the workshops and respond to a creative provocation in your diary entry.

The due date is set to the day before class and the very next day we will watch the videos in class together together to discuss the ideas you have explored.

You can find the specific pre-workshop instructions on each workshop page under the heading "Pre-Workshop Tasks"

The rest of this page is dedicated to the technical specification for your computer music diary submissions. Make sure you read this carefully and get set up in GitLab in week 1.

{:.warn-box}
Your computer music diary is the _main task_ you need to complete each week as preparation for your workshop. You will need to have completed it to participate in the workshop activities properly.

## Specification {#weekly-videos-spec}

Each week's submission must include:

- a 60 second video of your own work exploring the week's theme, which
  - has the filename `uid-week-N.[mp4,mov,mkv]`
  - has been uploaded to the **Files** area on Teams, to the correct week folder.
  - has sound (obviously)
  - uses one of the [computer music software environments we're covering in this
    course]({% link _resources/02-tools.md %}#software)

- all files (e.g., patches, source code files, sound files &
  other assets) required to re-produce your submission (in a subfolder called
  `materials`) have been uploaded to GitLab

- a reflection (maximum: 200 words) on how your work responds to the weekly provocation (as
  a [markdown](https://www.markdownguide.org) file called
  `week-N-reflection.md`) has been uploaded to GitLab

It doesn't matter how the files are named in your `materials/` folder, the reflection files are pre-created for you, so you can just add your text (in Markdown format).

It's a good idea to include a screenshot or a code snippet of the "main" thing you worked on this week in your reflection.


## Example {#example}

As an example, for week 2 your folder structure should look something like this:

```plaintext
├── week-2
│   ├── materials
│   │   ├── README.md
│   │   └── week-2.pd
│   ├── week-2-reflection.md
```

This might seem complicated, but we've created (blank) template files for you in
the GitLab repo---you just need to modify them.

Note: if you're _not_ willing to share your patch files & other materials with
other LENSers, let the course convenor know asap. The default will be that
everyone's patch files will be shared (just within this LENS cohort).

## Submission process {#weekly-videos-submission-process}

1. record your video (use [OBS Studio](https://obsproject.com), Zoom or Quicktime
2. upload your 60sec (or 180sec for group weeks) video through Microsoft Stream to our group (see above)
3. add your reflection text and materials to the GitLab repository

If you're familiar with git & GitLab, then you can do this however you like---as
long as the reflection document is pushed to GitLab before the submission time.

(NB, the next paragraph is from last year and might be not completely correct)

If you're new to this sort of thing, here are a couple of walkthrough videos showing how to use [VSCode](https://code.visualstudio.com) to edit the
`week-2-reflection.md` file, commit the `week-2.mkv` video file and push it to
GitLab. If there's any language in there that's not familiar that's completely
ok---hit us up on Teams to ask questions, we'd love to help you out.

### How to fork the project

{% include video.html video="lecture-recordings/2021/lens-fork-av-diary-project" %}

### How to add your video & reflection document & push it to GitLab

{% include video.html video="lecture-recordings/2021/lens-add-av-diary-video-and-push" %}

## Tips on making a good weekly video

1. small & focussed is ok---you don't have to build a huge thing every week

2. think deeply about the provocation: brainstorm 10 ideas, try out 3 of them,
   pick the best 1 (this will help with the "small & focussed" aspect as well)

3. you don't have to record it all in one take---you can record several
   short parts and cut them together if you want (but this will take longer)

4. think about the layout of your patch (font size, object positions, comments,
   etc.) to make sure it's going to be interesting _viewing_ (as well as
   listening)

5. if you saw something interesting in a classmate's video the previous week,
   ask them (on Teams) how they did it (yes, collaboration is ok as long as you cite your sources!)

6. have a look at the ["screen recording software" section of the Tools page]({%
   link _resources/02-tools.md %}#screen-recording-software)

### Tips on writing a good weekly reflection

1. Briefly state _what_ you have done, but spend more time on _how_ you did it and _why_.

2. it's ok to mention the inspiration (either an abstract concept, or a specific
   thing you saw/listened to) for your work

3. discuss any particular challenges or tensions you felt between competing
   ideas/priorities (if there were any)

4. don't overthink it---maximum length is 200 words

