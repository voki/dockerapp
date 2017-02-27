FROM node:boron 
RUN mkdir -p /app/
WORKDIR /app
COPY package.json /app/
RUN npm config set strict-ssl false
RUN npm config set proxy http://<proxy_ip>:8881
RUN npm install
COPY . /app/
EXPOSE 3000 
ENTRYPOINT [ "node", "index.js" ]
