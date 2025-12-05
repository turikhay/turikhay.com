FROM node:24-alpine

ENV NPM_CONFIG_LOGLEVEL=error

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm ci

COPY . .

RUN npm run build

EXPOSE 3000
ENV PORT=3000

CMD ["npm", "start"]
