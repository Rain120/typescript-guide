<h3 align="center">
  <a href="https://github.com/Rain120/vuepress-docs-template">Vuepress Docs Template</a>
  <img align="center" src="../../.vuepress/public/images/docs.png" />
</h3>

<div align="center">

[![GitHub watchers](https://img.shields.io/github/watchers/rain120/vuepress-docs-template?style=social)](https://github.com/Rain120/vuepress-docs-template/watchers)
[![STAR](https://img.shields.io/github/stars/rain120/vuepress-docs-template?style=social)](https://github.com/Rain120/vuepress-docs-template/stargazers) [![FORK](https://img.shields.io/github/forks/rain120/vuepress-docs-template?style=social)](https://github.com/Rain120/vuepress-docs-template/network/members)

[![ISSUES](https://img.shields.io/github/issues/rain120/vuepress-docs-template?style=flat-square)](https://github.com/Rain120/vuepress-docs-template/issues) [![GitHub closed pull requests](https://img.shields.io/github/issues-pr-closed/rain120/vuepress-docs-template?style=flat-square)](https://github.com/Rain120/vuepress-docs-template/pulls) [![COMMIT](https://img.shields.io/github/last-commit/rain120/vuepress-docs-template?style=flat-square)](https://github.com/Rain120/vuepress-docs-template/commits/master)

![LANGUAGES](https://img.shields.io/github/languages/top/rain120/vuepress-docs-template?style=flat-square)
[![VERSION](https://img.shields.io/github/package-json/v/rain120/vuepress-docs-template?style=flat-square)](https://github.com/Rain120/vuepress-docs-template/blob/master/package.json) [![LICENSE](https://img.shields.io/github/license/rain120/vuepress-docs-template?style=flat-square)](https://github.com/Rain120/vuepress-docs-template/blob/master/LICENSE)

</div>

## 😚 Welcome

Welcome to the Vuepress Docs Template

## 🎮 TL;DR

<!-- ⌨️ To be Continue... -->

[🔨 Usage](#🔨-usage)

## ✍ Why am I doing this?

Easy to write documents for someone.

## 🔨 Usage

### Pure Document

```sh {1}
git clone git@github.com:Rain120/vuepress-docs-template.git

yarn install # or npm install
```

**Deploy**

We are auto deploy when you are commit by the **pre-commit** of the husky hooks. So you just need to add, commit, push. Etc:

```sh
git add .
git commit -m 'feat: vuepress docs template commit'

# if you need to pulls
# git pull origin master

git push origin master
```
::: tip
We can also deploy by yourself, but we also deploy it when you commit, if you want to deploy by yourself, you can modify the **pre-commit** of the husky hooks, remove the command with `npm run deploy`.
:::

```sh
npm run deploy
```

### Project Document

Let me see our template folders.

```sh
tree . -al 3 -I "node_modules|dist|images|.git|.DS_Store"
```

```sh
.
├── .github
│   └── ISSUE_TEMPLATE
│       ├── bug_report.md
│       ├── custom.md
│       └── feature_request.md
├── .gitignore
├── LICENSE
├── README.md
├── commitlint.config.js
├── deploy.sh # copy to your project root
├── docs # copy to your project root
│   ├── .vuepress
│   │   ├── components
│   │   │   └── MySWUpdatePopup.vue
│   │   ├── config.js
│   │   ├── enhanceApp.js
│   │   ├── public
│   │   │   ├── logo.png
│   │   │   └── manifest.json
│   │   ├── styles
│   │   │   └── index.styl
│   │   ├── theme
│   │   └── utils
│   │       ├── alias.js
│   │       ├── copy.js
│   │       ├── nav.js
│   │       ├── plugins.js
│   │       └── sidebarHelper.js
│   ├── README.md
│   └── zh
│       ├── guide
│       │   └── README.md
│       ├── how-to-config-docs
│       │   └── README.md
│       └── how-to-write-docs
│           └── README.md
├── package-lock.json
├── package.json
├── wechat-zhifubao-pay.png
└── yarn.lock
3 [error opening dir]

13 directories, 27 files
```
::: tip
First copy the **docs** folder and the **deploy.sh** file to your project root, and then we need to copy something in **package.json**. Let's do it.
:::

<<< @/package.json

::: tip
Now we had seen all things about **package.json**. We just need **devDependencies**, if you had someone of **devDependencies**, you needn't all of that.
:::

#### devDependencies

```json
{
  "devDependencies": {
    "@vuepress/plugin-back-to-top": "^1.2.0",
    "@vuepress/plugin-blog": "^1.9.2",
    "@vuepress/plugin-google-analytics": "^1.2.0",
    "@vuepress/plugin-medium-zoom": "^1.0.0-rc.1",
    "@vuepress/plugin-pwa": "^1.3.0",
    "conventional-changelog-cli": "^2.0.27",
    "husky": "^3.0.9",
    "lint-staged": "^9.4.3",
    "markdown-it-imsize": "^2.0.1",
    "markdown-it-katex": "^2.0.3",
    "markdown-it-task-lists": "^2.1.1",
    "moment": "^2.24.0",
    "vuepress": "^1.3.1",
    "vuepress-plugin-awesome-gitalk": "^0.0.4"
  }
}
```
::: tip
If you don't want to format your commit and changelog, there 3 **package** you can remove it. But if you need it and you have not config it, please go to [husky](#husky)
:::

```json
{
  "devDependencies": {
    "conventional-changelog-cli": "^2.0.27",
    "husky": "^3.0.9",
    "lint-staged": "^9.4.3"
  }
}
```

#### scripts

```json
{
  "scripts": {
    "lint-staged": "lint-staged",
    "changelog": "conventional-changelog -p angular -i CHANGELOG.md -s -r 0",
    "docs:dev": "vuepress dev docs",
    "docs:build": "vuepress build docs",
    "deploy": "bash deploy.sh"
  }
}
```
::: tip
If you don't want to format your commit and changelog, there 2 **scripts** you can remove it. But if you need it and you have not config it, please go to [husky](#husky)
:::

```json
{
  "scripts": {
    "lint-staged": "lint-staged",
    "changelog": "conventional-changelog -p angular -i CHANGELOG.md -s -r 0"
  }
}
```

#### husky

```json {9}
{
  "lint-staged": {
    "{src}/**/**.ts": [
      "git add"
    ]
  },
  "husky": {
    "hooks": {
      "pre-commit": "npm run changelog && npm run deploy && git add . && lint-staged",
      "commit-msg": "commitlint -E HUSKY_GIT_PARAMS"
    }
  },
}
```

More Config Detail Please Goto the Links.

[how-to-config-docs](docs/zh/how-to-config-docs/README.md)

[how-to-write-docs](docs/zh/how-to-write-docs/README.md)

Now you have all mine, Enjoy yourself!! 😉😉😉

## 🤝 Contributing

![PR](https://img.shields.io/badge/PRs-Welcome-orange?style=flat-square&logo=appveyor)

We welcome all contributions. You can submit any ideas as [pull requests](https://github.com/Rain120/vuepress-docs-template/pulls) or as a GitHub [issue](https://github.com/Rain120/vuepress-docs-template/issues).

## 🔗 Links

- [Vuepress Docs](https://vuepress.vuejs.org/)

- [Demo](https://rain120.github.io/vuepress-docs-template)

- [awesome-javascript-code-implementation github.io](https://rain120.github.io/awesome-javascript-code-implementation/)

## 👨‍🏭 Author

> Front-End development engineer, technology stack: React + Typescript + Mobx, also used Vue + Vuex for a while

- [Github](https://github.com/Rain120)
- [知乎](https://www.zhihu.com/people/yan-yang-nian-hua-120/activities)
- [掘金](https://juejin.im/user/57c616496be3ff00584f54db)

## 📝 License

[MIT](https://github.com/Rain120/vuepress-docs-template/blob/master/LICENSE)

Copyright © 2020-present [Rain120](https://github.com/Rain120).

## ☕ Coffee or Tea

![wechat-zhifubao-pay.png](~@images/wechat-zhifubao-pay.png)
