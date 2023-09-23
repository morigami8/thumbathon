FROM node:20

# Update npm to the latest version
RUN npm install -g npm@10.1.0

WORKDIR /src/app

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build

EXPOSE 3001

# Create a new user called appuser
RUN groupadd appgroup && useradd -m -g appgroup appuser

RUN chown -R appuser:appgroup /src/app

RUN mkdir -p /tmp/downloads && chown -R appuser:appgroup /tmp/downloads

USER appuser

CMD ["npm", "start"]