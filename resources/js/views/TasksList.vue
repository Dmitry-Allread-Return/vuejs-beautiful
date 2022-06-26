<template>
  <div>
      <h1 class="text-center">Tasks List</h1>
      <hr>
      <div class="table-responsive">
        <table class="table" v-if="tasks.length">
          <thead class="table-dark">
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Description</th>
              <th>Exipes date</th>
              <th>Status</th>
              <th width="15%">&nbsp;</th>
            </tr>
          </thead>
          <tbody>
          <transition-group name="fade-off">
            <tr v-for="(task, idx) of tasks" :key="task.id" :data-index="index">
              <td>{{ idx + 1 }}</td>
              <td>{{ task.title }}</td>
              <td>{{ task.description }}</td>
              <td>{{ new Date(task.date).toLocaleDateString() }}</td>
              <td>
                <span class="badge" :class="{
                    'bg-warning': task.status == 'Active',
                    'bg-danger': task.status == 'Outdated',
                    'bg-success': task.status == 'Completed'
                  }">{{ task.status }}</span>
              </td>
              <td>
                <router-link class="btn btn-sm btn-outline-dark me-1" :to="'/task/' + task.id">Open</router-link>
                <button class="btn btn-sm btn-outline-danger" @click="deleteTask(task.id)">Delete</button>
              </td>
            </tr>
          </transition-group>
          </tbody>
        </table>
        <p v-else>No tasks</p>
      </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    tasks: [],
  }),
  mounted() {
    this.tasks = this.$store.getters.tasks
  },
  methods: {
    deleteTask(taskId) {
      this.$store.dispatch('deleteTask', taskId)
    },
  },
  computed: {
    classObject() {
      return {
        chocolate: this.chocolate
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.fade-off-enter-from,
.fade-off-leave-to {
  opacity: 0;
}
.fade-off-enter-active,
.fade-off-leave-active {
  transition: opacity .5s ease;
}
.fade-off-move {
  transition: all 0.8s ease;
}

</style>
