## 定义 <Badge text='持续补充' type='Success' />

Typescript 提供的实用工具类型并不能完全满足我们的需求，很多时候，我们都需要自定义一些满足我们需求的工具类型。

### 集合的操作

### 交集

**定义: 对于给定的两个集合，返回一个包含两个集合中共有元素的新集合。**

我们可以借助[Pick](https://rain120.github.io/typescript-guide/zh/utility-types/#pick-t-k) 和 [Extract](https://rain120.github.io/typescript-guide/zh/utility-types/#extract-t-u)来实现。

```ts
type Intersection<T extends object, U extends object> = Pick<
  T,
  Extract<keyof T, keyof U> & Extract<keyof U, keyof T>
>
```

[直接体验](https://www.typescriptlang.org/play?#code/C4TwDgpgBACgjFAvFA3lAdgQwLYQFxQDOwATgJboDmANFJpfkaRZVAL4BQoksATEqgw5GxclVr1G6AK7YARhBK0G6ACaKColuw5dw0AJLpgiwhADGwMgHt0AHg5QnUACpQIADxNrCUa3IArC2BqR2cAVXcvCB8-QOCOAD4BGDJzAGsHZ1dQ7IBRLxJMSzt0iBBrADMcqDKK6vDkgDIoAtJi4FLyqqhw2jqel0Sk3W5oGAEjExIzSxt7eFoYXkSgA)

### 并集

**定义: 对于给定的两个集合，返回一个包含两个集合中所有元素的新集合。**

```ts
// 合并交叉类型
type Compute<T extends any> = T extends Function
  ? T
  : { [K in keyof T]: T[K] }

// P1: { name: string, age: string }
// P2: { name: string, gender: string }
// Res => { name: string, age: string } & { gender: string }
//     => { name: string, age: string, gender: string }
type Merge<T extends object, U extends object> = Compute<
  T & Omit<U, keyof T>
>
```

#### demo

```ts
type P1 = {
  name: string,
  age: string
}
type P2 = {
  name: string,
  age: number,
  gender: string
}

type Intersection<
    T extends object,
    U extends object
> = Pick<
    T,
    Extract<keyof T, keyof U> & Extract<keyof U, keyof T>
>

// { name: string, age: string }
type P = Intersection<P1, P2>
```

#### demo

```ts
type P1 = {
  name: string,
  age: string
}
type P2 = {
  name: string,
  age: number,
  gender: string
}

type Compute<T extends any> = T extends Function ? T : {
    [K in keyof T]: T[K]
}

type Merge<T extends object, U extends object> = Compute<
    T & Omit<U, keyof T>
>

// { name: string; age: string; gender: string; }
type P = Merge<P1, P2>
```

[直接体验](https://www.typescriptlang.org/play?#code/C4TwDgpgBACgjFAvFA3lAdgQwLYQFxQDOwATgJboDmANFJpfkaRZVAL4BQoksATEqgw5GxclVr1G6AK7YARhBK0G6ACaKColuw5dw0AMIB7bGGnAIAHgAqUCAA8LawnXQgAfANsOnqlwDFpdABjYDIjdCgAfihbAhQOKCSoAG0AaSgKKABrCBAjADNYgF0Ca3Tijk49HgBZRQYbO0cIZygjOQArCFDaAFVm3xcO7tDPZGNTcytE5NsAMigAeWwyYEs+2lz8out3Dn2a6BgBepJG+FoYXn2gA)

这里合并之后会发现，age 属性是使用前面属性的类型，这里如何解决呢？

### Overwrite

```ts
type Overwrite<
  T extends object,
  U extends object,
  I = Diff<T, U> & Intersection<U, T>
> = Pick<I, keyof I>
```

#### demo

```ts
type P1 = {
  name: string,
  age: string
}
type P2 = {
  name: string,
  age: number,
  gender: string
}

type Intersection<
    T extends object,
    U extends object
> = Pick<
    T,
    Extract<keyof T, keyof U> & Extract<keyof U, keyof T>
>

type Diff<
  T extends object,
  U extends object
> = Pick<
  T,
  Exclude<keyof T, keyof U>
>

type Compute<T extends any> = T extends Function ? T : {
  [K in keyof T]: T[K]
}

type Merge<T extends object, U extends object> = Compute<
  T & Omit<U, keyof T>
>

type Overwrite<
  T extends object,
  U extends object,
  I = Diff<T, U> & Intersection<U, T>
> = Pick<I, keyof I>

type P = Overwrite<P1, P2>
```

[直接体验](https://www.typescriptlang.org/play?#code/C4TwDgpgBACgjFAvFA3lAdgQwLYQFxQDOwATgJboDmANFJpfkaRZVAL4BQoksATEqgw5GxclVr1G6AK7YARhBK0G6ACaKColuw5dw0AJLpgiwhADGwMgHt0AHg5QnUACpQIADxNrCUa3IArC2BqR2cAVXcvCB8-QOCOAD4BGDJzAGsHZ1dQ7IBRLxJMSzt0iBBrADMcqDKK6vDkgDIoAtJi4FLyqqhw2jqel0Sk3W5oABEySsqs5zdPb1VffyDLXIioxeX4yySUtMywpxd1pwLzABtpdS76moGG4eG9HgBha2wwaRM7eejYzDoEDJZB-LZQABi0nQlhs6CgAH5XFACCgjlAANoAaSgFFq3WqLgAugQXNiiRxOC9oABZRQMX6bGJLOKrEK9JmxFbBEFQd6fb4QWbHKAtADy2DInT6+LuQxG1NgAjpJAZ8FoMF4zzGUDFADdFAB3cg-MJg5nbNnrSILC2s4LrAwCSbTX60RqiqBGEwkMyw2x2GXy3mpDJ2Az9Ale7X6XUwAT6o0moXqviJIA)

### 差集

**定义: 对于给定的两个集合，返回一个包含所有存在于第一个且不存在于第二个集合的元素的新集合。**

```ts
type Diff<T extends object, U extends object> = Pick<
  T,
  Exclude<keyof T, keyof U>
>
```

#### demo

```ts
type P1 = {
  name: string,
  age: string
}
type P2 = {
  name: string,
  age: number,
  gender: string
}

type Diff<
    T extends object,
    U extends object
> = Pick<
    T,
    Exclude<keyof T, keyof U>
>

// { gender: string }
type P = Diff<P2, P1>
```

[直接体验](https://www.typescriptlang.org/play?#code/C4TwDgpgBACgjFAvFA3lAdgQwLYQFxQDOwATgJboDmANFJpfkaRZVAL4BQoksATEqgw5GxclVr1G6AK7YARhBK0G6ACaKColuw5dw0ACJkAZsYA8HKFagAVKBAAewCGsJQA9nIBWEAMbBqS2sAVXsnF1U3Tx9-DgA+ARgyXwBrC2tbQIyAUQdfABtpdTMUiBB3Y0yoUvLK4Lj43W5oGAEjUzMYXlp4OKA)

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


