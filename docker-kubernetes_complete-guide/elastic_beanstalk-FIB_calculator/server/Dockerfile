FROM node:alpine
WORKDIR './app'
COPY ./package.json ./
RUN npm install
COPY . .
# See the package.json and note we have a "start" target for production 
CMD ["npm", "run", "start"] 
