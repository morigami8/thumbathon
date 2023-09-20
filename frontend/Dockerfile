FROM node:18 AS build


# Update npm to the latest version
RUN npm install -g npm@latest

WORKDIR /src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

FROM nginx:alpine

COPY --from=build /src/app/build /usr/share/nginx/html
EXPOSE 80

CMD [ "nginx", "-g", "daemon off;" ]