FROM node:latest as node

# set working directory
WORKDIR /angular-7-Demo-App

# install and cache app dependencies
COPY . .
RUN npm install
RUN npm run build --prod

FROM nginx:alpine
COPY --from=node /app/dist/angular-7-Demo-App /usr/share/ngnix/html