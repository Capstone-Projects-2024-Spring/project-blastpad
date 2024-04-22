#!/bin/bash -e

on_chroot << EOF
    pip install flask-cors --break-system-packages --root-user-action=ignore
    pip install pillow --break-system-packages --root-user-action=ignore
    pip install customtkinter --break-system-packages --root-user-action=ignore
    pip install pygame --break-system-packages --root-user-action=ignore
    pip install pgzero --break-system-packages --root-user-action=ignore
    pip install flask --break-system-packages --root-user-action=ignore
    pip install pillow --break-system-packages --root-user-action=ignore
    pip install supabase --break-system-packages --root-user-action=ignore
    apt-get install -y curl
    curl -fsSL https://deb.nodesource.com/setup_16.x | bash -
EOF