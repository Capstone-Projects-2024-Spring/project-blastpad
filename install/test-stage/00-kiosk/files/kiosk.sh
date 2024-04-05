#!/usr/bin/env bash

# read URL from easily accessible location
URL=$(head -n 1 /boot/kiosk.url)

# never blank the screen
xset s off -dpms

# rotate to portrait mounted TV
xrandr --output HDMI-1 --rotate left

# show a splash before browser kicks in
feh --bg-scale splash.png

# compile everything
# ADD A STEP HERE TO SKIP THIS IF NOT THE FIRST LOAD!!!!!!!!!
# if we already have pip then no need to run dependencies.sh as sudo
# curl -L https://github.com/Capstone-Projects-2024-Spring/project-blastpad/tarball/BP-186-Versioned-Blastpad-Image-split-l8r | tar zx
# mv Capstone-Projects*/ project-blastpad
# cd project-blastpad
# ./dependencies.sh

# start the cec-client & browser
# (cec-client | cec2kbd) & browser --fullscreen "${URL:='https://deltazero.cz'}"
