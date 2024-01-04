FROM node:latest as build

WORKDIR /app

COPY . .
RUN yarn install
RUN yarn build

# Path: dockerfile
CMD ["yarn", "start"]