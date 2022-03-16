---
published: false
---

# Notes

This file contains a bunch of notes that I (Ben) took along the way in 2021, and
would be a good place to look if you're thinking of things to change when this
class is taught in the future.

- Might be worth making the workshop attendance requirements more explicit? Most
  students are fine, but had one student this year who missed 3 I think (in most
  cases letting me know, but still without med certs). Maybe you're allowed to
  miss one with no penalty? But then the question is where does the penalty come
  from?

- Next time, split the weekly AVD submissions and portfolio submission into
  separate "assessments" pages.

- Be more explicit about the late penalties for missing the AVD submission
  deadline (maybe push it back to as close to the class timeslot is realistic to
  avoid any "it's ok if you miss the deadline, as long as it's in 30mins before
  the class you'll be ok" grey areas).

- AVD submissions were excellent as usual, and as usual it's a bummer when the
  quality of the portfolio doesn't reflect the quality of the portfolio submissions. Idea
  for next year---make the portfolio submissions explicitly about reflection on
  learning, basically get them to grade their own AVD submissions in relation to
  the overall learning outcomes. Talk to Maya Haviland (CASS) or Katherine
  Daniell (SoCy) for more ideas on this.

- We pushed demo day back from week 8 to week 9, mostly at student request.
  Seemed to go ok---but need to think about whether to keep it at week 9 or go
  back to week 8.

- Mid-semester feedback from students: they'd prefer to see Extempore earlier,
  certainly before the break. Maybe interleave the two languages (Extempore/Pd)
  rather than the all-the-Pd-then-all-the-Extempore setup we have now.

- Make sure you book the end-of-semester gig (in a cool venue) as early as
  possible.

- I removed the lecture slides (revealify) from the website by:

  1. changing the top-level folder from `_lectures` to `lectures`
  2. removing the collection stuff from `_config.yml`
  3. setting `published: false` in `lectures/index.md`
  4. fixing al the broken links caused by steps 1--3

  Note: this wasn't because the lectures were bad, it was mainly because we
  didn't use them this year and the only (easy) way to remove the _Lectures_ tab
  from the navbar was to remove the collection entirely (and students were
  getting a bit confused). In addition, some of the lecture content was
  incorporated in to the workshop pages anyway. Still, if we want to re-enable
  those lecture slides in the future, we just need to reverse the steps above.
