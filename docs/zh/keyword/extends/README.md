## 定义

`extends` 可以用来继承一个类，也可以用来继承一个 `interface`，但还可以用来判断有条件类型

## 使用

### 条件类型

[Typescript 2.8 新增](https://devblogs.microsoft.com/typescript/announcing-typescript-2-8-2/#conditional-types) `extends` 用来条件类型判断。

```ts
T extends U ? X : Y
```

上面的类型表示当 `T` 可分配给 `U` 时，类型为 `X`，否则为 `Y`。

原理是令 `T'` 和 `U'` 分别为 `T` 和 `U` 的实例，并将所有类型参数替换为 `any`，如果 `T'` 能赋值给 `U'`，则将有条件的类型解析成 `X`，否则为`Y`。

```ts
// Remove types from T that are assignable to U ===> 差集
type Diff<T, U> = T extends U ? never : T;
// Remove types from T that are not assignable to U ===> 交集
type Filter<T, U> = T extends U ? T : never;

type T1 = Diff<"a" | "b" | "c" | "d", "a" | "c" | "f">;
//   ^ = type T1 = "b" | "d"
type T2 = Filter<"a" | "b" | "c" | "d", "a" | "c" | "f">; // "a" | "c"
//   ^ = type T2 = "a" | "c"
type T3 = Diff<string | number | (() => void), Function>; // string | number
//   ^ = type T3 = string | number
type T4 = Filter<string | number | (() => void), Function>; // () => void
//   ^ = type T4 = () => void
```

当 `T` 是联合类型时,

```ts
(T1 | T2) extends U ? X : Y
 
 // (T1 extends U | T2 extends U) ? X : Y
```

### 继承

像类一样，接口可以互相扩展。 这使您可以将一个接口的成员复制到另一个接口中，从而在如何将接口分离为可重用组件方面提供了更大的灵活性。

```ts
interface Shape {
  color: string;
}

interface Square extends Shape {
  sideLength: number;
}

let square = {} as Square;
square.color = "blue";
square.sideLength = 10;
```

一个接口可以扩展多个接口，从而创建所有接口的组合。

```ts
interface Shape {
  color: string;
}

interface PenStroke {
  penWidth: number;
}

interface Square extends Shape, PenStroke {
  sideLength: number;
}

let square = {} as Square;
square.color = "blue";
square.sideLength = 10;
square.penWidth = 5.0;
```

### 类继承

```ts
interface Profile {
  name: string;
  age?: string | number;
}

class Person {
  name: string;
  age?: string | number;
  
  construtor(options: Profile) {
    this.name = options?.name;
    this.age = options?.age;
  }
}

 class Boy extends Person {
   gender: string
 }
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

[conditional-types](https://www.typescriptlang.org/docs/handbook/advanced-types.html#conditional-types)

[extending-interfaces](https://www.typescriptlang.org/docs/handbook/interfaces.html#extending-interfaces)

[whats-the-difference-between-extends-and-implements-in-typescript](https://stackoverflow.com/questions/38834625/whats-the-difference-between-extends-and-implements-in-typescript)