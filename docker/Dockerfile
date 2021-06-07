FROM node:14-slim
LABEL maintainer="montanha.masu536@gmail.com"

# Create a group and user to run our app
# --no-log-init ユーザーをlastlogとfaillogのデータベースに追加しない
# -r システムアカウントを作成する(ホームディレクトリを作成しない)
# -g プライマリグループを指定
ARG APP_USER=appuser
RUN groupadd -r ${APP_USER} && useradd --no-log-init -r -g ${APP_USER} ${APP_USER}

RUN mkdir /app
WORKDIR /app
COPY ../src /app

RUN npm install

ENV DOCKERIZE_VERSION v0.6.1
RUN set -ex \
    && BUILD_DEPS=" \
    wget \
    " \
    && apt-get update && apt-get install -y --no-install-recommends $BUILD_DEPS \
    && wget --no-check-certificate https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && tar -C /usr/local/bin -xzvf dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && rm dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && apt-get purge -y --auto-remove -o APT::AutoRemove::RecommendsImportant=false $BUILD_DEPS \
    && rm -rf /var/lib/apt/lists/*

RUN chown -R ${APP_USER}:${APP_USER} /app
RUN chmod -R 755 /app

# switch user from root user
USER ${APP_USER}:${APP_USER}
