<template>
	<details>
		<summary>{{title}}</summary>
	</details>
</template>

<script>

export default {
  props: {
    title: {
      type: String,
      default: '参考答案'
    },
    code: {
      type: String,
      default: ''
    }
	},
	data() {
    return {
			// editor: null,
    }
	},
	mounted () {
    // import('./Editor').then(module => {
    //   this.editor = module.default
    // })
  }
}
</script>

<style lang='styl'>
</style>
