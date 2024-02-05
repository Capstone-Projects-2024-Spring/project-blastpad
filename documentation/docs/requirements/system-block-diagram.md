---
sidebar_position: 2
---

# System Block Diagram
![System Block Diagram For Blast Pad](https://i.imgur.com/tLLx8KO.jpeg)

This diagram depicts the high-level design of the application from a user's BlastPad device or their laptop/pc. They will navigate the BlastPad's Tkinter based GUI. The block code editor will be distributed through an on-device Flask server. From there they can create Pygame programs/games using the editor and publish or download their creations.

The user will access a website that stores their creations, which they can share with their friends. The website will make a call to the backend server, which will query the SQL database for their creations.
