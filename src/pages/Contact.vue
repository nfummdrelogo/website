<template>
  <div>
    <div>
      <div class="container">
        <h2>聯絡我們</h2>
        <h4>RELOGO</h4>
        <br />
        <h4>甄選比賽策劃團隊</h4>
        <p>
          <a
            href="https://www.facebook.com/NFU.MMDesign/"
            class="link"
            target=":blank"
          >https://www.facebook.com/NFU.MMDesign/</a>
        </p>

        <p>一件事情 很簡單。</p>
        <p>我們希望LOGO變好看。大家一起讓我們的視覺重新定義，是黑是白是粉是黃不重要，美最重要。從錄影帶到CD到現今的網路串播，經過了時代的變遷。</p>
        <p>LOGO設計的準則也與過去不同，我們需要每個人去嘗試設計符合現代的多媒系。</p>
        <hr />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Contact",
  data() {
    return {};
  }
};
</script>


<style lang="scss" scoped>
@import "../style/rwd";

.link {
  font-size: 16px;
  margin: auto;
  display: block;
  margin-bottom: 120px;

  @include rwd-dn(phone) {
    font-size: 14px;
    margin-top: -20px;
    letter-spacing: -0.3px;
  }
}
</style>