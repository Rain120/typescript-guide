## Previously

```js
const digit = 100000;
// 怎么获取 digit 的长度呢？
digit.length;
```

## 定义 <Badge text='Typescript in 关键字' />

:::theorem as
用来手动指定一个值的类型([类型断言  或 类型保护](../../type-assertion/README.md))。换句话来说，就是你比编译器更了解这个变量的类型是什么。
:::

## 使用

```ts
const someValue: any = "this is a string";
const strLength: number = (someValue as string).length;
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


