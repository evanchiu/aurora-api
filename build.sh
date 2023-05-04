#!/bin/bash

# Create build directory
build=$(pwd)"/build"
mkdir -p $build

# Prepare lambda contents in temp directory
tmp=$(mktemp -d)
cp -r src $tmp
cp package.json $tmp
cp yarn.lock $tmp
pushd $tmp
yarn install --production

# Zip contents
zip -r $build/aurora.zip .

# Cleanup temp directory
popd
rm -rf $tmp
