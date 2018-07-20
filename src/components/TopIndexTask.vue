<template>
  <div class="topIndexTask">
    <div class="taskHeader">
      <div>
        <span>任务一: 论坛网站的建设</span>
        <a href="javascript:void(0)">领取任务</a>
      </div>
      <h3>Lv.一般</h3>
      <p><span>描述: </span>想加入的同学请自己做好准备演讲题材，然后做好笔试题，然后进行面试，有主考官来进行筛选。想加入的同学请自己做好准备演讲题材，然后做好笔试题，然后进行面试，有主考官来进行筛选。想加入的同学请自己做好准备演讲题材，然后做好笔试题，然后进行面试，有主考官来进行筛选。</p>
    </div>
    <div class="taskContainer">
      <div class="taskContainerRouter">
        <router-link class="router" to="/index/task" tag="a">任务详情</router-link><i>|</i>
        <router-link class="router" to="/index/task/dynamic" tag="a">任务动态</router-link><i>|</i>
        <router-link class="router" to="/index/task/problem" tag="a">任务问题</router-link><i>|</i>
      </div>
      <div class="taskContainerRouterContent">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
//import IndexTask from '@/components/IndexTask'
export default {
  name: 'topIndexTask',
  components: {
    //IndexTask
  },
  data(){
      return {
        
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
  .taskHeader {
    border: 2px solid #ccc;
    border-radius: 8px;
    margin: 20px 0;

  }
  .taskHeader div {
    background: #ccc;
    padding: 10px 20px;
    overflow: hidden;
    line-height: 36px;
  }
  .taskHeader span {
    float: left;
    color: #000;
  }
  .taskHeader a{
    text-decoration: none;
    color: #f00;
    float: right;
    padding: 0px 25px;
    border: 1px solid #f00;
    border-radius: 15px;
  }
  .taskHeader h3 {
    padding: 10px 20px;
  }
  .taskHeader p {
    line-height: 26px;
    padding: 5px 20px;
  }
  .taskHeader p span {
    font-size: 30px;
    margin-top: -5px;
  }

  .router { 
    box-sizing: border-box;
    display: inline-block;
    text-align: center;
    width: auto;
    padding: 5px 10px;
    color: #333;
    font-size: 20px;
    text-decoration: none;
  }
  .router.router-link-exact-active {
    color: #f00;
  }
  .taskContainer {
    border: 3px solid #ccc;
    border-radius: 8px;
  }
  .taskContainerRouter {
    padding: 5px 20px;
    background: #99c;
  }
  .taskContainerRouterContent {
    padding: 10px 20px;
  }
</style>
