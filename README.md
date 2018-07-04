# ANU CECS Course Website Template

This is an opinionated "course in a box" template for using the CECS-themed
[Jekyll](https://jekyllrb.com/docs/home/) template for your course website.

You don't have to use it, and even if you want to use it you can tweak it to
your heart's content. But it's here because sometimes it's nice to have the
batteries included (just ask Guido).

The rest of this README is structured as an FAQ.

## So what is Jekyll, exactly?

To quote the [Jekyll docs](https://jekyllrb.com/docs/home/):

> Jekyll is a simple, blog-aware, static site generator. It takes a template
> directory containing raw text files in various formats, runs it through a
> converter (like Markdown) and our Liquid renderer, and spits out a complete,
> ready-to-publish static website suitable for serving with your favorite web
> server. Jekyll also happens to be the engine behind GitHub Pages, which means
> you can use Jekyll to host your project’s page, blog, or website from GitHub’s
> servers for free.

## Why would I, a CECS academic, want to use this?

If you've ever struggled with Wattle and wanted to focus on writing good content
rather than futzing with the wysiwyg[^wysiwyg] Wattle/Moodle interface, using this
template gives you the ability to:

- write content as [markdown](http://commonmark.org/help/) (`.md`) files which
  are automatically transformed into nice-looking content which uses the ANU CS
  style sheet (so it looks nice and is consistent with the branding guidelines)

- keep your content under (`git`) version control, with all the record-keeping
  and collaboration superpowers that entails

- use the full power of HTML/CSS/js to create and style your content how you
  like (although this is not just for web gurus---it looks great out of the box,
  adding anything extra is purely optional)

- use sane defaults so you can **concentrate on writing good content**, but is
  *very* customisable if you want to explore

[^wysiwyg]: what you see is what you get

## How do I get set up?

There are a couple of things you need to (just once) at the start:

1. send an [email to the helpdesk](mailto:helpdesk@cecs.anu.edu.au) with the
   subject "New Jekyll Course website for COMPXXXX" (inserting your course code,
   obviously) so they can create a fork of this repo for you at
   <https://gitlab.cecs.anu.edu.au/courses/compXXXX>

2. clone the newly-created project to your local machine

3. set up your [ruby environment](https://www.ruby-lang.org/en/downloads/) (on
   Windows/Linux/macOS) and install the relevant gems (packages) by running
   `bundle install` at the command line in this directory

At this point, you can start to [write and
preview](#so-whats-the-workflow-for-developing-my-course-website) the site in a
web browser on your local machine.

To push the site "live" so that students (and everyone) can see it (e.g. at
<https://cs.anu.edu.au/courses/compXXXX/>), then there's one more step required:

4. talk to [Dave at the CECS helpdesk](mailto:helpdesk@cecs.anu.edu.au) to flick
   a couple of switches in the system to get you started with a live website

## So what's the workflow for developing my course website?

Once you've got everything [set up](#how-do-i-get-set-up), then the workflow is:

1. write your content (labs, assignments, upload files, etc) in
   [markdown](http://commonmark.org/help/) or
   [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML) files in this
   directory (inc. in subfolders)

2. build the site by running the `bundle exec jekyll serve --livereload` at the
   command line in this top-level directory---this also starts a local webserver
   so you can preview the site on your local machine[^serve]

3. open up the preview site in your web browser (the server address will be
   printed to the terminal where you've run the `bundle exec jekyll serve`
   command, probably something like `http://127.0.0.1:4000/`)

4. when you're happy with it, commit and `git push` your changes up to
   GitLab---a script will automatically update your site and the changes will be
   visible to everyone at `https://cs.anu.edu.au/courses/compXXXX` within about
   a minute

[^serve]: if you don't want to run the preview server, you can just `bundle exec jekyll build`

## What files in this repo will I *need* to touch?

- the `_config.yml` file in this directory
- the lectures in the `_lectures` subdirectory
- the labs in the `_labs` subdirectory
- the assignments in the `_deliverables` subdirectory
- the resources in the `_resources` subdirectory (or just delete that folder)
- the `01-policies.md`, `02-outline.md` and `03-getting-help.md` files in the
  top-level directory

You can touch anything/everything if you like, but the idea of this template is
that you don't have to. You can start with those files (writing good content for
your course) and mess with other stuff as necessary.

## What skills will I need to have a good time with this stuff?

- *very* basic command line ability (almost none---and you can just copy-paste
  the few required commands without understanding them if you like)
- the ability to write markdown files (in any text editor you like)
- basic `git` (ability to add, commit & push files)

## Ok then, what skills *won't* I need?

- advanced `git`
- javascript
- HTML
- CSS

If you've got any of those skills that's great---and you can use them---but
they're not necessary.

## So what am I supposed to do with the "template" content in e.g. `_labs/01-hello-world.md`?

There's some stuff in there (especially in `01-hello-world.md`) which shows you
how you can style/structure your content (headings, lists, images, etc.). The
idea is that you add your own files with your own course content and then delete
the template content (although you can always keep it around in a branch if you
want to refer to it).

## How can I get help?

For more information & help, visit the official documentation site at
<https://cs.anu.edu.au/pages/docs/gitlab-pages/>.

If you have questions, contact [Ben Swift](mailto:ben.swift@anu.edu.au) or
[David Guest](mailto:david.guest@anu.edu.au).

## Can I automatically import my existing Wattle site into this template?

No, sorry.

## What doesn't it do that Wattle does do?

This is just for creating and distributing the course content, it's not a
platform for submitting assignments or co-ordinating marks & feedback with
your tutors.

There are other ways to do that stuff (many folks are using GitLab for that
these days) or you could keep doing that through Wattle. But this Jekyll site by
default is just for displaying your content (it's a [static web
site](https://en.wikipedia.org/wiki/Static_web_page), after all).

## Can it do *x*?

Maybe---ask [Dave](mailto:david.guest@anu.edu.au) or
[Ben](mailto:ben.swift@anu.edu.au).

## Who's using this setup currently?

Quite a few courses in RSCS are now building their course websites this way (if
you're not on this list but you *are* using it too, then let Ben know so he can
add you!).

- [COMP1100/1130](https://cs.anu.edu.au/courses/comp1100/)
- [COMP1110/1140](https://cs.anu.edu.au/courses/comp1110/)
- [COMP1720](https://cs.anu.edu.au/courses/comp1720/)
- [COMP2100](https://cs.anu.edu.au/courses/comp2100/)
- [COMP2300](https://cs.anu.edu.au/courses/comp2300/)
- [COMP2420](https://cs.anu.edu.au/courses/comp2420/)
- TechLauncher
- Chris Browne's course in Engineering

Because different courses have different requirements for their websites, these
websites aren't all the same. It's still up to you as convenor to decide how to
structure your page.

However, if you have a look at any of those course websites and see something
you like, then I'm sure the convenor will be happy for you to use it on your
site as well---we're a pretty caring and sharing bunch in general.

## Can I programattically generate parts of one (or more) of my pages?

Yes, if you want to do this (e.g. populating a list by looping over data in an
array) then you might want to look at the docs for the [liquid
templating](https://shopify.github.io/liquid/basics/introduction/) language,
which [Jekyll uses](https://jekyllrb.com/docs/templates/) for this stuff. For
actually getting the data into the system, look at Jekyll [data
files](https://jekyllrb.com/docs/datafiles/).

Obviously you could also have some other tool generate the md source file
external to Jekyll, but then you don't get the nice auto-regeneration and
livereload stuff.

## Copy-pasting similar bits of content/markup sucks---can I define them once and use them anywhere?

Again, yes! [Jekyll includes](https://jekyllrb.com/docs/includes/) are the way
to handle this, and you can even pass arguments (for more
[DRY](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself)-y goodness).

## If I want to make CSS tweaks, where do I put them?

Anything you put in `_sass/custom.scss` will be applied to your site.

## Do I have to stick with this structure (lectures/labs/deliverables)?

Nope. You can see the configuration for those "default"
[collections](https://jekyllrb.com/docs/collections/) in the `_config.yml` file,
but you can add/remove/change them however you like. It's your website.

## I want e.g. my tutors to write some lab content, how can I give them access?

This is just a git repo (probably hosted at GitLab) so you can just give them
access to it there. If you wanna be super cautious, get them to make changes on
their own fork and then submit a merge request, or you can just give them push
access.

## Which markdown parser is this using?

By default this template uses
[Kramdown](https://kramdown.gettalong.org/syntax.html) (see the `markdown:
kramdown` key in `_config.yml`). So those docs are the ultimate reference if you
want to do specific things in your markdown files and you're wondering about the
right syntax.

## Where can I find more information?

The [Jekyll docs](https://jekyllrb.com/docs/home/) really are the best place to
start, including understanding how the `jekyll` tool takes your folder of md and
html files and turns them into a website (e.g. what the [snippets of yaml at the
top of each file](https://jekyllrb.com/docs/front-matter/) mean).

## Can I speed up the initial build step?

If you're having trouble with the `bundle exec jekyll serve` being slow (e.g. if
you've got lots of files in your website) then you can try the `--incremental`
option (which can help, but sometimes the cache can get out of whack and needs
to be blown away)
