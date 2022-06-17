<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark mb-5">
    <div class="container">
        <router-link class="navbar-brand" exact to="/">Vue-Task-App</router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"  aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link class="nav-link" :class=" $route.path === '/' ? 'active' : '' " exact to="/" aria-current="page">Create</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" :class=" $route.path === '/tasks-list' ? 'active' : '' " to="/tasks-list">Task-List</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" :class=" $route.path === '/profile' ? 'active' : '' " to="/profile">Profile</router-link>
            </li>
        </ul>
        </div>
    </div>
  </nav>
</template>

<script>
export default {

}
</script>

<style>

</style>