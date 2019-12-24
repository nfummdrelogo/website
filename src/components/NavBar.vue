<template>
  <div :class="{
      bar: true,
      expand
    }">
    <div class="cover" @click="expand=false"></div>
    <div class="background"></div>
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
      <div class="mask">
        <div class="expand">
          <div class="scroll">
            <div class="inside more">
              <div class="name">國立虎尾科技大學</div>
              <router-link class="item" to="/">
                <div @click="expand=false">關於比賽</div>
              </router-link>
              <router-link class="item" to="/UploadGallery">
                <div @click="expand=false">作品牆面</div>
              </router-link>
              <router-link class="item mute" to="/Upload">
                <div @click="expand=false">作品投稿</div>
              </router-link>
              <div class="item mute">外審評分</div>
              <router-link class="item" to="/Voting">
                <div @click="expand=false">人氣投票</div>
              </router-link>
              <router-link class="item" to="/Contact">
                <div @click="expand=false">聯絡我們</div>
              </router-link>
              <img src="@/assets/downFontcard.png" class="inside downlogo" height="60" alt />
            </div>
          </div>
        </div>
      </div>
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
@import "../style/index";

.content {
  position: fixed;
  padding-right: 40px;
  height: 100vh;
  width: inherit;
  min-width: 75px;
  overflow: hidden;
  z-index: 2;
  @include rwd-dn(phone) {
    background: transparent;
    height: 75px;
  }
}

.mask {
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.expand {
  height: 100%;
  margin-right: -50px;
  box-sizing: content-box;
}

.scroll {
  padding-right: 50px;
  height: 100%;
  overflow: auto;
}

.bar {
  height: 100%;
  width: 75px;

  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  position: relative;
  z-index: 2;

  @include rwd-dn(phone) {
    width: 0px;
  }

  .background {
    background: #222;
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 1;
  }

  .top {
    color: white;
    .toggle {
      cursor: pointer;
    }
    display: flex;
  }
  .more {
    width: 240px;
    @include rwd-dn(phone) {
      width: 140px;
    }
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
    margin-top: 15px;
    margin-bottom: 50px;
    letter-spacing: 16px;
    right: -16px;
    font-size: 11px;
    color: #888888;

    @include rwd-dn(phone) {
      letter-spacing: 15px;
      width: 120px;
      line-height: 1.5;
      margin: 20px auto;
    }
  }

  .toggle {
    margin: 15px 20px;
    transition: margin 0.2s;
  }

  .logo {
    margin-top: 30px;
    @include rwd-dn(phone) {
      width: 28px;
      overflow: hidden;
    }
  }

  .downlogo {
    position: fixed;
    bottom: 10px;
    left: 4px;
    @include rwd-dn(phone) {
      margin-left: 16px;
      width: 140px;
      height: auto;
    }
  }

  &.expand {
    width: 300px;
    @include rwd-dn(phone) {
      width: 170px;
    }
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
    .content {
      height: 100vh;
    }
  }

  transition: all 0.2s;
  overflow: hidden;

  display: inline-block;
}

.more {
  text-align: right;
  @include rwd-dn(phone) {
    text-align: center;
  }
}

.item {
  height: 40px;
  font-size: 24px;
  position: relative;
  letter-spacing: 0.6em;
  right: -0.6em;
  display: block;
  vertical-align: middle;
  line-height: 40px;

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

  @include rwd-dn(phone) {
    font-size: 18px;
    letter-spacing: 0.4em;
    margin: 8px 0px;
  }
}
</style>