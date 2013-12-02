#!/bin/sh
forever start  -o ./logs/OUTFILE -e ./logs/ERRFILE ./server.proxy_pass.js
