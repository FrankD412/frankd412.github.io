---
layout: page
title: About
tags: [about, experience, philosophy, interests, contact]
date: 2016-02-04
comments: false
---

## Biography

Francesco Di Natale is a Computer Scientist in the Applications, Simulations, and Quality Division in Lawrence Livermore National Laboratory’s Computing Directorate. His primary research interests include software workflow automation, applying software engineering to HPC, and reproducible simulation science. As a result of his research efforts, Francesco is the author and lead designer for the Maestro Workflow Conductor – a Python tool and library that allows users to specify parameterized multistep workflows and automates its execution. Prior to joining LLNL, he worked for Intel Corporation where he worked as a Performance Architect using simulation to study future processor architectures. Francesco holds dual B.S degrees in both Computer Science and Computer Engineering from the University of South Florida, and an M.S. in Computer Science from the University of Colorado at Boulder.

----

## Personal Statement

I want to make HPC and Cloud Computing accessible and easy to use.

I'm a Software Engineer and Architect/Designer by education with practical experience from both the areas of Computer Architecture and HPC. Through the use of simulation during my various experiences in graduate school and industry, I've come to appreciate the complexities of developing generalized workflow automation in the computational sciences. My experiences have instilled in me a deep passion for making high performance resources more readily useful and accessible to computational scientists, while also striving to make computational science more reproducible and documentable. These goals have lead me to create the [Maestro Workflow Conductor](https://github.com/LLNL/maestrowf), a lightweight tool for specifying and automating multi-step workflows on HPC resources, which has been used on many of the world's fastest supercomputers (Summit, Sierra, Lassen, and others). I plan to continue to develop the philosophies, concepts, and software needed to provide computational scientists the tools and know-how they need to better design, develop, and communicate computational workflow while also continuing to leverage opportunities to make these efforts easier to automate.

It is my firm belief that my goals are achievable by prioritizing sound Software Engineering and Design fundamentals. I love to build tools that users not only trust, but that allow them to more productively focus on their own work towards critical scientific progress; however, simply delivering a tool is not enough. Tools that need to outlive singular projects require iterative design, strongly componentized modules, and a vision for the future. I thrive in environments where my design expertise is allowed to meet my imagination, allowing me to creatively change the way people work and solve their every day hurdles.

---
## Interests, Passions, and Hobbies

My hobbies vary quite a bit -- I'm currently working on learning to knit, but my other hobbies include (and probably are not limited to):

* Building and painting [Gunpla](https://en.wikipedia.org/wiki/Gundam_model)
* Cooking (Currently working on Sourdough starters)
* 3D Printing
* Gaming (currently I mainly play the Nintendo Switch and Kerbal Space Program)
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

As a dog dad, I have to take the opportunity to show off my little one as much as possible.

{% capture images %}
    {{ site.url }}/assets/img/rey/photo1.jpg
    {{ site.url }}/assets/img/rey/photo2.jpg
    {{ site.url }}/assets/img/rey/photo4.jpg
{% endcapture %}
{% include gallery images=images cols=2 %}
