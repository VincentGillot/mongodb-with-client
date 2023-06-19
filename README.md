# MongoDB Database

This repository manages the mongodb images for the database. It contains different dockerfiles for each environment and build them to the gitlab container registry tagging them as their branch name.

- Develop : This is for use with a local docker-compose file and not build in CI
- Staging: Build during CI when merging to staging branch
- Main: Build during CI when merging to main branch

The environment variables for the database image build come from the gitlab variables in this repository.

- MONGO_ROOT_USER
- MONGO_ROOT_PASSWORD
- MONGO_CLIENT_USER
- MONGO_CLIENT_PASSWORD

## Volumes

These are the database data folders. You can assign them to a volume to access them.

/mongo/data/replica1/data
/mongo/data/replica2/data
/mongo/data/replica3/data

## Connection

#### IMPORTANT!

To be able to connect to the Dockerized Replica Set, windows must know where to find the reference for the container name in the replica set config. You have to edit the hosts file so the localhost has a reference to it:

127.0.0.1 sl-replica-1 sl-replica-2 sl-replica-3

##### Connection string

Use this connection string to connect:

`mongodb://{MONGO_CLIENT_USER}:{MONGO_CLIENT_PASSWORD}@localhost:27017,localhost:27018,localhost:27019/main?replicaSet=rs0&readPreference=primary&ssl=false&authSource=admin`
