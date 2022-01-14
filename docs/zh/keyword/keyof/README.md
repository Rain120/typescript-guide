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

// number
const id = prop(todo, "id");

// string
const text = prop(todo, "text");

// boolean
const done = prop(todo, "done");

```

## 使用

```ts
interface Profile {
  name: string;
  age: number;
}

// 'name' | 'age'
type Keys = keyof Profile;

// 'string' | 'number'
type TypeKeys = keyof { [K: string]: Profile};
```

### 访问值

可通过 **T[K]** 索引访问。

```ts
interface Profile {
  name: string,
  readonly age: number,
}

// string
type Name = Profile['name']

// string | number
type NameAge = Profile['name' | 'age']

// 如果[]中的key有不存在T中的，则是any;
// 因为ts也不知道该key最终是什么类型，所以是any;
// 且也会报错
// any
type GetValueFromUnknownKey = Profile['name' | 'unknownKey']

// string | number
type ProfileValue = Profile[keyof Profile]

```

## ⚠️ 注意

对于 **任何类型T**, **keyof T**的结果为该类型上所有 **公有(public)属性key** 的联合。

```ts
interface Profile {
  name: string,
  readonly age: number,
}

// ProfileKeys 的类型实则是 name | age
type ProfileKeys = keyof Profile;

class PersonProfile {
  private name: string;
  protected home: string;
  public readonly age: number;
}

// PersonProfileKeys 实则被约束为 age
// 而 name 和 home 不是公有属性，所以不能被 keyof 获取到
type PersonProfileKeys = keyof PersonProfile;
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
