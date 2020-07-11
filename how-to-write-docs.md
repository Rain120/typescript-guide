## 如何写文档?

文档的规范, 以及如何方便快捷的书写 ✍️ 文档

## 新建文件

在`docs/zh`中新建一个文件, 并新建一个 `README.md`的文件

**请保证每一个文件夹都有一个 `README.md`文件**

**手动创建**

```sh
touch docs/zh/test/README.md
```

**自动生成 `docs model`**
```sh
npm run docs
```

```sh
? please input the docs model name:  model
? please input the docs model alias name (default same as model name)? 
? generator model path (etc: docs/zh/model) ? docs/zh
```

`Eg: File Path`

```sh
├── guide
│   └── README.md
├── how-to-config-docs
│   └── README.md
└── how-to-write-docs
    └── README.md
```

### Tips & FAQs 如何添加到子目录下

#### Tips

```sh
? npm run docs

? please input the docs model name:  tips-test
? please input the docs model alias name (default same as model name)? 测试新增 tips
? generator model path (etc: docs/zh/model) ? docs/zh/tips
```

#### FAQs

```sh
? npm run docs

? please input the docs model name:  faqs-test
? please input the docs model alias name (default same as model name)? 测试新增 faqs
? generator model path (etc: docs/zh/model) ? docs/zh/faqs
```

## 配置别名

### 简约配置方式

通过使用 [新建文件](#新建文件) 的脚本来动态配置 `alias`, 妈妈再也不用担心我找不到配置了。

## 图片

`~@images`路径 `->` 根路径

```md
![images.png](~@images/src/xxx)
```

`Eg:`

```md
![wechat-zhifubao-pay.png](~@images/wechat-zhifubao-pay.png)
```

## 导入代码块

你可以在文档中展示你的代码, 只需要使用下面方式即可

```md {highlight number}
<<< @/filepath
```

**Note:** `filepath`是你文档的路径

`Eg:`

```md {1}
<<< @/scripts/deploy.sh
```

## 数学公式

你可以在文档中使用 **`markdown`** 来书写一下数学公式

```md
$$
y=\begin{cases}
-x,\quad x\leq 0 \\\\
x,\quad x>0
\end{cases}
$$
```

## Badge 徽章

- **Props:**

  - `text - string`

  - `type - string`, 可选值: `'tip' | 'warning' | 'error'`, 默认值是: `'tip'`

  - `vertical - string`, 可选值: `'top' | 'middle'`, 默认值是: `'top'`

- **Usage:**

你可以在标题中, 使用这个组件来为某些 API 添加一些状态：

```md
Badge <Badge text='默认主题' /> <Badge text='warning' type='warning'/> <Badge text='error' type='error'/>
```

## 自定义容器

```md
::: tip
This is a tip
:::

::: warning
This is a warning
:::

::: danger
This is a dangerous warning
:::
```

## Emoji

```md
:tada: :100:
```
