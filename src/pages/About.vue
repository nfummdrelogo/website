<template>
  <div>

    <div class="content">
      <div class="container">

        <h3>
          國立虎尾科技大學
        </h3>
        <h1>
          多媒體設計系
          <br>
          LOGO
        </h1>
        <h3>
          甄選比賽
        </h3>
        <p>
          一件事情 很簡單。
          我們希望LOGO變好看。大家一起讓我們的視覺重新定義，是黑是白是粉是黃不重要，美最重要。從錄影帶到CD到現今的網路串播，經過了時代的變遷。LOGO設計的準則也與過去不同，我們需要每個人去嘗試設計符合現代的多媒系。
        </p>
        <vi></vi>

      </div>
    </div>
  </div>
</template>

<script>
  import vi from '@/components/vi.vue'
  export default {
    name: 'About',
    data() {
      return {

      }
    },
    components: {
      vi
    }
  }
</script>


<style lang="scss" scoped>
  h3 {
    letter-spacing: 2em;
    margin: 50px 0px;
  }



  h1 {
    font-size: 100px;
    font-weight: 900;
    line-height: 130px;
  }

  @media (max-width: 600px) {
    h3 {
      letter-spacing: 1em;
    }

    h1 {
      font-size: 70px;
      line-height: 80px;

    }
  }
</style>