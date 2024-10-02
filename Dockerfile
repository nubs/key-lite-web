ARG NODE_VERSION=19.7

# Base image for installing packages.
FROM node:${NODE_VERSION}-alpine as installer

WORKDIR /code

COPY package.json package-lock.json ./
RUN npm clean-install

# Development image - watches files for changes.
FROM node:${NODE_VERSION}-alpine as development

WORKDIR /code

COPY --from=installer /code/node_modules node_modules
COPY . .

CMD ["npm", "run", "dev"]

# Build image - transpiles the source to distributables.
FROM node:${NODE_VERSION}-alpine as dist-builder

WORKDIR /code

COPY --from=installer /code/node_modules node_modules
COPY package.json package-lock.json index.html vite.config.js ./
COPY src src

RUN npm run build
RUN npm clean-install --production

# Deployable image - barebones production-level image.
FROM node:${NODE_VERSION}-alpine as dist

WORKDIR /code

COPY --from=dist-builder /code/node_modules node_modules
COPY --from=dist-builder /code/dist/ dist

CMD ["node", "dist"]
