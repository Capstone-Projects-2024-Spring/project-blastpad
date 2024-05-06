---
sidebar_position: 6
---

# Version Control

## Overview

We're managing BlastPad using **git** and **GitHub**. 

Our git repository serves as a **monorepo** combining five distinct parts of our project
- Docusaurus Documentation
- Flask Web Server
- Core user interface (BlastUI)
- Block code editor
- Raspberry Pi Image Generation Scripts

## Branching 

Branches are created based on the latest **main** branch commit.

Branches are named after and linked to Jira issues. These issue-based branches are always prefixed `BP-XX` where XX is the issue number the branch is linked to.

## Branch Protection

We have 3 branch protection rules enabled on our GitHub that apply to the **main** branch:

- Require a pull request before merging
  -  Require 2 pull request approvals before merging
- Do not allow bypassing the above settings

## GitHub Actions

### Build Image

We use a **GitHub Action** workflow across all branches to build BlastPad operating system images for our Raspberry Pi. When a new commit is pushed to our GitHub repository, the workflow starts the build process based on the [pi-gen-action](https://github.com/usimd/pi-gen-action) and [pi-gen](https://github.com/RPi-Distro/pi-gen) projects, which make it easy to  Raspberry Pi images with custom steps along the way. We have custom build stages found in our `install` folder that install important packages, set file permissions, install configuration files, and so much more. If all of these steps succeed, then the workflow returns a `.img` file comprising our entire operating system that can be flashed onto an SD card and run on the BlastPad.

### Docusaurus Build

We use a **GitHub Action** on our **main** branch to build our Docusaurus project documentation. Docusaurus uses the text and configuration details from Markdown and JSON files to build an HTML-based documentation website.


