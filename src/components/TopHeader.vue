<template>
  <div class="topHeader">
    <div class="topHeader-main">
      <span class="topHeader-title">慈善计划</span>
      <router-link class="router" to="/index" tag="a">首页</router-link>
      <router-link class="router" to="/knowledge" tag="a">知识体系</router-link>
      <router-link class="router" to="/topic" tag="a">话题</router-link>
      <router-link class="router" to="/article" tag="a">文章</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'topHeader',
  components: {
    
  },
  data () {
    return {
      
    }
  },
  methods:{
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .topHeader {
    text-align: left;
    font-size: 18px;
  }
  .topHeader-title {
    padding-right: 20px;
  }
  .router { 
    box-sizing: border-box;
    display: inline-block;
    text-align: center;
    width: auto;
    padding: 10px;
    color: #333;
    font-size: 16px;
    text-decoration: none;
  }
  .router.router-link-active {
    color: #f00;
  }
</style>
