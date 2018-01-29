#!/bin/bash
npm run build;
scp -P 17768 ./dist/bundle.js swytman@198.199.109.47:/var/www/heaptask.com/bundle.js;
scp -P 17768 ./dist/index.html swytman@198.199.109.47:/var/www/heaptask.com/index.html;
