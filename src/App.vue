<template>
  <div id="app">
    <navbar></navbar>
    <h1 id="h1-companies" v-show="isList">Companies</h1>
    <router-view id="main"></router-view>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
export default {
  name: 'App',
  components: {Navbar},
  computed: {
    isList() {
      return this.$route.name === 'List'
    }
  }
}
</script>

<style>
#app {
  font-family: Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 0px;
}
#main {
  padding: 10px;
}

#h1-companies {
  padding: 20px 20px 0px;
}

</style>
