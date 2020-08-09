## 定义 <Badge text='Typescript keyof 关键字' />

:::theorem keyof
`keyof` 也称为输入索引类型查询, 与之相对应的是索引访问类型, 也称为查找类型, 用来取得一个对象接口的所有 `key` 值, 返回一个联合类型。

:::right
[Typescript 2.1 新增](https://devblogs.microsoft.com/typescript/announcing-typescript-2-1-2/#keyof-and-lookup-types)

:::

## 使用

```ts
interface Profile {
  name: string;
  age: number;
}

type Keys = keyof Profile; // 'name' | 'age'
type TypeKeys = keyof { [K: string]: Profile}; // 'string' | 'number'
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


