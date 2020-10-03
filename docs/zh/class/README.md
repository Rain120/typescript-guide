## 定义 <Badge text='WIP' type='warning' />

类（英语: `class`）在[**面向对象编程(oop)**](https://zh.wikipedia.org/zh-cn/%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1%E7%A8%8B%E5%BA%8F%E8%AE%BE%E8%AE%A1)中是一种面向对象计算机编程语言的构造, 是创建对象的蓝图, 描述了所创建的对象共同的属性和方法。

`JavaScript` 语言中, 生成实例对象的传统方法是通过构造函数。`ES6` 提供了更接近传统语言的写法, 引入了 `Class(类)`这个概念, 作为对象的模板。通过 `class` 关键字, 可以定义类。

`TypeScript` 除了实现了所有 `ES6` 中的类的功能以外，还添加了一些新的用法。

### 概念

- 对象

  类的实例, 通过 `new`实例化

- 面向对象三大特性

  👇👇👇 [Here](#面向对象的三大特性)

- 存取器

  `getter`: 对属性的取值行为

  `setter`: 对属性的赋值行为

- 修饰器

  `public`: 修饰**公有**属性和方法 `(默认)`，可以在任何地方被访问到

  `protected`: 修饰**保护**属性和方法，在子类中也是允许被访问的

  `private`: 修饰**私有**属性和方法，不能在声明它的类的外部访问

- 抽象类

  抽象类`(absctract)`是供其他类继承的基类，**抽象类不允许被实例化**。抽象类中的抽象方法**必须在子类中被实现**

- 接口

  不同类之间公有的属性或方法，可以抽象成一个接口。接口可以被类实现 `(implements)`。**一个类只能继承自另一个类，但是可以实现多个接口**

## 面向对象的三大特性

### 封装

利用抽象数据类型将数据和基于数据的操作封装在一起，使其构成一个不可分割的独立实体，**数据被保护在抽象数据类型的内部，尽可能地隐藏内部的细节**，只保留一些对外接口使之与外部发生联系。

### 继承

子类获取父类的所有属性和行为`(父类中用 private 修饰的变量和方法。)`

### 多态

同一操作作用于不同对象，可以有不同的解释，产生不同的执行结果。

## 类的好处

对象提供了模型化和信息隐藏的好处。类提供了[可重复使用性](https://zh.wikipedia.org/w/index.php?title=可重複使用性&action=edit&redlink=1)的好处。自行车制造商一遍一遍地重用相同的蓝图来制造大量的自行车。软件程序员用相同的类，即相同的代码一遍一遍地创建对象。

## 使用

#### 抽象类

```ts
abstract class Boy {
  handsome: boolean;
  name: string;
  
  constructor(name: string, handsome: boolean) {
    this.name = name;
    this.handsome = handsome;
  }
  
  abstract isHandsome(): boolean {}
}

class Mine extends Boy {
  isHandsome() {
    return this.handsome;
  }
}

const mine = new Mine('Rain120', true);
console.log(mine)
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

[handbook - classes](https://www.typescriptlang.org/docs/handbook/classes.html)

[深入理解 TypeScript - 类](https://jkchao.github.io/typescript-book-chinese/faqs/class.html)

[ECMAScript 6入门 - Class基本语法](https://es6.ruanyifeng.com/#docs/class)

[类 (计算机科学)](https://zh.wikipedia.org/zh-cn/%E7%B1%BB_(%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%A7%91%E5%AD%A6))
