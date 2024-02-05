---
sidebar_position: 1
---

# System Overview

## Project Abstract
The BlastPad is a  kid-friendly handheld gaming device and block-based coding suite that makes it easy to create, play, and share custom games. Existing products in the STEM teaching tools space struggle to balance both performance and ease-of-use, whereas the BlastPad will offer a good mix of both. Built around a small but mighty Raspberry Pi single-board computer, the device will be an all-in-one solution for learning to make games and playing them. The device will also feature a number of sensors for students to experiment with alongside buttons and switches found on traditional handheld consoles like the Nintendo Gameboy.

The BlastPad features a kid-friendly user interface for navigating the downloaded game library, and starting the code editor, and for changing the settings of the BlastPad. Akin to existing handheld gaming devices like the Nintendo Switch, users can scroll through a list of games and choose to either play each game or edit them. Choosing to edit a game will start a web server for the block-based code editor. Choosing to play a game will launch the game directly, replacing the main interface until the game is complete. In the settings panel, users can configure their WiFi setup, volume settings, and parental controls.

The block-based code editor is hosted directly on the BlastPad device itself in the form of a web server and shared with other devices locally via a WiFi network. The BlastPad has the ability to set up its own WiFi access point in the absence of another network, or to connect to an existing WiFi network. As mentioned above, the WiFi setup will be configurable via the settings panel.

Users can use a web-based drag-and-drop block code editor to create programs and games from the BlastPad itself or their personal device (computer, phone, tablet). The code editor features a toolbox of existing “code blocks” representing different programming constructs such as variables, if statements, loops, and functions. These code blocks snap together—either on top of each other or one inside of another—to form a cohesive program. Under the hood, this block code program translates directly to Python and runs on the device as a Python program. Users can click a “Run” button on the code editor that downloads the program from the web browser to the BlastPad and run it using Python.
Users can share their own games and download others’ games through a public website hosted on a remote server. Each game uploaded to the site has its own title and description, perhaps in the form of a markdown README file for customizability. 

## Conceptual Design
The BlastPad will be based on the Raspberry Pi computer. On-board, there will be a stripped down version of Linux running the main interface in Tkinter, the games in Pygame, and the web server using Flask. A Chromium-based browser will load the code block editor on-device, but when connecting from another computer any browser should be compatible. 

## Background
The inspiration for this project proposal came from years of tutoring students in programming and embedded systems. When working with devices such as the BBC micro:bit, the most experienced students would run out of projects for the devices after 20 lessons or so due to limiting hardware or software, after which it becomes a paper weight. Our goal for this project is to provide students with powerful hardware while also providing an easy to use interface to get started programming. Two competitors of the BlastPad include similar embedded system devices such as the BBC micro:bit and the CircuitMess Nibble.

The BBC micro:bit is the most popular of these competitors but features only a measly 5x5 LED matrix display and 2 tactile buttons. Similar to the BlastPad, students can use a block-based editor to interface with the micro:bit, but the lackluster hardware tends to bore even excited learners when compared to the iPads and iPhones they grew up with.
The Nibble is less popular but features a small color screen and a block-based IDE. The downside of the Nibble is that it is far less powerful than the latest Raspberry Pi. The Nibble also requires an active internet connection to access the block-based IDE, meaning the device could become unusable without an active internet connection or if CircuitMess discontinues their online services.

The BlastPad would be more powerful than both devices, featuring a Raspberry Pi that can run an entire operating system and web server. The BlastPad would also be more engaging for young students, featuring a bright high-definition RGB screen that makes their accomplishments feel more tangible. The BlastPad’s on-device block-based code editor allows users to quickly write and test their code while also giving them the security of using the device without an internet connection.



