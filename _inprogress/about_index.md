---
layout: page
title: About
tags: [about, philosophy, interests, contact]
date: 2016-02-04
comments: false
---

## Biography

Francesco Di Natale is a Computer Scientist in the Applications, Simulations, and Quality Division in Lawrence Livermore National Laboratory’s Computing Directorate. His primary research interests include software workflow automation, applying software engineering to HPC, and reproducible simulation science. As a result of his research efforts, Francesco is the author and lead designer for the Maestro Workflow Conductor – a Python tool and library that allows users to specify parameterized multistep workflows and automates its execution. Prior to joining LLNL, he worked for Intel Corporation where he worked as a Performance Architect using simulation to study future processor architectures. Francesco holds dual B.S degrees in both Computer Science and Computer Engineering from the University of South Florida, and an M.S. in Computer Science from the University of Colorado at Boulder.

----

## About me

If I had to describe myself in the broadest of terms, it'd be a nerd, Software Engineer, and science enthusiast. In more specific terms, I am:

* A Software Engineer, Architect, and Designer who is passionate about enabling others
* Dog dad to an adorable Dachshund-mix named Rey
* A Millennial with a strong sense of idealism and optimism
* A lifelong learner and teacher
* Die-hard Star Wars fan

I'm a firm believer that vision and ideals should come before implementation, for one has already compromised quality by sacrificing direction. Even further, while each experience is different, there is something to be said for maintaining your own core principles -- after all, a fresh perspective and a strong sense of self are invaluable tools when faced with new experiences. Some other core philosophies of mine are:

* Stick to your ideals -- refine and hone them, but never abandon them. People, organizations, and culture will challenge your ideals, but it doesn't mean they're right.
* Do whatever you can to find your own personal joy.
* Don't be afraid to let your inner nerd shine.
* Be inclusive. The best solutions, experiences, and insights come from a variety of perspectives.
* Don't fault someone for not knowing something; and if they're open to it, teach them.
* It's easy to pretend you know everything. It's much harder to admit you don't.
* A solution is usually bad if no one wants to use it. Or put more simply: you may as well not provide the solution at all if it's not one that the end user wants to use.

And finally, above all else -- always seek to do better than you did yesterday. Each day is a learning experience, and the lessons of today are the foundations of a better tomorrow and even greater next week, month, and year.

---
## Interests, Passions, and Hobbies

My hobbies vary quite a bit -- I'm currently working on learning to knit, but my other hobbies include (and probably are not limited to):

* Building and painting [Gunpla](https://en.wikipedia.org/wiki/Gundam_model)
* Cooking
* 3D Printing
* Gaming (currently I mainly play the Nintendo Switch)
* Learning about code (trying to become familiar with the n-body problem)
* Anime

---
## Contact me

If you'd like to reach me, follow me, or game with me -- try one of the following. Sadly, I don't post much right now but I hope to soon.

<div class="row">
{% capture includeGuts %}
{% include contact-links.html %}
{% endcapture %}
{{ includeGuts | replace: '    ', ''}}
</div>

---
## Photos of Rey

As a dog dad, I have to take the opportunity to show off my little one as much as possible. Sorry, not sorry!

{% capture images %}
    {{ site.url }}/assets/img/rey/photo1.jpg
    {{ site.url }}/assets/img/rey/photo2.jpg
    {{ site.url }}/assets/img/rey/photo4.jpg
{% endcapture %}
{% include gallery images=images cols=2 %}
