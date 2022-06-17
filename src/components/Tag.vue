<template>
    <span class="badge rounded-pill bg-dark me-1 mt-2 p-2">
      {{ tag }} <span class="close-symbol pt-2" @click="$emit('removeTag', $event)">&#10006;</span>
    </span>
</template>

<script>
export default {
  props: ['tag'],
  methods: {
  }
}
</script>

<style scoped>
  .close-symbol {
    position: relative;
    top: 2px;
    cursor: pointer;
    color: transparent;
    text-shadow: 0 0 0 #626262;
  }
</style>
