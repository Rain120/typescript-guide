## 前置知识

### 类型谓词

在[数学逻辑中](https://en.wikipedia.org/wiki/Mathematical_logic), **[谓词](https://en.wikipedia.org/wiki/Predicate_(mathematical_logic))** 通常被理解为[布尔值函数](https://en.wikipedia.org/wiki/Boolean-valued_function) `P：X → {true, false}`, 称为 **X** 上的谓词。非正式地, 谓词是取决于其变量值的对或错的语句。<sup>[\[1\]](https://en.wikipedia.org/wiki/Predicate_(mathematical_logic)#cite_note-1)</sup> 可以将其视为返回 `true` 或 `false` 值的运算符或函数。

**类型谓词** 是一种特殊的返回类型, 它向 `Typescript` 编译器发出信号, 告知特定值是什么类型。**类型谓词** 始终附加到使用单个参数并返回布尔值的函数。类型谓词表示为`argumentName is Type`。

```ts
interface Cat {
  numberOfLives: number;
}
interface Dog {
  isAGoodBoy: boolean;
}

function isCat(animal: Cat | Dog): animal is Cat {
  return typeof animal.numberOfLives === 'number';
}
```

## 定义

> A type guard is some expression that performs a runtime check that guarantees the type in some scope.

:::theorem 类型保护
类型保护就是一些表达式, 它们会在运行时检查以确保在某个作用域里的类型。可以通过 **检测属性、方法或原型, 以确定如何处理值**来实现。
:::

## 使用

### typeof 类型保护

```ts
function padLeft(value: string, padding: string | number) {
  if (typeof x === 'number') {
    return Array(padding + 1).join(' ') + value;
  }
  if (typeof x === 'string') {
    return padding + value;
  }
  throw new Error(`Expected string or number, got '${padding}'.`);
}
```

### instanceof 类型保护

```ts
interface Padder {
	getPaddingString(): string
}

class SpaceRepeatingPadder implements Padder {
  constructor(private numSpaces: number) { }
  getPaddingString() {
		return Array(this.numSpaces + 1).join(' ');
  }
}

class StringPadder implements Padder {
  constructor(private value: string) { }
  getPaddingString() {
		return this.value;
  }
}

function getRandomPadder() {
  return Math.random() < 0.5 ?
		new SpaceRepeatingPadder(4) :
		new StringPadder('  ');
}

// Type is 'SpaceRepeatingPadder | StringPadder'
let padder: Padder = getRandomPadder();

if (padder instanceof SpaceRepeatingPadder) {
  padder; // type narrowed to 'SpaceRepeatingPadder'
}
if (padder instanceof StringPadder) {
  padder; // type narrowed to 'StringPadder'
}
```

`instanceof`的右侧要求是一个构造函数, `TypeScript` 将细化为：

1. 此构造函数的 `prototype`属性的类型, 如果它的类型不为 `any`的话
2. 构造签名所返回的类型的联合

### in 类型保护

```ts
interface Common {
  name: string;
  seeSomething: any;
}

interface Vip {
  name: string;
  doSomething: any;
}

type User = Common | Vip;

function getUserInfo(user: User) {
  if ('doSomething' in user) {
    // vip
  }
  if ('seeSomething' in user) {
    // common
  }
}
```

### 自定义类型保护

有时候 `typeof` 和 `instanceof` 没法满足我们的需求, 我们可以通过自定义类型保护来缩窄类型

```ts
interface CanLayEggs {
  layEggs(): void
}

interface Bird extends CanLayEggs {
  fly(): void
}

interface Fish extends CanLayEggs {
  swim(): void
}

function getSmallPet(): Fish | Bird {
  const fish: Fish = <Fish>{}
  return fish
}

const pet = getSmallPet()

// 使用 自定义的类型保护
function isFish(pet: Fish | Bird): pet is Fish {
  return (<Fish>pet).swim !== undefined
}

if (isFish(pet)) {
  pet.swim()
} else {
  pet.fly()
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

[handbook - type-guards-and-differentiating-types](https://www.typescriptlang.org/docs/handbook/advanced-types.html#type-guards-and-differentiating-types)

[type-guard](https://basarat.gitbook.io/typescript/type-system/typeguard)

[aha-understanding-typescript-s-type-predicates](https://dev.to/daveturissini/aha-understanding-typescript-s-type-predicates-40ha)

[typescript-type-predicates](https://fettblog.eu/typescript-type-predicates/)