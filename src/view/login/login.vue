<template>
    <div class="hh" @click="hh">这是登录页面</div>
</template>

<script>
    export default {
        name: "login",
      methods:{
          hh(){
            this.$router.push('/index')
          }
      }
    }
</script>

<style scoped>
  .hh{
    font-size:0.12rem;
  }
</style>
