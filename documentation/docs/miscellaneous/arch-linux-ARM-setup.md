---
sidebar_position: 1
---

# Arch Linux ARM

We made a setup script that makes it easier to install Arch Linux ARM onto an SD card.

Before we created an image of the BlastPad's OS, this helped us set up SD cards quickly.

## Download

You can find the latest version of the script in our "install" directory of the main branch. [Link](https://github.com/Capstone-Projects-2024-Spring/project-blastpad/tree/main/install)

## Run Script

**1. First, find the name of your SD card**

We used the fdisk utility with the `-l` flag to list the block devices recognized by the OS.

```bash
fdisk -l
```

Example Output:
```
...
Disk /dev/sdb: 28.86 GiB, 30989615104 bytes, 60526592 sectors
Disk model: STORAGE DEVICE
...
```

*In the above example, the device name is `sdb`*


**2. Run the script passing your device name as an argument**

```bash
sh arch_linux_arm.sh <device name>
```

*Following the above example, you would put `sdb` where it says `<device name>`*


