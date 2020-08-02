## 定义

有时候你会比 `Typescript` 更了解你的值的类型, `Typescript` 允许你使用你想要的方式分析并覆盖它, 这种机制被称为 **「类型断言」**。

## 使用

类型断言有 **两种形式**:

### as

```ts
const someValue: any = "this is a string";

const strLength: number = (someValue as string).length;
```

### <> 尖括号

```ts
const someValue: any = "this is a string";

const strLength: number = (<string>someValue).length;
```

**Note:** 当你在 **`.jsx`** `or` **`.tsx`** 中使用 **尖括号** 的方式进行类型断言时, 会造成 **语言歧义**, 为了保持一致性, 推荐使用 `as` 语法来进行 **类型断言**。[相关体验](https://www.typescriptlang.org/play?#code/JYOwLgpgTgZghgYwgAgApQPY2AGxQbwCgBIEOAWwgC5kBnMKUAcwG4S4nrkQBXcgI2jIAPnQbM2AX0KEEGEPWRweYABYYoyALzIAPOiy4IAPnyS2hZWo0A6MpW3IA5ACU4oAIwAmAAxPCQA)

## 双重断言

原理: 任何类型都可以被断言为 `any`, 而 `any` 可以被断言为任何类型。

```ts
interface Person {
	name: string;
}

const mine = 'Rain120';

((age as any) as Person).name;

```

**Note:** 双重断言极具破坏性, 而且它很可能会导致运行时错误, 慎用 !!!

## ! 后缀类型断言

我们知道 `Nullable` 类型实质上是 [**联合类型**](../advanced-types/union-types/README.md), 那么同样面临类型缩窄的问题。对此, `TypeScript` 也提供了符合直觉的类型保护。

自动类型保护无法处理的场景可以通过 `!` 后缀来去除 `Nullable`部分, 即 `null | undefined`。

```ts
interface Profile {
  name: string;
  age?: number | string;
}
function getParentInfo(profile: Profile): number | string {
  return profile!.age!;
}
```

更多操作符相关, 请到 [Here](../operator/README.md)

## 类型断言 与 类型转换

在计算机科学中, **[类型转换 (type conversion)](https://zh.wikipedia.org/zh-cn/%E7%B1%BB%E5%9E%8B%E8%BD%AC%E6%8D%A2)** 是指将数据从一种类型 **转换成** 另一种类型的过程。所以 **类型转换** 是在 **运行时** 转换的, 而 **类型断言** 只是一个编译时的语法, 为编译器提供关于如何分析代码的方法。

若要进行类型转换, 需要直接调用类型转换的方法:
```ts
Boolean();

String();

parseInt();

// etc...
```

## 断言判断

- **C类型** 是 **P类型** 的 **子类型**

- **P类型** 是 **C类型** 的 **子类型**

**C类型** 能被断言为 **P类型**。

## 快来耍耍啊

### 🌰🌰

<!-- 题目 -->

请解决👇👇👇报错

```ts
interface Profile {
	name: string;
	age: number | string;
}

const author = {};

// Property 'name' does not exist on type '{}'.(2339)
author.name = 'Rain120';

```

### 游乐场

<br />

<Editor
  value='// enjoy yourself'
/>

### 参考答案

```ts

interface Profile {
	name: string;
	age: number | string;
}

const author = {} as Profile;

// const author = <Profile>{};

author.name = 'Rain120';

```

## 参考资料

[Handbook - type-assertion](https://www.typescriptlang.org/docs/handbook/basic-types.html#type-assertions)

[深入理解 Typescript](https://jkchao.github.io/typescript-book-chinese/typings/typeAssertion.html)

[Typescript - type-assertion](https://ts.xcatliu.com/basics/type-assertion.html)
