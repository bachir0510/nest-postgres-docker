FROM node:16.14.2-alpine AS base

WORKDIR /app

COPY ./package.json ./package-lock.json /app/

FROM base AS dev
ENV NODE_ENV=dev
RUN npm install --frozen-lockfile
COPY . .
CMD ["npm", "run", "start:dev"]

FROM base AS prod
ENV NODE_ENV=production
RUN npm install --frozen-lockfile --production
COPY . .
RUN npm install global @nestjs/cli
RUN npm build
CMD ["npm", "run", "start:prod"]