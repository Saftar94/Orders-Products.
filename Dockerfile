FROM node:18-alpine AS development
ENV NODE_ENV development
WORKDIR /app/src
COPY package.json .
COPY yarn.lock .
RUN npm install --frozen-lockfile
COPY . .
EXPOSE 3000
CMD ["npm","run", "start" ]

