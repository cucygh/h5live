## H5及微信小程序直播入门

本课程重在帮助大家快速入门直播技术，此代码是配合 imooc 课程的部分代码，可以先学习下课程

<img src="./lesson.png" width="84" height="84" alt="">


### 目录介绍

1. **server 目录**

    这个目录是课程录制直播流中的方法二“集成服务”的下载，使用规则如下：

    - Mac 系统

      在 server 目录下执行：

      ```shell
      open server
      ```

      如果命令行 open 指令默认指向的是文本编辑器，请安装 Item2 ，在 Item2 中重新执行。

    - Windows 32 位

      如果你的 windows 电脑是 32 位机，在 server 目录把 win32.exed 的后缀名修改为 exe 即 win32.exe ，双击运行即可。

    - Windows 64 位

      如果你的 windows 电脑是 64 位机，在 server 目录把 win64.exed 的后缀名修改为 exe 即 win64.exe ，双击运行即可。

2. **source 目录**

    这个是课程的所有源代码，在这里可以找到对应的代码，与视频教程代码一模一样。每个子目录的命名可以直接卡看出对应的章节，不再赘述。

3. **tools 目录**

    主要提示用于安装 ffmpeg 和 nginx 的教程以及 server 的使用方法。

    - [安装 ffmpeg 教程](./tools/install-ffmpeg.md)
    - [安装 nginx 教程](./tools/install-nginx.md)
    - [nginx 配置文件](./tools/nginx.conf)
    - [直播流第一种方法](./tools/stream-push.md)
    - [直播流第二种方法 server 使用方法](./tools/server/stream-push.md)
    - [第三方hls直播源](./tools/stream-list.md)

4. **其他**

    test.mp4 和 test2.mp4 是 mp4 视频，可以直接使用。index.html 是 video详解章节源代码。

5. **直播采集**

    如果公司是商用的直播应用，自己搭建采集的成本比较高，如果没有专业的视频团队，建议使用第三方的服务。其中较好的云服务平台有

    [阿里云](https://help.aliyun.com/product/29949.html)、[网宿](http://www.wangsu.com/content/details3_381.html)、[声网](https://www.agora.io/cn/broadcast/)、[七牛云](https://www.qiniu.com/products/pili)、[APIcloud](https://www.apicloud.com/blogDetails/85)等。

6. **开源流媒体服务器**

    - [Nginx](https://github.com/arut/nginx-rtmp-module)
    - [EasyDarwin](https://github.com/EasyDarwin/EasyDarwin)
