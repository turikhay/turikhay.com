FROM node:18-alpine

ENV NPM_CONFIG_LOGLEVEL error

RUN npm install -g pnpm

COPY package.json pnpm-lock.yaml ./

RUN pnpm install --frozen-lockfile

COPY . .

RUN pnpm build

EXPOSE 3000

ENV PORT 3000

CMD ["pnpm", "start"]
