{
  center: false,
  controls: true,
  transition: 'fade',
  width: '100%',
  height: '100%',
  margin: 0.0,
  history: true,
  slideNumber: true,
  dependencies: [
    { src: '{% link reveal.js-plugins/chalkboard/chalkboard.js %}', async: true },
    { src: '{% link reveal.js/plugin/math/math.js %}' },
  ],
  math: {
    mathjax: 'https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.5/MathJax.js',
    config: 'TeX-AMS_HTML-full'  // See http://docs.mathjax.org/en/latest/config-files.html
  },
  keyboard: {
    // chalkboard keyboard shortcuts
    67: function() { RevealChalkboard.toggleNotesCanvas() }, // toggle notes canvas when 'c' is pressed
    66: function() { RevealChalkboard.toggleChalkboard() },	// toggle chalkboard when 'b' is pressed
    46: function() { RevealChalkboard.clear() }, // clear chalkboard when 'DEL' is pressed
    8: function() { RevealChalkboard.reset(true) },	// reset chalkboard data on current slide when 'BACKSPACE' is pressed
    68: function() { RevealChalkboard.download() },	// download recorded chalkboard drawing when 'd' is pressed
  }
}
