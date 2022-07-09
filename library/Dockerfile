# pull official base image
FROM node:13.12.0-alpine

# set working directory
WORKDIR /library

# add `/app/node_modules/.bin` to $PATH
ENV PATH /library/node_modules/.bin:$PATH

# install app dependencies
COPY ./ ./

RUN npm install && npm run build
