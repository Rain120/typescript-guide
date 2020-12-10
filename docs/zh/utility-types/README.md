## 定义

`Typescript` 提供了几种 **实用工具类型**, 方便进行常见的类型转换。这些**实用工具类型**在全局范围内都可以使用。

## 实用工具类型

变量 `K`, `T`, `V` 详见[常见的一些泛型变量含义](../generics/#常见的一些泛型变量含义)

### `Partial<T>`

[Typescript 2.1 新增工具方法](https://devblogs.microsoft.com/typescript/announcing-typescript-2-1-2/)

#### 定义

构造一个类型 `T`, 将类型 `T`的所有属性设置为 **可选属性**。该工具类方法将返回一个表示输入类型 `(T)` 的所有自己的类型。

#### 使用

```ts
interface Todo {
	title: string;
	description: string;
}

function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
	return { ...todo, ...fieldsToUpdate };
}

const todo1 = {
	title: 'organize desk',
	description: 'clear clutter',
};

const todo2 = updateTodo(todo1, {
	description: 'throw out trash',
});

```

#### 源码实现

```ts
type Partial<T> = {
	[P in keyof T]?: T[P];
}

```

[直接体验](https://www.typescriptlang.org/play/#code/PTAEAUEMCcBcEtIBsBQL4DtYFNoDNIBjbUAFQHsATc0AbxQEgFYlsAuUAZ1mkwHMA3I0rZOhXgAcE5DB268MglAF80eAK4ZC0jKHUTKkHBWoAKWFXIcT5ADSg88bEkqcKAVQNH2EGAmQAPDYAfACUdIzQ2LDq0Lq0oAB0yRbU9smJjs6uHl44oMpCqiiEMtygqeQAjKAAvBFM8Cw+AOTk0HyQGPAAXiQinADWLbbCouLwUvAyHC2ErDCg8+qwONAjKkIlZbAVlgBMdXp52DbmllX29AwDE1MzoC2wABbQ5ADuoOQrFdCQnM8NspQgIgA)

### `Readonly<T>`

[Typescript 2.1 新增工具方法](https://devblogs.microsoft.com/typescript/announcing-typescript-2-1-2/)

#### 定义

构造一个所有属性都设置为 **只读** 属性的类型 `T`, 这意味着 **无法** 再次对所有构造类型的属性进行 **赋值**。

#### 使用

```ts
interface Properties {
	cute: boolean;
	handsome: boolean;
}

let mine: Readonly<Properties> = {
	cute: true,
	handsome: true,
}

mine.handsome = false;
// Cannot assign to 'handsome' because it is a read-only property.(2540)

```

该工具对于表示在运行时会失败的赋值表达式很有用, 例如 [`Object freeze`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze)

```ts
function freeze<T>(obj: T): Readonly<T>;

```

#### 源码实现

```ts
type Readonly<T> = {
	readonly [P in keyof T]: T[P];
}
```

[直接体验](https://www.typescriptlang.org/play/?ssl=20&ssc=1&pln=1&pc=1#code/PTAECUFMEMBMHsB2AbAngKHQS0QF0gE4Bm0AxpKAAoHwAOhuWkAzqAN7oCQpArvgFygARvHjIYiANxcAFtESxm8ALaRBIsROkBfTONyhlONRBgIUqADzU6DJswB8oALzsuvAaFwEekADSy8ooqJt6+AbroRoiQAHRyCkqqLqAkyMyQkkA)

### `Record<K, T>`

[Typescript 2.1 新增工具方法](https://devblogs.microsoft.com/typescript/announcing-typescript-2-1-2/)

#### 定义

构造一个属性为 `K` 类型, 属性值为 `T` 类型的类型。可用于将一个类型的属性 **映射到** 另一个类型中。

#### 使用

```ts
// Record
interface Page {
	title?: string | undefined;
	content?: string | undefined;
}

type PageType = 'home' | 'about' | 'contact';

const site: Record<PageType, Page> = {
	home: {
		content: 'home'
	},
	about: {
		title: 'about',
		content: 'about'
	},
	contact: {
		title: 'contact',
		// Error: Type '{ title: string; name: string; }' is not assignable to type 'Page'.
		// Object literal may only specify known properties,
		// and 'name' does not exist in type 'Page'.
		name: 'Rain120'
	},
}

```

#### 源码实现

```ts
type Record<K extends keyof any, T> = {
	[P in K]: T;
}
```

[直接体验](https://www.typescriptlang.org/play?#code/PTAECUFMGMHsCcAmAoAlgOwC6XgMwIbSSgAK+A5sQN7ICQmqmANpAPwBcoAzpvBuaAA+oAK7pEkXBkiIA3HThZIWDt178ho8ZOlzkAX2TJMATwAOxMpQAq54gF5QAcgAWsALaQnmp-gBGsCKY3sJOipiEwfLIijzcjJCcUHBIADxWkLYWADSkFJAAfKCONLRunpyltOHKmJyuHl50+tl0-oF1oFUMzInO7UFOrbTVsEpY9QPBzcPhkZV09Iws9XPQwa2gW9tbIKBZxE5UoD0ranzo5LKg6PgV5-zX+t6oXDewmKD4XFyo5Ld+FgnWAnOzODJOAB0yB2Oz2AHk-AArGCfJgJeD4Jigdz4EygMZMfFcCzQVC4fEAa3QsAA7uhQGZ4LALPAGJAuJtYbswPhxM5bp5vIhYBz3p9IAAPV6fDCgizg-JQxaCvpOcD4DAARgATAAGJwzAxAA)

### `Pick<T, K>`

[Typescript 2.1 新增工具方法](https://devblogs.microsoft.com/typescript/announcing-typescript-2-1-2/)

#### 定义

通过从类型 `T` **选取** 属性 `K` 的集合来构造类型。

#### 使用

```ts
interface Todo {
  title: string;
  description: string;
  isCompleted: boolean;
}

type TodoWithDay = Pick<Todo, 'title' | 'isCompleted'>

const plan: TodoWithDay = {
  title: 'Writing for Typescript Guide',
  isCompleted: true
}

```

#### 源码实现

```ts
type Pick<T, K extends keyof T> = {
  [P in K]: T[P];
}
```

[直接体验](https://www.typescriptlang.org/play/?ssl=1&ssc=1&pln=15&pc=1#code/PTAEAUEsGMGsCh6QHYBcCmAnAZgQ2uqACoD2AJiaAN7yh2iqSoA26AXKAM6qYoDmAblr0y6TtF4AHRiWQduvZIOF1InAMIkAtpNYYyHAEYkSrXMiEBfRKgCekwqQoB1JgAsAIrlugAvBBhYAB4nEgAaUAByRhZ0SNAAHyi1TR09dDJIgD5EaFluUF1zDlDXVE9vP2oVBiZWDkjnXkYlUGwSTGJ7MQlIaVAAcQBXSFFIsJqU7V10fQ4eIfR4ayA)

### `Omit<T, K>`

[Typescript 3.5 新增工具方法](https://devblogs.microsoft.com/typescript/announcing-typescript-3-5/)

#### 定义

通过从 类型 `T` 中 **选取** 所有属性, 然后 **删除** 传入的属性 `K` 来构造新类型。

#### 使用

```ts
interface Todo {
  title: string;
  description: string;
  isCompleted: boolean;
}

type TodoWithDay = Omit<Todo, 'description'>

const plan: TodoWithDay = {
  title: 'Writing for Typescript Guide',
  isCompleted: true
}
```

#### 源码实现

```ts
type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>
```

[直接体验](https://www.typescriptlang.org/play/?ssl=9&ssc=32&pln=9&pc=43#code/PTAEHkFsEsBcCh7QHawKYCcBmBDAxmqACoD2AJiaAN7yh2ixwA2aAXKAM6wYoDmA3LXpk0HPDwAOjEsnZceyAULrQOAYRKQJLdGXYAjEiRY5kggL6JYATwmFSFAOpwAFgBEc10AF4IMWAA8DiQANKAA5CJiktLI4QB8iHgyXKDapuzBzrDunj7UygzMbBGOPIyKoFgkGMS2ouLQUqAA4gCu0CLhIYWqGlo6aHoMGG1o8JZAA)

### `Exclude<T, U>`

[Typescript 2.8 新增工具方法](https://devblogs.microsoft.com/typescript/announcing-typescript-2-8-2/)

#### 定义

通过从类型 `T` 中 **剔除** 可赋值给 `U` 的属性来构造一个新类型。

#### 使用

```ts
type T0 = Exclude<"a" | "b" | "c", "a">;  // "b" | "c"

type T1 = Exclude<"a" | "b" | "c", "a" | "b">;  // "c"

type T2 = Exclude<string | number | (() => void), Function>;  // string | number

```

#### 源码实现

```ts
type Exclude<T, U> = T extends U ? never : T;
```

[直接体验](https://www.typescriptlang.org/play/?ssl=1&ssc=4&pln=1&pc=15#code/PTAEFEA8GMBsFcAmBTAUKgLgTwA7NACoAMoAvBDAigDwBEAhraAD6i0BGTrt0tANG0YA+ANyhQINpxZte6bHkIBGMhThJkdRjI5dZ-QXt2jxknrXm58BAEyqo6mgGcMAJwCWAOwDmMz-ABbdmRXGQAKMIBKMiFQADcAe3dESIEAMXhPaAx3BM8TCTAXDx8-QODXVCA)

### `Extract<T, U>`

[Typescript 2.8 新增工具方法](https://devblogs.microsoft.com/typescript/announcing-typescript-2-8-2/)

#### 定义

通过从类型 `T` 中 **挑选** 可赋值给 `U` 的属性来构造一个新类型。

#### 使用

```ts
type T0 = Extract<'a' | 'b', 'a'> // 'a'

type T1 = Extract<'a' | 'b' | (() => void), Function> // () => void
```

#### 源码实现

```ts
type Extract<T, U> = T extends U ? T : never;
```

[直接体验](https://www.typescriptlang.org/play/?ssl=1&ssc=4&pln=1&pc=11#code/PTAEFEA8BcCcEMDG0BQLoE8AOBTUAVABlAF4IYFkAeAcnhtAB9QaAjGgGhfoD5QRuNNJlwEAjKXJwk0WvSYt2CgBTKAlKT4A3APYBLACZquAMQCuAO2R6dFvgPWbQuw0A)

### `NonNullable<T>`

[Typescript 2.8 新增工具方法](https://devblogs.microsoft.com/typescript/announcing-typescript-2-8-2/)

#### 定义

#### 使用

```ts
// NonNullable

type T0 = NonNullable<'a' | null> // 'a'

type T1 = NonNullable<'a' | null | undefined> // 'a'
```

#### 源码实现

```ts
type NonNullable<T> = T extends null | undefined ? never : T;
```

[直接体验](https://www.typescriptlang.org/play/?ssl=1&ssc=4&pln=1&pc=15#code/PTAEDkHsDtwVwDYIIYCMEFMBQWAuBPABw1ABUAGUAXghniTUwB4BnXAJwEtoBzUAH1DQ4AW1QZ2A0HGgATDADNuGWQD4A3KFAhQbLrynCxEnAWJkAjNVqxEKdBlYduPANoBdQ3akz5S6CoaWjp6Lh5AA)


### `Parameters<T>`

#### 定义

构造一个关于函数类型 `T` 的 **参数类型** 的元组类型。请到 [#26019](https://github.com/Microsoft/TypeScript/issues/26019)

#### 使用

```ts
declare function f1(arg: { a: number, b: string }): void

type T0 = Parameters<() => string>;  // []

type T1 = Parameters<(s: string) => void>;  // [string]

type T2 = Parameters<(<T>(arg: T) => T)>;  // [unknown]

type T4 = Parameters<typeof f1>;  // [{ a: number, b: string }]

type T5 = Parameters<any>;  // unknown[]

type T6 = Parameters<never>;  // never

type T7 = Parameters<string>;  // Error

type T8 = Parameters<Function>;  // Error
```

#### 源码实现

```ts
type Parameters<T> = {
  T extends (...args: infer P) => any ? P : never
}
```

[直接体验](https://www.typescriptlang.org/play/?ssl=3&ssc=1&pln=19&pc=42#code/PTAEAUEMCdIWwKYBcHQM4CgMBMEGMAbGBUAMwFcA7PJASwHtKyBGAChgHMAuUAb1Eg9K5OACNUAGlCieaJNFqUOoAL4BKHgDd6tbFiQBPAA4kAKgAZQAXggx4yVGgA8rNdYB8oOQqXuA3KCgIKAA2gC6+sZmzNa2sIgo6C5osvKKHG5Wntq6-oHBId7pERiGJqCmAEyxUPEOSaxOpu7s0NwVmZ6manlBYCFUANaU9ADulCVlZgAsNXYJjk5T9KQsvQX8gqDCYpLSqT7KKpNRFQCsc3WJzpCUButgQyPj4ZHlpgBsl-bXTpQImlQD22ANQbzMAHZvgskkVfAE+qAAKLQaD0aDgioADmh9WcADEqDQGJRgSi0dAgA)


### `ConstructorParameters<T>`

#### 定义

通过 `ConstructorParameters` 类型, 我们可以 **提取** 构造函数类型的 **所有参数类型**。 它会生成构造函数所具有的所有参数类型的元组类型(如果 `T` 不是函数, 则不返回)。

#### 使用

```ts
type T0 = ConstructorParameters<ErrorConstructor>;  // [(string | undefined)?]

type T1 = ConstructorParameters<FunctionConstructor>;  // string[]

type T2 = ConstructorParameters<RegExpConstructor>;  // [string, (string | undefined)?]
```

#### 源码实现

```ts
type ConstructorParameters<T> = {
  T extends new (...args: infer P) => any ? P : never
}
```

[直接体验](https://www.typescriptlang.org/play/?ssl=3&ssc=1&pln=7&pc=88#code/PTAEGEHsDsGcBcBOBXAxvSiAKBDROBbAU3iMVgCgL4BPAByNABUAGUAXghgRXU13zFS5ADwBRRIkxQ4SNBkQA+ANyhQIUAG0AFDwCW0AOagAPqGTQAJkQBmBopYCUAfgC6VWg2YBGDl1m8CgKEJGSwIgBiFuh6MDI88pgqahr6Rpru1PSMTABMfvFyfNh4IcLhAEpEhmIAHnSFgUmq6mCaaYYANKC6SAbGZhbWdtAOLq5AA)

### `ReturnType<T>`

[Typescript 2.8 新增工具方法](https://devblogs.microsoft.com/typescript/announcing-typescript-2-8-2/)

#### 定义

构造一个由函数 `T` 的返回类型组成的新类型。

#### 使用

```ts
declare function f1(): { a: number, b: string }

type T0 = ReturnType<() => string>;  // string

type T1 = ReturnType<(s: string) => void>;  // void

type T2 = ReturnType<(<T>() => T)>;  // {}

type T3 = ReturnType<(<T extends U, U extends number[]>() => T)>;  // number[]

type T4 = ReturnType<typeof f1>;  // { a: number, b: string }

type T5 = ReturnType<any>;  // any

type T6 = ReturnType<never>;  // any

type T7 = ReturnType<string>;  // Error

type T8 = ReturnType<Function>;  // Error
```

#### 源码实现

```ts
type ReturnType<
  T extends (...args: any[]) => any
> = T extends (...ages: any[]) => infer R ? R : any;
```

[直接体验](https://www.typescriptlang.org/play/?ssl=1&ssc=4&pln=1&pc=15#code/PTAECUFMBcFcCcB2AVAngB0gKCwE0gMYA2AhvJKAGayIHQCWA9olQIwAUAlAFygDeoEr0SwAtgCNI8ADShxvAM7R49RAHNQAXyzQMFZAAZQAXggwEKPQB4uJgHyglK9XYDcoUCEfLVanXtBkVhMzOCQ0TBsFRR91TntQADdGelw3Dy9k1P9MQIAmEKgwy0j2K2Q7W2MHZE50zzA+bV1c5ABmQvNw6zLkUEgAD2hIRFwFUABVWQn+oZGx0BEJKQBtAF1K+OrAuvcGxbFJeHWc-QAWTuKIyCsWyEZKNnqvASED5Zk5GOcNZoDkACslws1ysJEQqGeYHBqFOgQAbMDupFEJBElIoYIIXDkAB2JElG5OXyYgCi8HgjHgOIAHATQQAxGh0JiIMkUqlAA)

### `InstanceType<T>`

[Typescript 2.8 新增工具方法](https://devblogs.microsoft.com/typescript/announcing-typescript-2-8-2/)

#### 定义

构造y一个由构造函数 `T` 的 **实例类型** 组成的新类型。

#### 使用

```ts
class C {
	x = 0;
	y = 0;
}


type T0 = InstanceType<typeof C>;  // C

type T1 = InstanceType<any>;  // any

type T2 = InstanceType<never>;  // any

type T3 = InstanceType<string>;  // Error

type T4 = InstanceType<Function>;  // Error
```

#### 源码实现

```ts
type InstanceType<
  T extends new (...args: any[]) => any
> = T extends new (...args: any[]) => infer R : R : any;
```

[直接体验](https://www.typescriptlang.org/play/?ssl=17&ssc=39&pln=17&pc=44#code/PTAECUFMBcFcCcB2AVAngB0gKCwYwDYCGAzsaAMKgDeWodoAHqALygAMA3Lfai+1wF8cWaBkihkbPgElExaIUS5IaTAB5RmAPYAzCgD4OdEBRybxyAIwy5CpSrFrFqQ8bDOzYiQCYb8xcqqkGqIkABukPCuoCYeIl7IAMx+doGO8vAAlogA5tEmAKLw8FrwnpgSACwpAQ7qAGKwStCZWoj5YEUl8EA)

### `Required<T>`

[Typescript 2.8 rc 新增工具方法](https://devblogs.microsoft.com/typescript/announcing-typescript-2-8-rc/)

#### 定义

#### 使用

```ts
interface Profile {
  name: string;
  age?: number;
  gender?: string;
};

// OK
const profile: Profile = {
  name: 'Rain120',
};

// Type '{ name: string; }' is missing the following properties
// from type 'Required<Profile>': age, gender(2739)
const ID_Card: Required<Profile> = { 
  name: 'Rain120',
};
```

#### 源码实现

```ts
type Required<T> = {
  [P in keyof T]-?: T[P];
}
```

操作符相关问题请到 [Here](../operator/README.md)

[直接体验](https://www.typescriptlang.org/play/#code/PTAECUFMEcFcEsBOkAmAoN8B2AXSiAzAQwGNJQAFRAewPgBtyBvNUN0LIgW0gC5QAzjkTYA5gG5W7IqMgB+fllhcARvkntQsrCnwLBwsZIC+ktCFAB5ANJoS1LENAAHGnUb8qtBuQC8oFk1OHn4AcnAibABGACYABlCAGjRTDDsHJwBJABEAfQBhIkQUfig4JFQAHi93SAA+UH8mUCk2YL5QcMisWITk0yA)


### `ThisParameterType`

#### 定义

提取函数类型的 `this` 参数的类型, 如果函数类型没有 `this` 参数, 则 [未知](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-0.html#new-unknown-top-type)。

注意: 仅当启用 `--strictFunctionTypes` 时, 此类型才能正常工作。 请到 [#32964](https://github.com/microsoft/TypeScript/issues/32964)

#### 使用

```ts
function toHex(this: Number) {
  return this.toString(16);
}

function numberToString(n: ThisParameterType<typeof toHex>) {
  return toHex.apply(n);
}
```

[直接体验](https://www.typescriptlang.org/play/?ssl=3&ssc=1&pln=9&pc=2#code/PTAEBUAsEsGcAUCGAnRBbApgFw88BPABwwCgSAzAVwDsBjLaAe2tC0YAkMAPACixlgAuUADlKaAEa4AlKADeJUEtDJslZC35wAdGwDKWZNGoBzHgEYAbNIDcJAL5kqdBs1DVxUvIwNHTPamEoOCRUTBw8IgwAHiwoxnJWDm4APlkFZRU1DSTOLm1EQkIAG3wA2wcgA)


### `OmitThisParameter`

#### 定义

从函数类型中删除 `this` 参数。

注意: 仅当启用 `--strictFunctionTypes` 时, 此类型才能正常工作。请到 [#32964](https://github.com/microsoft/TypeScript/issues/32964)

#### 使用

```ts
function toHex(this: Number) {
	return this.toString(16);
}

// The return type of `bind` is already using `OmitThisParameter`, this is just for demonstration.
const fiveToHex: OmitThisParameter<typeof toHex> = toHex.bind(5);

console.log(fiveToHex());
```

[直接体验](https://www.typescriptlang.org/play/?ssl=8&ssc=18&pln=8&pc=35#code/PTAEHkFsEsBcBUAW0DOAFAhgJw5AprHlgFDEBmArgHYDGs0A9laLAwBJ4AeAFLMigC5QAOQqQARkQCUoAN7FQi0FgIUszPqgB0rAMqws0KgHNuARgBsUgNzEAvqRCgkeZavUsAngAdXDMqAABuJGACaBoKigGAA2KhihnqAUKEbGQVBwSKiYOPiEWIEANCz8kSigAFYpsKBkDFigoXiQTCgGGPRMWsQ0bbVk0ABuePDsXEKZCPy5uAREADywPnj+LOOcAHygALzrHJxaIVSh3ACsNqR9VCgMMXhaMQymgyNjB9xSNkA)


### `ThisType<T>`

#### 定义

该工具 **不会返回转换后** 的类型。 相反, 它是一个用作上下文类型中键入 `this` 类型的标记。 注意, 必须启用 `–noImplicitThis` 标志才能使用此工具。

#### 使用

```ts
// Compile with --noImplicitThis

type ObjectDescriptor<D, M> = {
  data?: D;
  methods?: M & ThisType<D & M>;  // Type of 'this' in methods is D & M
}

function makeObject<D, M>(desc: ObjectDescriptor<D, M>): D & M {
  let data: object = desc.data || {};
  let methods: object = desc.methods || {};
  return { ...data, ...methods } as D & M;
}

let obj = makeObject({
  data: { x: 0, y: 0 },
  methods: {
    moveBy(dx: number, dy: number) {
      this.x += dx;  // Strongly typed this
      this.y += dy;  // Strongly typed this
    }
  }
});

obj.x = 10;
obj.y = 20;
obj.moveBy(5, 5);

```

- 在上面的示例中, `makeObject` 的参数中的 `methods` 对象具有包含 `ThisType` 的上下文类型; 因此, 在 `methods` 对象内的方法中, 方法的 `this` 类型为 `{x: number, y: number}＆{moveBy (dx: number, dy: number) : number}`。 请注意 `methods` 属性的类型是如何同时成为方法中 `this` 类型的推断目标和来源的。
- `ThisType` 标记接口仅仅是在 `lib.d.ts` 中声明的一个空接口。 除了在对象字面量的上下文类型中被识别外, 该接口的作用类似于任何空接口。

[直接体验](https://www.typescriptlang.org/play/#code/PTAEBUAsEsGdwJ4AcCmAoNJQGED2BbJaAGxVAHdoAXSUAWjoDtcBJQ46AY2qjgyuRkA8gCMAVik5UAIilicATtCRVcCgDzSANKACyAPlABeUAG80oS6AAmAQyq2A-AC5Q0gNwWr+FDVzXYFz1QADIIGHhBTVC9fXdLLERUUFwAM1AAcho4DNBoRlAfPwC82DcY3TQAXwxUgFdGKWhcAvxbAGsUUQkpTR0DAAprOU5XbskZEaUVNT7YgEpXaQqzL0tSKht7W1dccQnjGxGAOjsHUAAfC7MqzytQDcLfSH9YXf2pQ+H5Y6KXkquNzuVgUvjqCgKplAxxhZ1sOhhv2er1AVVAtjKyzCuk8NTQjz2YkObU64ykA3M9zhrihAA9XAAGHQIRmorRrJ7FN6re73fC4ABuKAAQgghvTQIw6vgRCgFDprCzJdLZQp5jzeZrsrBjrTQABqEzWWnxUBYADKVAULQA5sQEKABKhrI6IhzNZZtccHYabAhTRarbb7Y7BC7te6rDV7jUqvNPGhCbrDgBGBmeJMOkwAJnTifEv0FIrFAFYdCX40A)


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

[handbook - utility-types](https://www.typescriptlang.org/docs/handbook/utility-types.html)

[handbook - mapped-types](https://www.typescriptlang.org/docs/handbook/advanced-types.html#mapped-types)

[Microsoft TypeScript wiki Road map](https://github.com/Microsoft/TypeScript/wiki/Roadmap)

[Microsoft TypeScript #21316 Conditional Types](https://github.com/Microsoft/TypeScript/pull/21316)

[Microsoft TypeScript #21496 infer pull request](https://github.com/Microsoft/TypeScript/pull/21496)

[Conditional types in TypeScript](https://artsy.github.io/blog/2018/11/21/conditional-types-in-typescript/)
