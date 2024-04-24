#!/usr/bin/env bash

echo ">> FIRST RUN"

echo
echo ">> Unpacking Built Blastpad Package"
tar -xf blastpad-build.tar.gz
mv project-blastpad/start_x.sh .
mv project-blastpad/start_flask.sh .

echo
echo ">> Enabling Auto-Login (?)"
sudo raspi-config nonint do_boot_behaviour B2

echo
echo ">> Removing First Run Script"
rm ./firstrun.sh

echo
echo ">> Rebooting"
sudo reboot
