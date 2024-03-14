FROM node:alpine
WORKDIR /user/src/songbook
COPY package*.json .
RUN npm ci
COPY . .
EXPOSE 3000
CMD [ "npm", "start"]