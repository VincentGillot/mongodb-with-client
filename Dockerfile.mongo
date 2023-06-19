FROM debian:11

ENV KEY_FILE_SECRET=mysecretkey
ENV MONGO_ROOT_USER=root
ENV MONGO_ROOT_PASSWORD=root
ENV SETUP_USER_AND_KEY=false
ENV MONGO_CLIENT_USER=client
ENV MONGO_CLIENT_PASSWORD=client
ENV MONGO_CLIENT_DATABASE=main

COPY ./config/entry-point.sh /
COPY ./config/init-mongodbs.sh /
COPY ./config/create-root.js /

EXPOSE 27017

ENTRYPOINT [ "bash", "entry-point.sh" ]
