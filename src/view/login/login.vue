<template>
  <div class="login">
    <div class="login_h">
      <router-link class="iconfont icon-guanbi" tag="span" to="/"></router-link>
      <span @click="changeLoginType()" v-if="login_type === 1">密码登录</span>
      <span @click="changeLoginType()" v-else>免密登录</span>
    </div>
    <div class="login_b">
      <div class="login_b_title" v-if="login_type === 1">免密登录</div>
      <div class="login_b_title" v-else>密码登录</div>
      <div class="login_b_form">
        <div>
          <div class="login_label">手机号</div>
          <input class="login_input" maxlength="11" oninput="value=value.replace(/[^\d]/g,'')" v-model="phoneNumber">
        </div>
        <div v-if="login_type === 2">
          <div class="login_label">密码</div>
          <input class="login_input" type="password" v-model="password">
        </div>
        <div v-else>
          <div class="login_label">验证码</div>
          <div class="auth_code">
            <input class="login_input" maxlength="6" v-model="authCode">
            <div @click="getAuth()" class="get_auth" v-show="sendAuthCode">获取验证码</div>
            <div class="get_auth" v-show="!sendAuthCode">{{authTime}}后重试</div>
          </div>
        </div>
      </div>
      <div :class="{'login_submit': true, 'able_login': canLogin}" @click="loginSubmit()">登录</div>
      <div class="login_tip" v-if="login_type === 1">未注册手机验证后自动登录</div>
      <div @click="changePassword" class="login_tip" v-else>忘记密码</div>
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
        login_type: 1, // 1为密码登录   2为免密登录
        phoneNumber: "13330079275",
        password: "",
        authCode: "",
        sendAuthCode: true,
        authTime: 60,
        canLogin: false
      };
    },
    computed: {
      login_mobile() {
        const { phoneNumber, authCode } = this;
        return {
          phoneNumber,
          authCode
        };
      },
      login() {
        const { phoneNumber, password } = this;
        return {
          phoneNumber,
          password
        };
      }
    },
    watch: {
      login_mobile: {
        handler: function(val) {
          if (val.phoneNumber.length === 11 && val.authCode.length > 0) {
            this.canLogin = true;
          } else {
            this.canLogin = false;
          }
        },
        deep: true
      },
      login: {
        handler: function(val) {
          if (val.phoneNumber.length === 11 && val.password) {
            this.canLogin = true;
          } else {
            this.canLogin = false;
          }
        },
        deep: true
      }
    },
    methods: {
      changeLoginType() {
        if (this.login_type === 1) {
          this.authCode = "";
          this.login_type = 2;
        } else {
          this.password = "";
          this.login_type = 1;
        }
        this.canLogin = false;
      },
      getAuth() {
        if (this.phoneNumber.length !== 11) {
          this.$Tip("请输入正确的手机号");
          return;
        }
        this.sendAuthCode = false;
        var auth_timetimer = setInterval(() => {
          this.authTime--;
          if (this.authTime <= 0) {
            this.sendAuthCode = true;
            this.authTime = 60;
            clearInterval(auth_timetimer);
          }
        }, 1000);
        this.$HTTP.get(
          this.HOST + this.$API.getCode,
          { type: 2, phone: this.phoneNumber },
          res => {
            // this.$Tip("已发送");
          }
        );
      },
      changePassword() {
        this.$router.push("/password");
      },
      loginSubmit() {
        if (!this.canLogin) {
          console.log("请输入完全");
          return;
        }
        if (this.login_type === 1) {
          // 免密登录
          let param = {
            usermobile: this.phoneNumber,
            mobilecode: this.authCode,
            client: "wap"
          };
          this.$HTTP.post(this.HOST + this.$API.smsLogin, param, res => {
            console.log("免密登录", res);
          });
        } else {
          // 密码登录
          let param = {
            usermobile: this.phoneNumber,
            password: this.password,
            client: "wap"
          };
          this.$HTTP.post(this.HOST + this.$API.login, param, res => {
            console.log("密码登录", res);
          });
        }
      }
    },
    mounted() {},
    created() {
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
          width: 100%;
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
            color: rgba(255, 255, 255, 1);
            display: flex;
            justify-content: center;
            align-items: center;
            opacity: 1;
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
      .able_login {
        opacity: 1;
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
