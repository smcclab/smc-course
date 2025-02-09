---
title: Computer music diary
tagline: Develop your skills and discuss in class.
image: assets/photos/samer-khodeir-He3TV66yUEI-unsplash.jpg
image_alt: Photo by Samer Khodeir on Unsplash
permalink: /assessments/diary/
show_toc: true
template_repo: https://gitlab.cecs.anu.edu.au/laptop-ensemble/2023/SMC-2023-submissions
hidden: true
---

## Outline

- **Due date:** 09:00 Monday in weeks 2--6, 8--10 (09:00 Tuesday if Monday is a Public Holiday)
- **Mark weighting:** 0% but required for portfolio
- **Submission:** submit your videos & portfolio submissions according to the
  instructions below
- **Policies:** late submissions not accepted without an extension.
- **GitLab Template Repo:** [link]({{ page.template_repo }})

## Description

Your computer music diary is where you will learn and try out core sound and music computing concepts.

Each week **before your workshop** you will read through the workshop material, create a short piece of computer music and write a short reflection.

The due date is set to 09:00 on the morning of your workshop. In your workshop session we will watch the videos in together together to discuss the ideas you have explored.

You can find the specific pre-workshop instructions on each workshop page under the heading "Solo Diary" or "Group Diary".

The rest of this page is dedicated to the technical specification for your computer music diary submissions. Make sure you read this carefully and get set up in GitLab in week 1.

{:.warn-box}
Your computer music diary is the _main task_ you need to complete each week as preparation for your workshop. You will need to have completed it to participate in the workshop activities properly. E.g., to be ready for the "week 3 workshop" you need to read the "week 3 workshop" page, complete the "week 3 diary" and submit it on time.

## Specification {#weekly-videos-spec}

Each week's submission must include:

- a 60 second video of a computer music piece exploring the week's topic, which
  - has the filename `uid-week-N.[mp4,mov,mkv]`, e.g., `u1234567-week-3.mp4`
  - has been uploaded to the correct week folder in your portfolio GitLab repository.
  - has sound (obviously)
  - uses one of the [computer music software environments we're covering in this course]({% link _resources/02-tools.md %}#software)

- a reflection on how your work responds to the weekly provocation which
  - is a [markdown](https://www.markdownguide.org) file
  - is a maximum of 200 words and minimum of 100 words 
  - has the filename `week-N-reflection.md`)
  - includes a screenshot or a code snippet of the "main" thing you worked on this week
  - has been uploaded to your fork of the SMC repo in the correct folder
  - has been pushed to GitLab

- other files (patches, source code, etc) used in your computer music piece
  - in a subfolder called `materials` in the correct folder
  - pushed to GitLab


{:.info-box}
Please follow the above instructions about file names carefully! Your video needs to have that exact name format to be picked up by our systems and played back in class.

### Example GitLab Upload {#teams}

Can upload your videos, reflections, and materials to GitLab directly through the website or from a local copy of your git repository.

If you want to upload and edit files directly from [the website](https://gitlab.cecs.anu.edu.au), here's an example with  step-by-step instructions.

![An example of how to upload a file into the GitLab interface]({% link assets/gitlab-example-upload.png %})

1. record your video file.

2. change the name of your recorded file to `week-NN.[mkv,mp4,mov]`, e.g., `week-03.mkv` (be careful to get the filename exactly correct)

3. open _your fork_ of the correct gitlab repo, and click on the correct week folder, e.g., `week-03`.

4. click the "+" at the top

5. click "Upload file".

7. drag your video file in there to upload it.

8. verify that your video is uploaded correctly (check CI Jobs under Build/Pipelines)

Please follow these steps carefully as we need your video to be in the right place so that we can retrieve it for the workshop and marking.

{:.warn-box}
N.B.: Every week we will watch our diary videos together during the workshop, so make sure that it is something you're comfortable sharing. The point is not to be mean about early ideas/video but to show your improvement in understanding and growth over the semester.

### Example GitLab Structure {#example}

As an example, for week 2 your folder structure should look something like this:

```plaintext
├── week-02
│   ├── materials
│   │   ├── README.md
│   │   ├── my-great-pd-patch.pd
│   │   └── whatever-other-files.pd/.wav
│   ├── week-02.mkv
│   ├── week-02-reflection.md
```

This might seem complicated, but we've created (blank) template files for you in
the GitLab repo---you just need to modify them.

### Extra Notes for Group Submissions {#group-diary}

Two of your diary entries will be completed with _your_ ensemble (assignment happens in the week 4 workshop). For these diaries the process is slightly different:

1. your group needs to create _a single video_ (e.g., `week-05.mkv`). The group video must show all group members working together.

2. each member of the group uploads the video to their individual gitlab repository.

3. You upload an individual reflection on the group diary creation experience in the same manner as other weeks. Make sure you refer to how collaboration assisted with your diary creation.

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

## Creative Tips

Here's some general tips for completing the diary videos and reflections.

### Video

1. You really only need one small and focussed idea to make 1 minute of music.

2. Try more than one idea: brainstorm 10 ideas, try out three of them,
   pick the best one.

3. Think about the layout of your patch (font size, object positions, comments,
   etc.) to make sure it's going to be interesting _viewing_ (as well as
   listening).

4. If you saw something interesting in a classmate's video the previous week,
   ask them (on Teams) how they did it (yes, collaboration is ok as long as you cite your sources!)

5. Have a look at the ["screen recording software" section of the Tools page]({%
   link _resources/02-tools.md %}#screen-recording-software).

### Reflection

1. Briefly state _what_ you have done then spend more time on _how_ you did it and _why_.

2. Discuss your process for addressing the diary prompt and the resources you used to create your submission.

3. If it's a group week make sure you discuss how the collaboration influenced your work.

4. Was your work successful? What were the qualities that did/didn't work, and how did you know?

5. Don't forget to use proper citation.