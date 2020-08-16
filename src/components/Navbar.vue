<template>
  <div>
    <nav class="navbar navbar-dark bg-dark">
      <a class="navbar-brand" href="#/">
        <b>PersonalisationCo</b>
      </a>
      <b-button class="btn btn-light" href="#/add">
        <v-icon name="edit"/>
      </b-button>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Navbar"
}
</script>

<style scoped>
nav {
  padding: 20px;
}
</style>