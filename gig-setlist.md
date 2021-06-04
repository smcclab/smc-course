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

{% include slides/title.html %}

## LENS '21 final gig setlist

<table class="r-fit">
{% for set in page.setlist %}
<tr><td><strong>{{ set.artist }}</strong> feat. {{ set.feat }}</td></tr>
{% endfor %}
<table>

