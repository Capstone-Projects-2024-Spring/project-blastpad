#!/bin/bash -e

on_chroot << EOF
    pip install flask-cors --break-system-packages --root-user-action=ignore
    pip install pillow --break-system-packages --root-user-action=ignore
    pip install tk --break-system-packages --root-user-action=ignore
    pip install customtkinter --break-system-packages --root-user-action=ignore
    pip install pygame --break-system-packages --root-user-action=ignore
    pip install pgzero --break-system-packages --root-user-action=ignore
    pip install flask --break-system-packages --root-user-action=ignore
    pip install pillow --break-system-packages --root-user-action=ignore
EOF