<template>
  <div id="app_from_vue">
    <Navbar :user="this.user"/>
    <div class="container">
      <router-view v-slot="{ Component }">
        <transition name="fade">
          <component :is="Component" />
        </transition>
      </router-view>
    </div>
  </div>
</template>

<script>
import Navbar from './components/Navbar'

export default {
  components: {Navbar},
  props: {
    user: Object,
  },
  data() {
    return {
      test: 'tests'
    }
  },
  mounted() {
  }
}
</script>

<style lang="scss">
@import "~bootstrap/dist/css/bootstrap.min.css";

.fade-enter-active, .fade-leave-active {
  transition-property: opacity;
  transition-duration: .25s;
}
.fade-enter-active {
  transition-delay: .25s;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

</style>
