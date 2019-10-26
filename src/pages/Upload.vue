<template>
  <div>
    <div class="container">
      <h2>作品投稿</h2>

      <h4>RELOGO</h4>

      <h3>投稿規則</h3>

      <ul>
        <li>投稿作品應向量繪圖軟體繪製，檔案應為.jpg或.pdf檔案格式</li>
        <li>圖幅長寬勿小於 15*15，解析度不得少於 300dpi，並需考慮後續便於放大、縮小等應用於各種材質之宣傳製作物上。</li>
        <li>圖檔大小請勿大於 5MB。</li>
        <li>標準字須傳達國立虎尾科技大學多媒體設計系之涵義。</li>
        <li>徵稿期限：108年10月25日上午12時至108年12月10日中午12時止。</li>
        <li>投稿資格：國立虎尾科技大學在學學生</li>
      </ul>

      <div class="button">
        <div class="text">詳細請見下方完整規則</div>
      </div>

      <hr />

      <div>
        <p>請先將作品轉換為URL：</p>

        <input ref="file" type="file" name="image" id="image" />

        <button @click="upload">upload</button>

        <p>{{link}}</p>
      </div>

      <div class="iframe-wrapper">
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSeEOGP1gwov-PBGvH-MuDM-8srS8uyH6DKpLl_3C7QKIpitwA/viewform?embedded=true"
          width="800"
          height="1400"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
        >載入中…</iframe>
      </div>

      <hr />
      <h2>投稿規則</h2>
      <div class="rules">
        <p>【國立虎尾科技大學多媒體設計系LOGO甄選比賽『 RELOGO 』】</p>
        <p>1、 設計要點</p>
        <ul>
          <li>具原創性，採用國立虎尾科技大學多媒體設計系為題材，設計符合國立虎尾科技大學多媒體設計系形象之LOGO及標準字，做為國立虎尾科技大學多媒體設計系之識別標誌。</li>
          <li>設計需考慮便於放大、縮小，可適用於宣傳海報及各式DM等與本系活動相關之各類文宣及產品。</li>
        </ul>
        <p>2、 作品規格及設計需求</p>
        <ul>
          <li>投稿作品應以 Illustrator或 Coreldraw等向量繪圖軟體繪製，檔案應為.jpg或.pdf檔案格式(文字請轉外框)。</li>
          <li>圖幅長寬勿小於 15*15，解析度不得少於 300dpi，並需考慮後續便於放大、縮小等應用於各種材質之宣傳製作物上。</li>
          <li>圖檔大小請勿大於 5MB。</li>
          <li>標準字須傳達國立虎尾科技大學多媒體設計系之涵義。</li>
          <li>作品正反面均不得標示任何影響公正性之簽名或標誌符號。</li>
        </ul>
        <p>3、 投稿規則</p>
        <ul>
          <li>徵稿期限：108年10月25日上午12時至108年12月10日中午12時止。</li>
          <li>投稿資格：國立虎尾科技大學在學學生</li>
          <li>繳件資料：</li>
        </ul>a. 創作說明
        b. 圖稿設計作品(.jpg或.pdf格式)
        <p>4、 獎項</p>
        <ul>
          <li>金獎1名：NT4000元、獎狀乙紙</li>
          <li>銀獎1名：NT2000元、獎狀乙紙</li>
          <li>銅獎1名：NT1000元、獎狀乙紙</li>
          <li>優選5名：NT200元等值超商禮卷</li>
        </ul>
        <p>5、 校外評審評選項目</p>
        <ul>
          <li>視覺美感 0-10分</li>
          <li>創意表現 0-10分</li>
          <li>創作理念 0-10分</li>
        </ul>總分（由上述三項總加）： 滿分30分
        <p>6、 評審方式</p>
        <ul>
          <li>第一階段：由評審小組擇定3件作品作為入選作品，以及選出五件優選獎作品</li>
          <li>第二階段：評審提供設計相關建議給3件入選作品之創作者，提供短暫修稿時間進行稿件的微調及修整。</li>
          <li>第三階段：由國立虎尾科技大學多媒體設計系在學學生對入選進行票選，並依得票數排序名次。如得分相同則以評選項目「視覺美感」項目獲得分數比較，如仍為同分則以作品評選項目「創意表現」項目獲得分數比較，以此類推。項目得分高者排序為先。</li>
        </ul>
        <p>7、 公布及頒獎</p>
        <ul>
          <li>評選結果預計12月31日將公布於「國立虎尾科技大學多媒體設計系LOGO甄選比賽『RELOGO』網站」；另以電話及公文通知得獎人；未獲獎者恕不通知。</li>
        </ul>
        <p>8、 著作權相關規定</p>
        <ul>
          <li>須以個人名義參選，每人得提供多件作品。</li>
          <li>參選者應按照要求規格提供設計作品，符合活動宗旨；並請詳閱本辦法，同意遵守本辦法所有之約定，若違反本辦法事項，主辦單位得取消其參加或得獎資格，保留對活動的最終解釋權、追回獎項、獎金和獎品之權利，並就因此產生之損害，得向參選者請求賠償。</li>
          <li>參選作品應具原創性，不得抄襲、模仿、或剽竊他人之作品，若有涉及相關著作權法律責任或侵害他人權利時，悉由作品提供者自負法律責任，若主辦單位權益因此受有損害，參選者應對主辦單位負損害賠償責任。</li>
          <li>參選者得獎作品之著作財產權及各項權利由國立虎尾科技大學多媒體設計系取得，授權國立虎尾科技大學多媒體設計系及國立虎尾科技大學多媒體設計系再授權之人使用，且承諾不行使著作人格權，但國立虎尾科技大學多媒體設計系同意作品作者以複製方式保留作品。國立虎尾科技大學多媒體設計系保有得獎作品修改權，作者不得異議。</li>
          <li>作品上傳均應完整填寫基本資料。如遇參選者基本資料填寫不完整，作品規格與參加資格不符、或檔案無法讀取等情形時，則以棄權論。</li>
          <li>參選者應保證所有填寫或提出之資料均為真實、正確，且未冒用或盜用他人資料，如有不實或不正確之情事，將被取消參加或得獎資格。如因此致主辦單位無法通知其得獎訊息時，主辦單位不負責任，且如有致損害主辦單位或他人權益者，參選者應負相關法律責任。</li>
          <li>參選作品無論採用與否均不予退還，如有需要由作者事先自行備份留存。</li>
          <li>參選者須尊重評審團決定，對評審結果不得異議。為確保得獎作品之水準，參選作品未達評審標準者或作品件數不足，部份獎項從缺。</li>
          <li>得獎者應出席主辦單位所舉辦之得獎作品發表場合。</li>
          <li>得獎者請提供原始作品檔案(如：ai檔) 。</li>
          <li>本辦法如有未盡事宜，除依相關法律規定辦理外，得另行公布補充之。請參閱「國立虎尾科技大學多媒體設計系LOGO甄選比賽『RELOGO』網站」以獲取最新訊息。</li>
          <li>其他未盡事宜，主辦單位得隨時補充之。</li>
        </ul>
      </div>
    </div>
    <div class="cover" :hidden="show">
      <div class="msg">即將於10/25開放</div>
    </div>
  </div>
</template>

<script>
import hidden from "../components/js/hidden";

export default {
  name: "Upload",
  data() {
    var app = this;
    console.log("hi");

    hidden(function() {
      app.show = true;
    });

    return {
      window,
      file: null,
      link: "",
      show: true
    };
  },

  methods: {
    upload() {
      var app = this;
      app.link = "wait";
      console.log(this.$refs.file.files);
      var fr = new FileReader();
      fr.readAsDataURL(this.$refs.file.files[0]);
      fr.onload = function() {
        // console.log(fr.result.split(",")[1]);

        let formData = new FormData();

        formData.append("image", fr.result.split(",")[1]);
        formData.append("type", "Base64");
        formData.append("title", "testtitle");
        formData.append("name", "testname");
        formData.append("description", "testdescription");

        console.log(formData);
        let xhr = new XMLHttpRequest();

        xhr.open("POST", "https://api.imgur.com/3/image");
        xhr.setRequestHeader("Authorization", "Client-ID 35e092dc72d9128");
        xhr.send(formData);

        xhr.onload = function() {
          var result = JSON.parse(xhr.response);
          app.link = result.data.link;
          console.log(xhr.response);
        };
      };
    }
  }
};
</script>


<style lang="scss" scoped>
@import "../style/rwd";

.iframe-wrapper {
  margin: 50px -50px;
}

iframe {
  width: 100%;
}

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

  @include rwd-dn(phone) {
    width: 251px;
    letter-spacing: 2.4px;

    font-size: 24px;
  }
}

.rules {
  font-size: 14px;
  line-height: normal;
  letter-spacing: 5.6px;
}
</style>