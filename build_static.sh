#!/bin/bash

# script to build static github page

# build production
npm run build

# fix the static links
cd dist && sed -i 's/\/static/static/g' index.html

# zip these files
zip -r ../gh-page.zip *

# change to github pages
git checkout gh-pages

# unzip and force over write
unzip -f gh-page.zip

# clean up
rm gh-page.zip

# checkin
git add .
git commit -m"$(date)"

# update
git push origin gh-pages

git checkout master
