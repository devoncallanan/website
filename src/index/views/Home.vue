<template>
  <div class="home">
    <img alt="meme" src="../assets/expandingcircuitmemes.jpg">
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'home'
}
</script>

<style lang="less">
.home {
  overflow-y: auto;
  height: calc(100% - 35px);
}
</style>
