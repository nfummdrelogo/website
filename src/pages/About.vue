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

      <section class="pagesize">
        <div class="container">
          <h3>國立虎尾科技大學</h3>
          <h1>
            多媒體設計系
            <br />
            <span class="eng">LOGO</span>
          </h1>
          <h3>甄選比賽</h3>
        </div>
        <div class="phone-yello-bg">
          <div class="container">
            <img src="@/assets/blacklogo.png" class="logo" width="172" alt />
          </div>
        </div>
        <div class="container">
          <p>
            一件事情 很簡單。
            我們希望LOGO變好看。大家一起讓我們的視覺重新定義，是黑是白是粉是黃不重要，美最重要。從錄影帶到CD到現今的網路串播，經過了時代的變遷。LOGO設計的準則也與過去不同，我們需要每個人去嘗試設計符合現代的多媒系。
          </p>
          <hr />
        </div>
      </section>

      <div class="container">
        <div class="inforow">
          <div class="item">
            <h3>比賽獎金</h3>
            <p>本次甄選提供前三名以及十位優選作品的獎勵</p>
            <div class="gap"></div>
            <div class="pricelist">
              <h4>金獎- 4000元</h4>
              <h4>銀獎- 2000元</h4>
              <h4>銅獎- 1000元</h4>
              <h4>
                優選- 200元
                <small>(五件)</small>
              </h4>
            </div>
            <div class="gap"></div>
            <router-link class="button" to="/Upload">
              <div class="text">立即投稿</div>
            </router-link>
          </div>

          <div class="separator"></div>

          <div class="item">
            <h3>校外評審</h3>
            <p>來自國內的優秀設計師一同與我們進行甄選</p>
            <div class="gap"></div>
            <div class="imgitem teacher"></div>
            <div class="gap"></div>
            <h4>二棲設計- 林呈軒</h4>
          </div>

          <div class="separator"></div>

        </div>

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

        <section class="date">
          <div class="time">2020年 1月1日</div>
          <div class="title">虎科多媒體 LOGO 公開</div>
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
@import "../style/rwd.scss";

.vi-container {
  position: fixed;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

@include rwd-up(phone) {
  .logo {
    margin-bottom: 40px;
  }
}

.pagesize {
  min-height: 90vh;
  @include rwd-dn(phone) {
    min-height: 80vh;
  }
}

// INFO

.inforow {
  display: flex;
  flex-direction: row-reverse;
  align-items: stretch;
  margin: 0px -28px;

  @include rwd-dn(phone) {
    flex-direction: column;
    margin: 0px;
  }

  .separator {
    display: none;
    @include rwd-dn(phone) {
      display: block;
      width: 100%;
      height: 2px;
      background-color: #888888;
      margin: 40px 0px;
    }
  }

  .item {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    text-align: center;
    box-shadow: 4px 4px 4px 0 rgba(0, 0, 0, 0.25);
    margin: 28px;
    padding: 0px 10px 25px;
    min-height: 440px;
    @include rwd-dn(phone) {
      box-shadow: none;
      margin: 0px;
    }
    h3 {
      font-size: 36px;
      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
      line-height: normal;
      letter-spacing: 14.4px;
      color: #222222;
      margin: 20px 0px;
    }

    h4 {
      margin: 0;
      font-size: 24px;
      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
      line-height: normal;
      letter-spacing: 7.2px;
      color: #444444;
    }

    p {
      margin: 0px;
      font-family: Mplus1p;
      font-size: 12px;
      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
      line-height: normal;
      letter-spacing: 4.8px;
      color: #666666;
    }

   

    .pricelist {
      text-align: left;
      display: inline-block;
      margin: auto;
    }
    .gap {
      flex-grow: 1;
      min-height: 15px;
    }
    small {
      font-size: 12px;
    }
    .imgitem {
      margin: auto;
      width: 225px;
      height: 225px;
      background-size: contain;

      &.teacher {
        background-image: url("../assets/teacher.png");
      }
    }
  }
}

.info {
  text-align: center;
  min-height: 160px;
  margin: 15px;
  font-size: 24px;
  color: #444;
  letter-spacing: 24px;
  line-height: 2;

  @include rwd-dn(phone) {
    letter-spacing: 8px;
  }
}

@include rwd-dn(phone) {
  .phone-yello-bg {
    background-color: #ffcc00;
    padding: 23px 0px;
    margin-bottom: 35px;
    .logo {
      height: 30px;
      width: auto;
    }
  }
}

.date {
  background: none;
  max-width: 380px;
  height: 190px;
  border-radius: 50px;
  margin: 16px auto 60px;
  box-shadow: 3px 4px 5px 0 rgba(0, 0, 0, 0.25);
  text-align: center;
  .time {
    font-size: 36px;
    color: #404040;

    letter-spacing: -2px;
    padding-top: 65px;
  }
  .title {
    font-size: 14px;
    color: #333;
    font-weight: 600;
    letter-spacing: 6.86px;
    padding-top: 15px;
  }
  border: solid 1px #000000;
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

@media (max-width: 1200px) {
  .vi {
    transform: scale(0.75);
    top: 180px;
    right: -200px;
  }
  .vi-container {
    position: relative;
  }
}

@media (max-width: 800px) {
  .vi {
    transform: scale(0.55);
    left: 10px;
    top: -50px;
  }
}
</style>