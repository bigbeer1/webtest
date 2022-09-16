# 预览插件

用于预览本地视频播放器插件

## 插件地址

https://github.com/Monibuca/plugin-preview

## 插件引入

```go
import (
    _ "m7s.live/plugin/preview/v4"
)
```

## 配置

无

## API

- `/preview/[streamPath]?type=[hdl|hls|ws|wt|rtc]` 可用于预览直播流
- `/preview/[filepath]` 可用于预览录像文件（开发中）

## 使用WebTransport注意事项

- 本地测试需要本地启动https服务，并配置有效的证书
- 由于证书与域名绑定，所以需要host里面配置对应的域名 例如：`127.0.0.1  monibuca.com`