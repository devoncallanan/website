<template>
  <div class="about">
    <img class="large-avatar" src="../assets/devon.jpg">
    <h1>Devon Callanan</h1>
    <div class="body">
      Providence, Rhode Island
      <hr>
      University of Pittsburgh
      <hr>
      Interested in photography, web developement, computer architecture, soccer, ultimate frisbee
      <hr>
      Blogs
      <br>
      <a href="http://www.devonhongkong.wordpress.com" target="_blank">SEMESTER ABROAD</a>
      <a href="http://www.devoncallanan.wordpress.com" target="_blank">CREATIVE MEDIA</a>

    </div>
  </div>
</template>

<script>
export default {
  name: 'about'
}


</script>

<style lang="less">
@import '../styles/variables.less';

.large-avatar {
  height: 200px;
  width: 200px;
  border-radius: 50%;
  padding: 16px;
}
.body {
  hr {
    border: 1px solid @SecondaryL;
    width: 100px;
  }
  a {
    text-decoration: none;
    color: lightgrey;
    padding: 16px;
  }
}
</style>
