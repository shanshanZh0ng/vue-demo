<template>
  <div class="taskDynamic">
    <div class="editbody">
      <input id="editInput" type="text" placeholder="我的收获新的是。。。" v-model="msg"  />
      <p id="editContent" v-model="msg">{{msg}}</p>
    </div> 
    <div class="button"><a @click="toAddMsg" href="javascript:void(0)">发布动态</a></div>
    <h5>动态</h5>
    <div class="dynamicRespond">
      <div class="dynamicRespondDetail" v-for="(item,index) in itemList" :key="index">
        <div class="head">
          <div class="headImages"><img src="../assets/people.jpg" /></div>
          <div class="name">
            <span>xxxx</span>
            <span class="time">x分钟</span>
          </div>
        </div>
        <div class="content">
          <p>{{item}}</p>
          <input type="text" placeholder="回复xxxxx。。" v-if="answerIndex == index" v-model="answerPeople" @keypress="toDoAnswer" />
          <div class="answer" v-if="(answerIndex == index) && (answerFlag)" v-for="answer in answerPeopleText">
            <div class="answer-top">
              <img src="../assets/people.jpg" />
              <span>xxxx:</span>
              <span v-model="answerPeople">{{answer}}</span>
            </div>
            <div class="answer-bottom">
              <span class="answer-date">7-02</span>
              <span class="answer-time">15:05</span>
              <img class="small-comments" src = "../assets/comments.png" />
            </div>
          </div>
        </div>
        <div class="bottom">
          <img @click="answer(index)" class="main-comments" src = "../assets/comments.png" />
          <img @click="toPraise(index)"  v-bind="tagsList" src = "../assets/good.png" />
          <i class="tags" v-model="tagsList">{{tagsIndex == index ? tag:tagsList[index]}}</i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//import TopHeader from '@/components/TopHeader'
export default {
  name: 'taskDynamic',
  components: {
    //TopHeader
  },
  data(){
    return {
      msg:'',
      itemList: [],
      tagsList: [],
      tags: 0,
      tagsIndex:0,
      tag:0,
      flag: false,
      answerIndex: null,
      answerPeople:'',
      answerPeopleText:[],
      answerFlag: false
    }
  },
  methods:{
    toAddMsg: function () {
      this.itemList.unshift(this.msg);
      this.tagsList.unshift(this.tags);
      this.msg = '';
      console.log(this.itemList,this.tagsList)
    },
    toPraise: function (index) {
      this.tagsIndex = index
      this.tagsList[index] = this.tagsList[index] + 1;
      this.tag = this.tagsList[index];
      return (this.tagsIndex,this.tag)     
    },
    answer: function (index) {
      this.answerIndex = index;
      this.flag = true
    },
    toDoAnswer: function (e) {
      if(e.keyCode == 13){
        this.answerFlag = true;
        this.answerPeopleText.unshift(this.answerPeople);
        this.answerPeople = '';
        console.log(this.answerPeopleText)
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  * {
    margin: 0; 
    padding: 0;
  }
  .taskDynamic {
    //overflow: hidden;
  }
  .editbody {
    height: 150px;
    border: 1px solid #ccc;
    padding-left: 40px;
    background: url(../assets/edit.png) no-repeat left top;
    background-size: 35px 35px; 
  }
  .editbody input {
    height: 25px;
    margin-top: 5px;
    width: 80%;
  }
  .button {
    overflow: hidden;
  }
  a {
    text-decoration: none;
    color: #f00;
    float: right;
    padding: 5px 25px;
    border: 1px solid #f00;
    border-radius: 15px;
    margin-top: 10px;
  }
  h5 {
    border-bottom: 3px solid #ccc;
  }
  .dynamicRespond {
    margin-top: 30px;
  }
  .dynamicRespondDetail {
    margin-top: 20px;
    border-bottom : 1px solid #ccc;
  }
  .head {
    overflow: hidden;
  }
  .headImages {
    float: left;
  }
  .headImages img{
    display: block;
    height: 50px;
    width: 50px;
  }
  .name {
    float: left;
    padding-top: 10px;
    padding-left: 20px;
  }
  .name span {
    font-size: 12px;
    line-height: 15px;
    height: 15px;
    display: block;
  }
  .name .time {
    color: #ccc;
    line-height: 25px;
  }
  .content {
    padding-left: 70px;
    font-size: 14px;
    line-height: 20px;
  }
  .answer {
    overflow: hidden;
    margin-top: 30px;
    padding-top: 15px;
    border-top: 1px solid #ccc;
  }
  .answer img {
    float: left;
    width: 30px;
    height: 30px;
  }
  .answer span {
    padding-left: 10px;
    float: left;
    height: 30px;
    line-height: 30px;
    font-size: 14px;
  }
  .answer-top {
    overflow: hidden;
  }
  .answer-bottom {
    padding-left: 30px;
    overflow: hidden;
  }
  .answer-bottom img {
    margin-left: 10px;
    margin-top: 5px;
    width: 20px;
    height: 20px;
  }
  .bottom {
    overflow: hidden;
    text-align: right;
  }
  .bottom img {
    display: inline-block;
    height: 30px;
    width: 30px;
    padding-left: 10px;
  }
  .bottom i {
    display: inline-block;
    height: 30px;
    width: 30px;
    line-height: 30px;
    text-align: left;
  }
</style>
