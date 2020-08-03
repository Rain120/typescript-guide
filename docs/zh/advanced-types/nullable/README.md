## 定义

:::theorem Nullable
`TypeScript` 里空类型 `(void)` 有两种: `undefined` 与 `null`, 是 `(除never外)` 其它所有类型的子类型。

默认情况下, 类型检查器认为 `null`与 `undefined`可以赋值给任何类型。 `null`与 `undefined`是所有其它类型的一个有效值。
:::

解决方式有两种:

### 可选参数和可选属性

当你使用了 `--strictNullChecks` 配置, 可选参数列表会自动加上 `| nudefined`。

```ts
function setName(name?: string) {
  return name || 'Rain120';
}

setName('Lily');
setName();

```

### 类型保护 和 类型断言

#### [类型保护](../type-guard/README.md)

```ts
function setName(name?: string) {
  if (name === null) {
    return 'Rain120';
  }
  return name;
}
```

当然, 你也可以通过短路运算符 `|` 来实现的。

```ts
function setName(name?: string) {
  return name || 'Rain120';
}
```

#### [类型断言](../../type-assertion/README.md)

```ts
function setName(name?: string) {
  return name!;
}
```

更多操作符相关, 请到 [Here](../../operator/README.md)

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


