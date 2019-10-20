<template>
  <div>
    <div class="content">
      <div class="container">
        <h3>國立虎尾科技大學</h3>
        <h1>
          多媒體設計系
          <br />
          <span class="eng">LOGO</span>
        </h1>
        <h3>甄選比賽</h3>
        <img src="@/assets/blacklogo.png" class="logo" width="172" alt />
        <p>
          一件事情 很簡單。
          我們希望LOGO變好看。大家一起讓我們的視覺重新定義，是黑是白是粉是黃不重要，美最重要。從錄影帶到CD到現今的網路串播，經過了時代的變遷。LOGO設計的準則也與過去不同，我們需要每個人去嘗試設計符合現代的多媒系。
        </p>
        <hr />
      </div>
      <div class="vi">
        <vi></vi>
      </div>
    </div>
  </div>
</template>

<script>
import vi from "@/components/vi.vue";
export default {
  name: "About",
  data() {
    return {};
  },
  components: {
    vi
  }
};
</script>


<style lang="scss" scoped>
.content {
  position: relative;
}

.logo {
  margin-bottom: 40px;
}

.vi {
  position: absolute;
  top: 10%;
  right: -300px;
  transition: all 0.2s;
}
.eng {
  font-family: "barlow", Arial, Helvetica, sans-serif;
  font-weight: 600;
}

hr{
  margin-top: 128px;
  border: solid 1px #888;
}
@media (max-width: 1500px) {
  .vi {
    transform: scale(0.75);
    top: 15%;
    right: -150px;
  }
}

@media (max-width: 800px) {
  .vi {
    transform: scale(0.5);
    top: 35%;
    right: -200px;
  }
}

@media (max-width: 600px) {
  .vi {
    transform: scale(0.35);
    top: 25%;
    right: -220px;
  }
}
</style>