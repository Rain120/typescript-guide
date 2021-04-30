## Previously

接下来我们来了解一下 [面向对象编程 `OOP(object oriented programming)`](https://en.wikipedia.org/wiki/Object-oriented_programming)中一个概念: 接口。

接口是一种用来定义程序的协议，它描述可属于任何类或结构的一组相关行为。

接口的目的是指明相关或者不相关类的多个对象的共同行为，跟抽象类很相似，可以说接口是更加抽象的抽象类。

接口体现了程序设计的多态和高内聚低耦合的设计思想。

[Java 中的接口有什么作用？ - 知乎](https://www.zhihu.com/question/20111251)

## 定义 <Badge text='WIP' type='warning' />

**接口** 是 `Typescript` 中一个很重要的概念, 主要是对类型的行为进行抽象, 描述, 并进行类型检查

## 使用

```ts
interface Profile {
	name: string;
	age?: string | number;
	gender: 'MALE' | 'FEMALE';
}
```

## FAQs

[interface 和 type 有什么异同点？](../faqs/interface-vs-type.md)
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

[interfaces](https://basarat.gitbook.io/typescript/type-system/interfaces)

