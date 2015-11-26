<template>
	<div class="todo-wrap">
		
		<comp-a :data="todos"></comp-a>
		<comp-b :data="todos"></comp-b>
		total: {{todos.length}} <br>
		done: {{done}} <br>
		undo: {{undo}}
	</div>


</template>

<script>
	import CompA from './components/a.vue'
	import CompB from './components/b.vue'
	import Store from './store.js'

	export default {
		data () {
			return {
				todos: Store.fetch() || []
			}
		},
		components: {
			CompA,
			CompB
		},
		watch: {
			todos: {
				handler () {
					Store.save(this.todos);
				},
				deep: true
			}
		},
		computed: {
			done() {
				return this.todos.filter((item)=>{
					return item.done;
				}).length;
			},
			undo() {
				return this.todos.length - this.done;
			}
		}
	}
</script>

<style lang="less">
	body {
		font-size: 12px;
	}
	.logo {
		width: 40px;
		height: 40px;
	}

</style>
