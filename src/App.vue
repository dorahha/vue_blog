<template>
  <div id="app">
    <blogs-header class="nav"></blogs-header>
    <router-view></router-view>
  </div>
</template>

<script>
import BlogsHeader from './components/BlogsHeader.vue'
export default {
  name: 'App',
  components: {
    BlogsHeader
  }
}
</script>

<style scoped>
#app nav{
  margin-top: 10px;
}
</style>
