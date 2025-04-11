---
title: "Week 8: live coding"
tagline: Getting deeper into synthesis design
show_toc: true
image: assets/workshops/2022-live-coding-charles-martin.jpg
image_alt: Photo by Charles Martin
---

{:.warn-box}
**Solo Diary**: Write a piece with Strudel that has four algorithmic parts: drums, bass, lead, and freaky noises.

{:.warn-box}
This workshop uses the [Strudel](https://strudel.cc) live-coding language. 
You must have completed [week 7]({% link _workshops/07-algorithmic-composition-1.md %}) to attempt this workshop.

It’s been said that the minimum you need to make techno is [drums, bass, a lead synth, and freaky noises](https://www.youtube.com/watch?v=4jCCzpWBsFs&t=160s&ab_channel=mylarmelodies). This week's workshop is about knowing how to make those parts in Strudel and those making some [EDM](https://en.wikipedia.org/wiki/Electronic_dance_music) (or something like it).

While this course isn't specifically about creating techno, live-coding languages tend to help us create this kind of music and it's a good excuse to go deeper on the synthesis, sampling, and effects available in Strudel.





## Goals for this week

1. Revisit synthesis, sampling, and networking concepts in Strudel by completing the _Making Sound_ tutorials on the Strudel website: [samples](https://strudel.cc/learn/samples/), [synths](https://strudel.cc/learn/synths/), [audio effects](https://strudel.cc/learn/effects/), [MIDI & OSC](https://strudel.cc/learn/input-output/) 

2. Use what you have learned to craft sounds for different parts. You need to pay attention not just to the _type_ of synth, but the different parameters available, for each synth. E.g., if you use `fm` you need to sequence notes **and**parameters like `fmh`, `fmattack`, `fmdecay`, `fmenv`. You need to look at the [docs](https://strudel.cc/learn/synths/#fm) to figure this stuff out as the parameters are different per synth.

3. Load and play with recorded sounds in Strudel. You'll want to combine elements of the Samples and Audio Effects  tutorials to make sure you are performing with samples in a sophisticated way.

4. Start using Audio Effects and sequencing their parameters. Similarly to the synth and sample topics above, using effects allows you to individualise the output from the default sounds and you need to use sequencing and modulation to apply them in an interesting way.

5. For the **workshop jam** this week, you will need to use the collaborative live coding editor [flok](https://flok.cc/). Flok gives you very little interface, but you need to select strudel mode in the top left menu, and use the top right menu to change your user name and share the collaborative workspace.

## Resources

- Strudel's ["Making Sound"](https://strudel.cc/workshop/getting-started) tutorials

- You will want to explore the other tutorial, e.g., the [random modifiers](https://strudel.cc/learn/random-modifiers/) tutorial will help you to produce some more variety in your sequences.

- ZzFX is a generally useful synth [included in Strudel](https://strudel.cc/learn/synths/#zzfx), you might want to look at [ZzFX's docs](https://github.com/KilledByAPixel/ZzFX/) to help understand different sounds you can create with its parameters.

- Actually, just look through all the of the Strudel docs, at this stage of the course, you need to be able to identify what you need and find it.

- Flok's [GitHub repo and documentation](https://github.com/munshkr/flok)

## Creative Notes

You might have wondered by this stage what a laptop ensemble is supposed to actually be. It's probably a lot different from other musical ensembles you may have participated in. As background reading for this week, here's some resources by others wondering about what laptop ensembles are and could be. 

{:.info-box}
Reflecting on published research papers will help you to make sure that your work addresses **recent developments** which is a requirement for master students in this course!

- Shelly Knotts and Nick Collins. 2014. The Politics of Laptop Ensembles: A Survey of 160 Laptop Ensembles and their Organisational Structures. Proceedings of the International Conference on New Interfaces for Musical Expression, Goldsmiths, University of London, pp. 191–194. <http://doi.org/10.5281/zenodo.1178839>

- Sang Won Lee, Jason Freeman, and Andrew Collela. 2012. Real-Time Music Notation, Collaborative Improvisation, and Laptop Ensembles. Proceedings of the International Conference on New Interfaces for Musical Expression, University of Michigan. <http://doi.org/10.5281/zenodo.1178315>

- Palle Dahlstedt, Per Anders Nilsson, and Gino Robair. 2015. The Bucket System — A computer mediated signalling system for group improvisation. Proceedings of the International Conference on New Interfaces for Musical Expression, Louisiana State University, pp. 317–318. <http://doi.org/10.5281/zenodo.1179048>

- Muhammad Hafiz Wan Rosli, Karl Yerkes, Matthew Wright, et al. 2015. Ensemble Feedback Instruments. Proceedings of the International Conference on New Interfaces for Musical Expression, Louisiana State University, pp. 144–149. <http://doi.org/10.5281/zenodo.1179170>
