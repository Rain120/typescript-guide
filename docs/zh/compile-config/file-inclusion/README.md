## 定义

这些设置用于确保 `TypeScript` 处理正确的文件。

## 关键字

### extends

默认值: `false`

`extends` 的值是一个字符串，它包含要继承的另一个配置文件的路径。路径可以使用 `Node.js` 样式解析。

首先加载基本文件中的配置，然后由 **继承的配置文件** 中的配置覆盖。**在配置文件中找到的所有相对路径都将相对于它们最初所在的配置文件进行解析。**

值得注意的是，从 **继承的配置文件** 中 [包含(include)](#include) 和 [排除(exclude)](#exclude) 的文件会覆盖从 **基本配置文件** 中 [包含(include)](#include) 和 [排除(exclude)](#exclude) 的文件，并且配置文件之间不允许循环。

目前，唯一被排除在继承之外的顶级属性是 [references](#references)。

**Note👇👇👇**

- 继承的配置文件: `tsconfig.json`

- 基本配置文件: `tsconfig.base.json`

`tsconfig.base.json`
```json
{
  "compilerOptions": {
    "noImplicitAny": true,
    "strictNullChecks": true
  }
}
```

`tsconfig.json`
```json
{
  "extends": "./tsconfig.base"
}
```

在配置文件中找到的具有相对路径的属性(没有从继承中排除)将相对于它们的起始配置文件进行解析。

### exclude

默认值: `["node_modules", "bower_components", "jspm_packages"]`, 如果指定了一个, 则加上 `outDir` 的值。

它是用来指定解析 `include` 时应跳过的文件名或模式数组, 也就是文件过滤列表 (`glob` 匹配模式)。

```json
{
  "exclude": ["node_modules"]
}
```

### include

默认值: 除非被指定了文件, 否则就是 `["**/*"]`。

指定要包含在程序中的文件名或模式的数组。这些文件名是相对于包含`tsconfig.json` 的目录解析的文件。

```json
{
  "include": ["src/**/*", "tests/**/*"]
}
```

它将会包含

```sh
.
├── scripts                ⨯
│   ├── lint.ts            ⨯
│   ├── update_deps.ts     ⨯
│   └── utils.ts           ⨯
├── src                    ✓
│   ├── client             ✓
│   │    ├── index.ts      ✓
│   │    └── utils.ts      ✓
│   ├── server             ✓
│   │    └── index.ts      ✓
├── tests                  ✓
│   ├── app.test.ts        ✓
│   ├── utils.ts           ✓
│   └── tests.d.ts         ✓
├── package.json
├── tsconfig.json
└── yarn.lock
```

::: tip
`include` 和 `exclude`支持通配符来生成 `glob`模式, 如下 👇👇👇:

-   **\*** 匹配 0 或多个字符(不包括目录分隔符)

-   **?** 匹配一个任意字符(不包括目录分隔符)

-   **\*\*/** 递归匹配任意子目录

如果一个 `glob` 模式里的某部分只包含 `* 或 .*`, 那么仅有支持的文件扩展名类型被包含在内(比如默认 `.ts`, `.tsx`, 和 `.d.ts`, 如果 `allowJs: true` 还包含 `.js` 和`.jsx`)。
:::

### files

默认值: `false`

指定程序中包含的文件的允许列表。如果无法找到任何文件，就会发生错误。

```json
{
	"files": ["main.ts", "supplemental.ts"]
}
```

**Note:** 当您只有少量文件且不需要使用 `glob` 来引用许多文件时，这很有用。如果需要，那么使用[include](#include)。

### references

默认值: `false`

项目引用是一种将你的 `TypeScript` 程序结构成更小块的方法。使用`Project References` 可以极大地改进构建和编辑器的交互时间, 强制组件之间的逻辑分离, 并以新的和改进的方式组织代码。

```json
{
  "files": ["main.ts", "supplemental.ts"]
}
```

你可以在 **官方手册** 中的[项目参考(Project References)](https://www.typescriptlang.org/docs/handbook/project-references.html)资料部分阅读更多关于参考资料如何工作的内容, 或者参考我另一篇笔记获取更多有关于 [Project References](../references/README.md) 的信息。

### typeAcquisition

默认是: `false`

当你的编辑器中有一个 `JavaScript` 项目时, `TypeScript` 会使用`@types` 定义的 `DefinitelyTyped` 集合自动为你的节点模块提供类型。这称为自动类型获取, 您可以使用配置中的 `typeAcquisition` 对象对其进行自定义。

如果您想禁用或自定义此特性, 请创建 `jsconfig.json` 在项目的根目录中

```json
{
	"typeAcquisition": {
		"enable": false
	}
}
```

如果你有一个特定的模块, 应该包括(但不在 `node_modules` 中)

```json
{
	"typeAcquisition": {
		"include": ["jest"]
	}
}
```

如果不应该自动获取某个模块, 例如, 如果该库在您的 `node_modules` 中可用, 但您的团队已经同意不使用它

```json
{
	"typeAcquisition": {
		"exclude": ["jquery"]
	}
}
```

在`TypeScript 4.1`中, 还添加了禁用文件名触发类型获取的特殊大小写的功能。

```json
{
	"typeAcquisition": {
		"disableFilenameBasedTypeAcquisition": true
	}
}
```

这意味着在你的项目中有一个像 `jquery.js` 这样的文件不会自动从`DefinitelyTyped` 下载 `JQuery` 的类型。

## 快来耍耍啊

### 🌰🌰

<!-- 题目 -->

```

// template

```

### 游乐场

<br />

<Editor
  value='// enjoy yourself'
/>

### 参考答案

```ts
// answer
```

## 参考资料

[typescript lang: File Inclusion](https://www.typescriptlang.org/tsconfig#Project_Files_0)
