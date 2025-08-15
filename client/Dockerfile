FROM node:20

WORKDIR /app

COPY package*.json ./

RUN npm install -g npm@11.5.2

COPY . .

EXPOSE 3000

CMD ["npm", "start"]
