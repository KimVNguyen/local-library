FROM node:10
ARG USR=node

#Does all the things we need to do as root
RUN apt-get update && \
  apt-get install sudo wait-for-it && \
  usermod -aG sudo $USR && \
  echo "$USR ALL=(ALL) NOPASSWD: ALL" >> /etc/sudoers && \
  mkdir /code && \
  chown -R $USR:$USR /code/ && \
  npm install -g express-generator nodemon

USER $USR:$USR 
WORKDIR /code
ADD . /code/