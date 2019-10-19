<template>
  <div>
    <canvas ref="canvas" width="600" height="500"></canvas>
  </div>
</template>

<script>
import vi from "./js/vi";

export default {
  data() {
    return {
      animation: null
    };
  },
  mounted() {
    this.animation = vi.mounted(this.$refs.canvas);
  },
  destroyed() {
    vi.destroyed(this.animation);
  }
};
</script>


<style scoped>
div{
  pointer-events: none;
}
</style>