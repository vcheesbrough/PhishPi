#!/bin/bash
cd /home/pi/dev/PhishPi
find /home/pi/dev/PhishPi/admin -maxdepth 1 -mindepth 1 "${@:2}" -exec rm -fR {} \;
git add .
git commit -m "$1"
