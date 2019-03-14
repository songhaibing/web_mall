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
        <div class="avatar"></div>
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
  .main_contain {
    background: #f2f2f2;
    height: 100vh;
  }
  .header {
    position: relative;
    width: 100%;
    height: 3.9rem;
    background: rgba(241, 0, 0, 1);
    .header-set {
      display: flex;
      justify-content: space-between;
      padding: 0.29rem 0.32rem 0.81rem 0.32rem;
      .back_img {
        width: 0.18rem;
        height: 0.33rem;
      }
      .set_img {
        width: 0.36rem;
        height: 0.36rem;
      }
    }
    .user-message {
      padding-left: 0.74rem;
      .user_font {
        padding-bottom: 0.48rem;
        font-size: 0.4rem;
        color: rgba(255, 255, 255, 1);
      }
      .user_des {
        font-size: 0.28rem;
        color: rgba(255, 255, 255, 1);
      }
    }
    .avatar{
      margin-left: 2.17rem;
      width:1.40rem;
      height:1.40rem;
      background:rgba(255,255,255,1);
      border-radius:.70rem;
    }
  }
  .header_card {
    position: absolute;
    top: 3.09rem;
    left: 0.32rem;
    display: flex;
    width: 6.86rem;
    height: 1.84rem;
    background: rgba(255, 255, 255, 1);
    border-radius: 0.1rem;
    /*待付款*/
    .singe_contain {
      padding-top: 0.41rem;
      .pay_img {
        margin-left: 0.5rem;
        width: 0.44rem;
        height: 0.43rem;
      }
      .pay_font {
        padding-top: 0.22rem;
        padding-left: 0.38rem;
        font-size: 0.24rem;
        color: rgba(51, 51, 51, 1);
      }
    }
    /*待发货*/
    .singe_contain1 {
      padding-top: 0.41rem;
      .pay_img1 {
        margin-left: 0.8rem;
        width: 0.43rem;
        height: 0.45rem;
      }
      .pay_font1 {
        padding-top: 0.22rem;
        margin-left: 0.61rem;
        font-size: 0.24rem;
        color: rgba(51, 51, 51, 1);
      }
    }
    /*待收货*/
    .singe_contain2 {
      padding-top: 0.41rem;
      .pay_img2 {
        margin-left: 0.8rem;
        width: 0.49rem;
        height: 0.4rem;
      }
      .pay_font2 {
        padding-top: 0.22rem;
        margin-left: 0.64rem;
        font-size: 0.24rem;
        color: rgba(51, 51, 51, 1);
      }
    }
    /*待评价*/
    .singe_contain3 {
      padding-top: 0.41rem;
      .pay_img3 {
        margin-left: 0.8rem;
        width: 0.49rem;
        height: 0.4rem;
      }
      .pay_font3 {
        padding-top: 0.22rem;
        margin-left: 0.7rem;
        font-size: 0.24rem;
        color: rgba(51, 51, 51, 1);
      }
    }
    /*售后*/
    .singe_contain4 {
      padding-top: 0.41rem;
      .pay_img4 {
        margin-left: 0.8rem;
        width: 0.42rem;
        height: 0.41rem;
      }
      .pay_font4 {
        padding-top: 0.22rem;
        margin-left: 0.75rem;
        font-size: 0.24rem;
        color: rgba(51, 51, 51, 1);
      }
    }
  }
  .card_contain {
    margin-top: 1.3rem;
    margin-left: 0.32rem;
    width: 6.86rem;
    height: 3.63rem;
    background: rgba(255, 255, 255, 1);
    border-radius: 0.1rem;
    .single {
      display: flex;
      align-items: center;
      border-bottom:.01rem solid rgba(242,242,242,1);
      height: .92rem;
      padding-left: .4rem;
      .single-img {
        width: 0.28rem;
        height: 0.33rem;
      }
      .order_font {
        padding-left: .19rem;
        font-size: 0.26rem;
        color: rgba(51, 51, 51, 1);
      }
      .right-img {
        margin-left: 4.48rem;
        width: 0.09rem;
        height: 0.18rem;
      }
    }
  }
</style>
