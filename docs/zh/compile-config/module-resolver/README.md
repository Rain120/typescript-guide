## 定义

这些设置用于`TypeScript` 的模块解析。

## 关键字

### baseUrl

用于解析非相对模块名称的基目录。可以定义一个可以进行绝对文件解析的根文件夹。

```json
{
  "compilerOptions": {
    "baseUrl": ".",
  }
}
```

### paths

根据 `baseUrl` 配置来告知 `TypeScript` 应如何解析 `require` 或 `import` 中的导入。

```json
{
	"compilerOptions": {
    "baseUrl": ".",
  },
  "paths": {
    "src": [
      "./src/**"
    ]
  }
}
```

### rootDirs

使用 `rootDirs`，可以在构建时让编译器将这个路径列表中的路径的内容都放到一个文件夹中。

```json
{
  "compilerOptions": {
    "rootDirs": [
      "src/home",
      "src/profile",
    ],
}
```

### typeRoots

用来指定默认的类型声明文件查找路径，默认为 `node_modules/@types`, 指定 `typeRoots`后，`TypeScript` 编译器会从指定的路径去引入声明文件，而不是 `node_modules/@types`, 比如以下配置会从 `typings`路径下去搜索声明:

```json
{
  "compilerOptions": {
    "typeRoots": ["./typings"]
  }
}
```

### types

`TypeScript` 编译器会默认引入 `typeRoots` 下所有的声明文件，但是有时候我们并不希望全局引入所有定义，而是仅引入部分模块。这种情景下可以通过 `types` 指定模块名只引入我们想要的模块，比如以下只会引入 `jquery` 的声明文件:

```json
{
  "compilerOptions": {
    "types": ["jquery"]
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


