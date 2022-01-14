## 声明文件

当使用第三方库时, 我们需要引用它的声明文件, 才能获得对应的代码补全、接口提示等功能。

:::warning
声明文件必需以 `.d.ts` 为后缀。
:::

### 项目如何识别声明文件(识别顺序)

优先从 `tsconfig.json` 配置的 `includes`字段配置的路径查询，然后从项目中查到`*.d.ts`文件，最后到 `node_modules/@types`路径中找。

### 声明文件位置

- 第三方安装的 `@types/xxx`，会在 `node_modules/@types` 路径下。
  :::tip 应用方式
    所有的 `@types` 包都会 **在编译时** 应用，`typescript` 会从 `node_modules/@types`，以及依赖包的 `node_modules/@types` 中去匹配到相应的 **类型定义文件**。

    ```sh
    .
    ├── node_modules
    │   ├── @types
    │   ├── pkg
    │       ├── node_modules
    │           ├── @types
    ```
  :::

- 自定义的，我一般会写在项目的根路径 `typings` 或者 `@types`。

  :::tip 应用方式
    自定义的 **类型定义** 可以通过 `tsconfig.json` 的配置 `compilerOptions.typesRoot` 来设置匹配的类型文件，如下👇🏻👇🏻👇🏻

    ```json
    {
       "compilerOptions": {
           "typeRoots" : ["./typings"]
       }
    }
    ```

    **Note:** 只有在 `typeRoots` 中的包才会被包含，也就是不会再去查找`node_modules/@types` 路径下 **类型定义** 了。

    除此之外，也可以通过`compilerOptions.typesRoot` 来设置匹配的类型文件。

    ```json
    {
       "compilerOptions": {
           "types" : ["node", "lodash"]
       }
    }
    ```

    **Note:** 这样将只会包含下面两个类型定义，**其它的** 则不会被包含进来。

    ```sh
    .
    ├── node_modules
    │   ├── @types
    │       ├── node
    │       ├── lodash
    ```
    如果配置为 `"types": []` 则不会包含任何包。
  :::

## 使用

### 直接使用第三方声明文件

我们在大不多数的时候, 都可以通过 `npm` 安装 **社区或者第三方类库** 提供对应的声明模块即可。

```sh
npm install --save-dev @types/pkg-name

// or

yarn add --save-dev @types/pkg-name
```

::: tip 更多声明模块

- 搜索 🔍 [here](https://www.typescriptlang.org/dt/search/)

- 发布声明文件 🖥 [here](http://definitelytyped.org/)

- 查看 👁👁 [here](https://github.com/DefinitelyTyped/DefinitelyTyped)
  

:::

### 自定义声明文件

当然, 社区不是万能的, 有时候, 有些声明文件需要我们自己自定义, 那我们将如何书写呢？👇👇👇

在不同的场景下, 声明文件的内容和使用方式会有所区别。

#### 全局变量

`declare global` 扩展全局变量

```ts
// xxx.d.ts
declare global {
    // ...
}
```

`declare (var | let | const)` 声明全局变量

```ts
// JQuery.d.ts
declare var JQuery: (selector: string) => any;
declare let JQuery: (selector: string) => any;
declare const JQuery: (selector: string) => any;
```

`declare function` 声明全局方法, 在函数类型的声明语句中, 函数重载也是支持的

```ts
// xxx.d.ts
declare function moduleLib(options: Options): void;
declare function moduleLib(callback: () => void): void;
```

`declare class` 声明全局类

```ts
// xxx.d.ts
declare class Person {
    name: string;
    constructor(name: string);
    getName(): string;
}
```

`declare enum` 声明全局枚举类型

```ts
// xxx.d.ts
declare enum Days {
    Sun,
    Mon,
    Tue,
    Wed,
    Thu,
    Fri,
    Sat,
}
```

::: warning

`declare enum`, `declare class` , `declare enum` 语句**只能用来定义类型**, 不能用来定义具体的实现, 也不是具体的值。

:::

`interface` 和 `type` 声明全局类型, 如果你需要将一下类型定义暴露出来, 可以使用 `interface`或者 `type`。

为了**防止命名冲突**, 暴露在最外层的 `interface` 或 `type` 会作为全局类型作用于整个项目中, 我们应该尽可能的减少全局变量或全局类型的数量。

```ts
// xxx.d.ts
export interface Day {
    format: (value: Date) => string;
}

export type Time = Day | null;
```

`declare namespace` 声明 (含有子属性的) 全局对象

随着 `ES6` 的广泛应用, 现在已经**不建议再使用** `ts` 中的 `namespace`, 而推荐使用 `ES6` 的模块化, 例如 `import foo from 'foo'`。

```ts
// xxx.d.ts
export type Method = 'GET' | 'POST' | 'DELETE' | 'OPTIONS';

export interface Options {
	method: Method;
  [key: string]?: any;
}

declare namespace $ {
  const version: number | string;
  function ajax(url: string, options?: Options): void;
  // 嵌套命名空间
  namespace get {
    function getSomething(id: string): any;
    // etc...
  }
}
```

#### `ES6` 模块

符合 `ES6` 模块 `(module)` 导入导出规范

`export` 导出变量

```ts
// xxx.d.ts
export const name: string;
```

`export namespace` 导出 (含有子属性的) 对象

```ts
// xxx.d.ts
export declare namespace $ {
    const version: number | string;
    function ajax(url: string, options?: Options): void;
    // 嵌套命名空间
    namespace get {
        function getSomething(id: string): any;
        // etc...
    }
}
```

`export default ES6` 默认导出

```ts
// xxx.d.ts
export default function getRandomColor(): string;
```

::: warning

只有 `function`、`class` 和 `interface` 可以直接默认导出, 其他的变量需要先定义出来, 再默认导出

:::

`export = commonjs` 导出模块

```ts
// xxx.d.ts
// 整体导出
module.exports = foo;
// 单个导出
exports.bar = bar;
```

`export as namespace UMD` 库声明全局变量

一般使用 `export as namespace` 时, 都是先有了 npm 包的声明文件, 再基于它添加一条 `export as namespace` 语句, 即可将声明好的一个变量声明为全局变量。

```ts
// xxx.d.ts
export as namespace moment;
declare namespace moment {
    export function valueOf(): number;
}
```

`declare module` 扩展模块

```ts
// xxx.d.ts
// 导入 moment
declare module 'moment' {
    export function valueOf(): number;
}

// 导入 lodash
declare module 'lodash' {
    export function isEmpty(params: any): boolean;
}

// 导入 png 图片
declare module '*.png' {
  const value: string;
  export = value;
}
```

#### 声明合并

-   **函数** 合并(**重载**)

```ts
function getFullName(x: function): string;
function getFullName(x: string): string;
function getFullName(x: string | function): string {
    if (typeof x === 'function') {
        return x();
    } else {
        return x;
    }
}
```

-   **接口 & 类** 合并

```ts
interface Profile {
    name: string;
    getAge(): number;
}

interface Profile {
    age: number | string;
    getAge(): string;
}

// =>
interface Profile {
    // 属性必须唯一
    name: string;
    age: number | string;
    // 这里和函数合并保持一致, 因为函数可以重载
    getAge(): number;
    getAge(): string;
}
```

:::warning

接口合并的**属性的类型必须是唯一的**。

:::

#### 使用依赖

以下情况可以通过使用 **/// <reference /> 三斜线指令** 来解决。

-   依赖全局库
-   依赖模块
-   依赖`UMD`库
    -   全局库
    -   一个模块或`UMD`库

随着 `ES6` 的广泛应用, 现在已经不建议再使用 `ts` 中的三斜线指令来声明模块之间的依赖关系了。

```ts
// xxx.d.ts
/// <reference path="JQuery.d.ts" />
```

::: warning

*不要*使用`/// <reference`指令去声明`UMD`库的依赖！

:::

### 发布

有两种主要方式用来发布声明文件到`npm`：

1. 与你的`npm`包捆绑在一起
2. 发布到`npm`上的[@types organization](https://www.npmjs.com/~types)。

这两种方案中优先选择第一种方案。保持声明文件与源码在一起, 使用时就不需要额外增加单独的声明文件库的依赖了, 而且也能保证声明文件的版本与源码的版本保持一致。

#### 与你的`npm`包捆绑在一起

如果声明文件是通过 `tsc` 自动生成的, 那么无需做任何其他配置。如果是手动写的声明文件, 那么需要满足以下条件之一, 才能被正确的识别。

-   给 `package.json` 中的 `types` 或 `typings` 字段指定一个类型声明文件地址
-   在项目根目录下, 编写一个 `index.d.ts` 文件
-   针对入口文件 (`package.json` 中的 `main` 字段指定的入口文件) , 编写一个同名不同后缀的 `.d.ts` 文件

```json
{
    "name": "typescript-guide",
    "author": "Rain120",
    "version": "1.0.0",
    "main": "./lib/main.js",
    // Tips: "typings"与"types"具有相同的意义, 也可以使用它。
    "types": "./lib/main.d.ts"
}
```

如果没有指定 `types` 或 `typings`, 那么就会在根目录下寻找 `index.d.ts` 文件, 将它视为此库的类型声明文件。

如果没有找到 `index.d.ts` 文件, 那么就会寻找入口文件 (`package.json` 中的 `main` 字段指定的入口文件) 是否存在对应同名不同后缀的 `.d.ts` 文件。

#### 发布到 [@types](https://www.npmjs.com/~types)

[@types](https://www.npmjs.com/~types)下面的包是从[DefinitelyTyped](https://github.com/DefinitelyTyped/DefinitelyTyped)里自动发布的, 通过 [types-publisher 工具](https://github.com/Microsoft/types-publisher)。 如果想让你的包发布为`@types`包, 提交一个[pull request](https://github.com/DefinitelyTyped/DefinitelyTyped)。 在这里查看详细信息 [contribution guidelines page](http://definitelytyped.org/guides/contributing.html)。

**More Info:** [Typescript 发布](https://www.tslang.cn/docs/handbook/declaration-files/publishing.html)

### declare module vs declare namespace

在 `Typescript` 中指定模块的方式有以下两种:

-   with quotes

```ts
declare module 'buffer' {} // with quotes
```

表示外部模块`(ES6模块)`, 当前在`.d.ts`文件中用于将多个`ES6`模块放在一个文件中:

```ts
declare module 'buffer' {}
declare module 'fs' {}
```

-   without quotes

```ts
declare module buffer {} // without quotes
```

被用作 `namespace`, 现在被替换为:

```ts
declare namespace buffer {}
```

> 需要注意的是, 在 `TypeScript 1.5` 中, 命名法发生了变化。内部模块 `(Internal modules)` 现在是 _namespaces_。外部模块 `(External modules)` 现在只是简单的 _modules_。_内部模块_ 是没有引号的模块

[更多信息可以到 Github issue#13774](https://github.com/Microsoft/TypeScript/issues/13774)

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

[handbook: namespaces](https://www.typescriptlang.org/docs/handbook/namespaces.html)

[handbook: Namespaces and Modules](https://www.typescriptlang.org/docs/handbook/namespaces-and-modules.html)

[handbook: declaration-files](https://www.typescriptlang.org/docs/handbook/declaration-files/templates/module-d-ts.html)

[How do I use namespaces with TypeScript external modules?](https://stackoverflow.com/questions/30357634/how-do-i-use-namespaces-with-typescript-external-modules)

[Validators in a single file](https://www.typescriptlang.org/docs/handbook/namespaces.html#validators-in-a-single-file)

[Module vs Namespace - Import vs Require Typescript](https://stackoverflow.com/questions/38582352/module-vs-namespace-import-vs-require-typescript)

[Is typescript Namespace feature deprecated?](https://michelenasti.com/2019/01/23/is-typescript-namespace-feature-deprecated.html)

[Module vs Namespace - Import vs Require Typescript](https://stackoverflow.com/questions/38582352/module-vs-namespace-import-vs-require-typescript)

[如何在 TypeScript 外部模块中使用命名空间?](https://stackoverflow.com/questions/30357634/how-do-i-use-namespaces-with-typescript-external-modules)

[声明文件](https://ts.xcatliu.com/basics/declaration-files.html)
