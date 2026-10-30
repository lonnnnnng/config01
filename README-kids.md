# 儿童专区配置

面向 5 岁以下低龄儿童（儿歌 / 故事 / 国学 / 启蒙 / 早教 / 动画）。

## 文件

| 文件 | 说明 |
|---|---|
| `kids.json` | 完整版：兔小贝（主+备线路）+ 3 个增强源（需 spider） |
| `kids-lite.json` | 极简版：仅兔小贝主备双线路，**不依赖任何 spider**，必定可用 |

## 导入地址（影视仓）

> 已在手机实测：`raw.githubusercontent.com` / `jsDelivr` / `ghproxy.net` 均不可达，
> **只有 `gh-proxy.com`、`ghfast.top`、`git.yylx.win` 可用**。

完整版（推荐）：
```
https://gh-proxy.com/https://raw.githubusercontent.com/lonnnnnng/config01/main/kids.json
```
极简版（全部免 spider）：
```
https://gh-proxy.com/https://raw.githubusercontent.com/lonnnnnng/config01/main/kids-lite.json
```

备用加速前缀（任选其一替换开头的 `https://gh-proxy.com/`）：
```
https://ghfast.top/
https://git.yylx.win/
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

### 动漫巴士（🚌免依赖）— 免 spider

- 站点 `dm84.tv`（动漫巴士，国漫/日漫/欧美/动漫电影）
- 规则文件：`js/dm84.js`（本仓库自写，drpy2 规则）
- 分类：国漫 / 日漫 / 欧美动漫 / 电影
- 支持搜索（走站点 suggest 接口）
- 播放：详情页剧集 → 解密播放器 iframe，交给客户端 webview 解析
- 实测：列表/详情/剧集/搜索 全部字段抓取正常

### 巴士动漫（🚌spider）— 需 spider

同一站点的 guard 版本（`csp_Dm84Guard`），作为播放兜底。

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

## 实测验证（OK影视 5.0.8 / Redmi Note 8 Pro）

| 项目 | 结果 |
|---|---|
| 配置加载 | 6 源全部识别 |
| 兔小贝 列表/详情 | 正常（儿歌/故事/国学/启蒙，含时长） |
| 兔小贝 播放 | 正常（mp4 直链，AudioTrack started） |
| 动漫巴士 列表/详情/搜索 | 正常（国漫/日漫/欧美/电影，6 集剧集） |
| 动漫巴士 播放 | 正常（webview 解析 iframe，画面实测变化） |
| 巴士动漫(spider) 列表/详情 | 正常（含导演/演员/简介） |
| 巴士动漫(spider) 播放 | 正常 |

## 汪汪队立大功（PAW Patrol）

### 分组 `汪汪队全`（需 spider，资源最全）

从饭太硬 spider 里搬来的 6 个 guard 源，`api` 直接用该 spider 内的真实类名：

| 源 | api | ext |
|---|---|---|
| 📺热播 | `csp_AppTTGuard` | 密文（native 解） |
| 🐻剧圈 | `csp_AppSxGuard` | 密文（native 解） |
| 👀瓜子 | `csp_AppgzGuard` | — |
| 👽玩偶哥哥 | `csp_WoGGGuard` | `{"Cloud-drive":...}` |
| 🍄比特 | `csp_BttwooGuard` | — |
| 🥝荐片 | `csp_JPJGuard` | — |

实测这 6 个都能搜到汪汪队（热播有全集 212 集，剧圈有芒果4K/爱奇艺4K 线路）。

> 原理：`spider` 字段下载 1.4MB 的 jar → DexClassLoader 加载 →
> `Init.init()` → `csp_XXXGuard` 类可用 → ext 密文由 native `decrypt` 解开。
> 所以只要 spider URL 有效，就可以在任意配置里直接复用这些源。

### 分组 `汪汪队`（免 spider）

单独设了 `汪汪队` 分组，3 个公开采集源，搜索"汪汪队"即可：

| 源 | 实测结果 |
|---|---|
| 🐶量子 | 20 条（大电影 + 第 1~10 季），m3u8 直链手机可访问 |
| 🐶暴风 | 20 条（大电影/超能救援/第二季…），m3u8 直链 200 |
| 🐶红牛 | 16 条（大电影3/第五季/第七季…） |

说明：饭太硬源里的 44 个 `csp_*Guard` 是 native 加密壳，只能在 App 内核搜索；
以上 3 个是公开苹果 CMS 采集源，不依赖 spider，任何客户端都能搜到。
注意：采集源是全站影视库（不止儿童内容），按需在搜索框搜"汪汪队"即可。

## 常见问题

**首页空白？** 历史原因已修复：
1. drpy2 引擎原本依赖 `fs-im-kefu.7moor-fs1.com` 的模板/gbk 资源，该域名 403，
   导致 JS 引擎初始化失败。已改为自托管 `js/drpy2.js`（模板/gbk 内联）。
2. 兔小贝官网首页改版（`.pic-list` 消失），原"推荐"规则失效，
   已改用官方 `mip-data` JSON 接口。

## 更新记录

- 2026-10-30 初版：从饭太硬源（`http://www.饭太硬.cc/tv`，JPEG 图片隐写配置）提取儿童相关源并整理
