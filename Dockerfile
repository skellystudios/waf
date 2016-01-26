FROM node
# replace this with your application's default port
ADD package.json /tmp/package.json
RUN cd /tmp && npm install
RUN mkdir -p /usr/src/app && cp -a /tmp/node_modules /usr/src/app/
EXPOSE 8888
WORKDIR /usr/src/app/
CMD npm run start