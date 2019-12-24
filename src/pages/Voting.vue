<template>
  <div>
    <div class="container">
      <h2>人氣投票</h2>

      <h4>RELOGO</h4>
      <p>
        立刻前往投票：
        <a href="https://forms.gle/tGLkBuip8kcTuEHq9">https://forms.gle/tGLkBuip8kcTuEHq9</a>
      </p>
      <div class="vote-container">
        <div class="vote-list">
          <div class="vote-item" v-for="(work, i) in artworks" :key="i" @click="selected=work">
            <div class="vote-title">作品名稱：{{work.name}}</div>
            <div class="vote-footer">
              目前票數
              <br />
              {{work.count}}
            </div>
            <div class="vote-wrapper"></div>
          </div>
        </div>
      </div>

      <hr />
      <br />
      <h2>投票規則</h2>
      <div class="rules">
        <p>【國立虎尾科技大學多媒體設計系LOGO甄選比賽『 RELOGO 』】</p>
        <ul>
          <li>投票需登入虎科大學生信箱帳號,且每個帳號僅能投出一票。</li>
          <li>投票期限：108年12月25日上午12時至108年12月31日中午12時止。</li>
          <li>投票資格：國立虎尾科技大學在學學生</li>
          <li>活動辦法規定都以活動網站公告及《RELOGO》舉辦方說明為準，官方擁有本活動隨時及最終保留、變更、修改、或撤回、等之權利， 如果遇上不可抗力之因素，活動將有取消、延期、暫停等權利。</li>
          <li>《RELOGO》有權檢視投票者投票參與行為，如發生不正當的方式參與投票，將視為棄票。</li>
          <li>活動期間內至人氣票選頁面投票，登入學校信箱後將擁有投票資格，每個帳號限投一票。</li>
          <li>在投票活動期間如發生任何問題，請聯絡甄選比賽策劃團隊(https://www.facebook.com/NFU.MMDesign/) 。</li>
          <li>本辦法如有未盡事宜，除依相關法律規定辦理外，得另行公布補充之。請參閱「國立虎尾科技大學多媒體設計系LOGO甄選比賽『RELOGO』網站」以獲取最新訊息。</li>
          <li>其他未盡事宜，主辦單位得隨時補充之。</li>
        </ul>
      </div>
    </div>
    <div class="popout" v-if="selected!=null">
      <div class="expand">
        <div class="scroll">
          <div class="container">
            <div class="img">
              <img :src="selected.img" alt />
              <div class="close" @click="selected=null">X</div>
            </div>
            <h4>作品名稱 - {{selected.name}}</h4>
            <h4>設計理念 -</h4>
            <p>{{selected.desc}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Voting",
  data() {
    return {
      selected: null,

      artworks: [
        {
          name: "碰撞",
          desc:
            "以簡單的幾何形切割成MD組合而成，兩方塊之間的負面空間，代表媒體之間的相互應用產生出的成品，人與人之間的交流產生的想法，思想與作品之間激盪出的火花，人與想法產生出的作品。",
          img: "https://i.imgur.com/Vaorlvi.jpg",
          pimg: "",
          count: "..."
        },
        {
          name: "合作01",
          desc:
            "LOGO顏色彩為單色呈現，可配合活動需求自由調整顏色\nLOGO的外型為M與D組成，中間的M形狀為兩個人互相搭肩的圖示，代表學生的互助合作，與互相學習交流。外框的D形狀為電腦檔案的文件，表示科技時代的多媒體包含音樂、影音、3D程式、2D繪圖。\n期許多媒體設計系同學在眾多的媒體學習分支下，可以選擇自己的專業，在大學期間快樂學習，並與同儕互相切磋學習，增進實力，邁向業界發展。",
          img: "https://i.imgur.com/hZ63kX9.jpg",
          pimg: "",
          count: "..."
        },
        {
          name: "圓不設限",
          desc:
            "  多媒體設計系是個非常多元化的設計科系，平面、動畫、影視、遊戲都是我們學習的範疇，我們的想法不侷限於一種顏色，因此運用象徵多元化的「彩虹」來創作。\n  主體用Multimedia的開頭「M」來發想，彩虹的開頭是一個驚嘆號，筆劃與筆劃之前以些微的勾勒來連結，中間的顏色重疊最終變成純潔的白色，代表著學生們想法激盪後的融合。\n  圓潤的logo主體旁的標準字則是搭配一樣由圓角構成的「思源柔黑體」的圓角角度較小的版本，比起基本款較為剛硬，英文版本也是選用相同感覺的字型，希望表達出多媒體設計系圓滑、卻謹慎的感覺。",
          img: "https://i.imgur.com/fTTrFKm.jpg",
          pimg: "",
          count: "..."
        }
      ]
    };
  }
};
</script>


<style lang="scss" scoped>
@import "../style/rwd";

.vote-container {
  width: 100vw;
  padding-left: 20px;
  padding-right: 200px;
  height: 700px;
  @include rwd-dn(phone) {
    background: transparent;
    height: 400px;
    padding-right: 70px;
  }
}
.rules {
  font-size: 14px;
  line-height: normal;
  letter-spacing: 5.6px;
}

.vote-list {
  width: 100%;
  height: 100%;
  transform: matrix(1, 0, -0.24, 1, 0, 0);
  display: flex;

  .vote-item {
    cursor: pointer;
    position: relative;
    background-color: black;
    overflow: hidden;

    width: 30%;
    margin: 8px;

    &:nth-child(1) {
      .vote-wrapper {
        background: url("../assets/IN_1.png");
        background-size: cover;
        background-position: center;
      }
    }
    &:nth-child(2) {
      .vote-wrapper {
        background: url("../assets/IN_2.png");
        background-size: cover;
        background-position: center;
      }
    }
    &:nth-child(3) {
      .vote-wrapper {
        background: url("../assets/IN_3.png");
        background-size: cover;
        background-position: center;
      }
    }

    .vote-title,
    .vote-footer {
      position: absolute;

      z-index: 2;
      padding: 16px;

      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      letter-spacing: 0.195em;
      line-height: 36px;
      color: #888888;
    }

    .vote-title {
      left: 0;
      top: 0;
    }
    .vote-footer {
      right: 0;
      bottom: 0;
      text-align: right;
    }

    .vote-wrapper {
      position: relative;
      left: 0;
      top: 0;
      height: 100%;
      margin: 0px -60px;
      transform: matrix(1, 0, +0.24, 1, 0, 0);
    }
  }
}
</style>