## 定义 <Badge text='Typescript is 关键字' />

:::theorem is
`is` 关键字表示是否属于某个类型, 可以有效地缩小类型范围。
:::

## 使用

```ts
function getFemale(gender: any): boolean {
  console.log(gender.toExponential(2));
  return gender === 'female';
}

// 使用 Demo
function getFemale_is(gender: any): gender is string {
  return gender === 'female';
}

function testGender(gender: any) {
  if (getFemale(gender)) {
    console.log(gender.length)
    console.log(gender.toExponential(2))
  }
  // 测试 is 收窄范围和普通模式下的优势
  if (getFemale_is(gender)) {
    console.log(gender.length)
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toExponential
    // Property 'toExponential' does not exist on type 'string'.(2339)
    console.log(gender.toExponential(2))
  }
}

testGender('female');

```

[直接体验](https://www.typescriptlang.org/play/?ssl=1&ssc=1&pln=22&pc=1#code/GYVwdgxgLglg9mABAcwKZQGKoLYEMA2qAFGmACaoBOAXIrmAJ4CUtARnHIfYgN4BQiRBAQBnTqgB0+OMhKpyVCVDgBRAB4AHBPNgEiAJiZMA3AMSV0ISklIVKiALxPEAcmA4CqF6YC+fPqCQsAgo6Fh4hAD6MCJyCjR0jCyh8YgxiCJQlDBgyLxmFlBWNvJ2js5uHoTefH4B4NDwSFComQDipVRxdrT0zPmCMMCIcphVxLZURgOCQqLiUjLdioS5UAAWTGaCwmBihIuyk5RKqpraYLr4BkZmfoPDo+Ge0bHH0-yzc3sL0kedJ1WyA2Wy+u32kj+yxOynUWjAOhgekMoMQfjqLXaAKIlQiXhMfCAA)

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