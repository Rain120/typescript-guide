## 定义

 `reference (引用)` 是 `TypeScript 3.0`的新特性，它支持将项目的各个部分定义为单独的`TypeScript`模块， 分割成更小的组成部分。除此之外，这允许以不同的方式配置这些模块，分别构建它们等等。

## 什么是项目引用

每个引用的`path`属性都可以指向包含 `tsconfig.json` 文件的目录，或者配置文件本身(可以有任何名称)。当你引用一个项目时：

- **从被引用的项目中导入模块将会加载它的输出声明文件`(.d.ts)`**
- 如果引用的项目生成`outFile`，则在此项目中将显示输出文件`.d.ts`文件的声明
- 如果需要，构建模式将自动构建引用的项目

#### Note

引用的工程必须启用新的`composite`设置。 这个选项用于帮助TypeScript快速确定引用工程的输出文件位置。 若启用`composite`标记则会发生如下变动：

- 对于`rootDir`设置，如果没有被显式指定，默认为包含`tsconfig`文件的目录
- 所有的实现文件必须匹配到某个`include`模式或在`files`数组里列出。如果违反了这个限制，`tsc`会提示你哪些文件未指定。
- 必须开启`declaration`选项。

## 作用

 `reference` 属性作用是 **指定工程引用依赖**。通过分成多个项目，可以大大提高类型检查和编译的速度，减少使用编辑器时的内存使用，并改善对程序逻辑组的执行。

## 使用

```ts
type Reference = string[] & {
  path: string;
  prepend?: Boolean;
}
```

`prepend`选项可以启用前置某个依赖的输出，前置工程会将工程的输出添加到当前工程的输出之前。它对`.js`文件和`.d.ts`文件都有效，`source map`文件也同样会正确地生成。

### tsconfig.json

```json
{
	"references": [
		// ... path
		"some/path/which/you/want/to/set/it",
	]
}
```

或者这样使用

```json
{
	"references": [{
		"path": "some/path/which/you/want/to/set/it",
		"prepend": true
	}]
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

[Typescript Handbook Reference](https://www.typescriptlang.org/docs/handbook/project-references.html)

[How to use project references in TypeScript 3.0?](https://stackoverflow.com/questions/51631786/how-to-use-project-references-in-typescript-3-0)

[What is a Project Reference?](https://www.typescriptlang.org/docs/handbook/project-references.html#what-is-a-project-reference)