FROM node:12-alpine

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json ./
RUN npm install

COPY . /usr/src/app

RUN npm run build

EXPOSE 3000
ENTRYPOINT ["npm", "run", "start:prod"]

