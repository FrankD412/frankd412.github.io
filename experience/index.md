---
layout: page
title: Experience
tags: [resume, experience, about]
date: 2019-05-11
comments: false
---

I currently work at [Lawrence Livermore National Laboratory](https://www.llnl.gov){:target="_blank"} as a Computer Scientist and workflow expert. My work is focused in the topic areas of HPC simulation, simulation management, software engineering, and software workflow automation. My primary roles are:

+ **Project Lead and Author of the Maestro Workflow Conductor**: Maestro is a Python command line tool and library for specifying, automating, and monitoring software workflows. Users create YAML specifications called "study descriptions" that define a software workflows, which are then concretely expanded based on static variables and parameters. See our README about how to [build a basic study](https://github.com/LLNL/maestrowf#getting-started-is-quick-and-easy){:target="_blank"} or our [sample studies](https://github.com/LLNL/maestrowf/tree/develop/samples){:target="_blank"}.
    * [Maestro GitHub page](https://github.com/LLNL/maestrowf){:target="_blank"} <br/>
    <!-- Place this tag where you want the button to render. -->
<a class="github-button" href="https://github.com/llnl/maestrowf/archive/master.zip" data-icon="octicon-cloud-download" aria-label="Download llnl/maestrowf on GitHub">Download</a> <!-- Place this tag where you want the button to render. -->
<a class="github-button" href="https://github.com/llnl/maestrowf" data-icon="octicon-star" data-show-count="true" aria-label="Star llnl/maestrowf on GitHub">Star</a> <!-- Place this tag where you want the button to render. -->
<a class="github-button" href="https://github.com/llnl/maestrowf/subscription" data-icon="octicon-eye" data-show-count="true" aria-label="Watch llnl/maestrowf on GitHub">Watch</a>
    * [Maestro on PyPi](https://pypi.org/project/maestrowf/){:target="_blank"}
    * [Maestro on ReadtheDocs](https://maestrowf.readthedocs.io/en/latest/){:target="_blank"}
    * We're part of the [RADIUSS](https://software.llnl.gov/radiuss/){:target="_blank"} effort at LLNL
<br/><br/>
+ **Workflow Expert and Researcher** for the RAS protein pilot project (one of three pilots of [JDACS4C](https://datascience.cancer.gov/collaborations/joint-design-advanced-computing){:target="_blank"}). Our mission aims at scaling molecular dynamics to long enough timescales to better understand the RAS protein and its role in the development of cancer. Our team has successfully run large scale MD simulation campaigns on Sierra, the second fastest supercomputer on the [TOP500 list](https://www.top500.org/lists/2018/11/){:target="_blank"} (as of November 2018). As part of an interdisciplinary team of scientists, my responsibilities include managing the project's code repositories, providing guidance on workflow/code design, and implementing new features.

**[FULL RESUME]({{ site.url }}/assets/data/DiNataleF_Resume.pdf){:target="_blank"}**

---

## Interests and Past Experience

My technical interests include (but are not limited to) Software Engineering, Software Design, Computer Architecture, simulation, simulation and software automation, Object-Oriented Design, Python, and HPC. I initially started with an interest in Computer Architecture, which led me to become a Performance Architect at Intel Corporation. My experiences at Intel maintaining simulators, running large numbers of simulations, and using the results to make architectural assessments allowed me to appreciate the software systems required to perform computational studies. Through these experiences I broadened my interests to simulation software workflows, co-designing and implementing Study Launcher, a workflow launcher that utilized an XML specification. In May 2016, I joined [Lawrence Livermore National Laboratory](https://www.llnl.gov){:target="_blank"} as a Computer Scientist and workflow expert to continue to learn more about computational workflow and automation.

---
## Skills and Proficiencies
<h3><strong>Excellent</strong> <a style="font-size:80%">(Go-to tools)</a>
    <span><small>★ ★ ★</small></span>
</h3>Python, Git, GitHub, Bash, LaTeX, SLURM, LSF, Unix

<h3><strong>Proficient</strong> <a style="font-size:80%">(Competent and comfortable)</a>
    <span><small>★ ★ ☆</small></span>
</h3>
<ul>
    <li>C++, C, C#, CSS, HTML, Linux</li>
</ul>
<h3><strong>Basic</strong> <a style="font-size:80%">(Essential foundation and basics)</a>
    <span><small>★ ☆ ☆</small></span>
</h3>
<ul>
    <li>Ruby, Java, SQL</li>
</ul>
<h3><strong>Domain Knowledge</strong> <a style="font-size:80%">(Fundamental Concepts)</a></h3>
<ul>
    <li>Software Engineering, Python, Agile/Scrum Development Methods, Software System Design, Object Oriented Design, Algorithms, Simulation, Workflow automation and tools, HPC, Advanced Computer Architecture</li>
</ul>
---

## Awards and Recognition

Stub

---

## Publications

{% bibliography --file mypapers --sort_by year,month,day --order descending %}

**For the most up-to-date publications, please see my [Google Scholar profile](https://scholar.google.com/citations?user={{ site.google.scholar }}&hl=en&oi=sra{{ site.google.scholar }}){:target="_blank"}**

---

## Invited Talks

{% bibliography --file presentations --sort_by year,month,day --order descending %}

---

## Posters

{% bibliography --file posters --sort_by year,month,day --order descending %}