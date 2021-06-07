# 環境(Docker image)
```
Docker: 20系
docker-compose: version '3'
mongodb: 4.4
node: 14-slim
```

# node + mongo
```
自力で node + mongodbの環境をdockerizeを使いながらdocker-composeで
立ち上げられるかチャレンジのためのレポジトリです。普通にできました。
見所はdockerizeのインストールのRUNの部分です。--> [setを使ったRUNのテクニック！](https://github.com/hakumizuki/node-mongo-dockerize/blob/bbb413eda57b8bd1a154031f99bcf81fadaa1490/docker/Dockerfile#L18)
```


# Author
* Taichi Masuyama
* montanha.masu536@gmail.com

# License
This Dockerfile is under [MIT license](https://en.wikipedia.org/wiki/MIT_License)
