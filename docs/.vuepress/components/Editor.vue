<template>
	<div class='editor-wrapper'>
		<div id='monaco' class='monaco-editor' style='height: 500px'></div>
	</div>
</template>

<script>
// LINK_TO: https://microsoft.github.io/monaco-editor/
// INFO: vuepress need dynamic import -> Line: 62 mounted
// import * as monaco from 'monaco-editor/esm/vs/editor/editor.api';

function noop() {}

export default {
	props: {
		value: {
			type: String,
		},
		diffEditor: {
			type: Boolean,
			default: false
		},
    width: {
			type: [String, Number],
			default: '100%'
		},
    height: {
			type: [String, Number],
			default: '100%'
		},
    original: String,
    value: String,
    originalModel: String,
    modifiedModel: String,
    language: {
			type: String,
			default: 'javascript'
		},
    theme: {
			type: String,
			default: 'vs-dark'
		},
    options: {
			type: Object,
			default() {
        return {};
      }
		},
    editorMounted: {
			type: Function,
			default: noop
		},
    editorBeforeMount: {
			type: Function,
			default: noop
		}
	},
	data() {
		return {
      monaco: null
    }
	},
	mounted () {
		import('monaco-editor/esm/vs/editor/editor.api').then(module => {
      this.monaco = module.default;
			this.initMonaco();
			// this.initDiffMonaco();
    })
	},
	methods: {
		initDiffMonaco() {
			const el = document.querySelector('#monaco-diff');
			const originalModel = monaco.editor.createModel(this.originalModel, "typescript");
			const modifiedModel = monaco.editor.createModel(this.modifiedModel, "typescript");
			const diffEditor = monaco.editor.createDiffEditor(el, {
				width: '100%',
				// value: this.value,
				theme: this.theme,
				fontSize: 16,
				language: 'typescript',
				folding: true,
				// readOnly: true,
				tabSize: 2,
				quickSuggestions: true, // 默认提示
				fixedOverflowWidgets: true, // 超出编辑器大小的使用fixed属性显示
				selectOnLineNumbers: true,
				foldingStrategy: 'indentation', // 代码可分小段折叠
				automaticLayout: true, // 自适应布局
				overviewRulerBorder: false, // 不要滚动条的边框
				scrollBeyondLastLine: false, // 取消代码后面一大段空白
				minimap: {
					// 小地图
					enabled: false
				}
			});
			diffEditor.setModel({
				original: originalModel,
				modified: modifiedModel
			});
		},
		initMonaco() {
			const el = document.querySelector('#monaco');
			monaco.editor.create(el, {
				width: '100%',
				value: this.value,
				theme: this.theme,
				fontSize: 16,
				language: 'typescript',
				folding: true,
				// readOnly: true,
				tabSize: 2,
				quickSuggestions: true, // 默认提示
				fixedOverflowWidgets: true, // 超出编辑器大小的使用fixed属性显示
				selectOnLineNumbers: true,
				foldingStrategy: 'indentation', // 代码可分小段折叠
				automaticLayout: true, // 自适应布局
				overviewRulerBorder: false, // 不要滚动条的边框
				scrollBeyondLastLine: false, // 取消代码后面一大段空白
				minimap: {
					// 小地图
					enabled: true
				}
			});
		}
	}
}

</script>

