FROM node:20-slim AS base

RUN corepack enable
COPY . /app 
WORKDIR /app

ENV PORT=
ENV SERVER_NUMBER=
ENV HASH_DIFFICULTY=

RUN npm install

CMD [ "npm", "start" ]