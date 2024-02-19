---
sidebar_position: 5
---

# Version Control

## Overview

We're managing BlastPad using **git** and **GitHub**. 

Our git repository serves as a **monorepo** combining four distinct parts of our project
- Docusaurus Documentation
- On-device Python software
  - Tkinter GUI
  - Flask Server
- Local block code editor
- Remote community hub website

## Branching 

Branches are created based on the latest **main** branch commit.

Branches are named after and linked to Jira issues. These issue-based branches are always prefixed `BP-XX` where XX is the issue number the branch is linked to.

## Branch Protection

We have 3 branch protection rules enabled on our GitHub that apply to the **main** branch:

- Require a pull request before merging
  -  Require 2 pull request approvals before merging
- Do not allow bypassing the above settings

*TODO: these settings currently conflict with the webpack GitHub Action we have setup. Work should be done to resolve this conflict so that both setups can co-exist.*

## GitHub Actions

### Webpack

We use a **GitHub Action** on our **main** branch to compile our block code editor website using Webpack. Webpack compiles this website into just two files: one HTML file and one JavaScript file. This serves to link the many components of the website and also minimizes the code for smaller file sizes and faster load times.

### Docusaurus Build

We use a **GitHub Action** on our **main** brnach to build our Docusaurus project documentation. Docusaurus uses the text and configuration details from Markdown and JSON files to build an HTML-based documentation website.


