<template>
  <div class="hotNews-java">
    <div class="hotNews" v-for="(text,index) in textList" :key="index">
      <div class="hotNews-header">
        <span>{{text.head[0]}}</span><i>.</i>
        <span>{{text.head[1]}}</span><i>.</i>
        <router-link class="hotNews-headerShare" to="/index/task" tag="a">{{text.head[2]}}</router-link>
      </div>
      <div class="hotNews-main">
        <span class="hotNews-mainL">{{text.name}}</span>
        <span class="hotNews-mainR"><img src = "../assets/comments.png" /><i>{{text.num[0]}}</i><img src = "../assets/good.png" /><i>{{text.num[1]}}</i></span>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'hotNewsJava',
    data () {
      return {
        textList : [
          {"head":["华锋","2小时","成果分享"],"name":"java+java全家桶+webpack打包工具","num":[8,6]},
          {"head":["华锋","2小时","成果分享"],"name":"java+java全家桶+webpack打包工具","num":[9,6]},
          {"head":["华锋","2小时","成果分享"],"name":"java+java全家桶+webpack打包工具","num":[46,6]},
          {"head":["华锋","2小时","成果分享"],"name":"java+java全家桶+webpack打包工具","num":[12,6]},
          {"head":["华锋","2小时","成果分享"],"name":"java+java全家桶+webpack打包工具","num":[46,6]}
        ]
      }
    },
    methods: {
      
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .hotNews {
    text-align: left;
    border-bottom: 1px solid #ccc;
    padding: 20px 10px;
  }
  .hotNews-header {
    font-size: 12px;
    color: #999;
  }
  .hotNews-header i {
    padding: 0px 5px;
  }
  .hotNews-headerShare {
    color: #42b983;
    text-decoration: none;
  }
  .hotNews-main {   
    font-size: 16px;
    color: #000;
  }
  .hotNews-mainL {
    display: inline-block;
    width: 80%;
  }
  .hotNews-mainL:hover{
    color: #f00;
    cursor: pointer;
  }
  .hotNews-mainR {
    display: inline-block;
    overflow:hidden;
    width: 100%;
    text-align: right;
  }
  .hotNews-mainR img {
    display: inline-block;
    width: 6%;
    max-width: 40px;
    height: auto;
    padding-left: 3%;
  }
  .hotNews-mainR i {
    display: inline-block;
    width: 30px;
    text-align: left;
  }
</style>
