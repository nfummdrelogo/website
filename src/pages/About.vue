<template>
  <div>
    <div class="content">
      <div class="vi-container">
        <div class="container position-anchor">
          <div class="vi">
            <vi></vi>
          </div>
        </div>
      </div>

      <div class="container">
        <section class="pagesize">
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
        </section>

        <section class="info">
          徵稿日期
          <br />10/25 - 12/10
        </section>
        <section class="info">
          評審評分
          <br />12/10 - 12/25
        </section>
        <section class="info">
          人氣投票
          <br />12/25 - 12/31
        </section>
        <section class="info">
          <span class="important" title="多媒LOGO公布">多媒LOGO公布</span>
          <br />
          <span class="important" title="2020年 1月1日">2020年 1月1日</span>
        </section>
        <section class="info">
          <p>致邀請創作者們一同參與多媒系的LOGO甄選活動!</p>
          <p>讓大家一起改變多媒!</p>
          <p>同時把內容讓全世界都看到我們都在做什麼吧</p>
        </section>
        <hr />
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
.vi-container {
  position: fixed;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.logo {
  margin-bottom: 40px;
}

.pagesize {
  min-height: 90vh;
  margin-bottom: 20px;
}

.info {
  text-align: center;
  height: 160px;
  margin: 15px;
  font-size: 24px;
  color: #444;
  letter-spacing: 24px;
  line-height: 2;
}

.important {
  font-weight: 800;
  font-size: 36px;
  letter-spacing: 11.7px;
  color: #ffcc00;
  position: relative;
  -webkit-text-stroke: 8px #000000;
  &::before {
    position: absolute;
    left: 0px;
    top: -10px;
    z-index: 1;
    content: attr(title);
    -webkit-text-stroke: initial;
    pointer-events: none;
  }
}

.vi {
  position: absolute;
  top: 10%;
  right: -600px;
  transition: all 0.2s;
}

.eng {
  font-family: "barlow", Arial, Helvetica, sans-serif;
  font-weight: 600;
}

@media (max-width: 1500px) {
  .vi {
    transform: scale(0.75);
    top: 700%;
    right: -200px;
  }
  .vi-container {
    position: relative;
  }
}

@media (max-width: 800px) {
  .vi {
    transform: scale(0.5);
    right: -250px;
    top: 600%;
  }
}

@media (max-width: 600px) {
  .vi {
    transform: scale(0.35);
    top: 500%;
  }
}
</style>