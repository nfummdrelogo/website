<template>
  <div>
    <div class="container">
      <h2>作品牆面</h2>
      <h4>RELOGO</h4>
      <div class="gallery-grid">
        <div class="gallery-item"></div>
        <div class="gallery-item"></div>
        <div class="gallery-item"></div>
        <div class="gallery-item"></div>
        <div class="gallery-item"></div>
        <div class="gallery-item"></div>
        <div class="gallery-item"></div>
        <div class="gallery-item"></div>
        <div class="gallery-item"></div>
      </div>
      <transition name="page" type="out-in">
        <div class="cover">
          <div class="msg">即將於10/25開放</div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: "UploadGallery",
  data() {
    return {};
  }
};
</script>


<style lang="scss" scoped>
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
}
</style>