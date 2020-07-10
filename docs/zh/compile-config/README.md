## 配置

- 手动 创建一个 `tsconfig.json`文件
- 使用`tsc`命令
  - `npx tsc --init` 
  - `npm i -g typescript`  `tsc --init`

`config` 文件解释

```json
{
  "extends": "extends config files path",  // 从另一个配置文件里继承配置
  "compileOnSave": true,                   // IDE在保存文件的时候根据tsconfig.json重新生成文件。
  "compilerOptions": {
    /* 基本选项 */
    "target": "es5",                       // 指定 ECMAScript 目标版本: 'ES3' (default), 'ES5', 'ES2015', 'ES2016', 'ES2017', or 'ESNEXT'
    "module": "commonjs",                  // 指定使用模块: 'commonjs', 'amd', 'system', 'umd' or 'es2015'
    "lib": [],                             // 指定要包含在编译中的库文件
    "allowJs": true,                       // 允许编译 javascript 文件
    "checkJs": true,                       // 报告 javascript 文件中的错误
    "jsx": "preserve",                     // 指定 jsx 代码的生成: 'preserve', 'react-native', or 'react'
    "declaration": true,                   // 生成相应的 '.d.ts' 文件
    "sourceMap": true,                     // 生成相应的 '.map' 文件
    "outFile": "./",                       // 将输出文件合并为一个文件
    "outDir": "./",                        // 指定输出目录
    "rootDir": "./",                       // 用来控制输出目录结构 --outDir.
    "removeComments": true,                // 删除编译后的所有的注释
    "noEmit": true,                        // 不生成输出文件
    "importHelpers": true,                 // 从 tslib 导入辅助工具函数
    "isolatedModules": true,               // 将每个文件做为单独的模块 （与 'ts.transpileModule' 类似）.

    /* 严格的类型检查选项 */
    "strict": true,                        // 启用所有严格类型检查选项
    "noImplicitAny": true,                 // 在表达式和声明上有隐含的 any类型时报错
    "strictNullChecks": true,              // 启用严格的 null 检查
    "noImplicitThis": true,                // 当 this 表达式值为 any 类型的时候，生成一个错误
    "alwaysStrict": true,                  // 以严格模式检查每个模块，并在每个文件里加入 'use strict'

    /* 额外的检查 */
    "noUnusedLocals": true,                // 有未使用的变量时，抛出错误
    "noUnusedParameters": true,            // 有未使用的参数时，抛出错误
    "noImplicitReturns": true,             // 并不是所有函数里的代码都有返回值时，抛出错误
    "noFallthroughCasesInSwitch": true,    // 报告 switch 语句的 fallthrough 错误。（即，不允许 switch 的 case 语句贯穿）

    /* 模块解析选项 */
    "moduleResolution": "node",            // 选择模块解析策略： 'node' (Node.js) or 'classic' (TypeScript pre-1.6)
    "baseUrl": "./",                       // 用于解析非相对模块名称的基目录
    "paths": {},                           // 模块名到基于 baseUrl 的路径映射的列表
    "rootDirs": [],                        // 根文件夹列表，其组合内容表示项目运行时的结构内容
    "typeRoots": [],                       // 包含类型声明的文件列表
    "types": [],                           // 需要包含的类型声明文件名列表
    "allowSyntheticDefaultImports": true,  // 允许从没有设置默认导出的模块中默认导入。

    /* Source Map Options */
    "sourceRoot": "./",                    // 指定调试器应该找到 TypeScript 文件而不是源文件的位置
    "mapRoot": "./",                       // 指定调试器应该找到映射文件而不是生成文件的位置
    "inlineSourceMap": true,               // 生成单个 soucemaps 文件，而不是将 sourcemaps 生成不同的文件
    "inlineSources": true,                 // 将代码与 sourcemaps 生成到一个文件中，要求同时设置了 --inlineSourceMap 或 --sourceMap 属性

    /* 其他选项 */
    "experimentalDecorators": true,        // 启用装饰器
    "emitDecoratorMetadata": true          // 为装饰器提供元数据的支持
	},
	"files": [],                           // 指定一个包含相对或绝对文件路径的列表
	"include": [],                         // 指定文件包含列表 (glob匹配模式)
	"exclude": [],                         // 指定文件过滤列表 (glob匹配模式)
}
```

[官网文档 - tsconfig.json](http://www.tslang.cn/docs/handbook/tsconfig-json.html)

[tsconfig schema](http://json.schemastore.org/tsconfig)

::: tip
如果一个 `glob` 模式里的某部分只包含 `* 或 .*`，那么仅有支持的文件扩展名类型被包含在内(比如默认 `.ts`, `.tsx`, 和 `.d.ts`, 如果 `allowJs: true` 还包含 `.js` 和`.jsx`)。

支持的 `glob` 通配符有: 

- **\*** 匹配0或多个字符(不包括目录分隔符)

- **?** 匹配一个任意字符(不包括目录分隔符)

- **\*\*/** 递归匹配任意子目录

:::

## 编译选项

运行`tsc`即可将`ts`编辑成`js`文件，运行`tsc -w` 在监视模式下运行编译器。

`--watch / -w`: 在监视模式下运行编译器。会监视输出文件，在它们改变时重新编译。监视文件和目录的具体实现可以通过环境变量进行配置。详情请看[配置 Watch](http://www.tslang.cn/docs/handbook/configuring-watch.html)。

编译会通过配置文件`tsconfig.json`中`files`, `include`, `exclude`来读取，筛选文件。

**Note:** 可以通过`globs`来匹配文件，`eg:` `lib/**/*`

[编译选项](http://www.tslang.cn/docs/handbook/compiler-options.html)

## 参考资料

[深入理解 TypeScript](https://jkchao.github.io/typescript-book-chinese/)
