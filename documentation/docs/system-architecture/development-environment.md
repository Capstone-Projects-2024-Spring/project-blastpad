---
sidebar_position: 4
---

# Development Environment

## Tools

- **IDE**: any text editor + terminal combination
  - Preferred: Visual Studio Code
- **Compilers**:
  - Webpack to compile BlastPad block code editor website
  - Docusaurus to compile documentation
- **Package Managers**
  - For Docusaurus: NPM (node package manager)
  - For Python: pip
- **KiCad**
  - For designing electrical schematics and printed circuit board - the interface between the Raspberry Pi and the switches and sensors

## Languages and Frameworks

- **HTML/CSS/JavaScript**
  - For BlastPad block code editor website
  - For community site where users share games
- **React**
  - To build reusable components for community site
- **Python**
  - Flask
    - To host web server that distributes BlastPad block code editor
    - To host API endpoints for getting game library information and downloading games onto the device from the code editor
  - Tkinter
    - To create the graphical user interface of the BlastPad
  - Pygame Zero
    - Primary game creation library
  - GPIO Zero
    - Primary GPIO interfacing library

## Testing

- **PyTest**
  - For Python-related testing
- **Jest**
  - For JavaScript-related testing
- **Postman**
  - For testing Flask API endpoints

## Hardware

- **General Requirements** - [link](https://capstone-projects-2024-spring.github.io/project-blastpad/docs/requirements/general-requirements)
  - The parts necessary for the operation of the device
- **Bill of Materials** - [link](https://capstone-projects-2024-spring.github.io/project-blastpad/docs/requirements/bill-of-materials)
  - The parts we purchased, the quantity of parts, and their vendors
