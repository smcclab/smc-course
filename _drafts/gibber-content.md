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

## Gibber Resources

### Gibber {#gibber}

[Gibber](https://gibber.cc) is a live-coding in-browser music programming
system created with JavaScript. Unlike Pd, Gibber works entirely within a web
browser so you don't have to download or install anything to get started, just
head to <https://gibber.cc>.

Actually, you _might_ find that Gibber works best with Chrome/Chromium so you
might want to install one of those browsers for your Gibber experiments.

Gibber actually involves quite a few moving parts and is under active
development by the author, [Charlie Roberts](https://charlie-roberts.com) and
the live coding community. During the course you may hear about components of
gibber like `genish`, `gibberish` and `gibber.audio.lib` which you can read
about
[here](https://gist.github.com/charlieroberts/67a0eb9db0b346c159f33f72d6a228a1).

#### Example Code

- See the examples within the Gibber [playground interface](https://gibber.cc/playground/index.html)

#### References

- Gibber's [resources page](https://gibber.cc/resources.html) 
- [A brief description of genish, gibberish, and gibber.audio.lib](https://gist.github.com/charlieroberts/67a0eb9db0b346c159f33f72d6a228a1).

### SuperCollider {#supercollider}

[SuperCollider](https://supercollider.github.io/) is a text-based computer music environment often used for live coding.

It includes its own IDE (text editor) and help system, but you can also drive it from your editor of choice if you wish.

We will be broadly following Nick Collins' [SuperCollider Tutorial](https://composerprogrammer.com/teaching/supercollider/sctutorial/tutorial.html) throughout the semester.

### Extempore {#extempore}

{:.info-box}

Extempore was used in SMC in 2020 and 2021, but not in 2022, this section is for your information only :-)

[Extempore](https://extemporelang.github.io) is a text-based computer music
environment (developed by Andrew Sorensen and [Ben Swift](https://benswift.me) at ANU!).

#### Books

If you're new to Extempore, start with the
[Quickstart](https://extemporelang.github.io/docs/overview/quickstart/) page in
Extempore's online documentation, which includes instructions on how to install
it on your laptop. Like Pd, Extempore is free & works on Windows, macOS & Linux.

#### Example code

As far as example code goes, Extempore comes with a bunch of example code (it's
in the `examples/` folder). One cool place to start is the
`examples/sharedsystem` folder. You can also read around the Extempore
documentation website, (for example to learn to make music with the
[Extempore pattern language](https://extemporelang.github.io/docs/guides/pattern-language/)).

## Gibber Resources:

Gibber is a complicated system with a number of layers that you can experiment with. The high-level interface for normal computer music making is "gibber" which is an interactive web-based live coding system.

- Main [gibber.cc playground](https://gibber.cc)

Below Gibber, there are some libraries that you can experiment with separately:

- [genish.js playground](http://www.charlie-roberts.com/genish/playground/index.html) (for DSP experiments)

- [genish.js tutorial](http://www.charlie-roberts.com/genish/tutorial/index.html)

- [Gibberish website](http://charlie-roberts.com/gibberish/)