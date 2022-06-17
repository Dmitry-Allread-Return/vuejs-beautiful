import { createStore } from 'vuex'

export default createStore({
  state: {
    tasks: JSON.parse(localStorage.getItem('tasks') || '[]')
  },
  mutations: {
    createTask(state, task) {
      state.tasks.push(task)
      localStorage.setItem('tasks', JSON.stringify(state.tasks))
    },
    deleteTask(state, task) {
      let indexOfTask = state.tasks.indexOf(task)
      state.tasks.splice(indexOfTask, 1)
      localStorage.setItem('tasks', JSON.stringify(state.tasks))
    },
    updateTaskStatus(state, {id, status}) {
      let tasks = state.tasks.concat()

      let idx = tasks.findIndex(t => t.id == id)
      let task = tasks[idx]
  
      tasks[idx] = {...task, status}

      state.tasks = tasks
      localStorage.setItem('tasks', JSON.stringify(state.tasks))
    },
    updateTask(state, task) {
      let idx = state.tasks.findIndex(t => t.id === task.id)
      state.tasks[idx] = task
      localStorage.setItem('tasks', JSON.stringify(state.tasks))
    }
  },
  actions: {
    createTask({commit}, task) {
      commit('createTask', task)
    },
    deleteTask({commit, getters}, taskId) {
      let task = getters.taskById(taskId)
      commit('deleteTask', task)
    },
    updateTaskStatus({commit}, task) {
      commit('updateTaskStatus', task)
    },
    updateTask({commit}, task) {
      commit('updateTask', task)
    }
  },
  getters: {
    tasks: state => state.tasks,
    taskById: state => id => state.tasks.find(task => task.id === id)
  },
  modules: {
  }
})
