#! /bin/bash
yarn build
rm -rf bollywood
rm bollywood.zip
mv build bollywood
zip -r bollywood.zip bollywood