## 使用集成的工具推流

### 命令

```shell
ffmpeg -re -i test.mp4 -c copy -f flv rtmp://localhost:1935/live/movie
```

### 直播地址

1. [hls](http://127.0.0.1:7002/live/movie.m3u8)
2. [flv](http://127.0.0.1:7001/live/movie.flv)
3. [rtmp](rtmp://localhost:1935/live/movie)
