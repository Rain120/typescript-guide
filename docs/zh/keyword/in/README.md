## Previously

如果指定的属性在指定的对象或其原型链中，则 `in` 运算符返回 `true`。

```js
const car = { make: 'Honda', model: 'Accord', year: 1998 };

console.log('make' in car);
// expected output: true

delete car.make;
if ('make' in car === false) {
  car.make = 'Suzuki';
}

console.log(car.make);
// expected output: "Suzuki"

```

## 定义 <Badge text='Typescript in 关键字' />

:::theorem in
用来遍历枚举类型。
:::

## 使用

```ts
type Keys = 'name' | 'age';

interface Profile {
  [P in Keys]: string;
}

/**
 * interface Profile {
 *    name: string;
 *    age: string;
 * }
 *
 */

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


