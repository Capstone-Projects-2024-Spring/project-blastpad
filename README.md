<div align="center">

<img 
    src="https://raw.githubusercontent.com/Capstone-Projects-2024-Spring/project-blastpad/assets/BlastPad%20Logo.svg" 
    width="200" 
    alt="BlastPad Logo"
/>

# BlastPad
[![Report Issue on Jira](https://img.shields.io/badge/Report%20Issues-Jira-0052CC?style=flat&logo=jira-software)](https://temple-cis-projects-in-cs.atlassian.net/jira/software/c/projects/BP/issues)
[![Deploy Docs](https://github.com/ApplebaumIan/tu-cis-4398-docs-template/actions/workflows/deploy.yml/badge.svg)](https://github.com/Capstone-Projects-2024-Spring/project-blastpad/actions/workflows/deploy.yml)
[![Documentation Website Link](https://img.shields.io/badge/-Documentation%20Website-brightgreen)](https://capstone-projects-2024-spring.github.io/project-blastpad/)


</div>


## Keywords

Section 002, Python, Linux, Raspberry Pi, Embedded Systems, Blockly, React, SQL

## Project Abstract

The BlastPad is a kid-friendly handheld gaming device and block-based coding suite that makes it easy to create, play, and share custom games. Existing products in the STEM teaching tools space struggle to balance both performance and ease-of-use, whereas the BlastPad will offer a good mix of both. Built around a small but mighty Raspberry Pi single-board computer, the device will be an all-in-one solution for learning to make games and playing them. The device will also feature a number of sensors for students to experiment with alongside buttons and switches found on traditional handheld consoles like the Nintendo Game Boy.

The BlastPad will feature a kid-friendly user interface for navigating the downloaded game library, editing games, and for changing the settings of the BlastPad. Akin to existing handheld gaming devices like the Nintendo Switch, users will scroll through a list of games and choose to either play each game or edit them. Choosing to edit a game will launch the block-based code editor, where users can edit their games. Choosing to play a game will launch the game directly, replacing the main interface until the game is complete. In the settings panel, users will configure their WiFi setup, configure private groups called Classrooms, manage their Community Account, and change the colors of the user interface. 

Users will use a web-based drag-and-drop block code editor to create programs and games from the BlastPad itself or their personal device (computer, phone, tablet). The code editor will feature a toolbox of existing “code blocks” representing different programming constructs such as variables, if statements, loops, and functions. These code blocks will snap together—either on top of each other or one inside of another—to form a cohesive program. Under the hood, the block code program will translate directly to Python and run on the device as a Python program. Users will click a “Run” button on the code editor that downloads the program from the web browser to the BlastPad and runs it using Python.

Users will share their own games and download others’ games through a public website hosted on a remote server. Each game uploaded to the site will have its own title and description, perhaps in the form of a markdown README file for customizability. 

## High Level Requirement

Users can connect to the BlastPad’s locally hosted web-based block coding editor on their device of choice or the BlastPad itself. Within the block-based coding editor, users can choose from a large collection of pre-existing code blocks including I/O, control statements, sprite drawing, and even sensor measurement blocks. When finished, users will save the program to the BlastPad so a user can test the program instantly after making their edits. If the user is satisfied with their program and wants to share it, they can upload it to a public repository where they can also find games that other people made.

## Conceptual Design

The BlastPad will be based on the Raspberry Pi computer. On-board, there will be a stripped down version of Linux that runs games in Pygame and a web server using Flask. On the device, a  browser will display the main user interface and the block code editor received from the Flask server. Companion devices connected to the same Wi-Fi network can access the block code editor, allowing users to make changes their programs and push them to the BlastPad. Additional electronics such as sensors and switches will be attached to the Raspberry Pi using the GPIO connections.

## Background

The inspiration for this project proposal came from years of tutoring students in programming and embedded systems. When working with devices such as the BBC micro:bit, the most experienced students would run out of projects for the devices after 20 lessons or so due to limiting hardware or software, after which it becomes a paper weight. Our goal for this project is to provide students with powerful hardware while also providing an easy to use interface to get started programming. Two competitors of the BlastPad include similar embedded system devices such as the BBC micro:bit and the CircuitMess Nibble.

The BBC micro:bit is the most popular of these competitors but features only a measly 5x5 LED matrix display and 2 tactile buttons. Similar to the BlastPad, students can use a block-based editor to interface with the micro:bit, but the lackluster hardware tends to bore even excited learners when compared to the iPads and iPhones they grew up with.

The Nibble is less popular but features a small color screen and a block-based IDE. The downside of the Nibble is that it is far less powerful than the latest Raspberry Pi. The Nibble also requires an active internet connection to access the block-based IDE, meaning the device could become unusable without an active internet connection or if CircuitMess discontinues their online services.

The BlastPad would be more powerful than both devices, featuring a Raspberry Pi that can run an entire operating system and web server. The power of the Raspberry Pi will allow the BlastPad coding suite to grow alongside its user base. The BlastPad would also be more engaging for young students, featuring a bright high-definition RGB screen that makes students' accomplishments feel more tangible. The BlastPad’s on-device block-based code editor allows users to quickly write and test their code while also giving them the security of using the device without an internet connection.


## Required Resources

https://capstone-projects-2024-spring.github.io/project-blastpad/docs/requirements/general-requirements


## Collaborators

[//]: # ( readme: collaborators -start )
<table>
<tr>
    <td align="center">
        <a href="https://github.com/Snarr">
            <img src="https://avatars.githubusercontent.com/u/20634143?v=4" width="100;" alt="Snarr"/>
            <br />
            <sub><b>Jacob Snarr</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/gummyfrog">
            <img src="https://avatars.githubusercontent.com/u/32652208?v=4" width="100;" alt="Neil"/>
            <br />
            <sub><b>Neil Conley</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/Jeffin-J">
            <img src="https://avatars.githubusercontent.com/u/112404549?v=4" width="100;" alt="Jeffin"/>
            <br />
            <sub><b>Jeffin Johnykutty</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/MWedee">
            <img src="https://avatars.githubusercontent.com/u/104322948?v=4" width="100;" alt="Wedee"/>
            <br />
            <sub><b>Mustafa Wedee</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/mustafamalik-tu">
            <img src="https://avatars.githubusercontent.com/u/144449116?v=4" width="100;" alt="Malik"/>
            <br />
            <sub><b>Mustafa Malik</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/tuk05348">
            <img src="https://avatars.githubusercontent.com/u/123013839?v=4" width="100;" alt="Baharudeen"/>
            <br />
            <sub><b>Niaz Baharudeen</b></sub>
        </a>
    </td>
    
</tr>
</table>

[//]: # ( readme: collaborators -end )
