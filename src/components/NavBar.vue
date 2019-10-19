<template>
  <div class="bar">
    NavBar
    <div class="item">
      <router-link to='/'>
        關於
      </router-link>
    </div>
    <div class="item">
      <router-link to='/Upload'>
        投稿作品
      </router-link>
    </div>
    <div class="item disable">
      外審評分
    </div>
    <div class="item disable">
      人氣投票
    </div>
  </div>
</template>

<script>
  export default {
    name: 'NavBar',
    data() {
      return {

      }
    }
  }
</script>


<style lang="scss" scoped>
  .item,
  .item>a {
    color: white;
    text-decoration: none;

    &.disable {
      pointer-events: none;
      color: #3F3F3F;
    }
  }
</style>