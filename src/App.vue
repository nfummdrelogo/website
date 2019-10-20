<template>
  <div id="app">
    <div class="nav">
      <NavBar></NavBar>
    </div>

    <div class="wrapper">
      <div class="page">
        <transition name="page" mode="out-in">
          <router-view />
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "./components/NavBar";
export default {
  name: "app",
  components: {
    NavBar
  }
};
</script>

<style>


.nav {
  height: 100%;
  overflow: visible;
}

.page {
  flex-shrink: 0;
  padding-top: 80px;
  max-width: 1200px;

  background: #e5e5e5;
  width: 100%;
  min-height: 100%;
  transition: all 0.1s;
  margin-right: 150px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
}

.wrapper {
  min-width: 100vw;
  padding-right: 120px;
  overflow-x: hidden;
}

@media (max-width: 800px) {
  .wrapper {
    padding-right: 0px;
  }
}


#app {
  display: flex;

  height: 100%;
  width: 100%;
  overflow: hidden;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>