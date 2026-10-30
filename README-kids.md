# 儿童专区配置

面向 5 岁以下低龄儿童（儿歌 / 故事 / 国学 / 启蒙 / 早教 / 动画）。

## 文件

| 文件 | 说明 |
|---|---|
| `kids.json` | 完整版：兔小贝（主+备线路）+ 3 个增强源（需 spider） |
| `kids-lite.json` | 极简版：仅兔小贝主备双线路，**不依赖任何 spider**，必定可用 |

## 导入地址（影视仓）

完整版：
```
https://raw.githubusercontent.com/lonnnnnng/config01/main/kids.json
```
极简版（推荐先用这个）：
```
https://raw.githubusercontent.com/lonnnnnng/config01/main/kids-lite.json
```

国内网络若直连失败，换成加速地址：
```
https://ghproxy.net/https://raw.githubusercontent.com/lonnnnnng/config01/main/kids-lite.json
https://cdn.jsdelivr.net/gh/lonnnnnng/config01@main/kids-lite.json
```

## 源说明

### 兔小贝（📚儿歌故事启蒙 / 📚备用线路）

- 站点 `www.tuxiaobei.com`
- 4 个分类：儿歌 / 故事 / 国学 / 启蒙
- 实测内容：恐龙儿歌、古诗《江雪》、成语故事、英语宝典等
- 引擎 drpy2，规则 `兔小贝.js`
- **不经过 guard / spider**，任何 TVBox 系客户端都能用
- 主线路走 jsDelivr，备用线路走 ghproxy，两条线任一可用即可

### 少儿教育（📚早教儿歌动画）— 需 spider

15 个低龄分类：儿童早教、儿童启蒙故事、儿童英语启蒙、儿童歌曲、
儿童绘画、睡前故事、儿童动画、儿童音乐、儿童安全教育、贝瓦儿歌、
悟空识字、宝宝巴士、儿歌多多、学而思

### 小学课堂（📚小学课堂）— 需 spider

6 岁以上课堂内容，作为延伸。

### 巴士动漫（🚌动漫）— 需 spider

动漫采集源，偏大龄（6+），非低龄专属。

## 关于 spider

`kids.json` 的 `spider` 指向饭太硬源的 guard APK：

```
https://xiuxiu-pro-new.meitudata.com/posters/c2759c9c03b22f2242475139110972c7.jpg;md5;d2a33b53d09ec59c4cb7e3f482ef3907
```

- 这是对方 CDN 的动态地址，**随时可能更换**，一换则依赖它的 3 个源失效
- 兔小贝是纯 JS 源，不受影响
- 客户端不支持加载该 guard 时，请用 `kids-lite.json`

## 直播

含 1 个综合直播源（含少儿频道）。

## 更新记录

- 2026-10-30 初版：从饭太硬源（`http://www.饭太硬.cc/tv`，JPEG 图片隐写配置）提取儿童相关源并整理
