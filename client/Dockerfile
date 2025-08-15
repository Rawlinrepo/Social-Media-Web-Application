FROM node:22.9

WORKDIR /app

COPY package*.json ./

RUN npm install -g npm@11.5.2

ENV NODE_OPTIONS=--openssl-legacy-provider

COPY . .

EXPOSE 3000

CMD ["npm", "start"]
