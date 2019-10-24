<template>
  <div>
    <div class="container">
      <h2>作品牆面</h2>
      <h4>RELOGO</h4>
      <div class="gallery-grid">
        <template v-for="(item, i) in items">
          <div
            class="gallery-item"
            :key="i"
            v-bind:style="{
            backgroundImage: 'url('+item.img+')'
            }"
          ></div>
        </template>
      </div>
      <div class="cover" :hidden="show">
        <div class="msg">即將於10/25開放</div>
      </div>
    </div>
  </div>
</template>

<script>
var url =
  "https://script.google.com/macros/s/AKfycbzGMZozxCi_TD56G-exkreTIbx0RY7Dkf2PE5i8PhCWUBV4Ldc/exec";

import hidden from "../components/js/hidden";

export default {
  name: "UploadGallery",
  data() {
    var app = this;
    hidden(function() {
      app.show = true;
      app.update();
    });

    return {
      items: [],
      show: false
    };
  },
  mounted() {},
  methods: {
    update() {
      var app = this;
      this.items.splice(0, this.items.length);
      var xhr = new XMLHttpRequest();

      xhr.open("get", url);
      xhr.onload = function() {
        console.log("fetch");
        var result = JSON.parse(xhr.response);
        for (var i = 0; i < result.time.length; i++) {
          var obj = {};
          for (var j in result) {
            obj[j] = result[j][i];
          }
          // app.items.push(obj);
        }
      };
      xhr.send();
    }
  }
};
</script>


<style lang="scss" scoped>
@import "../style/rwd";

.cover {
  position: absolute;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  top: 0px;
  left: 0px;
  z-index: 0;
}

.msg {
  position: relative;
  margin: auto;
  top: 50%;
  transform: translate(0, -50%);
  width: 596px;
  text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  font-size: 48px;
  font-weight: 800;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: 19.92px;
  color: #ffffff;

  @include rwd-dn(phone) {
    width: 251px;
    letter-spacing: 2.4px;

    font-size: 24px;
  }
}
</style>