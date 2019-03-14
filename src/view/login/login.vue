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
        let auth_timetimer = setInterval(() => {
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
            localStorage.setItem("key", res.key);
            localStorage.setItem("username", res.username);
            console.log("免密登录", res);
          });
        } else {
          console.log(
            this.password,
            this.$DES.decryptDes(this.$DES.encryptDes(this.password))
          );
          // 密码登录
          let param = {
            usermobile: this.phoneNumber,
            password: this.$DES.encryptDes(this.password),
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
  @import "../../style/login.less";
</style>
