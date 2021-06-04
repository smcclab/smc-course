---
title: LENS '21 final gig
permalink: /gig-setlist/
layout: reveal
hidden: true
setlist:
  - artist: Chamith
    feat: Josh
  - artist: Caleb
    feat: Yichen/George/Mike/Obi
  - artist: Max
    feat: Cham
  - artist: Josh
    feat: Max
  - artist: Kai
    feat: Rhys/Mike
  - artist: George
    feat: Yichen/Caleb
  - artist: Mike
    feat: Kai
  - artist: Rhys
    feat: Kai
  - artist: Obi
    feat: Rhys/Mike
  - artist: Yichen
    feat: George/Caleb
---

{% include slides/qrcode.html link="https://cs.anu.edu.au/courses/comp2710-lens/" showlink=true %}

## LENS '21 setlist

<table class="r-fit-text">
{% for set in page.setlist %}
<tr><td><strong>{{ set.artist }}</strong> feat. {{ set.feat }}</td></tr>
{% endfor %}
</table>

{% for set in page.setlist %}
{% unless forloop.last %}

<section class="center" data-background-image="{{site.baseurl}}/assets/lens2021-final-gig-poster.jpg" data-background-size="contain" data-background-color="#d2d9f5" style="font-size: 1.4em;">

<p style="margin-bottom: 1em;"> <em>previous:</em>&nbsp;<strong>{{ page.setlist[forloop.index0].artist }}</strong>&nbsp;<em>feat.</em>&nbsp;{{ page.setlist[forloop.index0].feat }}</p>

<p><em>up next:</em>&nbsp;<strong>{{ page.setlist[forloop.index].artist }}</strong>&nbsp;<em>feat.</em>&nbsp;{{ page.setlist[forloop.index].feat }} </p>

</section>

{% endunless %}
{% endfor %}

{% include slides/qrcode.html link="https://cs.anu.edu.au/courses/comp2710-lens/" showlink=true %}
