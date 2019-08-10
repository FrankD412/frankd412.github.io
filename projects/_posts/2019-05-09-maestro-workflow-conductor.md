---
layout: post
title:  "Maestro Workflow Conductor (maestrowf)"
date:   2019-05-11
excerpt: "A Python command line tool and library for specifying, automating, and monitoring HPC software workflows."
project: true
tag: [python, simulations, hpc, scientific computing, software workflow, open source]
comments: false
---

<!-- Place this tag where you want the button to render. -->
<a class="github-button" href="https://github.com/LLNL/maestrowf" data-size="large" data-show-count="true" aria-label="Star LLNL/maestrowf on GitHub">Star</a>
<!-- Place this tag where you want the button to render. -->
<a class="github-button" href="https://github.com/LLNL/maestrowf/subscription" data-size="large" data-show-count="true" aria-label="Watch LLNL/maestrowf on GitHub">Watch</a>
<!-- Place this tag where you want the button to render. -->
<a class="github-button" href="https://github.com/LLNL/maestrowf/issues" data-size="large" data-show-count="true" aria-label="Issue LLNL/maestrowf on GitHub">Issue</a>
<!-- Place this tag where you want the button to render. -->
<a class="github-button" href="https://github.com/LLNL/maestrowf/fork" data-size="large" data-show-count="true" aria-label="Fork LLNL/maestrowf on GitHub">Fork</a>

## Overview

### What is Maestro?
Maestro is a Python library and command line tool for automating and monitoring software workflows that I authored at [LLNL](https://software.llnl.gov/repo/#/LLNL/maestrowf). The main concept centers around conducting "studies" using independent workflow steps that are chained together by user specified execution-order dependency. A study is defined in a YAML file that Maestro denotes as a "study specification". A specification can be user written or programmatically generated. Maestro parses the a study specification, generating standard data structures for setting up, executing, and monitoring a study.

### Why did you create Maestro?
I created Maestro because of my experiences running simulation workflows and the general trend of ignoring automation. In my experience, 

### What does a study specification look like?
A basic single step "hello world" example looks as follows:

```yaml
description:
    name: hello_world
    description: A simple 'Hello World' study.
env:
    variables:
        OUTPUT_PATH: ./sample_output/hello_world
study:
    - name: hello_world
      description: Say hello to the world!
      run:
          cmd: |
            echo "Hello, World!" > hello_world.txt
```

## Core Design Principles

When performing scientific software workflows, there are a few desirable properties that are essential to consider. Maestro focuses on the following:

- Repeatability. Consistently repeating a workflow is the first step to reproducing it.
- Extendibility. Workflows should be modular, allowing workflows to be extensible, testable, and robust.
- Documentation. Good documentation provides an opportunity for the user to step back and explain to themselves what they're doing.
- Shareability. A workflow should be easy given to other users with minimal coupling to any one user's environment.

## Citations

{% bibliography --file maestro %}
