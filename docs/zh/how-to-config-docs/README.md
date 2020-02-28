## 如何配置文档? <Badge text='Important' type='warning'/>

::: tip
配置文档的细节, 如何方便快捷的配置文档
:::

## Vuepress 目录结构

`VuePress` 遵循 **“约定优于配置”** 的原则，推荐的目录结构如下：

```
.
├── docs
│   ├── .vuepress (可选的)
│   │   ├── components (可选的)
│   │   ├── theme (可选的)
│   │   │   └── Layout.vue
│   │   ├── public (可选的)
│   │   ├── styles (可选的)
│   │   │   ├── index.styl
│   │   │   └── palette.styl
│   │   ├── templates (可选的, 谨慎配置)
│   │   │   ├── dev.html
│   │   │   └── ssr.html
│   │   ├── config.js (可选的)
│   │   └── enhanceApp.js (可选的)
│   │ 
│   ├── README.md
│   ├── guide
│   │   └── README.md
│   └── config.md
│ 
└── package.json

```

:::danger
注意

请留意目录名的大写。
:::

- `docs/.vuepress`: 用于存放全局的配置、组件、静态资源等。
- `docs/.vuepress/components`: 该目录中的 Vue 组件将会被自动注册为全局组件。
- `docs/.vuepress/theme`: 用于存放本地主题。
- `docs/.vuepress/styles`: 用于存放样式相关的文件。
- `docs/.vuepress/styles/index.styl`: 将会被自动应用的全局样式文件，会生成在最终的 CSS 文件结尾，具有比默认样式更高的优先级。
- `docs/.vuepress/styles/palette.styl`: 用于重写默认颜色常量，或者设置新的 stylus 颜色常量。
- `docs/.vuepress/public`: 静态资源目录。
- `docs/.vuepress/templates`: 存储 HTML 模板文件。
- `docs/.vuepress/templates/dev.html`: 用于开发环境的 HTML 模板文件。
- `docs/.vuepress/templates/ssr.html`: 构建时基于 Vue SSR 的 HTML 模板文件。
- `docs/.vuepress/config.js`: 配置文件的入口文件，也可以是 YML 或 toml。
- `docs/.vuepress/enhanceApp.js`: 客户端应用的增强。

:::danger
注意

当你想要去自定义 `templates/ssr.html` 或 `templates/dev.html` 时，最好基于 默认的模板文件 来修改，否则可能会导致构建出错。
:::

同时阅读:

- [配置](https://vuepress.vuejs.org/zh/config/)
- [主题](https://vuepress.vuejs.org/zh/theme/)
- [默认主题配置](https://vuepress.vuejs.org/zh/theme/default-theme-config.html)

[Vuepress 文档](https://vuepress.vuejs.org/zh/guide/directory-structure.html#%E9%BB%98%E8%AE%A4%E7%9A%84%E9%A1%B5%E9%9D%A2%E8%B7%AF%E7%94%B1)

## 配置文件

<<< @/docs/.vuepress/config.js

`util path`

```sh
docs/.vuepress/utils
├── alias.js // 别名
├── copy.js // 复制添加著作信息
├── nav.js // navbar
├── plugins.js // 插件
└── sidebarHelper.js // 自动生成sidebar
```

**Alias Note**

我们不支持中文名文件夹, 所以你需要给文件名配置别名, 只需要在`docs/.vuepress/utils/alias.js`中配置 `key-value`值即可

<<< @/docs/.vuepress/utils/alias.js

**SidebarHelper Note**

我们通过`SidebarHelper`中的 `prefixPath`来自动生成`sidebar`侧边栏菜单, **如果出现侧边栏问题，请检查这个地址对不对。**

<<< @/docs/.vuepress/utils/sidebarHelper.js {11}

## 配置Gitalk

`Gitalk OAuth App Setting`

![gitalk-setting-2](https://rain120.github.io/vuepress-plugin-awesome-gitalk/dist/assets/img/gitalk-setting-2.0f192df7.png)

![gitalk-setting-1](https://rain120.github.io/vuepress-plugin-awesome-gitalk/dist/assets/img/gitalk-setting-1.dfe75d30.png)

```js
module.exports = {
  plugins: [
    [
      'vuepress-plugin-awesome-gitalk', {
        log: true,
        enable: true,
        // 挂载节点
        root: "gitalk-container",
        //最大重试次数
        maxRetryCount: 5,
        // 默认是检查时间
        defaultCheckMinutes: 500,
        // 是否开启首页评论
        home: false,
        // 关闭 Gitalk 评论页面, 正则匹配, eg: /docs/
        ignorePaths: ['/'],
        // gitalk 配置
        gitalk: {
          clientID: 'your clientID',
          clientSecret: 'your clientSecret',
          repo: 'your repo name',
          owner: 'your owner',
          admin: ['your admin'],
          language: 'zh-CN',
        }
      }
    ],
  ]
}
```

- [vuepress-plugin-awesome-gitalk](https://rain120.github.io/vuepress-plugin-awesome-gitalk/dist/)

## 已配置插件

### 外部插件

- [x] Gitalk

- [x] Back-to-top

### 内置插件

- [x] Google Analytics

- [x] PWA

- [x] Blog

- [x] Last Updated

- [x] Medium Zoom
