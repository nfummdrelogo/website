<template>
  <div :class="{
      bar: true,
      expand
    }">
    <div class="top">
      <div class="toggle" @click="expand = !expand">
        <img src="@/assets/catalog.png" width="40" alt />
      </div>
      <router-link to="/">
        <div class="logo">
          <img src="@/assets/catalogFont.png" height="40" alt />
        </div>
      </router-link>
    </div>

    <div class="more">
      <div class="name">國立虎尾科技大學</div>

      <router-link class="item" to="/">About</router-link>
      <router-link class="item" to="/UploadGallery">作品牆面</router-link>
      <router-link class="item" to="/Upload">作品投稿</router-link>
      <div class="item mute">外審評分</div>
      <div class="item mute">人氣投票</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {
      expand: false
    };
  }
};
</script>


<style lang="scss" scoped>
.bar {
  height: 100%;
  max-width: 60px;
  .top {
    color: white;
    .toggle {
      cursor: pointer;
    }
    display: flex;
  }

  .more,
  .logo {
    opacity: 0;
  }

  .more {
    width: 260px;
  }

  .toggle {
    margin: 8px;
    transition: margin 0.2s;
  }
  .logo {
    margin-top: 16px;
    margin-right: 16px;
  }

  &.expand {
    max-width: 300px;
    .more,
    .logo {
      opacity: 1;
    }
    .toggle {
      margin: 16px;
    }
  }

  transition: all 0.2s;
  overflow: hidden;

  display: inline-block;
  background: #222;
}

.more {
  text-align: right;
}

.item {
  width: 150px;
  display: inline-block;

  text-align: right;
  font-size: 32px;
  margin: 16px 0px;
  border-right: solid 4px transparent;
  padding-right: 16px;

  color: white;

  &.mute {
    pointer-events: none;
    color: #444;
  }

  &:hover {
    color: #ffcc00;
  }

  &.router-link-exact-active {
    color: #ffcc00;
  }
}
</style>