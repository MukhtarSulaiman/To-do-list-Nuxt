<template>
      <div :class="`task ${task.isDone ? 'is-complete' : ''}`">
            <div class="content">{{task.content}}</div>
            <div class="buttons">
                  <button @click="toggleIsDone(task)">{{task.isDone ? 'Undo' : 'Done'}}</button>
                  <button @click="removeTask(task)" class="delete">Remove</button>
            </div>
      </div>
</template>

<script>
export default {
      props: ['task'],
      methods: {
            toggleIsDone(task) {
                  this.$store.commit('TOGGLE_TASK', task)
            },
            removeTask(task) {
                  this.$store.commit('REMOVE_TASK', task)
            }
      }
}
</script>