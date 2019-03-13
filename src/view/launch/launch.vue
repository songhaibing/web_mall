<template>
  <div class="launch">
    <iframe
      :height="clientSize.Height"
      :width="clientSize.Width"
      class="launch_iframe"
      src="https://vr.chinavryan.com/p/561acf1bb77699d0?1552448984000"
    ></iframe>
    <div :style="{ height: clientSize.Height + 'px', width: clientSize.Width + 'px'}" class="launch_form">
      <div class="hang_around_wrapper">
        <div class="hang_around">先逛逛</div>
      </div>
      <div class="launch_form_body">
        <div class="logo">VR眼</div>
        <div class="slogan">
          <span>看在眼里</span>
          <span>排在心里</span>
        </div>
      </div>
      <router-link class="use_now" tag="div" to="/login">立即使用</router-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: "launch",
    data() {
      return {
        clientSize: {
          Height: 667,
          Width: 375
        }
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
  .launch {
    font-size: 0.14rem;
    position: relative;
    height: 100%;

    .launch_iframe {
      border-width: 0;
      position: absolute;
      left: 0;
      background: #fff;
      max-width: 1000px;
    }
    .launch_form {
      z-index: 1;
      position: absolute;
      width: 100%;
      color: #fff;
      max-width: 1000px;
      pointer-events: none;
      .hang_around_wrapper {
        position: relative;
        display: flex;
        justify-content: flex-end;
        margin-right: 0.35rem;
        .hang_around {
          pointer-events: all;
          width: 1.37rem;
          height: 0.46rem;
          border: 1px solid #fff;
          font-size: 0.26rem;
          border-radius: 0.23rem;
          display: flex;
          justify-content: center;
          align-items: center;
          margin: 0.47rem 0.35rem 0 0;
        }
      }
      .launch_form_body {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 1.8rem;
        .logo {
          font-size: 0.63rem;
          font-weight: 400;
        }

        .slogan {
          font-size: 0.3rem;
          font-weight: 400;
          margin-top: 0.46rem;
          width: 3.49rem;
          height: 0.29rem;
          display: flex;
          justify-content: space-between;
          span {
            letter-spacing: 0.1rem;
          }
        }
      }
      .use_now {
        pointer-events: all;
        font-size: 0.36rem;
        border: 2px solid rgba(255, 255, 255, 1);
        border-radius: 0.35rem;
        width: 2.6rem;
        height: 0.7rem;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-left: 50%;
        transform: translateX(-50%);
        position: absolute;
        bottom: 1.05rem;
      }
    }
  }
</style>
