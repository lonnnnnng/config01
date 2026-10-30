# 影视配置合集

> 基于 [OK影视 / fongmi](https://github.com/FongMi/Release)（TVBox 分支）整理的配置。
> 目标：儿童/动漫内容为主，兼顾通用影视。

## 目录

| 文件 | 说明 |
|---|---|
| `kids.json` | **主用配置，46 个源**。含 spider（guard 源可用） |
| `kids-lite.json` | **免 spider 配置，17 个源**。任何 TVBox 客户端可直接用 |
| `js/drpy2.js` | 自托管 drpy2 引擎（已去除对 `7moor` 的死依赖） |
| `js/tuxiaobei.js` | 兔小贝站点规则（官方首页改版后重写） |
| `js/dm84.js` | 动漫巴士站点规则（自写） |
| `book.json` / `hot.json` / `radio.json` / `zhuiju/` | 其他配置（小说 / 排行榜 / 电台 / 追剧） |

## 导入地址

配置本身依赖 GitHub，国内需走加速。以下 3 个前缀实测均可用（手机端全部 200）：

```
https://gh-proxy.com/https://raw.githubusercontent.com/lonnnnnng/config01/main/kids.json
https://ghfast.top/https://raw.githubusercontent.com/lonnnnnng/config01/main/kids.json
https://git.yylx.win/https://raw.githubusercontent.com/lonnnnnng/config01/main/kids.json
```

免 spider 版把文件名换成 `kids-lite.json` 即可：

```
https://gh-proxy.com/https://raw.githubusercontent.com/lonnnnnng/config01/main/kids-lite.json
https://ghfast.top/https://raw.githubusercontent.com/lonnnnnng/config01/main/kids-lite.json
https://git.yylx.win/https://raw.githubusercontent.com/lonnnnnng/config01/main/kids-lite.json
```

## kids.json（46 源）

```
【影视】24   guard 源（需 spider）
  豆豆 / 玩偶哥哥 / 荐影 / 易听音乐 / 光影 / 厂长 / 海绵 / 瓜子 / 比特 /
  糯米 / 文采 / 奶酪 / 热播 / 风云 / 茉莉 / 剧圈 / 荐片 / 奥特 /
  新6V / AiDj / MTV / 急救 / 哔哔合集 / 哔哔演唱会

【采集】11   CMS 采集源（无需 spider）
  量子 / 暴风 / 最大 / 非凡 / 电影天堂 / 360 / 猫眼 / 速播 / 光速 / 豪华 / U酷

【儿童】7
  巴士动漫(guard) / 少儿教育 / 小学课堂 / 初中课堂 / 高中课堂
  兔小贝(线路1) / 动漫巴士(线路1)

【备用】4
  兔小贝(线路2、3) / 动漫巴士(线路2、3)
```

### 代理线路

兔小贝、动漫巴士这类 JS 源需要从 GitHub 拉取引擎和规则。为防某个代理失效，各配了 3 条线路：

| 线路 | 代理 | 实测 |
|---|---|---|
| 1 | `gh-proxy.com` | ✅ 稳定 |
| 2 | `ghfast.top` | ✅ 最稳 |
| 3 | `git.yylx.win` | ✅ 偶有波动 |

某条线路失效时，进「备用」组换一条即可。

## kids-lite.json（17 源）

```
【儿童】2   兔小贝(line1) / 动漫巴士(line1)
【采集】11  量子 / 暴风 / 最大 / 非凡 / 电影天堂 / 360 / 猫眼 / 速播 / 光速 / 豪华 / U酷
【备用】4   兔小贝(line2/3) / 动漫巴士(line2/3)
```

**没有 `spider` 字段**，也不含任何 `csp_*Guard` 源。换客户端、或者不想下载 1.4MB 的 guard 包时用它。

## 关于 spider 与 guard 源

`kids.json` 的 `spider` 字段指向一个伪装成 jpg 的 APK（1.4MB）：

```
https://xiuxiu-pro-new.meitudata.com/posters/c2759c9c03b22f2242475139110972c7.jpg
;md5;d2a33b53d09ec59c4cb7e3f482ef3907
```

- 客户端下载后存为 `cache/jar/<md5>.jar`，用 `DexClassLoader` 动态加载，不安装、无图标
- 里面的 `csp_XXXGuard` 类只是壳，真实逻辑在加密的 `assets/ftyshinidie.guard`，由 OLLVM 混淆的 `.so` 在运行时解密
- 所以这些源**必须依赖这个 spider**；`kids-lite.json` 不含它们

> spider 地址由第三方 CDN 提供，**可能随时更换**。如果 guard 源全部失效，需要重新找新的 spider 地址。

## 实测状态（手机 WiFi / 联通）

| 项 | 结果 |
|---|---|
| 配置拉取（3 个代理） | 200 |
| spider 1,386,820B | 200，MD5 校验一致 |
| drpy2 / tuxiaobei / dm84（3 条线路） | 全部 200 |
| 7 个网易云 ext | 200 (0.2s) |
| 采集源 | 量子/最大/非凡/电影天堂/360/猫眼/速播 稳定；暴风/光速/豪华/U酷 偏慢 |
| 兔小贝 播放 | mp4 直链，实测可播 |
| 动漫巴士 播放 | iframe → webview 解析，实测可播 |
| guard 源 播放 | 热播/剧圈/瓜子/玩偶/比特/荐片/巴士动漫 实测可播 |

## 已知限制

1. **采集源响应慢**：光速/豪华/U酷 5 个源 `quickSearch:0`，不参与首页聚合搜索，但进源内可搜
2. **部分采集源会失效**：免费 CMS 站常换域名，已移除红牛/极速/魔都/爱奇艺等实测不可用的
3. **图床反代失效**：原配置的 `cmcc.vvvv.ee` 已 403，`hosts` 字段已清空，个别源封面可能显示不出来（不影响播放）
4. **代理依赖**：`gh-proxy.com` 等都是第三方免费服务，随时可能挂

## 更新记录

- 2026-10-30 整理为 `kids.json`（46 源）+ `kids-lite.json`（17 源），删除旧的全量版
