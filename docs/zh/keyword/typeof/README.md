## Previously

`typeof` 只能校验基本类型只能返回这种类型, `undefined`, `boolean`, `string`, `number`, `object`, `function`。

## 定义 <Badge text='Typescript typeof 关键字' />

:::theorem typeof
用于获取变量的声明类型。
:::

**Note:**

- 参数:  `typeof` 只接受我们正在检查其变量类型的变量的名称, 该变量的名称在右侧, 而左侧则没有。

- 返回: `类型 (Type)` 的值。

## 使用

```ts
function getType(val: any) {
  return typeof val;
}

getType('name'); // string

const COLORS = {
  red: 'red',
  blue: 'blue'
}

// 通过 typeof 操作符获取 color 变量的类型
type Type = typeof COLORS
// {
// 	red: string;
// 	blue: string;
// }
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


