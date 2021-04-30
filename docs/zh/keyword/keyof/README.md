## Previously

`JavaScript` 是一种动态语言。有时在静态类型系统中捕获某些操作的语义可能会很棘手。

```js
function prop(obj, key) {
  return obj && obj[key] ? obj[key] : null; // lodash.get(prop, key)
}
```

该函数接收 `obj` 和 `key` 两个参数，并返回对应属性的值。对象上的不同属性，可以具有完全不同的类型，我们甚至不知道 `obj` 对象长什么样。

```ts
function prop(obj, key: string) {
  return (obj as any)[key];
}
```
## 定义 <Badge text='Typescript keyof 关键字' />

:::theorem keyof
`keyof` 也称为输入索引类型查询, 与之相对应的是索引访问类型, 也称为查找类型, 用来取得一个对象接口(某种类型)的所有 `key` 值, 返回一个联合类型。

:::right
[Typescript 2.1 新增](https://devblogs.microsoft.com/typescript/announcing-typescript-2-1-2/#keyof-and-lookup-types)

:::

## 如何解决上述问题

```ts
type Todo = {
  id: number;
  text: string;
  done: boolean;
}

const todo: Todo = {
  id: 1,
  text: "Learn TypeScript keyof",
  done: false
}
// extends 关键字约束该类型必须是 object 类型的子类型
function prop<T extends object, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}

const id = prop(todo, "id"); // const id: number
const text = prop(todo, "text"); // const text: string
const done = prop(todo, "done"); // const done: boolean
```

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

[TypeScript keyof 操作符](https://cloud.tencent.com/developer/article/1595718)
