## 推流

### 下载 VLC 播放器

1. Mac 系统

[Mac OS X](https://www.videolan.org/vlc/index.zh.html)

2. Windows 系统

[Windows](https://www.videolan.org/vlc/index.zh.html)


### RTMP 推流

#### 推流

请使用 Item（Mac 系统） 或者 gitbash（windows 系统）

```shell
ffmpeg -re -i test.mp4 -vcodec libx264 -acodec aac -strict -2 -f flv rtmp://localhost:1935/rtmplive/rtmp
```

#### 验证

1. 打开 VLC
2. File 》 open network 》 输入 rtmp://localhost:1935/rtmplive/rtmp ，回车


### HLS 推流

请使用 Item（Mac 系统） 或者 gitbash（windows 系统）

```shell
ffmpeg -re -i test.mp4 -vcodec libx264 -acodec aac -strict -2 -f flv rtmp://localhost:1935/hls/stream
```


#### 验证

1. 打开 Safari
2. 直接输入 http://localhost:8080/hls/stream.m3u8


### 资料

1. [nginx 视频推流](http://liuhong1happy.github.io/network/2016/08/01/nginx-rtmp)
