<template>
  <div id="app">
    <div class="nav">
      <NavBar></NavBar>
    </div>
    <div class="page">
      <transition name="page" mode="out-in">
        <router-view />
      </transition>
    </div>

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
  .nav {
    height: 100%;
    overflow: visible;
  }

  .page {
    padding-top: 100px;
    padding-left: 100px;
    background: #EBEBEB;
    width: 100%;
    height: 100%;
    overflow: auto;
    max-width: 1200px;
    margin-right: 90px;
    transition: all 0.1s;
  }

  @media (max-width: 800px) {
    .page {
      margin-right: 32px;
    }
  }

  @media (max-width: 500px) {
    .page {
      margin-right: 8px;
      padding-top: 50px;
      padding-left: 50px;
    }
  }

  @media (min-width: 2000px) {
    .page {
      max-width: 60%;
    }
  }

  #app {
    display: flex;
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