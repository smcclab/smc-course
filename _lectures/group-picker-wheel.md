---
title: LENS'21 group picker
permalink: /group-picker-wheel/
---

## Group picker wheel

<script src='{{ "/assets/js/TweenMax.min.js" | relative_url }}' type="text/javascript"></script>
<script src='{{ "/assets/js/Winwheel.js" | relative_url }}' type="text/javascript"></script>
<script src='{{ "/assets/js/picker-wheels.js" | relative_url }}' type="text/javascript"></script>

<div id="picker-wheel-container" style="width:33.3333%; float:left;">
<div style="font-size:2em; line-height:0.8; text-align:center;">⧨</div>
<div id="picker-wheel"></div>
</div>

<script>
document.addEventListener("DOMContentLoaded", function(){

  let groupList = document.getElementById("group-list");

  function displaySpinResult(wheel, indicatedSegment) {
    targetSpans = document.getElementsByClassName(`${wheel.canvasId}-result`);
    for (let e of targetSpans) {
      e.textContent = indicatedSegment.text;
    }
  }

  let pickerWheel = makeWheel(
    [
      "Caleb",
      "George",
      "Chamith",
      "Max",
      "Barclay",
      "Kai",
      "Mike",
      "Josh",
      "Rhys",
      "Obi",
      "Yichen"
    ],
    "picker-wheel",
    Reveal.getConfig().width/6,
    (wheel, indicatedSegment) => {
      let nameItem = document.createElement('li');
      nameItem.innerHTML = indicatedSegment.text;
      groupList.appendChild(nameItem);
      wheel.deleteSegment(wheel.getIndicatedSegmentNumber());
    });
});

</script>

<ol id="group-list" style="font-size: 0.75rem; width:50%; float:right;"></ol>
