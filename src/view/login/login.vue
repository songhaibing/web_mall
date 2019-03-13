<template>
  <div class="login">
    <div class="login_h">
      <router-link class="iconfont icon-guanbi" tag="span" to="/"></router-link>
      <span @click="login_type = 2" v-if="login_type === 1">密码登录</span>
      <span @click="login_type = 1" v-else>免密登录</span>
    </div>
    <div class="login_b">
      <div class="login_b_title" v-if="login_type === 1">免密登录</div>
      <div class="login_b_title" v-else>密码登录</div>
      <div class="login_b_form">
        <div>
          <div class="login_label">手机号</div>
          <input class="login_input" v-model="phoneNumber">
        </div>
        <div v-if="login_type === 2">
          <div class="login_label">密码</div>
          <input class="login_input" v-model="password">
        </div>
        <div v-else>
          <div class="login_label">验证码</div>
          <div class="auth_code">
            <input class="login_input" maxlength="6" v-model="authCode">
            <div class="get_auth">获取验证码</div>
          </div>
        </div>
      </div>
      <div class="login_submit">登录</div>
      <div class="login_tip" v-if="login_type === 1">未注册手机验证后自动登录</div>
      <div class="login_tip" v-else>忘记密码</div>
    </div>
    <div class="login_bottom_tip">
      注册即代表同意VR眼
      <span>用户协议</span>
      和
      <span>隐私政策</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "login",
    data() {
      return {
        clientSize: {
          Height: 667,
          Width: 375
        },
        login_type: 1, // 1为密码登录   2为免密登录
        phoneNumber: "",
        password: "",
        authCode: ""
      };
    },
    mounted() {
      this.clientSize = {
        Height: document.documentElement.clientHeight,
        Width: document.documentElement.clientWidth
      };
    }
  };
</script>

<style lang="less" scoped>
  .login {
    padding: 0.5rem;
    color: #333333;
    .login_h {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .icon-guanbi {
        font-size: 0.22rem;
      }
      span:last-child {
        font-size: 0.3rem;
      }
    }
    .login_b {
      margin-top: 1rem;
      padding: 0.3rem;
      position: relative;
      .login_b_title {
        font-size: 0.52rem;
      }
      .login_b_form {
        margin-top: 0.98rem;
        .login_label {
          font-size: 0.36rem;
          margin-bottom: 0.41rem;
        }
        .login_input {
          margin-bottom: 0.31rem;
          width: 5.76rem;
          height: 0.84rem;
          border: 0.02rem solid rgba(220, 49, 52, 1);
          border-radius: 0.42rem;
          padding: 0 0.42rem;
        }
        .auth_code {
          position: relative;
          .get_auth {
            position: absolute;
            right: 0;
            top: 0;
            width: 2rem;
            height: 0.84rem;
            background: rgba(220, 49, 52, 1);
            border-radius: 0.42rem;
            font-size: 0.28rem;
            background: rgba(220, 49, 52, 1);
            color: rgba(255, 255, 255, 1);
            display: flex;
            justify-content: center;
            align-items: center;
          }
        }
      }
      .login_submit {
        margin-top: 0.37rem;
        width: 4.15rem;
        height: 0.84rem;
        background: rgba(220, 49, 52, 1);
        border: 0.01rem solid rgba(255, 63, 83, 1);
        opacity: 0.6;
        border-radius: 0.42rem;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 0.38rem;
        color: #fff;
        margin-left: 50%;
        transform: translateX(-50%);
      }
      .login_tip {
        font-size: 0.24rem;
        color: rgba(178, 178, 178, 1);
        text-align: center;
        margin-top: 0.47rem;
      }
    }
    .login_bottom_tip {
      font-size: 0.2rem;
      color: #b2b2b2;
      position: fixed;
      bottom: 0.57rem;
      text-align: center;
      width: 100%;
      margin-left: -0.5rem;
      span {
        text-decoration: underline;
      }
    }
  }
</style>
