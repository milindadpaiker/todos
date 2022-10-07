FROM node:14.18.0
ENV NODE_ENV=production

WORKDIR /app
COPY ["./server-todo/package.json", "./server-todo/package-lock.json*", "./"]

RUN npm install --production
COPY ./server-todo .
COPY ./client-todo/public ./public
EXPOSE 3000
CMD [ "node", "app.js" ]