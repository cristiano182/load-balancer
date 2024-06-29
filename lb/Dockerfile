FROM node:20-slim AS base

RUN corepack enable
COPY . /app 
WORKDIR /app

ENV PORT=
ENV GRPC_SERVERS=
ENV LB_ALGORITHM_TYPE=

RUN npm install

CMD [ "npm", "start" ]