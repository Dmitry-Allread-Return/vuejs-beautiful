<template>
  <div class="profile">
    <h1 class="text-center">Profile page</h1>
    <div class="row">
        <div class="col-lg-6">
            <router-link to="/" class="btn btn-outline-success">Add a task</router-link>
        </div>
        <div class="col-lg-6 ms-auto">
            <div class="profile-block text-end">
                <h3 class="mb-3">Dmitry Varnavskikh</h3>
                <img src="../assets/profile_img.jpeg" class="profile__main-photo" alt="profile_photo">
                <div class="mt-3">
                    <a href="#" class="mt-3">Edit Profile Information</a>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.profile__main-photo {
    width: 45%;
    border-radius: 5%;
    filter: drop-shadow(2px 4px 6px black);
}



</style>