## Week 1 Slides

{% comment %}
Ok, let's go to [gibber.cc/playground](https://gibber.cc/playground) and try the same thing:

{:. style="font-size:.8em;"}

```
def = {
  name:'Example',
  type:'Ugen',
  constructor: function() {
    const g = Gibberish.genish
    const graph = g.mul(
      g.cycle( 220 ),
      0.25)
    return graph
  }
}
ExampleSynth = Make( def )
s = ExampleSynth()

s.connect()
s.disconnect()
```

## Why is this more complicated?

"Gibber" is actually the top-level interactive environment / web application.

There are layers below it (different JavaScript libraries) for managing synth definitions and signal processing.

- [Gibberish.js](http://www.charlie-roberts.com/gibberish/): synthesis definitions and scheduling (>)

- [Genish.js](http://www.charlie-roberts.com/genish/): signal processing definitions.

Most of the code on the previous slides was to punch through the layers to get to underlying `genish` ugens like `cycle`.

The important bit is: `g.mul(g.cycle( 220 ), 0.25)`
{% endcomment %}
