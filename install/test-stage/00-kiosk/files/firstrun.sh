#!/usr/bin/env bash

echo ">> FIRST RUN"

echo
echo ">> Enabling Read-Only Overlay File System"
sudo raspi-config nonint enable_overlayfs
sudo raspi-config nonint enable_bootro

echo
echo ">> Unpacking Built Blastpad Package"
tar -xf blastpad-build.tar.gz

echo
echo ">> Enabling Auto-Login (?)"
sudo raspi-config nonint do_boot_behaviour B2

echo
echo ">> Removing First Run Script"
rm ./firstrun.sh

echo
echo ">> Rebooting"
sudo reboot
