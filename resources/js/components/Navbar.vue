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

            <li class="nav-item dropdown ms-5">
                <a id="navbarDropdown" class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    {{ user.name }}
                </a>

                <div class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                    <a class="dropdown-item" :href="this.href + 'logout'"
                        onclick="event.preventDefault();
                                      document.getElementById('logout-form').submit();">
                        Logout
                    </a>

                    <form id="logout-form" :action="this.href + 'logout'" method="POST" class="d-none">
                      <input type="hidden" name="_token" :value="csrf">
                    </form>
                </div>
            </li>
        </ul>
        </div>
    </div>
  </nav>
</template>

<script>
export default {
  props: {
    user: Object
  },
  data: () => ({
    href: window.location.href,
    csrf: document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
  }),
  created() {
    console.log(this.csrf)
  }
}
</script>

<style>

</style>