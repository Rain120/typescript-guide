## 定义 <Badge text='WIP' type='warning' />

**装饰器**是一种特殊类型的声明，它能够被附加到[类声明](http://www.tslang.cn/docs/handbook/decorators.html#class-decorators)，[方法](http://www.tslang.cn/docs/handbook/decorators.html#method-decorators)， [访问符](http://www.tslang.cn/docs/handbook/decorators.html#accessor-decorators)，[属性](http://www.tslang.cn/docs/handbook/decorators.html#property-decorators)或[参数](http://www.tslang.cn/docs/handbook/decorators.html#parameter-decorators)上。 装饰器使用 `@expression`这种形式，`expression`求值后必须为一个函数，它会在运行时被调用，被装饰的声明信息做为参数传入。

了解更多有关装饰器实现原理的知识 👉👉👉 [Javascript Decorator (装饰器) 实现原理及其使用](https://rain120.github.io/study-notes/#/notes/javascript/key-concept/decorator?id=javascript-decorator-装饰器-实现原理及其使用)

### 类型 & 优先级

**优先级依次往下执行**

1. 参数装饰器 `(Parameter Decorators)` 

   **参数装饰器**声明在一个参数声明之前（紧靠着参数声明）。 参数装饰器应用于类构造函数或方法声明。 参数装饰器不能用在声明文件（.d.ts），重载或其它外部上下文（比如 `declare`的类）里。

2. 方法装饰器 `(Method Decorators)`

   **方法装饰器**声明在一个方法的声明之前（紧靠着方法声明）。 它会被应用到方法的 *属性描述符*上，可以用来监视，修改或者替换方法定义。 方法装饰器不能用在声明文件( `.d.ts`)，重载或者任何外部上下文（比如`declare`的类）中。

3. 访问器或属性装饰器 `(Accessor or Property Decorators)`

   **属性装饰器**声明在一个属性声明之前（紧靠着属性声明）。 属性装饰器不能用在声明文件中（.d.ts），或者任何外部上下文（比如 `declare`的类）里。

   1. 类属性
   2. 构造函数参数列表 `(使用类构造函数装饰器时)`

   **Note:** 访问器 `get`  `set`

4. 类装饰器 `(Class Decorators)`

   **类装饰器** 在类声明之前被声明 (紧靠着类声明)。 类装饰器应用于类构造函数，可以**用来监视，修改或替换类定义**。 类装饰器不能用在声明文件中( `.d.ts`)，也不能用在任何外部上下文中(比如`declare`的类)。

## 使用

若要启用实验性的装饰器特性，你必须在命令行或`tsconfig.json`里启用`experimentalDecorators`编译器选项：

**命令行**:

```shell
tsc --target ES5 --experimentalDecorators
```

**tsconfig.json**:

```json
{
    "compilerOptions": {
        "target": "ES5",
        "experimentalDecorators": true
    }
}
```

### 装饰器组合

多个装饰器可以同时应用声明到一个 [类声明](http://www.tslang.cn/docs/handbook/decorators.html#class-decorators)，[方法](http://www.tslang.cn/docs/handbook/decorators.html#method-decorators)， [访问符](http://www.tslang.cn/docs/handbook/decorators.html#accessor-decorators)，[属性](http://www.tslang.cn/docs/handbook/decorators.html#property-decorators)或[参数](http://www.tslang.cn/docs/handbook/decorators.html#parameter-decorators)上。**Eg:**

```ts
// 一行写法
@f @g isHandsome() {}

// 多行写法 ----> 个人喜欢这种写法
@f
@g
isHandsome() {}
```

当复合 **f** 和 **g** 时，[复合](https://zh.wikipedia.org/wiki/%E5%A4%8D%E5%90%88%E5%87%BD%E6%95%B0) `(把一个函数的输出作为另一个函数的输入)`的结果 $(f ∘ g)(x) = f(g(x))$。

**Note:** 当在一个地方使用**多个装饰器**时

- **由上至下**依次对装饰器表达式求值
- 执行顺序是 **从下往上** 依次执行。

```ts
function first() {
  console.log('first: evaluated');
  return (target, propertyKey: string, descriptor: PropertyDescriptor) => {
    console.log('first: called')
  }
}

function second() {
  console.log('second: evaluated');
  return (target, propertyKey: string, descriptor: PropertyDescriptor) => {
    console.log('second: called')
  }
}

class Example {
  @second
  @first
  method() {}
}

// 'second: evaluated'
// 'first: evaluated'
// 'first: called'
// 'second: called'
```

### 参数装饰器

```ts

```



### 方法装饰器

```ts

```



### 访问器或属性装饰器

#### 属性装饰器

```ts
function propertyDecorator(value: string, theClass) {
  console.log(value)
  return function(prototype, key){
    console.log('AccessDecorator')
  }
}

class Boy {
  name: string;
  handsome: boolean;
  
  @propertyDecorator('属性装饰器', Boy)
  public age: number = 18;
  
  constructor(name, handsome) {
    this.name = name;
    this.handsome = handsome;
  }
  
  @AccessDecorator('访问器装饰器')
  get isHandsome() {
    return this.handsome;
  }
}
```



#### 访问器装饰器

```ts
function AccessDecorator(value: string) {
  console.log(value)
  return function(){
    console.log('AccessDecorator')
  }
}

class Boy {
  name: string;
  handsome: boolean;
  
  constructor(name, handsome) {
    this.name = name;
    this.handsome = handsome;
  }
  
  @AccessDecorator('访问器装饰器')
  get isHandsome() {
    return this.handsome;
  }
}
```

### 类装饰器

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

[handbook - decorators](https://www.typescriptlang.org/docs/handbook/decorators.html)

[使用 TypeScript 装饰器装饰你的代码](https://codeburst.io/decorate-your-code-with-typescript-decorators-5be4a4ffecb4)