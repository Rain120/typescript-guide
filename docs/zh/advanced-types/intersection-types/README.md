## 定义

交叉类型是将多个类型合并为一个类型。 这让我们可以把现有的多种类型叠加到一起成为一种类型, 它包含了所需的所有类型的特性。

**Note:** 交叉类型是 **且** 的关系, 即 $A \cup B$, 使用 `&` 运算符。

## 使用

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

大多是在混入 `(mixins)` 或其它不适合典型面向对象模型的地方看到交叉类型的使用。如下示:

```ts
function extend<T, U>(first: T, second: U): T & U {
	let result = <T & U>{};
	for (let id in first) {
		(<any>result)[id] = (<any>first)[id];
	}
	for (let id in second) {
		if (!result.hasOwnProperty(id)) {
			(<any>result)[id] = (<any>second)[id];
		}
	}
	return result;
}

class Person {
	constructor(public name: string) {}
}
interface Loggable {
	log(): void;
}
class ConsoleLogger implements Loggable {
	log() {
		// ...
	}
}
var jim = extend(new Person('Jim'), new ConsoleLogger());
var n = jim.name;
jim.log();
```

## 实现

```ts
interface IntersectionTypes {
	assign<T, U>(target: T, source: U): T & U;
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

[handbook - intersection-types](https://www.typescriptlang.org/docs/handbook/advanced-types.html#intersection-types)

[数学公式参考](https://latexlive.com/)
