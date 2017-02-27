FROM node:boron 
RUN mkdir -p /app/
WORKDIR /app
COPY package.json /app/
RUN npm config set strict-ssl false
RUN npm config set proxy http://43.196.177.37:8881
RUN npm install
COPY . /app/
ENV http_proxy 43.196.160.219:4140 
EXPOSE 3000 
ENTRYPOINT [ "node", "index.js" ]
