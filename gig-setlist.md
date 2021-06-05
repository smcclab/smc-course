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

<table class="r-stretch">
{% for set in page.setlist %}
<tr><td><strong>{{ set.artist }}</strong> feat. {{ set.feat }}</td></tr>
{% endfor %}
</table>

{% for set in page.setlist %}
{% unless forloop.last %}

<section data-background-color="black">

<style>
.upnext-box {
  font-size: 1.4em;
  position: fixed;
  bottom: 10vh;
}
.upnext-box p {
  background-color: #ffffffaa;
  display: table;
  padding: 0.2em 0.4em;
}
</style>

<video class="r-stretch" data-autoplay controls src="{{site.baseurl}}/assets/resources/lens-2020.mp4"></video>

<div class="upnext-box">
<p> <em>previous:</em>&nbsp;<strong>{{ page.setlist[forloop.index0].artist }}</strong>&nbsp;<em>feat.</em>&nbsp;{{ page.setlist[forloop.index0].feat }}</p>

<p><em>up next:</em>&nbsp;<strong>{{ page.setlist[forloop.index].artist }}</strong>&nbsp;<em>feat.</em>&nbsp;{{ page.setlist[forloop.index].feat }} </p>
</div>

</section>

{% endunless %}
{% endfor %}

<!-- TODO put smoke gig video with LENS link -->
