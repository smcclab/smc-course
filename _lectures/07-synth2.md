---
title: Synthesis 2
tagline: Getting deeper into sutractive and modulation synthesis
lecturer: Dr Charles Martin
image: assets/workshops/2013-rpi-charles-martin.jpg
image_alt: Photo by Charles Martin
---

{% include slides/title.html %}


# Subtractive Synthesis

## Subtractive Synthesis

Let's take a complex sound and **remove** some content.

![]({{site.baseurl}}/assets/digital-synthesis/pd-filterfm.png)

## Filters and EQ

Filters "remove" parts of a sound that correspond to certain frequencies.

`lop~`: low-pass filter, `hip~`: high-pass filter, `bp~`: band-pass filter.

![]({{site.baseurl}}/assets/digital-synthesis/pd-filter.png)

## Shaping a sound with filters

![]({{site.baseurl}}/assets/digital-synthesis/pd-subtractive-chime.png){:style="width:60%;
float:right;"}

1. Start with `noise~`
2. Add filters to remove lots of sound
3. Profit!
