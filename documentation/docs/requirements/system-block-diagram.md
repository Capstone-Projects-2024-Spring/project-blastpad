---
sidebar_position: 2
---

# System Block Diagram
![System Block Diagram For Blast Pad](https://raw.githubusercontent.com/Capstone-Projects-2024-Spring/project-blastpad/assets/SystemBlockDiagram.svg)

This diagram depicts the high-level design of the application from a user's BlastPad device.

**Buttons** at the hardware level will be used to interface with the device.

All internal BlastPad code will sit on Raspberry Pi 4 **Hardware** running the Linux **Operating System**.

A Flask **Local Server** will serve as the primary interface for getting and setting information on the **Operating System**.

On the BlastPad itself, the Flask **Local Server** will serve the BlastUI main interface and the Blockly Editor via a **Browser**.

On the BlastPad itself, Flask **Local Server** will also execute the **Python** code for games developed by users.

For a **Companion Device**, the BlastPad's Flask **Local Server** will serve the Blockly Editor via a **Browser**.

The Flask **Local Server** will also store and recall data from a **Supabase** database on the **Internet**.
