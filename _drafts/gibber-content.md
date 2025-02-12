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

## Sampling in Genish

```
data('./resources/audiofiles/amen.wav').then( soundData => {
  let sliceLength = soundData.dim / 10
  let startPoint = 6 * sliceLength
  let speed = 0.8
  let sliceCounter = counter( speed, 0, sliceLength )
  let pos = add(sliceCounter, startPoint)
  let bufferOut = peek(soundData, pos, {mode:'samples'}) 
  play(bufferOut)
})
```

Try this code at <http://www.charlie-roberts.com/genish/playground/>

{% comment %}
```
data('./resources/audiofiles/amen.wav').then( soundData => {
  sliceLength = soundData.dim / 10
  startPoint = 6 * sliceLength
  speed = 0.8
  sliceCounter = counter( speed, 0, sliceLength )
  pos = add(sliceCounter, startPoint)
  bufferOut = peek(soundData, pos, {mode:'samples'}) 
  play(bufferOut)
})
```

// dirt/juno/09_juno_pad_c_minor_filter.wav

def = {
  name:'Example',
  type:'Ugen',
  constructor: function() {
   const g = Gibberish.genish
   g.data('openhat.wav').then( soundData => {
      let sliceLength = soundData.dim / 10
      let startPoint = 6 * sliceLength
      let speed = 0.8
      let sliceCounter = g.counter( speed, 0, sliceLength )
      let pos = g.add(sliceCounter, startPoint)
      let graph = g.peek(soundData, pos, {mode:'samples'})       
      return graph
   })
  }
}
ExampleSynth = Make( def )
s = ExampleSynth()

s.connect()
s.disconnect()
{% endcomment %}


## Sampling in Gibber

```
// create Sampler and load sound
s = Sampler('dirt/juno/09_juno_pad_c_minor_filter.wav')
s.start = 0.1 // set sample start position
s.end = 0.7 // set sample end position
s.note(0.3) // set rate and play note
```

Try this one at <https://gibber.cc/playground/>

## Granular Synthesis in Gibber

```
s = Sampler('breaks.120bpm/188553__mika55__120bpm-drum-loop.wav')
s.start = gen(0.5 + cycle(0.1) * 0.3)
s.end = gen(0.52 + cycle(0.2) * 0.3)
s.rate = gen( 0.5+ cycle(0.2) * 0.75)
s.trigger.seq( 1, 1/32 )
```

Try this one at <https://gibber.cc/playground/>