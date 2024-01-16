## 定义

条件类型，条件类型冒号左边为 if 右边为 else

## 使用

```ts
type If<T, K> = T extends K ? true : false;

type IfValue<T extends boolean, K, L> = T extends true ? K : L;
```

## 快来耍耍啊

### 🌰🌰

<!-- 题目 -->

```ts
type A = { name: string }
type B = { name: string; age?: number | string }

type x = If<A, B>

type xA = IfValue<true, A, B>
type xB = IfValue<false, A, B>

```

[Go Demo](https://www.typescriptlang.org/play?#code/C4TwDgpgBAkgZgHgCoBooGkB8UC8UlQQAewEAdgCYDOGUA-FMAE4Cu0AXFHAIYA2VEANwAoYaEiw4ANT5tkhEuWpQARgHs1vCNzJp0aADLY8BYqUo1mberU4GRY8NACCuKAG8oZbgFsInKmYASzIAcygAX0cJACE3T28-AOCwwShuUIg6TjIWHxUIJigAHyhAphDwqOjoIjd4BGc0GMxRcVrXPHgZXjkrCDQmqBaaqCI4rulZCAQefgGoIZagA)

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


