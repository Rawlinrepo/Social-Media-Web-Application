FROM node:22.9 as build

WORKDIR /app

COPY package*.json ./

RUN npm install

ENV NODE_OPTIONS=--openssl-legacy-provider

ENV NODE_ENV=production

COPY . .

RUN npm run build

FROM nginx:alpine

COPY --from=build /app/build/ /usr/share/nginx/html/

EXPOSE 80

CMD ["nginx", "-g" "daemon off"]
