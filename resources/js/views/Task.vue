<template>
  <div>
      <div v-if="(typeof task) !== 'undefined'">
        <h1 class="text-center">{{ task.title }}</h1>
        <div class="row">
          <div class="col-md-5 m-auto">
            <form action="" class="form">
              <div class="form-group mb-3">
                <label for="description" class="h5">Description</label>
                <input 
                  type="text"
                  name="description"
                  id="description"
                  v-model="description"
                  class="form-control"
                  placeholder="Task Description"/>
              </div>
              <div class="form-group mb-3">
                <label for="datepicker" class="h5">Expires date</label>
                <datepicker
                  v-model="date"
                  class="form-control date-default"
                  style="background-color: #fff; cursor: pointer"/>
              </div>
              <div>
                <label for="enterTag" class="h5">Add tags</label>
                <input 
                  type="text"
                  placeholder="Enter tag here"
                  class="form-control w-auto"
                  id="enterTag"
                  @keyup.enter="addTag()"
                  v-model="tag">
                <tag class="badge bg-dark rounded-pill me-1 mt-2 p-2" v-for="tag of tags" :key="tag.id" :tag="tag"/>
              </div>
              <div class="mt-3 me-2">
                <button class="btn btn-outline-primary" type="button" @click="updateTask">Update</button>
                <button class="btn btn-warning ms-2" type="button" @click="unCompleteTaskStatus">Uncomplete task</button>
              </div>
              <div class="btn btn-outline-success mt-3" v-if="task.status !== 'Completed'" @click="completeTaskStatus">Complete task</div>
              <p v-if="task.status === 'Completed'" class="completed-info mt-4">Task is already completed!</p>
            </form>
          </div>
        </div>
      </div>
      <p v-else>Task was not found</p>
  </div>
</template>

<script>
import Datepicker from 'vue3-datepicker'
// import Tag from '@/components/Tag'
export default {
  components: {Datepicker},
  data: () => ({
    tags: [],
    tag: '',
    title: '',
    description: '',
    date: null
  }),
  methods: {
    addTag() {
      if (this.tag.length <= 0) {
        return
      }
      this.tags.push(this.tag)
      this.tag = ''
    },
    removeTag(event) {
      let tagText = event.target.parentNode.innerText.slice(0, -1).trimEnd()
      this.tags = this.tags.filter(el => el !== tagText)
    },
    completeTaskStatus() {
      this.task.status = 'Completed'
      this.$store.dispatch('updateTaskStatus', this.task)
      this.$router.push('/tasks-list')
    },
    unCompleteTaskStatus() {
      this.task.status = 'Active'
      this.$store.dispatch('updateTaskStatus', this.task)
      this.$router.push('/tasks-list')
    },
    updateTask() {
      const task = {
        id: +this.$route.params.id,
        title: this.task.title,
        description: this.description,
        date: this.date,
        status: this.task.status,
        tags: this.tags
      }
      this.$store.dispatch('updateTask', task)
      this.$router.push('/tasks-list')
    }
  },
  mounted() {
    this.description = this.task.description
    this.date = new Date(this.task.date)
    this.tags = this.task.tags
  },
  computed: {
    task() {
      return this.$store.getters.taskById(+this.$route.params.id)
    }
  }
}
</script>

<style lang="scss" scoped>
.completed-info{
  background-color: #198754;
  color: #fff;
  border-radius: 4px;
  padding: 3px 10px;
}
</style>