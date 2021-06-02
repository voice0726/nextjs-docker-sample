FROM node:14-alpine3.10

COPY package.json package-lock.json /var/www/
WORKDIR /var/www
RUN npm i

COPY . /var/www
RUN npm run build

CMD ["npm", "start"]

EXPOSE 3000
