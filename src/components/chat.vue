<template>
  <div class="chat">
    <div class="people">
      <img src="../assets/people.jpg" />
      <input value="" placeholder="说点什么..." v-model="answer" />
      <span @click="toAddMsg">评论</span>
    </div>
    <div class="answer" v-for="(msg ,index) in msgList" :key="index">
      <div class="headImg"><img src="../assets/people.jpg" /></div>
      <div class="answer-main">
        <div class="answer-top">
          <span class="name">小鱼儿:</span>
          <span v-model="answer">{{msg}}</span>
        </div>
        <div class="answer-bottom">
          <span class="answer-date">7-02</span>
          <span class="answer-time">15:05</span>
          <img class="small-comments" src = "../assets/comments.png" />
        </div>
        <!--<div class="reply">
          <input class="reply-input" value="" v-model="replyMsg" />
        </div>
        <div class="mainReply" v-for="(reply , index) in answer.replyList" :key="index">
          <div class="headImg"><img src="../assets/people.jpg" /></div>
          <div class="answer-top">
            <span class="name">小鱼儿:</span>
            <span v-model="replyMsg">{{rep}}</span>
          </div>
          <div class="answer-bottom">
            <span class="answer-date">7-02</span>
            <span class="answer-time">15:05</span>
            <img class="small-comments" src = "../assets/comments.png" />
          </div>
        </div>-->
      </div>
    </div>
  </div>
</template>

<script>



export default {
  name: 'chat',
  props: {
    
  },
  components: {

  },
  data(){
    return {
      answer: '',
      answerText: '',
      msgList:[],
      replyMsg: ''
    }
  },
  methods:{
    toAddMsg: function () {
      this.msgList.unshift(this.answer);
      this.answer = '';
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  * {
    padding: 0;
    margin: 0;
  }
  .people {
    margin-top: 10px;
    overflow: hidden;
    padding-bottom: 20px;
    border-bottom: 2px solid #ccc;
  }
  .people img {
    display: block;
    width: 34px;
    height: 34px;
    padding: 0px 10px;
    float: left;
  }
  .people input {
    text-indent: 1em;
    height: 30px;
    width: 80%;
    float: left;
  }
  .people span {
    display: inline-block;
    float: left;
    height: 30px; 
    line-height: 30px;
    background: #ff8e55;
    padding: 2px 10px;
    margin-left: 20px;
    color: #fff;
    border-radius: 4px;
  }
  .answer {
    overflow: hidden;
    border-bottom: 1px solid #ccc;
    padding: 10px 0;
  }
  .headImg {
    float: left;
    width: 2%;
  }
  .headImg img{
    display: inline-block;
    width: 100%;
    height: auto;
  }
  .answer-main {
    float: left;
    overflow: hidden;
    width: 97%;
  }
  .answer span {
    padding-left: 10px;
    float: left;
    height: 20px;
    line-height: 20px;
    font-size: 14px;
  }
  .answer-top {
    overflow: hidden;
  }
  .answer-bottom {
    overflow: hidden;
  }
  .answer-bottom img {
    float: right;
    margin-right: 20px;
    width: 20px;
    height: 20px;
  }
  .name {
    color: #ff8e55;
  }
  .mainReply {
    padding: 10px 0 0 20px;
  }
  .reply-input {
    width: 50%;
    height: 20px;
  }
</style>
