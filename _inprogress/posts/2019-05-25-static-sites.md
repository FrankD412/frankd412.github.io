---
layout: post
title:  "How to Setup Statically Built GitHub Pages"
date:   2019-05-25
excerpt: "After struggling with trying to figure out static builds with various guides, I found out just how simple it was to release a staticly built jekyll site. Here's a how to on how to do it with your own personal github.io webpage."
tag:
- web dev
- how-to
- technical
- jekyll
- blog
comments: false
---

So, this how-to is mostly just an impromptu post so that it's documented for anyone else struggling to get a statically built Jekyll webpage running on their own person github.io site. My woes all started when trying to get the `jekyll-scholar` gem working on my personal webpage (this very one that you're on in fact). In this post, I'll take you through some of the basic things that I have set up having gone down this rabbit hole and investigated a few dead ends with a moderate amount of Google searching.

As it turns out, there is actually quite a set of gems that GitHub doesn't trust which makes it harder to do anything fancy if it requires an install they don't like. In my debugging efforts I was spammed with emails as I kept pushing commits trying to fix the error. I swear that it's come across my inbox enough that it'll give me nightmares for a while. For those curious, the error in question:

```
The tag `bibliography` on line 26 in `projects/_posts/2019-05-09-maestro-workflow-conductor.md` is not a recognized Liquid tag.
```
<br/>

Set up local building and deploying
------
Setting up local deployment is going to be the first step to getting this all to work, but it's also beneficial because it means you can test your website without having to constantly commit to your repository and wait for GitHub to build your webpage for you. Taking the commits out of the loop really speeds up your ability to try new things, catch errors ahead of time, and makes the whole website development thing less clumsy. And let's be honest: it saves you the embarrassment of having deployed a broken website, because once that's on the internet it's there forever.


<aside class="notice">
Note: I will caveat this section with the fact that I've only ever gotten this to work in a Unix environment. I develop on a MacBook, but see no reason why these steps shouldn't work on a Linux VM. That said, I did attempt to get a Docker container for building and local testing running and found it miserably difficult to do so, which means this guide won't work on Windows. I'll be sure to make another blog post if I manage to figure that one out.
</aside>


So, what do you need to do to get set up? First things first, you're going to need to install `ruby`. For me, that was as simple as `brew install ruby` and a simple .zshrc file update. If you're on any modern distro of Linux/Unix (or even an older one), you can most likely run `apt-get install ruby` or `npm install ruby`. With that installation you will now have access to `gems`, which is really what we want out of all of this (don't worry, you won't be coding in ruby). Once that's done, you'll want to run the following commands. The output should look similar to the following:

```
> gem install bundler
> bundle update --bundler
Fetching bundler-2.0.1.gem
bundler's executable "bundle" conflicts with /usr/local/lib/ruby/gems/2.6.0/bin/bundle
Overwrite the executable? [yN]  y
bundler's executable "bundler" conflicts with /usr/local/lib/ruby/gems/2.6.0/bin/bundler
Overwrite the executable? [yN]  y
Successfully installed bundler-2.0.1
Parsing documentation for bundler-2.0.1
Installing ri documentation for bundler-2.0.1
Done installing documentation for bundler after 2 seconds
1 gem installed
```
<br/>

Once `bundler` is installed, run `bundle update --bundler`. You should see a bunch of dependencies installed one after another over a few minutes.

```
> bundle update --bundler
Fetching gem metadata from https://rubygems.org/..............
Fetching concurrent-ruby 1.1.5
Installing concurrent-ruby 1.1.5
Fetching i18n 0.9.5
Installing i18n 0.9.5
Using minitest 5.11.3
Fetching thread_safe 0.3.6
…
Installing jekyll-scholar 5.14.1
Fetching jekyll-sitemap 1.3.1
Installing jekyll-sitemap 1.3.1
Bundle updated!
Post-install message from html-pipeline:
-------------------------------------------------
Thank you for installing html-pipeline!
You must bundle Filter gem dependencies.
See html-pipeline README.md for more details.
https://github.com/jch/html-pipeline#dependencies
-------------------------------------------------
Post-install message from sass:

Ruby Sass has reached end-of-life and should no longer be used.

* If you use Sass as a command-line tool, we recommend using Dart Sass, the new
  primary implementation: https://sass-lang.com/install

* If you use Sass as a plug-in for a Ruby web framework, we recommend using the
  sassc gem: https://github.com/sass/sassc-ruby#readme

* For more details, please refer to the Sass blog:
  https://sass-lang.com/blog/posts/7828841
```
<br/>

Starting your local Jekyll server
------
It looks like Ruby Sass is EOL'ed, but it does work for now and renders the site just fine. Now that you have `bundler` installed, let's start a local server. Starting a local server is as simple as the following, just change directory into the root of your website and run the following:

```
> bundle exec jekyll serve --incremental
Configuration file: /Users/frank/Documents/Code/Website/frankd412.github.io/_config.yml
            Source: /Users/frank/Documents/Code/Website/frankd412.github.io
       Destination: /Users/frank/Documents/Code/Website/frankd412.github.io/_site
 Incremental build: enabled
      Generating...
       Jekyll Feed: Generating feed for posts
                    done in 1.708 seconds.
 Auto-regeneration: enabled for '/Users/frank/Documents/Code/Website/frankd412.github.io'
    Server address: http://127.0.0.1:4000
  Server running... press ctrl-c to stop.
```

The `--incremental` flag continues to monitor changes to the repository, rebuilding the repository on the fly as you change files. You can also build the website without serving it locally by running `bundle exec jekyll build`. Adding new pages or posts usually requires a rebuild, which `serve` does not handle.

<br/>

Deploying your GitHub Page Statically
------

Alright, so now you know how to both serve and build your site locally. Most of the way there! So, now you want to deploy your static website. If you're using a github.io site (as I am), you're already familiar with the fact that the master branch is the *only* branch that gets deployed. That functionality seems to be baked into GitHub's deployment, with no way to change it. Okay, cool. So that means we have to reserve master for our built site. If you've already got a repository start, you simply just make a new branch based on your current master (otherwise, just start a new branch from the start). I called mine "src", as it's the source to my site. Otherwise, make sure to change the default branch to src on GitHub.

Now, if you have a `.gitignore` file in your repository, make sure that the build directory is not in it. You're going to want to check that folder in, so to make life easier just don't ignore it. Otherwise, we're going to treat master as a subtree so that we simply push our site contents to it. So now, in order to deploy, simply run the following:

```
> git checkout src
Switched to branch 'src'
Your branch is up to date with 'origin/src'.
> bundle exec jekyll build
Configuration file: /Users/frank/Documents/Code/Website/frankd412.github.io/_config.yml
            Source: /Users/frank/Documents/Code/Website/frankd412.github.io
       Destination: /Users/frank/Documents/Code/Website/frankd412.github.io/_site
 Incremental build: disabled. Enable with --incremental
      Generating...
       Jekyll Feed: Generating feed for posts
                    done in 1.715 seconds.
 Auto-regeneration: disabled. Use --watch to enable.
 > git subtree push --prefix _site origin master
```

<aside class="notice">
The folder `_site` above is where my build places my compiled website. Your website may be configured differently, so make sure to correct the name of the folder for your own naming.
</aside>

And that should do it. You now commit code to the src branch and push a subtree to master when you're ready to publish. It's as simple as that.
<br/>

Resources
-----
[Jekyll Troubleshooting](https://jekyllrb.com/docs/troubleshooting/)<br/>
[GitHub Pages](https://pages.github.com/)
