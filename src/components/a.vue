<style scoped>
	input {
		line-height: 30px;
	}
</style>

<template>
	<div class="new-todo-wrap">
		<input type="text" v-model="title" v-on:keyup.enter.stop.prevent="submit" autofocus>
	</div>
</template>

<script>
	export default {
		props: ["data"],
		data () {
			return {
				title: ""
			}
		},
		methods: {
			submit() {
				this.data.push({
					title: this.title,
					done: false
				});

				this.title="";
			}
		}
	}
</script>
