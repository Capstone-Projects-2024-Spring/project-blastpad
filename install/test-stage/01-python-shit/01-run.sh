#!/bin/bash -e

on_chroot << EOF
    pip install flask-cors --break-system-packages
    pip install pillow --break-system-packages
    pip install tk --break-system-packages
    pip install customtkinter --break-system-packages
    pip install pygame --break-system-packages
    pip install pgzero --break-system-packages
    pip install flask --break-system-packages
    pip install pillow --break-system-packages
    pip install pil.imagetk --break-system-packages
EOF