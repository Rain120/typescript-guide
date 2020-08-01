## 定义

联合类型是具有 **或** 关系的多个类型组合而成, 只要满足其中一个类型即可。当你不确定某个对象的值是什么类型时就可以使用 **联合类型**。

**Note:** 联合类型是 **或** 的关系, 即 $A \cap B$, 使用 `|` 运算符 。

## Nullable 与 联合类型



## 使用

```ts
interface Boy {
  hair: boolean;
  tall: boolean;
}

interface Girl {
  hair: boolean;
  cute: boolean;
}

type Person = Boy | Girl

const someone: Person = {
  hair: true
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

[handbook - union-types](https://www.typescriptlang.org/docs/handbook/advanced-types.html#union-types)

[unions](https://basarat.gitbook.io/typescript/type-system/discriminated-unions)

[数学公式参考](https://latexlive.com/)
