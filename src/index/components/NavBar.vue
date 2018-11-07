<template>
  <div class="nav-bar">
    <div   class="nav-item" v-for="link in links" :key="link.text" >
      <router-link :to="link.target">{{link.text}}</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  data: function() {
    return {
      links: [
        {text: "HOME", target: "/", active: false},
        {text: "ABOUT", target: "/about", active: false},
      ]
    }
  },
  watch: {
    '$route' (to) {
      this.links.forEach((item) => {
        if (item.path == to.path) {
          item.active = true;
        }
      });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
@import '../styles/variables.less';

.nav-bar {
  height: 35px;
  background-color: @PrimaryL;
  position: relative;
  width: 100%;
}
.nav-item {
  padding: 10px;
  position: relative;
  bottom: 0;
  display: inline-block;
  a {
    text-decoration: none;
    font-weight: bold;
    color: @TextDefault;
    &.router-link-exact-active {
      border-bottom: 2px solid @Secondary;
    }
  }

}

</style>
