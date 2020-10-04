## 定义 <Badge text='WIP' type='warning' />

类（英语: `class`）在[**面向对象编程(oop)**](https://zh.wikipedia.org/zh-cn/%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1%E7%A8%8B%E5%BA%8F%E8%AE%BE%E8%AE%A1)中是一种面向对象计算机编程语言的构造, 是创建对象的蓝图, 描述了所创建的对象共同的属性和方法。

`JavaScript` 语言中, 生成实例对象的传统方法是通过构造函数。`ES6` 提供了更接近传统语言的写法, 引入了 `Class(类)`这个概念, 作为对象的模板。通过 `class` 关键字, 可以定义类。

`TypeScript` 除了实现了所有 `ES6` 中的类的功能以外，还添加了一些新的用法。

### 类的概念

- 对象

  类的实例, 通过 `new`实例化

- [面向对象三大特性](#面向对象的三大特性)

  👇👇👇 [Here](#面向对象的三大特性)

- [存取器](#存取器)

  `getter`: 对属性的取值行为

  `setter`: 对属性的赋值行为

- [修饰符](#修饰符)

  `public`: 修饰**公有**属性和方法 `(默认)`，可以在任何地方被访问到

  `protected`: 修饰**保护**属性和方法，在子类中也是允许被访问的

  `private`: 修饰**私有**属性和方法，不能在声明它的类的外部访问

- [静态属性 & 方法 `static`](#静态属性-方法)

  **只能**通过类访问的属性 `or` 方法。

- [抽象类](#抽象类)

  抽象类`(absctract)`是供其他类继承的基类，**抽象类不允许被实例化**。抽象类中的抽象方法**必须在子类中被实现**

- [接口](#把类当接口使用)

  不同类之间公有的属性或方法，可以抽象成一个接口。接口可以被类实现 `(implements)`。**一个类只能继承自另一个类，但是可以实现多个接口**

## 面向对象的三大特性

### 封装

利用抽象数据类型将数据和基于数据的操作封装在一起，使其构成一个不可分割的独立实体，**数据被保护在抽象数据类型的内部，尽可能地隐藏内部的细节**，只保留一些对外接口使之与外部发生联系。

### 继承

子类获取父类的所有属性和行为`(除了父类中用 private 修饰的变量和方法)`。

### 多态

**多种不同的实现方式**即为多态, 它允许方法重名，参数或返回值可以是父类型传入或返回。

## 类的好处

- 对象提供了模型化和信息隐藏的好处。

- 类提供了[可重复使用性](https://zh.wikipedia.org/w/index.php?title=可重複使用性&action=edit&redlink=1)的好处。

## 使用

### public(公有) & protected(保护) & private(私有) 修饰符

#### public

修饰**公有**属性和方法 `(默认)`，可以在任何地方被访问到

```ts
class Animal {
    public name: string;
    public constructor(theName: string) { this.name = theName; }
    public move(distanceInMeters: number) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}
```

[Playground](https://www.typescriptlang.org/play?#code/MYGwhgzhAECCB2BLAtmE0DeAoavoAcBXAIxEWGnjGQFMAuaCAFwCdF4BzAbhzyNPLRgAe3jMWhYE2EsAFEwAWNAHLV6jVuw4BKTNEWIIAOiq1oAXn1LVtLtAC+vXPzIVkwgG41ZAE0NMweGAaAEl4AFkaJhoWCAZ4QmRiGN1sPHShUQhhEBojEGEOWQADABIMA2NTGntody8faHK-ZkDgsMjo2PtkI2LtHnTHeyA)

#### protected

修饰**保护**属性和方法，在子类中也是允许被访问的

```ts
class Person {
    protected name: string;
    constructor(name: string) { this.name = name; }
}

class Employee extends Person {
    private department: string;

    constructor(name: string, department: string) {
        super(name)
        this.department = department;
    }

    public getElevatorPitch() {
        return `Hello, my name is ${this.name} and I work in ${this.department}.`;
    }
}

let rainy = new Employee("Rain", "120");
console.log(rainy.getElevatorPitch());
console.log(rainy.name); // 错误
```

[Playground](https://www.typescriptlang.org/play?#code/MYGwhgzhAEAKCmAnCB7AdtA3gKGn6ADoigC7zBkAm0aYAtvAFzQQmICWaA5gNy77B0rRAFcKKRAApaDZsM5cAlFmgkAFuwgA6GfGgBeGvXg9oAX2wXsoSDACidAiBQBPeHvgAPMmkowEyOhY-HhE7ABuYGTQlPAEYIgkDGgkcmwKfCHQgmjCYiQS0sZpHNwANDFxCUnwKSUKyjj4zSwiBEhFDIpZzeqaWrHxickkBpVDNSl8zVbNBCIARiDswNBc8CR2IPCRBYiw7CTAapKNPfiIGyKIGAAGABLwIM4VdC5GDNCa0AAkmH3aXRmaBgXzQACS0AA7hIANZfDB-AEDKrDWokMxaW7TfAWKzbUaIMCcd6GNDwKHQBxOVzuSQAIgASsS0PSKvSAIwAJgADPTFHwcqhtlpnFxJESSVp1pttrsJAcjidFALrEIUCKxRKWS4dMYBdAAPSG6CATFTAPfRQA)

#### private

修饰**私有**属性和方法，不能在声明它的类的外部访问

```ts
class Animal {
    private name: string;
    constructor(theName: string) { this.name = theName; }
}

class Cat extends Animal {
    constructor() { super("Cat"); }
}

class Employee {
    private name: string;
    constructor(theName: string) { this.name = theName; }
}

let animal = new Animal("Dog");
let cat = new Cat();
let employee = new Employee("Rain120");

animal = cat;
animal = employee; // 错误: Animal 与 Employee 不兼容.
```

[Playground](https://www.typescriptlang.org/play?#code/MYGwhgzhAECCB2BLAtmE0DeAoavoAcAnRANzABcBTaeMZSgLmgnOPgHMBuHPYAe3gtCAV2Dk+hABTkAFpQBydRs1aIOASkzRZiCADpa9aAF5tcxfU7QAvlltZQkGAGEK0SgA8q8ACYwEKGiYPLj8gqyi4lKaGMzC+JRSAESu5EnqVrb2jlDQAKLI+CB8AJ6U1Nh4BMRkVDRKTEJqXCHQYUKREtLmDSps7DFmugZKJmYKSpl2WFgglOTQYEio6KbwlADucMtokkkAInzs6dxzC8Bua5vQqZIZs-PuhcVl1FdbBUWl5XsASmBqACMACYAAwnGZLQKrNoUbhQlZjSjPb6UKwAenR0EAmKmAe+imAFEYA4OXyKNe0EAsHKAH0VAJ3aeiAA)

### readonly 修饰符

#### 属性

将属性设置为只读的。 **只读属性必须在声明时或构造函数里被初始化**。

```ts
class Octopus {
    readonly name: string;
    readonly numberOfLegs: number = 8;
    constructor (theName: string) {
        this.name = theName;
    }
}
let dad = new Octopus("Man with the 8 strong legs");
dad.name = "Man with the 3-piece suit"; // 错误! name 是只读的.
```

[Playground](https://www.typescriptlang.org/play?#code/MYGwhgzhAEDywBcD2AHArjA3gKGn6ATgKZgAmSAdiAJ7QVgC2RAXNBAgQJYUDmA3LnzEylGnTQMARkQKwAZgBkiPCKwoTpBaAF5oADgH5owSuwJpESLQAoEACyIA5RizYduPAJTQcRo-c4IADp6Jh1oeycXQ3wAX2x4kCIEaFIycIoiAHc4S3QIawAiAFkwCmgsznsIh303AkoeaCSVQs8BNNIQl3CSsoqquxqiaABmAFoUTiJgEYg0KsK+IA)

#### 参数

```ts
class Octopus {
    readonly numberOfLegs: number = 8;
    constructor(readonly name: string) {
    }
}
```

[Playground](https://www.typescriptlang.org/play?#code/MYGwhgzhAEDywBcD2AHArjA3gKGn6ATgKZgAmSAdiAJ7QVoC2ARkQbAGYAyRA5hAFx1GLAtAC80ABwBuXPmCUICAmkRICACmJlKNOmAZFBSggEsKPAJTQc+aAF9s9oA)

### 存取器

```ts
class Employee {
    private _fullName: string = '';

	constructor(_fullName: string) {}

    get fullName(): string {
        return this._fullName;
    }

    set fullName(newName: string) {
        this._fullName = newName;
    }
}

let employee = new Employee('Rainy');
employee.fullName = "Rain120";
console.log(employee.fullName)
```

[Playground](https://www.typescriptlang.org/play?#code/MYGwhgzhAECiC2AHEB7AngUw9A3gKGkOkQCcBLANzABdsB9AMwFcQQA5MeDALmgmvIA7AObQAvNADkkgNx48ASGApB-Ek2DUUJABSMW7Tjz4CyIgJS4AvvKLRhGatGasOXHed5qzo-HbskjkwkgtDUABZkEAB0+q5GcnY2BEQQjs4Gbhg6ghgA7llepha4Kf5hkTFxhlzi0LkFCWXQNskg6RhIqJjYEg1wXehYOpIASmBmaJLmcp3IQxjRLjW90ABE42YAjABMAAxrcsqqKO3RqMI6c91YS5lG5kA)

**Note:** 

- 存取器要求你将编译器设置为输出 `ECMAScript 5`或更高。 不支持降级到`ECMAScript 3`。
- **只带有 `get`不带有 `set`的存取器**自动被推断为 `readonly`。 这在从代码生成 `.d.ts`文件时是有帮助的，因为利用这个属性的用户会看到不允许够改变它的值。

### 静态属性 & 方法

只能通过类来访问，实例不行

```ts
class Boy {
  static handsome: boolean = true;
  constructor(public name: string) {}
  static isHandsome() {
    return this.handsome;
  }
}

let rain120 = new Boy('Rain120');
console.log(Boy.handsome);
console.log(Boy.isHandsome);
console.log(rain120.handsome); // Property 'handsome' is a static member of type 'Boy'
console.log(rain120.isHandsome); // Property 'isHandsome' is a static member of type 'Boy'
```

[Playground](https://www.typescriptlang.org/play?#code/MYGwhgzhAEBCD2BPaBvAUNaEAuZsEthoALMAOwBMJ4BbAUwC5oAjeeEO86AXmmwCcArnQDcGaMHhkcQ4Nnj8AFAAdBzEIWhkw9JjPxkA5gEpUAX3E48m-BAAS5KrTqLT6TJn51sg-mT7EtgB0pJTU9GKYFhZoHNjQ-GAGAIwATAAMPFp0AO5wSIoA5ABKSWRp6YXGYpLS7HRBIPCGigiIIY7hdMZotdQcjc2tSEG2DmHOPX31gy2JKRkdE-RTUv0NTXNlFaP2nZNAA)

### 继承

```ts
class Boy {
  handsome: boolean;
  name: string;
  
  constructor(name: string, handsome: boolean) {
    this.name = name;
    this.handsome = handsome;
  }
  
	isHandsome() {}
}

class Mine extends Boy {
  isHandsome() {
    return this.handsome;
  }
}

const mine = new Mine('Rain120', true);
console.log(mine)
```

[Playground](https://www.typescriptlang.org/play?#code/MYGwhgzhAEBCD2BPaBvAUNaALMA7AJhPALYCmAXNAEbzwil4DcG0uYZlEALgE4CWuAObNMLYPFzceAV2Bd4PABRsO0KQMEAabHkIkK1WvTwBKVC0xcsfCADoVpaAF5W7UiMzQrN2zgJEyZx1-fQ8AXxY0AEgbAAldANJFMxQIiLRQSBgAWQFHUgAPLlJ-OCRzTDiE-WSKzx5SLmkeXC9rOz89MnC0dPFJLmhiPKDcUgB3aFyxxQByACUwAQBGACYABlntXmlSE2Z+onpbEHhBRWGxkyA)

### 多态

```ts
export function trace(cities: any, prop?: string, enterBreakPoint?: boolean): void;

export function trace(cities: any, enterBreakPoint?: boolean): void;

export function trace(enterBreakPoint?: boolean): void;

export function trace(...args: any[]): void {
}
```

[Playground](https://www.typescriptlang.org/play?#code/KYDwDg9gTgLgBAMwK4DsDGMCWEVxlAQzWAAo1MtgBnALjgJQE8AaOMKCMAfjqv0xQBzVsBQxgUAEJRgBANYAFCAJg84AIwgQANrJQBKOgDdlAEwDcAKEuhIsRKgzZc+IqXKVa9JiLETpsorKYmqaOnqGcCaYFta20PDI6Fg4eITEJKLiUjLySiqhWroMkdGxNuAJDsnOaW4kAHRNBFCCXgyMANoAuqVmcADelgC+QA)

### 抽象类

```ts
abstract class Boy {
  handsome: boolean;
  name: string;
  
  constructor(name: string, handsome: boolean) {
    this.name = name;
    this.handsome = handsome;
  }
  
  abstract isHandsome(): boolean;
}

class Mine extends Boy {
  isHandsome() {
    return this.handsome;
  }
}

const mine = new Mine('Rain120', true);
console.log(mine);
```

[Playground](https://www.typescriptlang.org/play?#code/IYIwzgLgTsDGEAJYBthjAgQgewJ4IG8AoBBAC2ADsATMbAWwFMAuBEbbZRqgbhIUrAmrSFACWlAOZ9S-WNkqiArvGxQAFIOEJREyQBpyVWgxZsOXKgEpC-UhDJiwAOi2MEAXgFDGM0ggcnZwoaOiZPI1DTPwBffn5QUThEJwAJYzDGdStWdk5uSj44ohQ0DABZCXdGAA8IRlCsPFtSNIzTbJb-KEYIJShKAMcXEJMmWKJi+UVEeiqIykYAdwRKxfUAcgAlYAkARgAmAAYNw2glRis+abouZ2RsSXU5xaugA)

### 把类当接口使用

```ts
class Boy {
  handsome: boolean = true;
}

class Girl {
  beatiful: boolean = true;
}

enum Gender {
  'MALE',
  'FEMALE'
}

interface Person extends Boy, Girl {
  gender: Gender;
}
```

[Playground](https://www.typescriptlang.org/play?#code/MYGwhgzhAEBCD2BPaBvAUNaALMA7AJhPALYCmAXNAEbzwil7QC80ALgE4CupA3GgL5o0oSDADiAS3YhUGag1YSAZpxCUadBrmZsuvAUNK5OxaGKP5S7WZgDkAWQCCAGQCitgDRzbAMVdO3WwM0CVxWKyUwYFJoAAUrIm1SAA9wghgERA8zKRl0TABzCytKcwIrPn4gA)

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

[handbook - classes](https://www.typescriptlang.org/docs/handbook/classes.html)

[深入理解 TypeScript - 类](https://jkchao.github.io/typescript-book-chinese/faqs/class.html)

[ECMAScript 6入门 - Class基本语法](https://es6.ruanyifeng.com/#docs/class)

[类 (计算机科学)](https://zh.wikipedia.org/zh-cn/%E7%B1%BB_(%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%A7%91%E5%AD%A6))
