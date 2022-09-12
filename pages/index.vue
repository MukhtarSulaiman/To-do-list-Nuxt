<template>
	<main>
		<h1>Task Monitor</h1>
		<p>Your list of tasks</p>
		<div class="create-new">
			<input 
				type="text" 
				v-model="newTask" 
				:placeholder="$store.state.tasks.length < 1 ? 'Add your first task' : 'Add a new task'" 
				@keypress.enter="addTask">
			<button @click="addTask">Add</button>
		</div>
		<div class="tasks">
			<Task 
				v-for="(task, i) in $store.state.tasks"
				:key="i"
				:task="task"/>
		</div>
	</main>

</template>

<script>
export default {
	data (){
		return {
			newTask: null,
		}
	},
	methods: {
		addTask() {
			if(this.newTask) {
				this.$store.commit('ADD_TASK', this.newTask);
				this.newTask = null
			}
		}
	}
}
</script>
