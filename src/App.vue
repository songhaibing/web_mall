<template>
  <div id="app">
    <keep-alive>
      <router-view/>
    </keep-alive>
  </div>
</template>
<script>
  export default {
    name: "App"
  };
</script>

<style lang="less" scoped>
  #app {
    width: 100%;
    overflow-x: hidden;
  }
</style>
