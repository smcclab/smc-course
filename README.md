# ANU CS course-in-a-box

This repo contains everything you need to build and host an ANU CS
course website. It'll look (reasonably) nice, and it can be built and
hosted automatically through GitLab. So all you'll need to do is
create/update the content, push it up to GitLab, and it'll be up and
running at (http://cs.anu.edu.au/courses/COMPXXXX)

There's an example up and running at
(https://gitlab.cecs.anu.edu.au/pages/courses/testing)

## Instructions

To turn this folder full of stuff into a class full of happy, smiling
faces at the end of a successful course, follow these simple steps

### Fork/clone this repo

This is just a blank canvas---you'll want to create a fork where you
can actually add the content for your course (let's call it
"COMPXXXX"). If you want to host the finished product at
(http://cs.anu.edu.au/courses/COMPXXXX) then you probably want to put
your fork on the CECS GitLab instance

- in the **courses** group
- in a project called **COMPXXXX** (replace with your course code)

### Modify the config file

You'll need to change a couple of things in the `_config.yml`
file---just have a look in the **course info** section near the top of
the file.

### Write the website content

The material for the website starts out
as [markdown](http://whatismarkdown.com/) files in this folder (or in
subfolders). You can create and edit them with whichever text editor
you feel most comfortable with.

For example, if you want to put stuff on the homepage, then you can
add it to `index.md`. If you want to add labs, lectures or
assessments, then create new markdown (i.e. with a `.md` extension)
files in `_labs/`, `_lectures/` or `_assessments/` respectively. The
`XX-name.md` filename scheme (where `XX` is a 2-digit number) is just
to set the order in which the content will appear. Each of those
folders already has some starter content in it---have a look in each
of those folders and start adding your own.

By default, the course-in-a-box website has has 4 content
"categories": lectures, labs, assessments and help (stuff which is
useful, but outside the course material). But you can add/remove
categories---this a platform for you to build on!

### Build the website

[Jekyll](http://jekyllrb.com/) is a program which takes as input bunch
of files, and produces a bunch more files (e.g. html, js and css)
which you can chuck on a webserver and **bam!**---you've got a
website. So, after you've editing the `.md` files in the previous
step, you want to generate the actual website files so you can put
them up on the web. This will happen automatically when you push to
the CECS GitLab `courses/COMPXXXX` project.

However, you'll often want to have a look at it before it goes
live---`jekyll` includes a local webserver so you can do just that.

1. [install Jekyll](http://jekyllrb.com/docs/installation/) (which is
   a ruby gem) with `gem install jekyll:3.2.1 jekyll-last-modified-at`
   (you only have to do this once)

2. [use jekyll](http://jekyllrb.com/docs/usage/) to run a local test
   webserver with `jekyll serve`, then go to the `localhost` website
   that it'll tell you in the terminal (do this anytime you want to
   test your changes)

3. when you're happy with it, commit the changes locally (using `git`)
   and push them up to the `courses/COMPXXXX` project on
   (https://gitlab.cecs.anu.edu.au/)

## Technical details

There are a couple more technical things you'll have to do at the
start. Here are the instructions, or you can ask CECS helpdesk
(or [Ben](mailto:ben.swift@anu.edu.au)) for help.

### GitLab pages auto-builds (CI)

To have your website automatically built and hosted at
(http://cs.anu.edu.au/courses/COMPXXXX) by the GitLab continuous
integration (CI) server:

1. add a **webhook** to your `courses/COMPXXXX` project, triggered by
   **builds** and pointing to https://gitlab.cecs.anu.edu.au/pages/
2. add the **Pages** user as a reporter for the project
3. Contact CECS IT Support (Teaching and Learning) to have project added to the gitlab runner.

After that, push a change to your project---it should be built
automatically and visible at https://gitlab.cecs.anu.edu.au/pages/courses/COMPXXXX

### Authentication

You can require authentication for any part of the site by using the
phrase `campus_only` *anywhere in the url*, e.g.

- for posts, put `campus_only` in the categories
- for pages, add it to the permalink
