FROM node:lts-alpine

RUN mkdir -p /home/node/api/node_modules && chown -R node:node /home

WORKDIR /home/node/api

COPY package.json yarn.* ./

USER node

RUN yarn

COPY . .

EXPOSE 3000

CMD [ "yarn", "dev" ]

# ENTRYPOINT [ "./scripts/start.sh" ]
