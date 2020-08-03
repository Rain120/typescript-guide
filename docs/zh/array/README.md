## 定义

`TypeScript` 像 `JavaScript` 一样可以操作数组元素。 

## 使用

有以下几种方式可以定义数组。

### 元素类型 + []

```ts
const list: number[] = [1, 2, 3];
```

### 数组泛型, `Array<元素类型>`

```ts
const list: Array<number> = [1, 2, 3];
```

泛型相关, 请到 [Here](../generics/README.md)

### 接口

```ts
interface List {
  [index: number]: number;
}

const list: List = [1, 2, 3];
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

[Handbook - array](https://www.typescriptlang.org/docs/handbook/basic-types.html#array)

[数组的类型](https://ts.xcatliu.com/basics/type-of-array.html)