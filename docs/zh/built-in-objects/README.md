## 定义

**内置对象** 是指根据标准`(ECMAScript, DOM, BOM 等其他标准)`在全局作用域 `(Global)` 上已经存在定义的对象。`JavaScript` 中有很多 [标准内置对象](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects), 它们可以直接在 `TypeScript` 中当做定义好了的类型。

## ECMAScript 的内置对象

从 `MDN` 中 [JavaScript 标准内置对象](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects) 中, 我们知道 `JavaScript` 有很多 **内置对象**, 比如 `String`， `Boolean`, `Date`等等。那在 `Typescript` 中, 我们改怎么取定义这些类型呢？

```ts
// https://github.com/microsoft/TypeScript/blob/2dd7a4bf939ffac4002ea9c76651166ba457ac70/src/lib/es5.d.ts#L497
const name: String = new String('Rain120');

// https://github.com/microsoft/TypeScript/blob/2dd7a4bf939ffac4002ea9c76651166ba457ac70/src/lib/es5.d.ts#L509
const handsome: Boolean = new Boolean(true);

// https://github.com/microsoft/TypeScript/blob/2dd7a4bf939ffac4002ea9c76651166ba457ac70/src/lib/es5.d.ts#L709
const birthday_month: Date = new Date('11');
```

这里我们使用 `Typescript` 来实现下 `Boolean` 定义。

```ts

interface Boolean {
    /** Returns the primitive value of the specified object. */
    valueOf(): boolean;
}

interface BooleanConstructor {
    new(value?: any): Boolean;
    <T>(value?: T): boolean;
    readonly prototype: Boolean;
}

declare var Boolean: BooleanConstructor;
```

更多`ES5` 相关的内置对象定义在这👉👉👉 [Here on Typescript Definition](https://github.com/microsoft/TypeScript/blob/master/src/lib/es5.d.ts)

## DOM & BOM 的内置对象

[DOM (文档对象模型)](https://developer.mozilla.org/zh-CN/docs/Web/API/Document_Object_Model) 和 `BOM (浏览器对象模型)`提供了很多内置对象，比如 `NodeList`, `HTMLElemnt` 等内置对象。

```ts
// https://github.com/microsoft/TypeScript/blob/2dd7a4bf939ffac4002ea9c76651166ba457ac70/src/lib/dom.generated.d.ts#L10984
const divs: NodeList = document.querySelectorAll('div');

// https://github.com/microsoft/TypeScript/blob/master/src/lib/dom.generated.d.ts#L10984
interface Window {
  history: History
}

console.log(window?.history)
```



更多`DOM` 相关的内置对象定义在这👉👉👉 [Here on Typescript Definition](https://github.com/microsoft/TypeScript/blob/master/src/lib/dom.generated.d.ts)

## 包内置对象

当你使用 `Typescript` 写 `Node` 时, 你会发现很多都没有语法提示，这时，你需要执行下面的命令

```sh
npm install @types/node
```

在 `@types/node` 已经将 `node` 所有的内置对象的 `typescript` 的定义都定义好了，当前很多 `typescript` 包也都有这类的 `type` 定义, 你可以通过下列命令来 **查询是否存在类型定义** 且 **安装类型定义文件**

```sh
# 查询是否存在类型定义
npm search @types/xxx

# 安装
npm install @types/xxx
```

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

[Typescript 核心文件库](https://github.com/Microsoft/TypeScript/tree/master/src/lib)

[JavaScript 标准内置对象](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects)

[文档对象模型 DOM](https://developer.mozilla.org/zh-CN/docs/Web/API/Document_Object_Model)

[MDN Window](https://developer.mozilla.org/zh-CN/docs/Web/API/Window)