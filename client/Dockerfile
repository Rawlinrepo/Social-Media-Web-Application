FROM node:22.9 as build

WORKDIR /app

COPY package*.json ./

RUN npm run build

ENV NODE_OPTIONS=--openssl-legacy-provider

ENV NODE_ENV=production

COPY . .

FROM nginx:alpine

COPY --from=build /app/build/ /usr/share/nginx/html/

EXPOSE 80

CMD ["nginx", "-g" "daemon off"]
