## Previously

```ts
function isString(value: any): boolean {
	// toExponential() 方法以指数表示法返回该数值字符串表示形式。numObj = 77.1234; => numObj.toExponential(2) //输出 7.71e+1
  console.log(value.toExponential(2));
  return value === 'string';
}
```

## 定义 <Badge text='Typescript is 关键字' />

:::theorem is
`is` 关键字被称为类型谓词, 它表示是否属于某个类型, 可以有效地缩小类型范围, 它可以帮助开发者在编辑阶段发现错误，从而避免一些隐藏的运行时错误。
:::

作用: 既可以作为返回值，也可以缩小变量的类型范围。

## 使用

```ts
// incorrect
function isString(value: any): boolean {
	// toExponential() 方法以指数表示法返回该数值字符串表示形式。
  console.log(value.toExponential(2));
  return typeof value === 'string';
}

// 使用 Demo
function isString_is(value: any): value is string {
  return typeof value === 'string';
}

function testString(string: any) {
  if (isString(string)) {
    console.log(string.length)
    console.log(string.toExponential(2))
  }

  // 测试 is 收窄范围和普通模式下的优势
  if (isString_is(string)) {
    console.log(string.length)
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toExponential
    // Property 'toExponential' does not exist on type 'string'.(2339)
    console.log(string.toExponential(2))
  }
}

testString('female');

```

[直接体验](https://www.typescriptlang.org/play?#code/PTAEEsDsGMHsCd4FNoBcBQAzArjV5ZIIBnAZVXigHMAKANwEMAbbJALlAcgE8BKDgEaxYTJF1ABvdAEgQoVLACiADwAOhJJHzMavUIE7TQKs2gU7lA4MaAHU0AWEYC5PQ4BX4wHtqgU+jzgHgVA6tqAyb0BMcjcBG+oDw+oBADOigoHCQxCJIAHRMsLSMLLEKKuqQmtpMNABMvLwA3KGgyKjY8ESo3KpIsJigSaygALytoADkxBTU7UUAvujocoD+8oAUrqAAIkgAtrBYuGgEROBk3ZBUAPor9MysHFx8HI1IJKBdlOuSxaXlldW19cctbZ1rVL3oA-N4S-JIXeQLrRztR9jw9FIwuB6jQVoDqDQQet8lcwmEIlFRHEEoi3nFNFRUAALXjFdGETGxeLAvGpNQaLTgHR5UlhL5hOSAaVtAKvRp0AbKaAEK9AMDBgBe1QAxKoA7M0AWAmAQisAoBoOUAIW6ADHlAP1KxWhoFhqyBW2IuKBKMhaIx0WxNKB+PWxNZaLkRNQqFUxDYIAAJkg6Eh4jV4DFZgAvcBMJgMGIIKjATQAWgAqqRgG7YNBiMAAOpIATAABSDEYpGglFUqGAACUkJgkMgYEhgABxeICZgbADyAgAVihUKmAHLYaYCKvAOnpTJMphk0ByAAK8FgvqqHRHDKy7VASf+oEgsFQoCQyhWu8I8nuHSR7xiuQAzFeAJy28mRM3Ug3UGLLjKM5n5YoDL6of5UHhdYaHaStpmYJB2kKIA)

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

[what-does-the-is-keyword-do-in-typescript](https://stackoverflow.com/questions/40081332/what-does-the-is-keyword-do-in-typescript)
