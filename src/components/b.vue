<style scoped>
	.container {
		border: 1px solid #f00;
	}
	h2 {
		color: #393;
	}
</style>

<script>
	export default {
		props: ["data"],
		methods: {
			changeState(item) {
				if(!item) {
					return false;
				}
				item.done = !item.done;
			}
		}
	}
</script>

<template>
	<ul class="todo-list">
		<li class="todo-item" v-for="item in data" @click="changeState(item)">
			{{item.title}} {{item.done}}
		</li>
	</ul>
</template>
