FROM ubuntu:trusty
RUN mkdir -p /app/
COPY . /app/
RUN apt-get update && apt-get install --no-install-recommends -y --force-yes nodejs
RUN rm -rf /usr/sbin/node
RUN ln -s "$(which nodejs)" /usr/sbin/node
WORKDIR /app
EXPOSE 3000 
ENTRYPOINT [ "node", "index.js" ]
