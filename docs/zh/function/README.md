## 函数 <Badge text='一等公民' />

:::theorem 函数
函数是 `JavaScript` 中的基本组件之一。 一个函数是 `JavaScript` 过程 ---- 一组执行任务或计算值的语句。要使用一个函数, 你必须将其定义在你希望调用它的作用域内。
:::

### TypeScript VS JavaScript

| TypeScript     | JavaScript                                                   |
| -------------- | ------------------------------------------------------------ |
| 含有类型       | 无类型                                                       |
| 箭头函数       | 箭头函数 `(ES2015)`                                          |
| 函数类型       | 无函数类型                                                   |
| 必填和可选参数 | 所有参数都是可选的, 如果传入了参数, 该参数, 后面的参数都是可选的 |
| 默认参数       | 默认参数                                                     |
| 剩余参数       | 剩余参数                                                     |
| 函数重载       | 无函数重载                                                   |

### 函数的组成

- 函数的名称

- 函数参数列表, 包围在括号中并由逗号分隔。

- 定义函数的 `JavaScript` 语句, 用大括号 `{}` 括起来

- 函数的返回值

## 声明(定义)函数

`JavaScript` 中声明函数有👇👇👇方式, 在 `Typescript` 中也是一样的。

### 函数声明 (Function Declaration)

```ts
function getFullName(name: string): string {
	return `Rainy ${name}`;
}
```

### 函数表达式 (Function Expression)

函数也可以由函数表达式创建, 这样的函数可以是 **匿名的**。

```ts
const getFullName: (name: string) => string  = function(name: string): string {
	return `Rainy ${name}`;
}
```
当然你也可以使用箭头函数

```ts
const getFullName: (name: string) => string = (name: string): string => {
	return `Rainy ${name}`;
}
```

**Note:**

- 在 `TypeScript` 的类型定义中, `=>` 用来表示函数的定义的 **输出类型** 。
- `ES6` 允许使用 **箭头** (`=>`) 定义函数, 更多详见 [ES6 箭头函数](http://es6.ruanyifeng.com/#docs/function#%E7%AE%AD%E5%A4%B4%E5%87%BD%E6%95%B0)

## 声明函数定义方式

### 匿名定义

```ts {1}
const getFullName: (name: string) => string
	= function(name: string): string {
		return `Rainy ${name}`;
	}
```


如果你会使用 `type`, `interface` 了, 你也可以这样

### type 定义

```ts {1}
type GetFullName = (name: string) => string;
```

还可以这样

### 接口 (Interface) 定义

```ts {2}
interface GetFullName {
	(name: string) => string;
}
```

## 函数参数

### 可选参数

`JavaScript` 每个参数都是可选的, 可传可不传。 没传参的时候, 它的值就是 `undefined` , `TypeScript` 里的每个函数参数都是必须的, 它可以通过使用 `?`实现可选参数的功能。

```ts
function getInfo(
   name: string,
   gender: number | string,
   age?: number | string
): {
  return `I'm ${name}${age ? `${, I'm ${age}}` : ''}, I'm a ${gender}.`
}
```

**Note:** 可选参数 **必须要** 放在 必选参数 的 **后面**, 不然会导致编译错误。

### 默认参数

在 `TypeScript` 里, 我们也可以为参数提供一个默认值当用户没有传递这个参数或传递的值是`undefined`时。 它们叫做有默认初始化值的参数。

```ts
function getInfo(
   name: string,
   gender: number | string = 'boy',
   age?: number | string
): {
  return `I'm ${name}${age ? `${, I'm ${age}}` : ''}, I'm a ${gender}.`
}
```

### 剩余参数

剩余参数会被当做个数不限的可选参数。 可以一个都没有, 同样也可以有任意个。 编译器创建参数数组, 可以通过扩展运算符 `(spread)` 来设置参数名。

[扩展运算符(spread)](https://es6.ruanyifeng.com/?search=扩展&x=8&y=10#docs/array#扩展运算符) 是 三个 (`...`), 它好比 `rest` 参数的逆运算, 将一个数组转为用逗号分隔的参数序列。

```ts
function buildName(firstName: string, ...restOfName: string[]) {
  return firstName + " " + restOfName.join(" ");
}

let employeeName = buildName("Joseph", "Samuel", "Lucas", "MacKinzie");
```

## 函数重载

[函数重载](https://zh.wikipedia.org/wiki/函数重载) 是定义了多个相同名字的方法, 而输入输出类型或个数不同的子程序的一项特性。

可惜 `JavaScript` 不支持函数重载, 但是 `Typescript` 支持。

```ts
function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: string, b: number): string;
function add(a: number, b: string): string;
function add(a: Combinable, b: Combinable) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}
```

**Note:**  `TypeScript` 会优先从最前面的函数定义开始匹配, 所以多个函数定义如果有包含关系, 需要优先把精确的定义写在前面。

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

[handbook - functions](https://www.typescriptlang.org/docs/handbook/functions.html)

[functions](https://basarat.gitbook.io/typescript/type-system/functions)

[MDN - Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)
