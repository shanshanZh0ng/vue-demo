<template>
  <div class="topIndex">
    <!-- 轮播图 组件一 -->
    <banner :listImg="bannerList"></banner>
    <!-- 轮播图 组件二 -->
    <!--<swiper :swiper="bannerList"></swiper>-->
    <hotNews></hotNews>
  </div>
</template>

<script>
import Banner from '@/components/Banner'
import Swiper from '@/components/Swiper'
import HotNews from '@/components/HotNews'
export default {
  name: 'topIndex',
  components: {
    Banner,
    Swiper,
    HotNews
  },
  data(){
      return {
        bannerList: [
          {"img":"http://www.youdingsoft.com/fileUploadsmall/20180119172411843341.jpg;","url":"","name":"1"},
          {"img":"http://www.youdingsoft.com/fileUploadsmall/20180119172434968049.jpg;","url":"","name":"2"},
          {"img":"http://www.youdingsoft.com/fileUploadsmall/20180119172503906167.jpg;","url":"","name":"3"},
          {"img":"http://www.youdingsoft.com/fileUploadsmall/20180119172518390352.jpg;","url":"","name":"4"},
          {"img":"http://www.youdingsoft.com/fileUploadsmall/20180119172552359735.jpg;","url":"","name":"5"}
        ]
      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  
</style>
