<template>
  <div class="topTopic">
    <p>我是公共组件调用</p>
    <div>
      <like></like>
    </div>
    <div>
      <pop :popList="popList" :popbtn="popbtn"></pop>
    </div>
    <div>
      <chat></chat>
    </div>
  </div>
</template>

<script>
import like from '@/components/like'
import pop from '@/components/pop'
import chat from '@/components/chat'
export default {
  name: 'topTopic',
  components: {
    like,
    pop,
    chat
  },
  data(){
    return {
      popList:[{
        "title":"温馨提示",
        "text":"请注意您有没有想好领养猫咪？请注意您有没有想好领养猫咪？请注意您有没有想好领养猫咪？请注意您有没有想好领养猫咪？",
        "btns":["想好了","没想好"]
      }],
      popbtn: "申请收养小猫",
      chatList:[{
        name:"Maria"
      }]
    }
  },
  methods: {
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  
</style>
