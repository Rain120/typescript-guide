## 定义

`infer` 最早出现在此 [PR](https://github.com/Microsoft/TypeScript/pull/21496) 中, 表示在 `extends` 条件语句中待推断的类型变量。

`infer` 关键词常在条件类型中和 `extends` 关键词一同出现, 表示**将要推断的类型, 作为类型变量可以在三元表达式的 `true` 部分引用**。而 `ReturnType` 正是使用这种方式提取到了函数的返回类型。

使用 `infer`, 编译器确保您已经显式声明了所有类型变量。

## 使用

```ts
type Unpacked<T> = T extends (infer U)[]
    ? U
    : T extends (...args: any[]) => infer U
    ? U
    : T extends Promise<infer U>
    ? U
    : T;

type T0 = Unpacked<string>; // string
type T1 = Unpacked<string[]>; // string
type T2 = Unpacked<() => string>; // string
type T3 = Unpacked<Promise<string>>; // string
type T4 = Unpacked<Promise<string>[]>; // Promise<string>
type T5 = Unpacked<Unpacked<Promise<string>[]>>; // string
```

`infer` 可以用来推断联合类型

```ts
type Foo<T> = T extends {a: infer U; b: infer U} ? U : never;

type T10 = Foo<{a: string; b: string}>; // string
type T11 = Foo<{a: string; b: number}>; // string | number
```

同样，在变数位置中针对同一类型变量的多个候选会导致得出交集类型：

```ts
type Bar<T> = T extends {a: (x: infer U) => void; b: (x: infer U) => void} ? U : never;
type T20 = Bar<{a: (x: string) => void; b: (x: string) => void}>; // string
type T21 = Bar<{a: (x: string) => void; b: (x: number) => void}>; // string & number
```

## 内置类型

### 用于提取函数类型的返回值类型

```ts
/**
 * 获取函数 T 的返回类型
 */
type ReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : any;
```

更多有关于 `ReturnType` [Here](../../utility-types/#returntype-t)

#### Demo

```ts
type Func = (...args: any) => string | number;

type ReturnValue = ReturnType<Func>; // string | number
```

### 用于提取构造函数中参数 (实例) 类型

构造函数可以使用 `new` 来实例化, 因此它的类型通常表示如下:

```ts
type Constructor = new (...ages: any[]) => any;
```

当 `infer` 用于构造函数类型中, 可用于参数位置 `new (...args: infer P) => any` 和 返回值位置 `new (...args: any[]) => infer P`。

因此就内置如下两个映射类型:

```ts
// 获取参数类型
type ConstructorParameters<T extends new (...args: any[]) => any> = T extends new (
    ...args: infer P
) => any
    ? P
    : never;

// 获取实例类型
type InstanceType<T extends new (...args: any[]) => any> = T extends new (...args: any[]) => infer R
    ? R
    : any;
```

#### Demo

```ts
class TestClass {
    constructor(public name: string, public string: number) {}
}

type Params = ConstructorParameters<typeof TestClass>; // [string, numbder]

type Instance = InstanceType<typeof TestClass>; // TestClass
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

[infer PR: Type inference in conditional types](https://github.com/Microsoft/TypeScript/pull/21496)

[typescript-2-8](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-8.html)

[type-inference-in-conditional-types](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-8.html#type-inference-in-conditional-types)

[TypeScript 面试题](https://github.com/LeetCode-OpenSource/hire/blob/master/typescript_zh.md)