<template>
  <div>
    <div class="container">
      <h2>作品投稿</h2>

      <h4>目前未開放。</h4>

      <hr />

      <div>
        <p>請先將作品轉換為URL：</p>

        <input ref="file" type="file" name="image" id="image" />

        <button @click="upload">upload</button>

        <p>{{link}}</p>
      </div>

      <div class="iframe-wrapper">
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSeEOGP1gwov-PBGvH-MuDM-8srS8uyH6DKpLl_3C7QKIpitwA/viewform?embedded=true"
          width="800"
          height="1400"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
        >載入中…</iframe>
      </div>

      <hr />
    </div>
    <div class="cover" :hidden="show">
      <div class="msg">即將於10/25開放</div>
    </div>
  </div>
</template>

<script>
import hidden from "../components/js/hidden";

export default {
  name: "Upload",
  data() {
    var app = this;
    console.log("hi");

    hidden(function() {
      app.show = true;
    });

    return {
      window,
      file: null,
      link: "",
      show: true
    };
  },

  methods: {
    upload() {
      var app = this;
      app.link = "wait";
      console.log(this.$refs.file.files);
      var fr = new FileReader();
      fr.readAsDataURL(this.$refs.file.files[0]);
      fr.onload = function() {
        // console.log(fr.result.split(",")[1]);

        let formData = new FormData();

        formData.append("image", fr.result.split(",")[1]);
        formData.append("type", "Base64");
        formData.append("title", "testtitle");
        formData.append("name", "testname");
        formData.append("description", "testdescription");

        console.log(formData);
        let xhr = new XMLHttpRequest();

        xhr.open("POST", "https://api.imgur.com/3/image");
        xhr.setRequestHeader("Authorization", "Client-ID 35e092dc72d9128");
        xhr.send(formData);

        xhr.onload = function() {
          var result = JSON.parse(xhr.response);
          app.link = result.data.link;
          console.log(xhr.response);
        };
      };
    }
  }
};
</script>


<style lang="scss" scoped>
@import "../style/rwd";

.iframe-wrapper {
  margin: 50px -50px;
}

iframe {
  width: 100%;
}

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