<template>
  <div class="like">
    <div class="like-icon" @click="likeBtn">
      <img v-show="flag1" src = "../assets/good.png" />
      <img v-show="flag2" src = "../assets/good-filling.png" />
    </div>
    <div class="likeNum" :num="num" ref="likenum">{{num == 0? '' : num}}</div>
  </div>
</template>

<script>

export default {
  name: 'like',
  components: {
    
  },
  data(){
    return {
      flag1: true,
      flag2: false,
      num: 0
    }
  },
  methods:{
    likeBtn: function(){
      this.flag1 = !this.flag1;
      this.flag2 = !this.flag2;
      if(this.flag2){
        this.num = this.num + 1
      }else if(this.flag1){
        if(this.num > 0){
          this.num = this.num - 1;
        }
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .like{
    display: inline-block;
    padding: 5px 0;
  }
  .like-icon {
    height: auto;
    display: inline-block;
    float: left;
  }
  .like-icon img{ 
    display: inline-block;
    width: 30px;
    height: 30px;
    cursor: pointer;
  }
  .likeNum {
    display: inline-block;
    float: left;
    width: 50px;
    height: 35px;
    line-height: 35px;
    font-size: 18px;
    text-align: right;
  }
</style>
