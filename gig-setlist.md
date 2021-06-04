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

## LENS '21 final gig setlist

<table class="r-fit-text">
{% for set in page.setlist %}
<tr><td><strong>{{ set.artist }}</strong> feat. {{ set.feat }}</td></tr>
{% endfor %}
</table>

{% for set in page.setlist %}
{% unless forloop.last %}

<section class="center">

<div class="r-fit-text">
<p> <em>previous:</em> <strong>{{ page.setlist[forloop.index0].artist }}</strong> <em>feat.</em> {{ page.setlist[forloop.index0].feat }}</p>

<p>&nbsp;</p>

<p><em>up next:</em> <strong>{{ page.setlist[forloop.index].artist }}</strong> <em>feat.</em> {{ page.setlist[forloop.index].feat }} </p>
</div>

</section>

{% endunless %}
{% endfor %}

{% include slides/qrcode.html link="https://cs.anu.edu.au/courses/comp2710-lens/" showlink=true %}
