---
title: Computer music diary
tagline: Develop your skills and discuss in class.
image: assets/photos/samer-khodeir-He3TV66yUEI-unsplash.jpg
image_alt: Photo by Samer Khodeir on Unsplash
permalink: /assessments/diary/
show_toc: true
template_repo: https://gitlab.cecs.anu.edu.au/laptop-ensemble/2023/SMC-2023-submissions
---

## Outline

- **Due date:** 09:00 Monday in weeks 2--6, 8--10 (09:00 Tuesday if MOnday is a Public Holiday)
- **Mark weighting:** 0% but required for portfolio
- **Submission:** submit your videos & portfolio submissions according to the
  instructions below
- **Policies:** late submissions not accepted without an extension.
- **GitLab Template Repo:** [link]({{ page.template_repo }})

## Description

Your computer music diary is a way to try out sound and music computing ideas and techniques through short videos and reflections that you create each week.

Each week **before your workshop** you will read through the workshop material and respond to a creative provocation by creating a short piece of computer music and writing a short reflection.

The due date is set to 09:00 on the morning of your workshop and in your workshop session we will watch the videos in together together to discuss the ideas you have explored.

You can find the specific pre-workshop instructions on each workshop page under the heading "Solo Diary" or "Group Diary".

The rest of this page is dedicated to the technical specification for your computer music diary submissions. Make sure you read this carefully and get set up in GitLab in week 1.

{:.warn-box}
Your computer music diary is the _main task_ you need to complete each week as preparation for your workshop. You will need to have completed it to participate in the workshop activities properly. E.g., to be ready for the "week 3 workshop" you need to read the "week 3 workshop" page, complete the "week 3 diary" and submit it on time.

## Specification {#weekly-videos-spec}

Each week's submission must include:

- a 60 second video of a computer music piece exploring the week's topic, which
  - has the filename `uid-week-N.[mp4,mov,mkv]`, e.g., `u1234567-week-3.mp4`
  - has been uploaded to the **Files** area on Teams, to the correct week folder.
  - has sound (obviously)
  - uses one of the [computer music software environments we're covering in this course]({% link _resources/02-tools.md %}#software)

- a reflection on how your work responds to the weekly provocation which
  - is a [markdown](https://www.markdownguide.org) file
  - is a maximum of 200 words and minimum of 100 words 
  - has the filename `week-N-reflection.md`)
  - includes a screenshot or a code snippet of the "main" thing you worked on this week
  - has been uploaded to your fork of the SMC repo in the correct folder
  - has been pushed to GitLab

- all files (e.g., patches, source code files, sound files &
  other assets) required to re-produce your submission  which
  - is in a subfolder called `materials` in the correct week folder of your SMC repo fork
  - has been pushed to gitlab to GitLab

It doesn't matter how the files are named in your `materials/` folder, the reflection files are pre-created for you, so you can just add your text (in Markdown format).

It's a good idea to include a screenshot or a code snippet of the "main" thing you worked on this week in your reflection.

{:.info-box}
Please follow the above instructions about file names carefully! Your video needs to have that exact name format to be picked up by our systems and played back in class.

### Example Teams Upload {#teams}

Here's an example of how to upload your video file in Teams, you can find step-by-step instructions below.

![An example of how to drag a video file into the Teams interface]({% link assets/teams-upload-example.png %})

1. record your video file.

2. change the name of your recorded file ot `uid-week-N.[mp4,mov,mkv]`, e.g., `u1234567-week-3.mp4` (careful to get your UID and the filename exactly correct)

3. open Teams and go to the "SMC 2023 Team" and click the "General" channel in the sidebar.

4. click "Files" on the tab bar at the top

5. click the "diary-submissions" folder

6. click the correct diary week folder, e.g., "diary-week-02"

7. drag your video file in there, you should see a bunch of other video files from other students (unless you are the first one!)

Please follow these steps carefully as we need your video to be in the right place to play it back correctly in the workshop.

{:.warn-box}
Don't delete any files from the Team (even your own diary). We want to keep a record of everybody's work over the semester as part of your portfolio assessment. The point is not to be mean about early ideas/video but to show your improvement in understanding and growth over the semester.

### Example GitLab Structure {#example}

As an example, for week 2 your folder structure should look something like this:

```plaintext
├── week-02
│   ├── materials
│   │   ├── README.md
│   │   └── week-2.pd
│   ├── week-02-reflection.md
```

This might seem complicated, but we've created (blank) template files for you in
the GitLab repo---you just need to modify them.

### Extra Notes for Group Submissions {#group-diary}

Two of your diary entries will be completed with _your_ ensemble (assignment happens in the week 4 workshop). For these diaries the process is a little different:

1. you upload a _single video_ as a group with the file name `GXX-week-N.mp4`, where `XX` is your group ID number (01-16) you will be able to find your group ID in the group list for your lab. For example if you are in group 04 and it's the week 5 diary, your file should be called `G04-week-5.mp4`.

2. You upload an individual reflection on the group diary creation experience in the same manner as other weeks. Make sure you refer to how collaboration assisted with your diary creation.

You can create your group video in any way you choose as long as it shows all the contributions of individual people (their screens) and we can hear each individual performer in the video. Here's some examples:

- Do a big Zoom/Teams call with each member and one person records it (make sure sound comes through)
- Get all the laptops on a table and record with a phone (hopefully on a tripod or stand)
- Record all individual screens in OBS and add the videos together in some video editing software (e.g., can Canva do this?)
- Connect all the laptops to an HDMI switcher and record the 4-up view (available in second half of the course and for final performance).

For inspiration, we have some videos of past group diaries [here (2022 - Pd)](https://youtu.be/PEiIa8RfKSY) and [here (2022 - Gibber)](https://youtu.be/0C-MTrt4Ahs). 

{:.warn-box}
The group diaries require you to organise with your group to find a time, place, and method of creating your group diary.
It's really important to show up and communicate with your group.
You are (collectively) responsible for making the group work, it's not acceptable to ignore or exclude a group member even if they seem to be the one not showing up. Please do everything you can to get everybody involved but it needs to be positive communication and not [harrassment](({% link 01-policies.md %}#code-of-conduct). 
If a group member ends up not participating despite your efforts, please let your tutors know.
Similarly if you feel excluded or uncomfortable in a group, please let your tutor or the course convenor know privately.

## Submission process {#weekly-videos-submission-process}

1. record your video (use [OBS Studio](https://obsproject.com)
2. upload your 60sec (or 180sec for group weeks) video through Teams (see above)
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

### How to add your reflection document & push it to GitLab

{% include video.html video="lecture-recordings/2021/lens-add-av-diary-video-and-push" %}

## Creative Tips

Here's some general tips for completing the diary videos and reflections.

### Video

1. small & focussed is ok---you don't have to build a huge thing every week

2. think deeply about the provocation: brainstorm 10 ideas, try out three of them,
   pick the best one

3. you don't have to record it all in one take---you can record several
   short parts and cut them together if you want (but this will take longer)

4. think about the layout of your patch (font size, object positions, comments,
   etc.) to make sure it's going to be interesting _viewing_ (as well as
   listening)

5. if you saw something interesting in a classmate's video the previous week,
   ask them (on Teams) how they did it (yes, collaboration is ok as long as you cite your sources!)

6. have a look at the ["screen recording software" section of the Tools page]({%
   link _resources/02-tools.md %}#screen-recording-software)

### Reflection

1. Briefly state _what_ you have done, but spend more time on _how_ you did it and _why_.

2. it's ok to mention the inspiration (either an abstract concept, or a specific
   thing you saw/listened to) for your work

3. discuss any particular challenges or tensions you felt between competing
   ideas/priorities (if there were any)

4. don't overthink it---maximum length is 200 words, but you should aim for at least 100 words for it to be a reasonable reflection.
