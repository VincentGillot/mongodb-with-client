# MongoDB Database

This repository manages the mongodb images for the database. It contains different dockerfiles for each environment and build them to the gitlab container registry tagging them as their branch name.

- Develop : This is for use with a local docker-compose file and not build in CI
- Staging: Build during CI when merging to staging branch
- Main: Build during CI when merging to main branch

The environment variables for the database image build come from the gitlab variables in this repository.

- KEY_FILE_SECRET
- MONGO_ROOT_USER
- MONGO_ROOT_PASSWORD
- SETUP_USER_AND_KEY
- MONGO_CLIENT_USER
- MONGO_CLIENT_PASSWORD
- MONGO_CLIENT_DATABASE

## Volumes

These are the database data folders. You can assign them to a volume to access them.

- ./database/data:/mongo/data

## Connection string

Use this connection string to connect:

`mongodb://{MONGO_CLIENT_USER}:{MONGO_CLIENT_PASSWORD}@localhost:27017/main?ssl=false&authSource=admin`
