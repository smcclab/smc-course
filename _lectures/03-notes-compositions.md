---
title: Envelopes, Notes and Compositions
tagline: Abstractions from sound to music.
lecturer: Dr Charles Martin
image: assets/workshops/2013-balloon-charles-martin.jpg
image_alt: Photo by Charles Martin
---

{% include slides/title.html %}

## Shaping a note

Notes need a dynamic shape over time right?

![]({{site.baseurl}}/assets/digital-synthesis/envelope-sound.png){:style="width:95%;"}


## envelopes

combining `vline~` and `*~` turns the sound up and down to shape a note.

![]({{site.baseurl}}/assets/digital-synthesis/pd-envelope.png)


## vline envelope

![]({{site.baseurl}}/assets/digital-synthesis/pd-using-vline.png){:style="width:80%;"}


## Exercise:

Make an modulation or subtractive synth with an envelope generator.

Make sure you know how to use get **help** about an object by right-clicking (or
control-click).

You might want to try the `metro` object to generate a sequence of "bangs" to
keep triggering your envelope generator.
