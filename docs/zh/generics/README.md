## 定义 <Badge text='WIP' type='warning' />

**泛型**就是指定一个表示类型的变量, 用它来代替某个实际的类型用于编程, 而后再通过实际运行或推导的类型来对其进行替换, 以达到一段使用泛型程序可以实际适应不同类型的目的。**「泛型就是不预先确定的数据类型, 具体的类型在使用的时候再确定的一种类型约束规范」**。

泛型的好处:

- 函数和类可以轻松的支持多种类型, 增强程序的扩展性
- 不必写多条函数重载, 冗长的联合类型声明, 增强代码的可读性
- 灵活控制类型之间的约束

## 常见的一些泛型变量含义

- T (Type): 表示一个 `TypeScript` 类型

- K (Key): 表示对象中的键类型

- V (Value): 表示对象中的值类型

- E (Element): 表示元素类型


## 使用

```ts
function validator<T>(arg: T): T {
	return arg;
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

[handbook - generics](https://www.typescriptlang.org/docs/handbook/generics.html)

[generics](https://basarat.gitbook.io/typescript/type-system/generics)

[TypeScript Spec](https://github.com/Microsoft/TypeScript/blob/master/doc/spec.md)

[TypeScript进阶 之 重难点梳理](https://mp.weixin.qq.com/s/xWaVvh5lXG8Nb_U6bmJamw)
