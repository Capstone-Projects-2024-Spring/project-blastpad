#!/usr/bin/env bash

# read URL from easily accessible location
URL=$(head -n 1 /boot/kiosk.url)

# never blank the screen
xset s off -dpms

xrandr --output HDMI-1 --mode 800x480 # set resolution to something blastpad-like
# 800x400

# show a splash before browser kicks in
feh --bg-scale splash.jpg

# cd project-blastpad
# python home/gui.py

chromium-browser --kiosk http://localhost:8000

# start the cec-client & browser
# (cec-client | cec2kbd) & browser --fullscreen "${URL:='https://deltazero.cz'}"
