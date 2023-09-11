FROM node:16 AS build

WORKDIR /src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

FROM nginx:alpine

COPY --from=build /src/app/build /usr/share/nginx/html
EXPOSE 80

CMD [ "nginx", "-g", "daemon off;" ]