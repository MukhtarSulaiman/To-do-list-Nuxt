export const state = () => ({
      tasks: []
})

export const mutations = {
      ADD_TASK(state, task) {
            state.tasks.push({content: task, isDone: false})
      },
      REMOVE_TASK(state, task) {
            state.tasks.splice(state.tasks.indexOf(task), 1)
      },
      TOGGLE_TASK(state, task) {
            task.isDone = !task.isDone
      }
}