## 定义

**接口** 是 `Typescript` 中一个很重要的概念, 主要是对类型的行为进行抽象, 描述, 并进行类型检查

## 使用

```ts
interface Profile {
	name: string;
	age?: string | number;
	gender: 'MALE' | 'FEMALE';
}
```

## interface 和 type 有什么异同点？

[interface-declarations](https://github.com/Microsoft/TypeScript/blob/master/doc/spec.md#71-interface-declarations)

> An interface cannot declare a property with the same name as an inherited private or protected property.

[type-aliases](https://github.com/Microsoft/TypeScript/blob/master/doc/spec.md#310-type-aliases)

> An interface can have multiple merged declarations, but a type alias for an object type literal cannot

### 相同点

- 描述一个对象或者函数

```typescript
export interface IUser {
  id: string | number;
  name: string;
  age?: number;
}

export interface IGetUser {
  (id: string | number): IUser;
}

export type User = {
  name: string;
  age?: number;
}

export type GetUser = (id: string | number): User;

```

- 允许类型拓展(`type`不能使用`extends`关键字)

```typescript
interface FE extends IUser {
  type: string;
}

type FE = { type: string; } & User;

```

### 不同点

- `type` 可以声明基本类型别名, 联合类型, 元组等类型

- `interface` 能够声明合并

```typescript
interface IUser {
  id: string | number;
}

interface IUser {
  name: string;
  age?: number;
}

=>
interface IUser {
  id: string | number;
  name: string;
  age?: number;
}
```

##### 参考



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

[handbook - type-inference](https://www.typescriptlang.org/docs/handbook/type-inference.html)

[interfaces](https://basarat.gitbook.io/typescript/type-system/interfaces)

[typescript-interfaces-vs-types](https://stackoverflow.com/questions/37233735/typescript-interfaces-vs-types)
