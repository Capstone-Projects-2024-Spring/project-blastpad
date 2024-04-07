#!/bin/bash
# please run in same folder as .xinitrc
if [[ -z $DISPLAY && $XDG_VTNR -eq 1 ]]; then
    startx > /dev/null 2>&1
    exit
fi