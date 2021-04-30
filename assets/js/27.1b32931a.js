(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{777:function(s,t,a){"use strict";a.r(t);var n=a(23),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"定义"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#定义"}},[s._v("#")]),s._v(" 定义")]),s._v(" "),a("p",[s._v("这些设置用于确保 "),a("code",[s._v("TypeScript")]),s._v(" 处理正确的文件。")]),s._v(" "),a("h2",{attrs:{id:"关键字"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#关键字"}},[s._v("#")]),s._v(" 关键字")]),s._v(" "),a("h3",{attrs:{id:"extends"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#extends"}},[s._v("#")]),s._v(" extends")]),s._v(" "),a("p",[s._v("默认值: "),a("code",[s._v("false")])]),s._v(" "),a("p",[a("code",[s._v("extends")]),s._v(" 的值是一个字符串，它包含要继承的另一个配置文件的路径。路径可以使用 "),a("code",[s._v("Node.js")]),s._v(" 样式解析。")]),s._v(" "),a("p",[s._v("首先加载基本文件中的配置，然后由 "),a("strong",[s._v("继承的配置文件")]),s._v(" 中的配置覆盖。"),a("strong",[s._v("在配置文件中找到的所有相对路径都将相对于它们最初所在的配置文件进行解析。")])]),s._v(" "),a("p",[s._v("值得注意的是，从 "),a("strong",[s._v("继承的配置文件")]),s._v(" 中 "),a("a",{attrs:{href:"#include"}},[s._v("包含(include)")]),s._v(" 和 "),a("a",{attrs:{href:"#exclude"}},[s._v("排除(exclude)")]),s._v(" 的文件会覆盖从 "),a("strong",[s._v("基本配置文件")]),s._v(" 中 "),a("a",{attrs:{href:"#include"}},[s._v("包含(include)")]),s._v(" 和 "),a("a",{attrs:{href:"#exclude"}},[s._v("排除(exclude)")]),s._v(" 的文件，并且配置文件之间不允许循环。")]),s._v(" "),a("p",[s._v("目前，唯一被排除在继承之外的顶级属性是 "),a("a",{attrs:{href:"#references"}},[s._v("references")]),s._v("。")]),s._v(" "),a("p",[a("strong",[s._v("Note👇👇👇")])]),s._v(" "),a("ul",[a("li",[a("p",[s._v("继承的配置文件: "),a("code",[s._v("tsconfig.json")])])]),s._v(" "),a("li",[a("p",[s._v("基本配置文件: "),a("code",[s._v("tsconfig.base.json")])])])]),s._v(" "),a("p",[a("code",[s._v("tsconfig.base.json")])]),s._v(" "),a("div",{staticClass:"language-json line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"compilerOptions"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"noImplicitAny"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"strictNullChecks"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("p",[a("code",[s._v("tsconfig.json")])]),s._v(" "),a("div",{staticClass:"language-json line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"extends"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"./tsconfig.base"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("在配置文件中找到的具有相对路径的属性(没有从继承中排除)将相对于它们的起始配置文件进行解析。")]),s._v(" "),a("h3",{attrs:{id:"exclude"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#exclude"}},[s._v("#")]),s._v(" exclude")]),s._v(" "),a("p",[s._v("默认值: "),a("code",[s._v('["node_modules", "bower_components", "jspm_packages"]')]),s._v(", 如果指定了一个, 则加上 "),a("code",[s._v("outDir")]),s._v(" 的值。")]),s._v(" "),a("p",[s._v("它是用来指定解析 "),a("code",[s._v("include")]),s._v(" 时应跳过的文件名或模式数组, 也就是文件过滤列表 ("),a("code",[s._v("glob")]),s._v(" 匹配模式)。")]),s._v(" "),a("div",{staticClass:"language-json line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"exclude"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"node_modules"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h3",{attrs:{id:"include"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#include"}},[s._v("#")]),s._v(" include")]),s._v(" "),a("p",[s._v("默认值: 除非被指定了文件, 否则就是 "),a("code",[s._v('["**/*"]')]),s._v("。")]),s._v(" "),a("p",[s._v("指定要包含在程序中的文件名或模式的数组。这些文件名是相对于包含"),a("code",[s._v("tsconfig.json")]),s._v(" 的目录解析的文件。")]),s._v(" "),a("div",{staticClass:"language-json line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"include"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"src/**/*"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"tests/**/*"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("它将会包含")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\n├── scripts                ⨯\n│   ├── lint.ts            ⨯\n│   ├── update_deps.ts     ⨯\n│   └── utils.ts           ⨯\n├── src                    ✓\n│   ├── client             ✓\n│   │    ├── index.ts      ✓\n│   │    └── utils.ts      ✓\n│   ├── server             ✓\n│   │    └── index.ts      ✓\n├── tests                  ✓\n│   ├── app.test.ts        ✓\n│   ├── utils.ts           ✓\n│   └── tests.d.ts         ✓\n├── package.json\n├── tsconfig.json\n└── yarn.lock\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br")])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("提示")]),s._v(" "),a("p",[a("code",[s._v("include")]),s._v(" 和 "),a("code",[s._v("exclude")]),s._v("支持通配符来生成 "),a("code",[s._v("glob")]),s._v("模式, 如下 👇👇👇:")]),s._v(" "),a("ul",[a("li",[a("p",[a("strong",[s._v("*")]),s._v(" 匹配 0 或多个字符(不包括目录分隔符)")])]),s._v(" "),a("li",[a("p",[a("strong",[s._v("?")]),s._v(" 匹配一个任意字符(不包括目录分隔符)")])]),s._v(" "),a("li",[a("p",[a("strong",[s._v("**/")]),s._v(" 递归匹配任意子目录")])])]),s._v(" "),a("p",[s._v("如果一个 "),a("code",[s._v("glob")]),s._v(" 模式里的某部分只包含 "),a("code",[s._v("* 或 .*")]),s._v(", 那么仅有支持的文件扩展名类型被包含在内(比如默认 "),a("code",[s._v(".ts")]),s._v(", "),a("code",[s._v(".tsx")]),s._v(", 和 "),a("code",[s._v(".d.ts")]),s._v(", 如果 "),a("code",[s._v("allowJs: true")]),s._v(" 还包含 "),a("code",[s._v(".js")]),s._v(" 和"),a("code",[s._v(".jsx")]),s._v(")。")])]),s._v(" "),a("h3",{attrs:{id:"files"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#files"}},[s._v("#")]),s._v(" files")]),s._v(" "),a("p",[s._v("默认值: "),a("code",[s._v("false")])]),s._v(" "),a("p",[s._v("指定程序中包含的文件的允许列表。如果无法找到任何文件，就会发生错误。")]),s._v(" "),a("div",{staticClass:"language-json line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"files"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"main.ts"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"supplemental.ts"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[a("strong",[s._v("Note:")]),s._v(" 当您只有少量文件且不需要使用 "),a("code",[s._v("glob")]),s._v(" 来引用许多文件时，这很有用。如果需要，那么使用"),a("a",{attrs:{href:"#include"}},[s._v("include")]),s._v("。")]),s._v(" "),a("h3",{attrs:{id:"references"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#references"}},[s._v("#")]),s._v(" references")]),s._v(" "),a("p",[s._v("默认值: "),a("code",[s._v("false")])]),s._v(" "),a("p",[s._v("项目引用是一种将你的 "),a("code",[s._v("TypeScript")]),s._v(" 程序结构成更小块的方法。使用"),a("code",[s._v("Project References")]),s._v(" 可以极大地改进构建和编辑器的交互时间, 强制组件之间的逻辑分离, 并以新的和改进的方式组织代码。")]),s._v(" "),a("div",{staticClass:"language-json line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"references"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// ... path")]),s._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"some/path/which/you/want/to/set/it"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("p",[s._v("你可以在 "),a("strong",[s._v("官方手册")]),s._v(" 中的"),a("a",{attrs:{href:"https://www.typescriptlang.org/docs/handbook/project-references.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("项目参考(Project References)"),a("OutboundLink")],1),s._v("资料部分阅读更多关于参考资料如何工作的内容, 或者参考我另一篇笔记获取更多有关于 "),a("RouterLink",{attrs:{to:"/zh/compile-config/references/"}},[s._v("Project References")]),s._v(" 的信息。")],1),s._v(" "),a("h3",{attrs:{id:"typeacquisition"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#typeacquisition"}},[s._v("#")]),s._v(" typeAcquisition")]),s._v(" "),a("p",[s._v("默认是: "),a("code",[s._v("false")])]),s._v(" "),a("p",[s._v("当你的编辑器中有一个 "),a("code",[s._v("JavaScript")]),s._v(" 项目时, "),a("code",[s._v("TypeScript")]),s._v(" 会使用"),a("code",[s._v("@types")]),s._v(" 定义的 "),a("code",[s._v("DefinitelyTyped")]),s._v(" 集合自动为你的节点模块提供类型。这称为自动类型获取, 您可以使用配置中的 "),a("code",[s._v("typeAcquisition")]),s._v(" 对象对其进行自定义。换句话来说就是设置自动引入库类型定义文件 "),a("code",[s._v(".d.ts")]),s._v(" 相关。")]),s._v(" "),a("h4",{attrs:{id:"语法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#语法"}},[s._v("#")]),s._v(" 语法")]),s._v(" "),a("div",{staticClass:"language-json line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// ...")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"typeAcquisition"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 是否开启自动引入库类型定义文件 .d.ts，默认为 false")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"enable"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v('// 允许自动引入的库名，如：[ "jquery", "lodash" ]')]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"include"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"jest"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 排除的库名。")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"exclude"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"jquery"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br")])]),a("h4",{attrs:{id:"使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用"}},[s._v("#")]),s._v(" 使用")]),s._v(" "),a("p",[s._v("如果您想禁用或自定义此特性, 请创建 "),a("code",[s._v("jsconfig.json")]),s._v(" 在项目的根目录中")]),s._v(" "),a("div",{staticClass:"language-json line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"typeAcquisition"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"enable"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v("如果你有一个特定的模块, 应该包括(但不在 "),a("code",[s._v("node_modules")]),s._v(" 中)")]),s._v(" "),a("div",{staticClass:"language-json line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"typeAcquisition"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"include"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"jest"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v("如果不应该自动获取某个模块, 例如, 如果该库在您的 "),a("code",[s._v("node_modules")]),s._v(" 中可用, 但您的团队已经同意不使用它")]),s._v(" "),a("div",{staticClass:"language-json line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"typeAcquisition"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"exclude"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"jquery"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v("在"),a("code",[s._v("TypeScript 4.1")]),s._v("中, 还添加了禁用文件名触发类型获取的特殊大小写的功能。")]),s._v(" "),a("div",{staticClass:"language-json line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"typeAcquisition"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"disableFilenameBasedTypeAcquisition"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v("这意味着在你的项目中有一个像 "),a("code",[s._v("jquery.js")]),s._v(" 这样的文件不会自动从"),a("code",[s._v("DefinitelyTyped")]),s._v(" 下载 "),a("code",[s._v("JQuery")]),s._v(" 的类型。")]),s._v(" "),a("h2",{attrs:{id:"快来耍耍啊"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#快来耍耍啊"}},[s._v("#")]),s._v(" 快来耍耍啊")]),s._v(" "),a("h3",{attrs:{id:"🌰🌰"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#🌰🌰"}},[s._v("#")]),s._v(" 🌰🌰")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("\n// template\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h3",{attrs:{id:"游乐场"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#游乐场"}},[s._v("#")]),s._v(" 游乐场")]),s._v(" "),a("br"),s._v(" "),a("Editor",{attrs:{value:"// enjoy yourself"}}),s._v(" "),a("h3",{attrs:{id:"参考答案"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考答案"}},[s._v("#")]),s._v(" 参考答案")]),s._v(" "),a("div",{staticClass:"language-ts line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// answer")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"参考资料"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[s._v("#")]),s._v(" 参考资料")]),s._v(" "),a("p",[a("a",{attrs:{href:"https://www.typescriptlang.org/tsconfig#Project_Files_0",target:"_blank",rel:"noopener noreferrer"}},[s._v("typescript lang: File Inclusion"),a("OutboundLink")],1)])],1)}),[],!1,null,null,null);t.default=e.exports}}]);