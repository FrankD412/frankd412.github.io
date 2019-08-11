---
layout: post
title:  "Maestro Workflow Conductor (maestrowf)"
date:   2019-05-11
excerpt: "A Python command line tool and library for specifying, automating, and monitoring HPC software workflows. *Orchestra your workflows with ease.*"
project: true
tag: [python, simulations, hpc, scientific computing, software workflow, open source]
comments: false
---

<p style="text-align: center;">
<!-- Place this tag where you want the button to render. -->
<a class="github-button" href="https://github.com/LLNL/maestrowf" data-size="large" data-show-count="true" aria-label="Star LLNL/maestrowf on GitHub">Star</a>
<!-- Place this tag where you want the button to render. -->
<a class="github-button" href="https://github.com/LLNL/maestrowf/subscription" data-size="large" data-show-count="true" aria-label="Watch LLNL/maestrowf on GitHub">Watch</a>
<!-- Place this tag where you want the button to render. -->
<a class="github-button" href="https://github.com/LLNL/maestrowf/issues" data-size="large" data-show-count="true" aria-label="Issue LLNL/maestrowf on GitHub">Issue</a>
<!-- Place this tag where you want the button to render. -->
<a class="github-button" href="https://github.com/LLNL/maestrowf/fork" data-size="large" data-show-count="true" aria-label="Fork LLNL/maestrowf on GitHub">Fork</a>
</p>

## Overview

### What is Maestro?
Maestro is a Python library and command line tool for automating and monitoring software workflows that I authored at [LLNL](https://software.llnl.gov/repo/#/LLNL/maestrowf). The main concept centers around conducting "studies" using independent workflow steps that are chained together by user specified execution-order dependency. A study is defined in a YAML file that Maestro denotes as a "study specification". A specification can be user written or programmatically generated. Maestro parses the a study specification, generating standard data structures for setting up, executing, and monitoring a study.

### Why did you create Maestro?
I created Maestro because of my experiences running simulation workflows and the general trend of ignoring automation. In my experience, automation and infrastructure are often viewed as efforts that are lesser priority to accomplishing critical path milestones. In response, I wanted to design a lightweight tool that could be used to quickly stand up automated software workflows but that also accomplished a few other important properties:

1. encourage users to think about workflows as standalone steps with intent and purpose.
2. encourage users to better document their workflows.
3. make user workflows easier to share and communicate.
4. make workflows easier to parameterize and manage.

### What features does Maestro have?
Maestro has a large set of features 

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

You can easily chain steps together by specifying dependencies. If you wanted to say "bye" after saying "hello":
```yaml
description:
    name: hello_bye
    description: A simple 'Hello World' study.
env:
    variables:
        OUTPUT_PATH: ./sample_output/hello_world
    labels:
        OUT_FORMAT: $(GREETING)_$(NAME).txt
study:
    - name: hello_world
      description: Say hello to someone!
      run:
          cmd: |
            echo "Hello, World!" > hello_world.txt
    - name: bye_world
      description: Say bye to someone!
      run:
          cmd: |
            echo "Bye, World!" > bye_world.txt
          depends: [hello_world]
```

## Core Design Principles

When performing scientific software workflows, there are a few desirable properties that are essential to consider. Maestro focuses on the following:

- **Repeatability**. Consistently repeating a workflow is the first step to reproducing it.
- **Extendibility**. Workflows should be modular, allowing workflows to be extensible, testable, and robust.
- **Documentation**. Good documentation provides an opportunity for the user to step back and explain to themselves what they're doing.
- **Shareability**. A workflow should be easy given to other users with minimal coupling to any one user's environment.

## Citations

{% bibliography --file maestro %}
