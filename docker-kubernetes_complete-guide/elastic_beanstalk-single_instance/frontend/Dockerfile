# PRODUCTION version
# This Dockerfile builds our react server as opposed to using the development server (see Docerfile.dev)
# Since this builds the webserver, we need to use something like nginx to frontend the index.html and main.js files that are built here.

# USES a multistep build process to build the react code and then copy that to nginx image base to be used for the container

# BUILDER phase
FROM node:alpine as builder
WORKDIR '/app'

COPY package.json .
RUN npm install 

COPY . .
RUN npm run build  # puts the react website files under /app/build as per WORKDIR and how npm run build works

# RUN phase
# By creating a new FROM statement it essentially terminates the previous FROM block
# The stuff from the previous FROM is basically thrown away (except for the react files copied below).
FROM nginx
EXPOSE 80 
# normally in docker on local machine this EXPOSE does nothing but tell the human that this port should be exposed.
# BUT Elastic Beanstalk uses this directive to know how to map ports.
# Copy /app/build folder from "builder" phase tagged above
# and place it in the nginx image under "/usr/share/nginx/html" - this is as per the nginx image notes in dockerhub
COPY --from=builder /app/build /usr/share/nginx/html
# No need to RUN a command to start nginx container since the default command is to run the container
