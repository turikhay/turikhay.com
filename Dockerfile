FROM node:18-alpine

ENV NPM_CONFIG_LOGLEVEL error

RUN npm install -g pnpm

COPY pnpm-lock.yaml ./

COPY . .

RUN pnpm install --frozen-lockfile

RUN pnpm build

EXPOSE 3000

ENV PORT 3000

CMD ["pnpm", "start"]
