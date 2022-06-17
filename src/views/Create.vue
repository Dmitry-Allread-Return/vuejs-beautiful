<template>
  <div>
    <h1 class="text-center">Create Task</h1>
    <div class="row">
      <div class="col-md-5 m-auto">
        <form action="" class="form">
          <div class="form-group mb-3">
            <label for="title" class="h5">Title</label>
            <input type="text" name="name" id="title" v-model="title" class="form-control" placeholder="Task Title">
          </div>
          <div class="form-group mb-3">
            <label for="description" class="h5">Description</label>
            <input type="text" name="description" id="description" v-model="description" class="form-control" placeholder="Task Description">
            <span class="float-end description-quantity">{{description.length}} / 2048</span>
          </div>
          <div class="form-group mb-3">
            <label for="datepicker" class="h5">Expires date</label>
            <datepicker v-model="date" class="form-control date-default" style="background-color: #fff; cursor: pointer"/>
          </div>
          <div>
            <label for="enterTag" class="h5">Add tags</label>
            <input type="text" placeholder="Enter tag here" class="form-control w-auto" id="enterTag" @keyup.enter="addTag" v-model="tag">
            <tag class="badge rounded-pill bg-dark me-1 mt-2 p-2" v-for="tag of tags" :key="tag.id" :tag="tag" @removeTag="removeTag($event)"></tag>
          </div>
          <div class="btn btn-dark mt-3" @click="createTask">Create task</div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import Datepicker from 'vue3-datepicker'
// import Tag from '@/components/Tag'

export default {
  data: () => ({
    tags: [],
    tag: '',
    title: '',
    description: '',
    date: new Date()
  }),
  components: {Datepicker},
  mounted() {

  },
  methods: {
    addTag() {
      if (this.tag.length <= 0) {
        return
      }
      this.tags.push(this.tag)
      this.tag = ''
    },
    removeTag(event) {
      console.log('here: ' + event)
      let tagText = event.target.parentNode.innerText.slice(0, -1).trimEnd()
      this.tags = this.tags.filter(el => el !== tagText)
    },
    createTask() {
      const task = {
        id: Date.now(),
        title: this.title,
        description: this.description,
        date: this.date,
        status: 'Active',
        tags: this.tags
      }

      this.clearInputs()
      this.$store.dispatch('createTask', task)
      this.$router.push('/tasks-list')
    },
    clearInputs() {
      this.title = '',
      this.description = '',
      this.date = new Date(),
      this.tags = []
    }
  }
}
</script>

<style lang="scss" scoped>
.description-quantity {
  font-size: 13px;
}
</style>
