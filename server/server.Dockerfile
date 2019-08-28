FROM node:10-alpine
WORKDIR /usr/src/app
COPY package*.json ./

RUN npm i

COPY ./build-server .

EXPOSE 8080

CMD ["node", "server.min.js"]