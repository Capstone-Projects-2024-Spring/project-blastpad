#!/bin/bash
cd blockly/
npm run build
cd ../flask
flask --app serve run --port 8000
