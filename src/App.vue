<template>
  <div id="app">
    <NavBar></NavBar>
    <router-view />

  </div>
</template>

<script>
  import NavBar from './components/NavBar'
  export default {
    name: 'app',
    components: {
      NavBar
    }
  }
</script>

<style>
  #app {
    background-image: url("./assets/BG.jpg");
    background-size: cover;
    background-position-x: right;
    width: 100%;
    height: 100%;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
</style>