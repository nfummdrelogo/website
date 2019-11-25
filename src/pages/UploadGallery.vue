<template>
  <div>
    <div class="container">
      <h2>作品牆面</h2>
      <h4>RELOGO</h4>
      <template v-if="status!=''">
        <p>{{status}}</p>
      </template>
      <div class="gallery-grid">
        <template v-for="(item, i) in items">
          <div
            class="gallery-item"
            :key="i"
            v-bind:style="{
            backgroundImage: 'url('+item.img+')'
            }"
            @click="selected=item"
          ></div>
        </template>
      </div>
      <div class="popout" v-if="selected!=null">
        <div class="expand">
          <div class="scroll">
            <div class="container">
              <div class="img">
                <img :src="selected.img" alt />
                <div class="close" @click="selected=null">X</div>
              </div>
              <h4>作品名稱 - {{selected.name}}</h4>
              <h4>設計理念 -</h4>
              <p>{{selected.desc}}</p>
            </div>
          </div>
        </div>
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
      show: true,
      status: "",
      selected: null
    };
  },
  mounted() {
    this.update();
  },
  methods: {
    update() {
      var app = this;
      this.items.splice(0, this.items.length);
      var xhr = new XMLHttpRequest();

      xhr.open("get", url);
      xhr.onload = function() {
        app.status = "";
        console.log("fetch");
        var result = JSON.parse(xhr.response);
        for (var i = 0; i < result.time.length; i++) {
          var obj = {};
          var hasValue = false;
          for (var j in result) {
            obj[j] = result[j][i];
            if (obj[j] != "") hasValue = true;
          }
          if (hasValue) app.items.push(obj);
        }
      };
      xhr.send();
      app.status = "loading...";
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

.popout {
  .expand {
    padding-top: 80px;

    margin-right: -50px;
    position: relative;
    height: 100%;
    overflow: auto;
  }

  .scroll {
    padding-right: 50px;
  }

  position: fixed;
  padding-left: 75px;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.6);
  color: white;
  text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  @include rwd-dn(phone) {
    padding-left: 0px;
  }

  h4 {
    color: white;
    font-weight: bold;
  }
  .img {
    position: relative;
    width: 660px;
    max-width: 100%;
    background-size: cover;

    img {
      width: 100%;
    }

    .close {
      opacity: 0.5;
      position: absolute;
      right: 0;
      top: 0;
      width: 40px;
      height: 40px;
      background-color: rgba(196, 196, 196, 0.65);
      padding-left: 12px;
      padding-top: 8px;
      font-size: 24px;
      cursor: pointer;
      transition: opacity 0.5s;
    }

    &:hover .close {
      opacity: 1;
    }
  }
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