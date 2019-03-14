<template>
  <div>
    <router-view></router-view>
    <div class="contain">
      <div @click="clickIndex" class="tab_contain">
        <img class="index" src="@/assets/tab/index@2x.png" v-if="tabIndex!=='tabA'">
        <img class="index" src="@/assets/tab/indexxz.png" v-if="tabIndex==='tabA'">
        <div class="tab_font">首页</div>
      </div>
      <div @click="clickIndexB" class="tab_contain">
        <img class="index" src="@/assets/tab/city@2x.png" v-if="tabIndex!=='tabB'">
        <img class="index" src="@/assets/tab/cityxz.png" v-if="tabIndex==='tabB'">
        <div class="tab_font">城市</div>
      </div>
      <div @click="clickIndexC" class="tab_contain">
        <img class="index" src="@/assets/tab/VR@2x.png" v-if="tabIndex!=='tabC'">
        <img class="index" src="@/assets/tab/cityxz.png" v-if="tabIndex==='tabC'">
        <div class="tab_font">VR</div>
      </div>
      <div @click="clickIndexD" class="tab_contain">
        <img class="index" src="@/assets/tab/class@2x.png" v-if="tabIndex!=='tabD'">
        <img class="index" src="@/assets/tab/classxz.png" v-if="tabIndex==='tabD'">
        <div class="tab_font">即购</div>
      </div>
      <div @click="clickIndexE" class="tab_contain">
        <img class="index" src="@/assets/tab/class@2x.png" v-if="tabIndex!=='tabE'">
        <img class="index" src="@/assets/tab/classxz.png" v-if="tabIndex==='tabE'">
        <div class="tab_font">我的</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "index",
    data() {
      return {
        tabIndex: ""
      };
    },
    activated() {
      console.log(this.$route.path);
    },
    created() {
      if (this.$route.path === "/main/index") {
        this.tabIndex = "tabA";
      } else if (this.$route.path === "/main/city") {
        this.tabIndex = "tabB";
      } else if (this.$route.path === "/main/VR") {
        this.tabIndex = "tabC";
      } else if (this.$route.path === "/main/buy") {
        this.tabIndex = "tabD";
      } else if (this.$route.path === "/main/member") {
        this.tabIndex = "tabE";
      }
    },
    methods: {
      clickIndex() {
        this.tabIndex = "tabA";
        this.$router.push("/main/index");
      },
      clickIndexB() {
        this.tabIndex = "tabB";
        this.$router.push("/main/city");
      },
      clickIndexC() {
        this.tabIndex = "tabC";
        this.$router.push("/main/VR");
      },
      clickIndexD() {
        this.tabIndex = "tabD";
        this.$router.push("/main/buy");
      },
      clickIndexE() {
        this.tabIndex = "tabE";
        this.$router.push("/main/member");
      }
    },
    computed: {}
  };
</script>

<style lang="less" scoped>
  .contain {
    position: fixed;
    bottom: 0;
    display: flex;
    width: 7.5rem;
    height: 0.98rem;
    background: rgba(255, 255, 255, 1);
    box-shadow: 0 0 0.08rem 0 rgba(106, 106, 106, 0.17);

    .tab_contain {
      .index {
        width: 0.38rem;
        height: 0.39rem;
      }

      .tab_font {
        font-size: 0.2rem;
        color: rgba(68, 68, 68, 1);
      }
    }
  }
</style>
