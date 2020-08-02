## Boolean 类型

```ts
const handsome: boolean = true;
```

## Number 类型

```ts
const age: number = 18;
```

## String 类型

```ts
const name: string = 'Rain120;
```

## Array 类型

```ts
const travel_cities: string[] = [
  'beijing',
  'shanghai',
  'nanjing',
  'hangzhou',
  'wuhan',
  'changsha',
  'jilin',
  'shenyang'
];

// 使用数组泛型
const travel_cities: Array<string> = [
  'beijing',
  'shanghai',
  'nanjing',
  'hangzhou',
  'wuhan',
  'changsha',
  'jilin',
  'shenyang'
];
```

## Tuple 类型

元组类型允许表示一个 **已知元素数量和类型** 的 **数组**, 各元素的类型不必相同。 比如, 你可以定义一对值分别为 `string` 和 `number` 类型的元组。

```ts
let age: [number, string];

age = [18, '18']; // ok

age = ['18', 18]; // error

```

### 初始化

在元组初始化的时候, 我们还必须提供每个属性的值, 不然也会出现错误。

```ts
age = [18];

// Property '1' is missing in type '[string]' but required in type '[number, string]'.
```

### 越界元素

当添加越界的元素时, 它的类型会被限制为元组中每个类型的联合类型。

```ts
age.push(true);

//  Argument of type 'true' is not assignable to parameter of type 'number | string'. 
```

## Enum 类型

使用枚举我们可以定义一些带名字的常量。 使用枚举可以清晰地表达意图或创建一组有区别的用例。

### 数字枚举

```ts
enum Gender {
  FEMALE,
  MALE,
}

console.log(Gender.FEMALE); // 0
```

转换成 `ES5`

```js
"use strict";
var Gender;
(function (Gender) {
    Gender[Gender["FEMALE"] = 0] = "FEMALE";
    Gender[Gender["MALE"] = 1] = "MALE";
})(Gender || (Gender = {}));
```

[Go Demo](https://www.typescriptlang.org/play?#code/KYOwrgtgBA4qAmwBOUDeAoKUBiBRAsgIIAyuANJlEaRQL5A)

默认情况下, 从`0`开始为元素编号。 你也可以手动的指定成员的数值。比如

```ts
enum Gender {
  FEMALE = 1,
  MALE,
}

console.log(Gender.FEMALE); // 1
```

转换成 `ES5`

```js
"use strict";
var Gender;
(function (Gender) {
    Gender[Gender["FEMALE"] = 1] = "FEMALE";
    Gender[Gender["MALE"] = 2] = "MALE";
})(Gender || (Gender = {}));
```

[Go Demo](https://www.typescriptlang.org/play?#code/KYOwrgtgBA4qAmwBOUDeAoKUBiBRAsgIIAyuUAvFAIwA0mURpdAvkA)

### 字符串枚举

在一个字符串枚举里, 每个成员都必须用字符串字面量, 或另外一个字符串枚举成员进行初始化。

```ts
enum Gender {
  FEMALE = 'FEMALE',
  MALE = 'MALE',
}

console.log(Gender.FEMALE); // FEMALE
```

转换成 `ES5`

```js
"use strict";
var Gender;
(function (Gender) {
    Gender["FEMALE"] = "FEMALE";
    Gender["MALE"] = "MALE";
})(Gender || (Gender = {}));
 
```

[Go Demo](https://www.typescriptlang.org/play?#code/KYOwrgtgBA4qAmwBOUDeAoKUBiBRAsgIIAyuUAvFAOR5GlUA0mUdZlVrj6AvkA)

### 异构枚举

异构枚举的成员值是数字和字符串的混合

```ts
enum Enum {
  A,
  B,
  C = "C",
  D = "D",
  E = 8,
  F,
}

console.log(Enum.C); // C
console.log(Enum.E); // 8
```

转换成 `ES5`

```js
"use strict";
var Enum;
(function (Enum) {
    Enum[Enum["A"] = 0] = "A";
    Enum[Enum["B"] = 1] = "B";
    Enum["C"] = "C";
    Enum["D"] = "D";
    Enum[Enum["E"] = 8] = "E";
    Enum[Enum["F"] = 9] = "F";
})(Enum || (Enum = {}));
```

[Go Demo](https://www.typescriptlang.org/play?#code/KYOwrgtgBAou0G8BQUoEEA0KoCEuoGEoBeKAIgLPygBETyarsZ6AOagMSwF8kg)

## Any 类型

有时候, 我们会想要为那些在编程阶段还不清楚类型的变量指定一个类型, 这些值可能来自于动态的内容。

在 `TypeScript` 中, 任何类型都可以被归为 `any` 类型。这让 `any`类型成为了类型系统的 [**顶级类型**](https://en.wikipedia.org/wiki/Top_type)(也被称作 **全局超级类型**)。

使用 `any` 类型的变量能够兼容所有的类型, `typescript` 将不会对他做任何类型检查, 所以我们将无法对其做类型保护, 这样我们就会很容易地编写类型正确, 但在运行时有问题的代码。

例如:

```ts
let value: any;

value = true;             // OK
value = 42;               // OK
value = "Hello World";    // OK
value = [];               // OK
value = {};               // OK
value = Math.random;      // OK
value = null;             // OK
value = undefined;        // OK
value = new TypeError();  // OK
value = Symbol("type");   // OK
```

`any`类型本质上是类型系统的一个逃逸舱。作为开发者, 这给了我们很大的自由：TypeScript允许我们对 `any`类型的值执行任何操作, 而无需事先执行任何形式的检查。

在上述例子中, 变量 `value`被定义成类型 `any`。也是因此, `TypeScript` 认为以下所有操作都是类型正确的：

```ts
let value: any;

value.foo.bar;  // OK
value.trim();   // OK
value();        // OK
new value();    // OK
value[0][1];    // OK
```

这许多场景下, 这样的机制都太宽松了。使用`any`类型, 可以很容易地编写类型正确但是执行异常的代码。如果我们使用 `any`类型, 就无法享受 `TypeScript` 大量的保护机制。

## Unknown 类型

`TypeScript 3.0` 引入了新的`unknown` 类型, 它是 `any` 类型对应的安全类型。

`unknown` 和 `any` 的主要区别是 `unknown` 类型会更加严格：在对 `unknown` 类型的值执行大多数操作之前, 我们必须进行某种形式的检查。而在对 `any` 类型的值执行操作之前, 我们不必进行任何检查。

```ts
let value: any;

value = true;             // OK
value = 42;               // OK
value = "Hello World";    // OK
value = [];               // OK
value = {};               // OK
value = Math.random;      // OK
value = null;             // OK
value = undefined;        // OK
value = new TypeError();  // OK
value = Symbol("type");   // OK
```

对 `value`变量的所有赋值都被认为是类型正确的。

当我们尝试将类型为 `unknown`的值赋值给其他类型的变量时会发生什么？

```ts
let value: unknown;

let value1: unknown = value;   // OK
let value2: any = value;       // OK
let value3: boolean = value;   // Error
let value4: number = value;    // Error
let value5: string = value;    // Error
let value6: object = value;    // Error
let value7: any[] = value;     // Error
let value8: Function = value;  // Error
```

`unknown`类型只能被赋值给 `any`类型和 `unknown`类型本身。直观的说, 这是有道理的：只有能够保存任意类型值的容器才能保存 `unknown`类型的值。毕竟我们不知道变量 `value`中存储了什么类型的值。

现在让我们看看当我们尝试对类型为 `unknown`的值执行操作时会发生什么。以下是我们之前看过的相同操作：

```ts
let value: unknown;

value.foo.bar;  // Error
value.trim();   // Error
value();        // Error
new value();    // Error
value[0][1];    // Error
```

将 `value`变量类型设置为 `unknown`后, 这些操作都不再被认为是类型正确的。通过改变 `any`类型到 `unknown`类型, 我们的默认设置从允许一切翻转式的改变成了几乎什么都不允许。

这是 `unknown`类型的主要价值主张：`TypeScript` 不允许我们对类型为 `unknown`的值执行任意操作。相反, 我们必须首先执行某种类型检查以缩小我们正在使用的值的类型范围。

## Null & Undefined 类型

`undefined` 和 `null` 两者各自有自己的类型分别叫做 `undefined` 和 `null`。

```ts
let u: undefined = undefined;
let n: null = null;
```

默认情况下`null`和`undefined`是所有类型的子类型。 就是说你可以把 `null`和`undefined`赋值给`number`类型的变量。**当你指定了`--strictNullChecks`标记, `null`和`undefined`只能赋值给`void`和它们各自的类型。**

## Void 类型

某种程度上来说, `void` 类型像是与any类型相反, 它**表示没有任何类型**。 当一个函数没有返回值时, 你通常会见到其返回值类型是 `void` :

```ts
function warnUser(): void {
	console.log("This is my warning message");
}

```

声明一个 `void` 类型的变量没有什么大用, 因为你只能为它赋予 `undefined` 和 `null`:

```ts
let unusable: void = undefined;
```

## Never 类型

`never`类型表示的是那些**永不存在的值的类型**。例如, `never` 类型是那些总是会抛出异常或根本就不会有返回值的函数表达式或箭头函数表达式的返回值类型。

```ts
// 返回never的函数必须存在无法达到的终点
function error(message: string): never {
  throw new Error(message);
}

// 推断的返回值类型为never
function fail() {
  return error("Something failed");
}

// 返回never的函数必须存在无法达到的终点
function infiniteLoop(): never {
  while (true) {
  }
}
```

`never`类型是任何类型的子类型, 也可以赋值给任何类型, 但它不可以被其他类型赋值, 它**只能被赋值**给另外一个 `never` 类型,  `any` 也不行, 。

```ts
function neverKnow(): never {
  throw new Error('error');
}

let idk: never = neverKnow();

idk = "I don't know";
// Type '"I don't know"' is not assignable to type 'never'.
```

[Go Demo](https://www.typescriptlang.org/play?#code/GYVwdgxgLglg9mABGApgNxQJwNJjgdwAoBKALmXS0QG8AoRRKAC0wIv0QFFNXNCByLL37EA3LQC+tWgBsUURDAAmAa3KoMmRAF4Km3ARLjaylTsQAiAJKIlCfgpV58F0UA)

在没有开启 **--strictNullChecks** 的前提下使用 `never` 避免出现新增了联合类型没有对应的实现, 目的就是写出类型绝对安全的代码。

举个具体点的例子, 当你有一个 `union type`:

```ts
interface Foo {
  type: 'foo'
}

interface Bar {
  type: 'bar'
}

type All = Foo | Bar
```

在 `switch` 当中判断 `type`, `TS` 是可以收窄类型的 `(discriminated union)`：

```ts
function handleValue(val: All) {
  switch (val.type) {
    case 'foo':
      // 这里 val 被收窄为 Foo
      break
    case 'bar':
      // val 在这里是 Bar
      break
    default:
      // val 在这里是 never
      const exhaustiveCheck: never = val
      break
  }
}
```

注意在 `default` 里面我们把被收窄为 `never` 的 `val` 赋值给一个显式声明为 `never` 的变量。如果一切逻辑正确, 那么这里应该能够编译通过。但是假如后来有一天你的同事改了 All 的类型：

```ts
type All = Foo | Bar | Baz
```

然而他忘记了在 `handleValue` 里面加上针对 `Baz` 的处理逻辑, 这个时候在 `default branch` 里面 val 会被收窄为 Baz, 导致无法赋值给 `never`, 产生一个编译错误。所以通过这个办法, 你可以确保 `handleValue` 总是穷尽 `(exhaust)` 了所有 `All` 的可能类型。

[TypeScript中的never类型具体有什么用？ - 尤雨溪的回答 - 知乎](https://www.zhihu.com/question/354601204/answer/888551021)

[Typescript Handbook 详尽检查](https://www.typescriptlang.org/docs/handbook/advanced-types.html#exhaustiveness-checking)

### Never 与 Void 的区别

- `void`表示没有任何类型, `never`表示永不存在的值的类型
- `--strictNullChecking=false`时, `void` 可以被赋值为任意类型, `never`只能被赋值为 `never`

<!-- - 当一个函数
  - 没有返回值, 返回 `void`类型
  - 总是抛出错误, 返回 `never` 类型 -->

## 快来耍耍啊

### 🌰🌰

定义一个人员信息, 包括姓名, 年龄等信息。

```
const profile = {}
```

### 游乐场

<br />

<!-- <Editor
	originalModel="test"
	modifiedModel="test diff"
/> -->

<Editor
	value='// enjoy yourself'
/>

<!-- <ClientOnly></ClientOnly> -->

### 参考答案

```ts
interface Profile {
	name: string;
	age: number | string;
}
```

## 参考资料

[Typescript Basic Types](https://www.typescriptlang.org/docs/handbook/basic-types.html) -> [中文](https://www.tslang.cn/docs/handbook/basic-types.html)

[Typescript Handbook](https://www.typescriptlang.org/docs/handbook/basic-types.html)

[the-unknown-type-in-typescript](https://mariusschulz.com/blog/the-unknown-type-in-typescript)
