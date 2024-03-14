FROM node:alpine
WORKDIR /user/src/songbook
COPY package*.json .
RUN npm ci
COPY . .
CMD [ "npm", "start"]

