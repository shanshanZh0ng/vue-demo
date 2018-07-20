<template>
  <div class="hotNewsBig">
    <div class="hotNewsBig-main">
      <span class="hotNewsBig-title">热门文章</span>
      <router-link class="router" to="/index" tag="a">推荐</router-link>
      <router-link class="router" to="/index/java" tag="a">java</router-link>
      <router-link class="router" to="/index/php" tag="a">php</router-link>
      <router-link class="router" to="/index/html" tag="a">html</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'hotNews',
  data () {
    return {
      
    }
  },
  methods: {
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .hotNewsBig {
    text-align: left;    
    font-size: 18px;
  }
  .hotNewsBig-main {
    border-bottom: 1px solid #333;
    padding: 0 10px;
  }
  .hotNewsBig-title {
    padding-right: 20px;
  }
  .router { 
    box-sizing: border-box;
    display: inline-block;
    text-align: center;
    width: auto;
    padding: 5px 10px;
    padding-top: 40px;
    color: #333;
    font-size: 16px;
    text-decoration: none;
  }
  .router.router-link-exact-active {
    color: #f00;
  }
</style>
