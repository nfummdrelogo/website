<template>
  <div :class="{
      bar: true,
      expand
    }">
    <div class="content">
      <div class="top">
        <div class="toggle" @click="expand = !expand">
          <img src="@/assets/catalog.png" height="36" alt />
        </div>
        <router-link to="/">
          <div class="inside logo">
            <img src="@/assets/catalogfont.png" height="36" alt />
          </div>
        </router-link>
      </div>

      <div class="inside more">
        <div class="name">國立虎尾科技大學</div>
        <div @click="expand=false">
          <router-link class="item" to="/">關於比賽</router-link>
          <router-link class="item" to="/UploadGallery">作品牆面</router-link>
          <router-link class="item" to="/Upload">作品投稿</router-link>
        </div>
        <div class="item mute">外審評分</div>
        <div class="item mute">人氣投票</div>
        <img src="@/assets/downFontcard.png" class="inside downlogo" height="60" alt />
      </div>
    </div>
    <div class="cover" @click="expand=false"></div>
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
.content {
  position: fixed;
  padding-right: 40px;
  height: 100vh;
  width: inherit;
  overflow: hidden;
  z-index: 2;
  background: #222;
}
.bar {
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  height: 100%;
  width: 75px;

  .top {
    color: white;
    .toggle {
      cursor: pointer;
    }
    display: flex;
  }
  .more {
    width: 240px;
  }
  .inside {
    opacity: 0;
    transition: opacity 0.2s;
  }
  .cover {
    width: 100vw;
    height: 100vh;
    position: fixed;
    background: black;
    top: 0px;
    left: 0px;
    opacity: 0;
    z-index: 1;
    transition: opacity 0.5s;
    pointer-events: none;
  }
  .name {
    position: relative;
    margin-top: 16px;
    margin-bottom: 50px;
    letter-spacing: 16px;
    right: -16px;
    font-size: 11px;
    color: #888888;
  }

  .toggle {
    margin: 15px 20px;
    transition: margin 0.2s;
  }

  .logo {
    margin-top: 30px;
  }

  .downlogo {
    position: fixed;
    bottom: 10px;
    left: 4px;
  }

  &.expand {
    width: 280px;
    .inside {
      opacity: 1;
    }
    .toggle {
      margin-left: 32px;
      margin-top: 30px;
      margin-right: 20px;
    }
    .cover {
      opacity: 0.5;
      pointer-events: all;
    }
  }

  transition: all 0.2s;
  overflow: hidden;

  display: inline-block;
}

.more {
  text-align: right;
}

.item {
  height: 40px;
  font-size: 24px;
  position: relative;
  letter-spacing: 0.6em;
  right: -0.6em;
  display: inline-block;

  margin: 16px 0px;

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