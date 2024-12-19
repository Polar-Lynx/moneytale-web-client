#################################
#          BUILD STAGE          #
#################################

# pushes the base image from the official Node.js remote repository
FROM node:23.4.0-bookworm-slim AS build

# sets the working directory for commands added in the Dockerfile
WORKDIR /moneytale-reactjs-client

# copies the project's npm packages into the working directory
COPY package.json package.json
COPY package-lock.json package-lock.json

# installs the project's npm packages
RUN npm ci

# directories are copied into the container
COPY public/ public
COPY src/ src

# builds the project
RUN npm run build

# starts the Node.js application installed in the container
CMD ["npm", "start"]