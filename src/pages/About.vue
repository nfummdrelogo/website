<template>
  <div>
    <div class="content">
      <div class="container">
        <h3>國&#8288;立虎&#8288;尾科&#8288;技&#8288;大&#8288;學</h3>
        <h1>
          多&#8288;媒&#8288;體設&#8288;計&#8288;系
          <br />LOGO
        </h1>
        <h3>甄選比賽</h3>
        <img src="@/assets/blacklogo.png" class="logo" width="172" alt />
        <p>
          一件事情 很簡單。
          我們希望LOGO變好看。大家一起讓我們的視覺重新定義，是黑是白是粉是黃不重要，美最重要。從錄影帶到CD到現今的網路串播，經過了時代的變遷。LOGO設計的準則也與過去不同，我們需要每個人去嘗試設計符合現代的多媒系。
        </p>
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
  transition: all .2s;
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