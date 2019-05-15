---
layout: post
title:  "Maestro Workflow Conductor (maestrowf)"
date:   2019-05-11
excerpt: "A Python command line tool and library for specifying, automating, and monitoring HPC software workflows."
project: true
tag: [python, simulations, hpc, simulation workflow, open source]
comments: false
---

<!-- Place this tag where you want the button to render. -->
<a class="github-button" href="https://github.com/LLNL/maestrowf" data-size="large" data-show-count="true" aria-label="Star LLNL/maestrowf on GitHub">Star</a>
<!-- Place this tag where you want the button to render. -->
<a class="github-button" href="https://github.com/LLNL/maestrowf/subscription" data-size="large" data-show-count="true" aria-label="Watch LLNL/maestrowf on GitHub">Watch</a>
<!-- Place this tag where you want the button to render. -->
<a class="github-button" href="https://github.com/LLNL/maestrowf/issues" data-size="large" data-show-count="true" aria-label="Issue LLNL/maestrowf on GitHub">Issue</a>

## Overview

Maestro is a Python library and command line tool for automating and monitoring software workflows that I authored at [LLNL](https://www.llnl.gov). The main concept centers around conducting "studies" using independent workflow steps that are chained together by user specified time-order dependency. A study is defined in a YAML file that Maestro denotes as a "study specification". A specification can be user written or programmatically generated. Maestro parses the a study specification, generating standard data structures for setting up, executing, and monitoring a study.

## Core Design Principles

When performing scientific software workflows, there are a few desirable properties that are essential to consider. Maestro focuses on the following:

- Repeatability. Consistently repeating a workflow is the first step to reproducing it.

- Extendibility. Workflows should be modular, allowing workflows to be extensible, testable, and robust.

- Documentation. Good documentation provides an opportunity for the user to step back and explain to themselves what they're doing.

- Shareability. A workflow should be easy given to other users with minimal coupling to any one user's environment.

## Citations
