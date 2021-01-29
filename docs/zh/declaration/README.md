## 定义 <Badge text='WIP' type='warning' />

## 使用

### `declare var` 声明全局变量

```ts
```

### `declare function` 声明全局方法

```ts
```

### `declare class` 声明全局类

```ts
```

### `declare enum` 声明全局枚举类型

```ts
```

### `declare namespace` 声明（含有子属性的）全局对象

```ts
```

### `interface` 和 `type` 声明全局类型

```ts
```

### `export` 导出变量

```ts
```

### `export namespace` 导出（含有子属性的）对象

```ts
```

### `export default ES6` 默认导出

```ts
```

### `export = commonjs` 导出模块

```ts
```

### `export as namespace UMD` 库声明全局变量

```ts
```

### `declare global` 扩展全局变量

```ts
```

### `declare module` 扩展模块

```ts
```

### `/// <reference />` 三斜线指令

```ts
```

### declare module vs declare namespace

在 `Typescript` 中指定模块的方式有以下两种:

- with quotes

```ts
declare module "buffer" {} // with quotes
```
表示外部模块`(ES6模块)`，当前在`.d.ts`文件中用于将多个`ES6`模块放在一个文件中:
```ts
declare module "buffer" {}
declare module "fs" {}
```

- without quotes

```ts
declare module buffer {} // without quotes
```
被用作 `namespace`，现在被替换为:
```ts
declare namespace buffer {}
```

> 需要注意的是，在 `TypeScript 1.5` 中，命名法发生了变化。内部模块 `(Internal modules)` 现在是 _namespaces_。外部模块 `(External modules)` 现在只是简单的 _modules_。_内部模块_ 是没有引号的模块

[更多信息可以到 Github issue#13774](https://github.com/Microsoft/TypeScript/issues/13774)

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

[handbook: namespaces](https://www.typescriptlang.org/docs/handbook/namespaces.html)

[handbook: Namespaces and Modules](https://www.typescriptlang.org/docs/handbook/namespaces-and-modules.html)

[handbook: declaration-files](https://www.typescriptlang.org/docs/handbook/declaration-files/templates/module-d-ts.html)

[How do I use namespaces with TypeScript external modules?](https://stackoverflow.com/questions/30357634/how-do-i-use-namespaces-with-typescript-external-modules)

[Validators in a single file](https://www.typescriptlang.org/docs/handbook/namespaces.html#validators-in-a-single-file)

[Module vs Namespace - Import vs Require Typescript](https://stackoverflow.com/questions/38582352/module-vs-namespace-import-vs-require-typescript)

[Is typescript Namespace feature deprecated?](https://michelenasti.com/2019/01/23/is-typescript-namespace-feature-deprecated.html)

[Module vs Namespace - Import vs Require Typescript](https://stackoverflow.com/questions/38582352/module-vs-namespace-import-vs-require-typescript)
