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
    feat: Rhys
  - artist: George
    feat: Yichen/Caleb
  - artist: Mike
    feat: Kai
  - artist: Rhys
    feat: Kai
  - artist: Obi
    feat: Rhys/Josh
  - artist: Yichen
    feat: George/Caleb
---

<section data-background-color="black">
<video class="r-stretch" data-autoplay controls src="{{site.baseurl}}/assets/resources/smoke.mp4"></video>
</section>

## LENS '21 setlist

<table class="r-stretch">
{% for set in page.setlist %}
<tr><td><strong>{{ set.artist }}</strong> feat. {{ set.feat }}</td></tr>
{% endfor %}
</table>

<style>
.upnext-box {
  position: fixed;
  bottom: 10vh;
}
.upnext-box {
  font-size: 2em;
}
.upnext-box .desc {
  font-style: italic;
}
.upnext-box .artist {
  font-weight: 900;
  color: white;
  background-color: #222;
  padding: 0.2em;
  border-radius: 0.1em;
}
.upnext-box {
  background-color: #ffffffaa;
  padding: 0.2em 0.4em;
  line-height: 2;
}
</style>

{% for set in page.setlist %}
{% unless forloop.last %}

<section data-background-color="black">

<video class="r-stretch" data-autoplay controls src="{{site.baseurl}}/assets/resources/lens-2020.mp4"></video>

<p class="upnext-box">
<span class="desc">next:</span> <span class="artist">{{page.setlist[forloop.index].artist}}</span><br>
<span class="feat">feat.&nbsp;{{ page.setlist[forloop.index].feat }}</span>
</p>

</section>

{% endunless %}
{% endfor %}

{% include slides/impact.html %}

thanks.

{% include slides/qrcode.html link="https://comp.anu.edu.au/courses/comp2710-lens/" showlink=true %}
