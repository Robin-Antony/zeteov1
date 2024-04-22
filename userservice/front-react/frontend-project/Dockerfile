FROM node:20.10-alpine
WORKDIR /front-react
COPY package.json .
COPY package-lock.json .
COPY vite.config.js .
RUN npm install
COPY . .
RUN npm run build