## Previously

请先行了解 👉 [Interface](../../interface/README.md)。
## 定义 <Badge text='Typescript implements 关键字' />

:::theorem implements
[implements (实现)](https://en.wikipedia.org/wiki/Implement) 是面向对象中的一个重要概念。它是要实现一个已经定义好的接口中的方法。
:::
## 使用

### 接口实现

```ts
interface Shape {
  color: string;
  draw(): void;
}
class DrawShape implements Shape {
  color: string;
  
	constructor(color: string) {
    this.color = color;
  }
  
  draw() {
    console.log(`draw shape with ${this.color}`);
  }
}
```

一个类可以实现多个接口

```ts
interface Shape {
  color: string;
  draw(): void;
}

interface Paint {
  paint(): void;
}

class DrawShape implements Shape, Paint {
  color: string;
  
	constructor(color: string) {
    this.color = color;
  }
  
  draw() {
    console.log(`draw shape with ${this.color}`);
  }
  
  paint() {
    console.log(`draw shape with ${this.color}`);
  }
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

[whats-the-difference-between-extends-and-implements-in-typescript](https://stackoverflow.com/questions/38834625/whats-the-difference-between-extends-and-implements-in-typescript)
