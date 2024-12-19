#################################
#          BUILD STAGE          #
#################################

# pushes the base image from the official Node.js remote repository
FROM node:23.4.0-bookworm-slim AS build

# sets the working directory for commands added in the Dockerfile
WORKDIR /app

# copies the project's npm packages into the working directory
COPY package.json package.json
COPY package-lock.json package-lock.json

# installs the project's npm packages
RUN npm install

# directories are copied into the container
COPY public/ public
COPY src/ src

# builds the project
RUN npm run build

# exposes the port that the app will run on
EXPOSE 3000

# starts the Node.js application installed in the container
CMD ["npm", "start"]