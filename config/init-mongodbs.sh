#!/bin/bash

# Setup data folders
mkdir -p /mongo/data

if [ $SETUP_USER_AND_KEY == true ]; then
  echo "Creating root user..."

  # Create root user
  mongod --dbpath /mongo/data --logpath /mongo/data/log --fork --port 27017
  mongosh <./create-root.js

  echo "Root user created"
  sleep 20s

  echo "Creating key file"
  # Create keyfile
  mkdir -p /key
  echo ${KEY_FILE_SECRET} >key/file.key
  chmod 400 key/file.key
else
  echo "Skip creating user and key"
fi

echo "Initializing mongodb instance"

# Launch mongo instances
mongod --dbpath /mongo/data --logpath /mongo/data/log --keyFile key/file.key --port 27017 --ipv6 --bind_ip_all
