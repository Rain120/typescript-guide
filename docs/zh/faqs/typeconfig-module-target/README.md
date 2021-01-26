## 前置

下面的内容在 `Typescript` 中是一个很常见的配置。

```json
{
	"compilerOptions": {
		"target": "es5",    
		"module": "es6"
	}
}
```

很多时候, 我们会混淆 `target` 和 `module`的意思, 所以这篇, 我们主要是来讲一下这两个的作用。

> **ESNEXT** 表示[最新标准](https://github.com/tc39/proposals)的 `js` 版本

## Target

**指定编译的 `ECMAScript` 目标版本** `(与代码的输出相关)`。 默认值: **"ES3"**

```ts
[
	'ES5',
	'ES2015',
	'ES2016',
	'ES2017',
	'ES2018',
	'ES2019',
	'ESNEXT'
]
```

## Module

**指定生成哪个模块系统代码**。 默认值: 根据 `--target` 选项不同而不同, 即 `target === "ES6" ? "ES6" : "commonjs"`

► 只有 `"AMD"` 和 `"System"` 能和 `--outFile` 一起使用。

► `"ES6"` 和 `"ES2015"` 可使用在目标输出为 `"ES5"` 或更低的情况下

```ts
[
	'none',
	'commonjs',
	'amd',
	'system',
	'umd',
	'es2015',
	'ESNEXT'
]
```

## 如何理解

- **`module` 决定于引入方式**

- **`target` 决定于输出方式**

模块系统独立于语言实现。`ES6(ES2015)` 模块使用 `import / export` 语法, 由模块加载器来解释。

`JavaScript` 本身可能面向 `ES5`, 并且仅使用 `ES5` 功能, 但是从理论上讲, 可以将模块加载器与以`ES2015` 模块语法运行的代码一起使用。尽管有可能, 但不一定要执行此操作。在 `ES5 JavaScript` 中使用 `CommonJS` 或 `AMD` 模块更为常见。

**Note:** 在 `TypeScript 2.0` 之前甚至不允许这种组合。

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

[Understanding "target" and "module" in tsconfig](https://stackoverflow.com/questions/41993811/understanding-target-and-module-in-tsconfig)

[编译选项](https://www.tslang.cn/docs/handbook/compiler-options.html)
