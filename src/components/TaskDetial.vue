<template>
  <div class="topIndexTask">
    <div>任务验收标准 :</div>
    <p v-for="(detial,index) in detialList" :key="index">{{index + 1}}、{{detial}}</p>
  </div>
</template>

<script>
//import TopHeader from '@/components/TopHeader'
export default {
  name: 'taskDetial',
  components: {
    //TopHeader
  },
  data(){
      return {
        detialList : [
          "想加入的同学请自己做好准备演讲题材，然后做好笔试题，然后进行面试，有主考官来进行筛选。",
          "想加入的同学请自己做好准备演讲题材，然后做好笔试题，然后进行面试，有主考官来进行筛选。",
          "想加入的同学请自己做好准备演讲题材，然后做好笔试题，然后进行面试，有主考官来进行筛选。",
          "想加入的同学请自己做好准备演讲题材，然后做好笔试题，然后进行面试，有主考官来进行筛选。",
          "想加入的同学请自己做好准备演讲题材，然后做好笔试题，然后进行面试，有主考官来进行筛选。",
          "想加入的同学请自己做好准备演讲题材，然后做好笔试题，然后进行面试，有主考官来进行筛选。"
        ]
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
  p {
    font-size: 16px;
    color: #333;
  }
</style>
