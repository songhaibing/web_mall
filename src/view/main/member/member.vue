<template>
  <div class="main_contain">
    <div class="header">
      <div class="header-set">
        <img class="back_img" src="@/assets/member/back@2x.png">
        <img class="set_img" src="@/assets/member/shezhi@2x.png">
      </div>
      <div style="display: flex">
        <div class="user-message">
          <div class="user_font">登录/注册</div>
          <div class="user_des">登录后查看更多信息</div>
        </div>
        <div class="avatar">
          <img class="avatar-img" src="@/assets/member/wode@2x.png">
        </div>
      </div>

    </div>
    <div class="header_card">
      <div class="singe_contain">
        <img class="pay_img" src="@/assets/member/daifukuan2@2x.png">
        <div class="pay_font">待付款</div>
      </div>
      <div class="singe_contain1">
        <img class="pay_img1" src="@/assets/member/daifahuo1@2x.png">
        <div class="pay_font1">待发货</div>
      </div>
      <div class="singe_contain2">
        <img class="pay_img2" src="@/assets/member/daifukuan1@2x.png">
        <div class="pay_font2">待收货</div>
      </div>
      <div class="singe_contain3">
        <img class="pay_img3" src="@/assets/member/xiazai@2x.png">
        <div class="pay_font3">待评价</div>
      </div>
      <div class="singe_contain4">
        <img class="pay_img4" src="@/assets/member/tuikuan@2x.png">
        <div class="pay_font4">售后</div>
      </div>
    </div>
    <div class="card_contain">
      <div class="single">
        <img class="single-img" src="@/assets/member/dingdan@2x.png">
        <div class="order_font">全部订单</div>
        <img class="right-img" src="@/assets/member/right@2x.png">
      </div>
      <div class="single">
        <img class="single-img" src="@/assets/member/dingdan@2x.png">
        <div class="order_font">全部订单</div>
        <img class="right-img" src="@/assets/member/right@2x.png">
      </div>
      <div class="single">
        <img class="single-img" src="@/assets/member/dingdan@2x.png">
        <div class="order_font">全部订单</div>
        <img class="right-img" src="@/assets/member/right@2x.png">
      </div>
      <div class="single">
        <img class="single-img" src="@/assets/member/dingdan@2x.png">
        <div class="order_font">全部订单</div>
        <img class="right-img" src="@/assets/member/right@2x.png">
      </div>

    </div>
  </div>
</template>

<script>
  export default {
    name: "member"
  };
</script>

<style lang="less" scoped>
  @import "../../../style/member.less";
</style>
