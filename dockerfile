FROM node:10

# install mongodb
RUN apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv EA312927 \
  && echo "deb http://repo.mongodb.org/apt/debian wheezy/mongodb-org/3.2 main" | tee /etc/apt/sources.list.d/mongodb-org-3.2.list \
  && apt-get update \
  && apt-get install -y mongodb-org --no-install-recommends \
  && apt-get clean \
  && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*

RUN mkdir -p /data/db

WORKDIR /app

COPY package.json package.json
COPY package-lock.json package-lock.json

RUN npm install --production

COPY . /app

ENTRYPOINT ["/app/docker-entrypoint.sh"]