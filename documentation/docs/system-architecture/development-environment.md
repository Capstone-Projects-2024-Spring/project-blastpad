---
sidebar_position: 4
---

# Development Environment

## Tools

- **IDE**: any text editor + terminal combination
  - Preferred: Visual Studio Code
- **Compilers**:
  - Webpack to compile BlastUI and block code editor
  - Docusaurus to compile documentation
- **Package Managers**
  - For Docusaurus: yarn
  - For Web App: npm
  - For Python: pip
- **KiCad**
  - For designing electrical schematics and printed circuit board - the interface between the Raspberry Pi and the switches and sensors

## Languages, Frameworks, and Packages

- **HTML/CSS/JavaScript**
  - **React** (v 18.2.0)
    - To build reusable components for BlastUI
  - **Blockly** (v 10.0.0)
    - For block code editor
- **Python** (v 3.11)
  - Flask (v 3.0.2)
    - To host web server that distributes BlastUI and block code editor
    - To host API endpoints for getting system level data
    - To interface with Supabase API for authentication and database
  - Pygame (v 2.5.2)
    - Primary game creation library
  - GPIO Zero (v 2.0.1)
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
