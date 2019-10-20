<template>
  <div>
    <div class="container">
      <h2>作品投稿</h2>
      <h4>目前未開放。</h4>
      <h4>Select image to upload:</h4>
      <input ref="file" type="file" name="image" id="image" />

      <button @click="upload">upload</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Upload",
  data() {
    return {
      window,
      file: null
    };
  },
  methods: {
    upload() {
      console.log(this.$refs.file.files);
      var fr = new FileReader();
      fr.readAsDataURL(this.$refs.file.files[0]);
      fr.onload = function() {
        console.log(fr.result.split(',')[1]);


        let formData = new FormData();

        formData.append('image', fr.result.split(',')[1])
        formData.append('type', "base64")
        formData.append('title', "testtitle")
        formData.append('name', "testname")
        formData.append('description', "testdescription")
        console.log(formData)
        let xhr = new XMLHttpRequest();

        xhr.open("POST", "https://api.imgur.com/3/upload" );
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.setRequestHeader("Authorization", "Client-ID 35e092dc72d9128");
        xhr.send(formData);


        xhr.onload = function(){
          console.log(xhr.response)
        }
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