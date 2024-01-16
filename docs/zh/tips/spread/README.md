## 定义

拓展运算符

## 使用

```ts
type spreadFirst<T> = T extends [infer First, ...infer Rest] ? First : never;

type spreadLast<T> = T extends [...infer First, infer Last] ? Last : never;

type spreadFirstChar<T> = T extends `${infer First}${infer Rest}`? First : never;

type spreadRestChar<T> = T extends `${infer First}${infer Rest}`? Rest : never;
```

## 快来耍耍啊

### 🌰🌰

<!-- 题目 -->

```ts
type Arr = [1, 2, 3]
type Str = '123'
type Num = 123

type FA = spreadFirst<Arr> // 1
type LA = spreadLast<Arr> // 3

type FS = spreadFirstChar<Str> // 1
type LS = spreadRestChar<Str> // 23

type FN = spreadFirstChar<Num> // never

```

[Go Demo](https://www.typescriptlang.org/play?#code/C4TwDgpgBAzmBOECGATAYgS3jYAeAKgHxQC8U+UEAHsBAHYoxQDaGdAZhPFJtsADRQAdCLaduAJQg4AulAD8PLDigAuKHQgA3LgG4AUPtCRYCZCgAySHAWJkK1WgybMRQsVyV9BH7ldkKUP7AahraeobG0HCIqLw4AMIAFkjwtqTklDT0jFAABgAkAN6+XjgAvsWlUhV5ivEh6po68AZG4NFmqDXAyanp9llOuYUlHJ4NlWPiUD3ldbPSjWEtbVFQAILw3GTMAIyCAEyCAMwy7SYAysA7UADke4cndxfQAHIArgC2GY8nkR0eBsMjFzA1cFt4IRXkFgWRQahghDttCYWhLiCuuhlL0UmlrlCYRYMfCsT0+vibqj1mg3pjYti+BTcJ8vtCgA)

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


