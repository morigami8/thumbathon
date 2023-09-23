FROM node:18-alpine3.18

WORKDIR /src/app

COPY package*.json ./
RUN npm install

COPY . .


EXPOSE 3001

# Create a new user called appuser
RUN groupadd appgroup && useradd -m -g appgroup appuser

RUN chown -R appuser:appgroup /src/app

RUN mkdir -p /tmp/downloads && chown -R appuser:appgroup /tmp/downloads

USER appuser

CMD ["npm", "start"]