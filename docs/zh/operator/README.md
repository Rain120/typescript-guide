## 定义

运算符定义一些将对数据, 变量执行的功能。 运算符所作用的数据称为操作数或者操作变量。

## & 运算符

[交叉类型](../advanced-types/intersection-types/)

```ts
interface Boy {
  handsome: boolean;
}

interface Girl {
  cute: boolean;
}

type Person = Boy & Girl;

const someone: Person = {
	handsome: true,
	cute: false
};
```

## | 运算符

[联合类型](../advanced-types/union-types/)

```ts
interface Boy {
  hair: boolean;
  tall: boolean;
}

interface Girl {
  hair: boolean;
  cute: boolean;
}

type Person = Boy | Girl

const someone: Person = {
  hair: true
}
```

## ! 非空断言操作符

表达式不能为 `null` 或 `undefined` 的方式

> `!`在类型检查器无法得出结论的情况下，可以使用新的后缀表达式运算符来断言其操作数为非`null`且未定义。具体来说，操作`x!`生成一个类型为`x`的值，不包含 `null` 和 `undefined`的值。类似于表单`<T>x`和的类型声明`x as T`。
>
> **Note:** `!`非空断言操作符会从编译生成的 `JavaScript` 代码中移除。

```typescript
class C {
    foo!: number;
    // ^
    // Notice this '!' modifier.
    // This is the "definite assignment assertion"

    constructor() {
        this.initialize();
    }

    initialize() {
        this.foo = 0;
    }
}
```

### 忽略 null 和 undefined 类型

```ts
const profile: any = {
  name: 'Rain120',
  schools: {}
}

const getProfile(profile: any) {
  console.log(profile!.name, profile!.age, profile!.schools!)
}

getProfile(profile);
getProfile();
```

### 忽略函数 undefined 类型

```ts
const curry = (fn: any) => {
  return fn!();
}
```

**Note:**

出现下面情况，需要注意一下，因为`!`非空断言操作符会从编译生成的 `JavaScript` 代码中移除。

```ts
const name: undefined | string = undefined;
const getName: string = name!;
console.log(getName);

// 转换成 ES5 ===>
"use strict";
const name = undefined;
const getName = name;
console.log(getName);
```

[严格的属性初始化](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-7.html#strict-class-initialization)

[非null断言运算符](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-0.html#non-null-assertion-operator)

## ?

- 定义属性用于 **可选属性定义**

```typescript
interface Profile {
  name: string;
  age?: number | string;
}
```

[optional-properties](https://www.typescriptlang.org/docs/handbook/interfaces.html#optional-properties)

- 使用属性用于 **可选的属性访问**

### ?.

**?.** 只会检查其左侧的值是否为 `null` 或 `undefined`, 而不检查任何后续属性。

```ts
const x = foo?.bar.baz

// ===>

const x = (foo === null || foo === undefined)
	? undefined
  : foo.bar.baz();
```

**Note:** `typescript 3.7+`才支持。

[optional-chaining](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-7.html?#optional-chaining)

[Announcing TypeScript 3.7 RC](https://devblogs.microsoft.com/typescript/announcing-typescript-3-7-rc/) -> [译文](https://www.infoq.cn/article/d95pGayR9s4eucUGKSFP)

### ??

**空值合并运算符** 是即将推出的另一个 `ECMAScript 2020`功能, 它与可选的链接并驾齐驱。

**当左侧操作数为 null 或 undefined 时，其返回右侧的操作数，否则返回左侧的操作数**。

```ts
let x = foo ?? bar();

// ===>

let x = (foo !== null && foo !== undefined)
	? foo
  : bar();
```

[nullish-coalescing](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-7.html#nullish-coalescing)

## + -

`TypeScript 2.8` 为映射类型增加了增加或移除特定修饰符的能力。 特别地, 映射类型里的`readonly`或`?`属性修饰符现在可以使用`+`或`-`前缀, 来表示修饰符是添加还是移除。

```ts
type MutableRequired<T> = {
  -readonly [P in keyof T]-?: T[P]
};  // 移除readonly和?
type ReadonlyPartial<T> = {
  +readonly [P in keyof T]+?: T[P]
};  // 添加readonly和?
```

[改进对映射类型修饰符的控制](http://www.tslang.cn/docs/release-notes/typescript-2.8.html)

## _

TypeScript 2.7支持ECMAScript的数字分隔符提案。 这个特性允许用户在数字之间使用下划线（_）来对数字分组（就像使用逗号和点来对数字分组那样）。

```ts
// Constants
const COULOMB = 8.957_551_787e9; // N-m^2 / C^2
const PLANCK = 6.626_070_040e-34; // J-s
const JENNY = 867_5309; // C-A-L^2
```

这些分隔符对于二进制和十六进制同样有用。

```ts
let bits = 0b0010_1010;
let routine = 0xC0FFEE_F00D_BED;
let martin = 0xF0_1E_
```

注意，可能有些反常识，`JavaScript`里的数字表示信用卡和电话号并不适当。 这种情况下使用字符串更好。

[数字分隔符](https://www.tslang.cn/docs/release-notes/typescript-2.7.html)

## \#

TypeScript 3.8 支持在 ECMAScript 中处于 [stage-3](https://github.com/tc39/proposal-class-fields/) 中的私有字段。

```ts
class Person {
    #name: string

    constructor(name: string) {
        this.#name = name;
    }

    greet() {
        console.log(`Hello, my name is ${this.#name}!`);
    }
}

let jeremy = new Person("Jeremy Bearimy");

jeremy.#name
//     ~~~~~
// Property '#name' is not accessible outside class 'Person'
// because it has a private identifier.
```

不同于正常属性（甚至是使用 `private` 修饰符声明的属性），私有字段有一些需要记住的规则：

- 私有字段使用 `#` 字符作为开始，通常，我们也把这些称为私有名称。
- 每个私有字段的名字，在被包含的类中，都是唯一的
- 在 TypeScript 中，像 `public` 和 `private` 修饰符不能用于私有字段
- 私有字段不能在所包含的类之外访问 —— 即使是对于 JavaScript 使用者来说也是如此。通常，我们把这种称为「hard privacy」。

除了「hard privacy」，私有字段的另外一个优点是我们先前提到的唯一性。

正常的属性容易被子类所改写

```ts
class C {
  foo = 10;

  cHelper() {
    return this.foo;
  }
}

class D extends C {
  foo = 20;

  dHelper() {
    return this.foo;
  }
}

let instance = new D();
// 'this.foo' refers to the same property on each instance.
console.log(instance.cHelper()); // prints '20'
console.log(instance.dHelper()); // prints '20'
```

使用私有字段时，你完全不必对此担心，因为每个私有字段，在所包含的类中，都是唯一的

```ts
class C {
    #foo = 10;

    cHelper() {
        return this.#foo;
    }
}

class D extends C {
    #foo = 20;

    dHelper() {
        return this.#foo;
    }
}

let instance = new D();
// 'this.#foo' refers to a different field within each class.
console.log(instance.cHelper()); // prints '10'
console.log(instance.dHelper()); // prints '20'
```

另外有一个值得注意的地方，访问一个有其他类型的私有字段，都将导致 `TypeError`。

```ts
class Square {
    #sideLength: number;

    constructor(sideLength: number) {
        this.#sideLength = sideLength;
    }

    equals(other: any) {
        return this.#sideLength === other.#sideLength;
    }
}

const a = new Square(100);
const b = { sideLength: 100 };

// Boom!
// TypeError: attempted to get private field on non-instance
// This fails because 'b' is not an instance of 'Square'.
console.log(a.equals(b));
```

对于类属性来说，`JavaScript` 总是允许使用者访问没被声明的属性，而 TypeScript 需要使用者在访问之前先定义声明。使用私有字段时，无论时 `.js` 文件还是 `.ts`，都需要先声明。

```ts
class C {
    /** @type {number} */
    #foo;

    constructor(foo: number) {
        // This works.
        this.#foo = foo;
    }
}
```

更多信息，请查看此 [PR](https://github.com/Microsoft/TypeScript/pull/30829)。

### 私有字段与 private 的区别

说到这里使用 `#` 定义的私有字段与 `private` 修饰符定义字段有什么区别呢？现在我们先来看一个 `private` 的示例：

```ts
class Person {
  constructor(private name: string) {}
}

let person = new Person("Semlinker");
console.log(person.name);
```

在上面代码中，我们创建了一个 `Person` 类，该类中使用 `private` 修饰符定义了一个私有属性 `name`，接着使用该类创建一个 `person` 对象，然后通过 `person.name` 来访问 `person` 对象的私有属性，这时 `TypeScript` 编译器会提示以下异常：

```
Property 'name' is private and only accessible within class 'Person'.(2341)
```

那如何解决这个异常呢？当然你可以使用类型断言把 person 转为 any 类型：

```ts
console.log((person as any).name);
```

通过这种方式虽然解决了 TypeScript 编译器的异常提示，但是在运行时我们还是可以访问到 `Person` 类内部的私有属性，为什么会这样呢？我们来看一下编译生成的 ES5 代码，也许你就知道答案了：

```ts
var Person =  (function () {
    function Person(name) {
      this.name = name;
    }
    return Person;
}());

var person = new Person("Semlinker");
console.log(person.name);
```

在 TypeScript 3.8 以上版本通过 `#` 号定义的私有字段编译后会生成什么代码：

```ts
class Person {
  #name: string;

  constructor(name: string) {
    this.#name = name;
  }

  greet() {
    console.log(`Hello, my name is ${this.#name}!`);
  }
}
```

以上代码目标设置为 `ES2015`，会编译生成以下代码：

```js
"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) 
  || function (receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
      throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
};

var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) 
  || function (receiver, privateMap) {
    if (!privateMap.has(receiver)) {
      throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
};

var _name;
class Person {
    constructor(name) {
      _name.set(this, void 0);
      __classPrivateFieldSet(this, _name, name);
    }
    greet() {
      console.log(`Hello, my name is ${__classPrivateFieldGet(this, _name)}!`);
    }
}
_name = new WeakMap();
```

通过观察上述代码，使用 `#` 号定义的 `ECMAScript` 私有字段，会通过 WeakMap 对象来存储，同时编译器会生成 `__classPrivateFieldSet` 和 `__classPrivateFieldGet` 这两个方法用于设置值和获取值。

[ECMAScript Private Fields](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-8.html#ecmascript-private-fields)

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

## 参考答案

```ts
// answer
```

## 参考资料

[What's new in TypeScript](https://github.com/Microsoft/TypeScript/wiki/What's-new-in-TypeScript)

[TypeScript 3.8](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-8.html#ecmascript-private-fields)

[ECMAScript feature: numeric separators](https://2ality.com/2018/02/numeric-separators.html)

[细数 TS 中那些奇怪的符号](https://www.yuque.com/arvinxx-fe/typescript/dfe2722f-0c2a-4189-b2c5-de128f85d40f#d958e3d1)