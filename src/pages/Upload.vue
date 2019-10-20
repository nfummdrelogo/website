<template>
  <div>
    <div class="container">
      <h2>作品投稿</h2>
      <h4>目前未開放。</h4>
      <h4>Select image to upload:</h4>
      <input ref="file" type="file" name="image" id="image" />
      <button @click="upload">upload</button>
      {{link}}
    </div>
  </div>
</template>

<script>
export default {
  name: "Upload",
  data() {
    return {
      window,
      file: null,
      link: ""
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
iframe {
  width: 100%;
  height: 9999px;
}
</style>