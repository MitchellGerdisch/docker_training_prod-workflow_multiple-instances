# Use an existing docker imagea as base
# "alpine" version indicates to use a minimal an image as possible - in this case one that has node.js installed 
# but no unnecessary other bits
FROM node:alpine

# Download and install a dependency
WORKDIR /usr/app

COPY ./package.json ./

RUN npm install
COPY ./index.js ./

# Tell image what to do when it starts as a container
CMD ["npm", "start"]
