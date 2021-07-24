FROM node:14-alpine

COPY . /app
WORKDIR /app

RUN rm -rf node_modules
RUN npm ci

WORKDIR /app

CMD ["npm", "start"]
