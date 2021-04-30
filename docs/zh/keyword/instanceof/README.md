## Previously

`instanceof` 运算符用于检测构造函数的 `prototype` 属性是否出现在某个实例对象的原型链上。

```js
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}
const auto = new Car('Honda', 'Accord', 1998);

console.log(auto instanceof Car);
// expected output: true

console.log(auto instanceof Object);
// expected output: true
```


## 定义 <Badge text='Typescript instanceof 关键字' />

:::theorem instanceof
`instanceof` 通过 **构造函数** 来细化类型, 用来检测实例与 **类** 的所属关系。
:::

**Note:**

- 参数:  `instanceof` 在左侧使用变量名称, 在左侧使用函数或类的名称。
- 返回: `Boolean` 值。

## 使用

```ts
interface Person {
  name: string;
  age: string | number;
}

const mine: Person = {
  name: 'Rain120',
  age: 18
}

const isPerson = typeMine instanceof Person; // true
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

[instanceof-guard](https://alligator.io/typescript/instanceof-guard/)


