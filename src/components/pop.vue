<template>
  <div style="display: inline-block;">
    <a class="popBtn" href="javascript: void(0)" @click="btnshow">{{popbtn}}</a>
    <div class="pop" ref="mypop" v-show="popflag">
      <div class="popLayer" v-for="(pop,index) in popList" :key="index">
        <span class="close" @click="close">X</span>
        <h3>{{pop.title}}</h3>
        <p>{{pop.text}}</p>
        <div class="btn">
          <a href="javascript: void(0)"
             v-for="(btn, index) in pop.btns"
             @click="close" 
            :key="index">{{btn}}
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>



export default {
  name: 'pop',
  props: {
    popList: Array,
    title: String,
    text: String,
    btns: Array,
    btn: String,
    popbtn: String
  },
  components: {
    
  },
  data(){
    return {
      flag: true,
      popflag: false
    }
  },
  methods:{
    /*popLayer: function () {
      const poplength = document.body.clientWidth;
      const pop = document.getElementByClassName("pop");
      this.$refs.mypop.style.height = poplength;
    },*/
    btnshow: function () {
      this.popflag = !this.popflag;
    },
    close: function () {
      this.popflag = !this.popflag;
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
  .pop {
    position: fixed;
    left: 0;
    top:0;
    right: 0;
    bottom: 0;
    width:100%;
    height: 100%;
    background: rgba(0,0,0,0.2);
  }
  .popBtn {
    padding: 10px 30px;
    font-size: 16px;
    line-height: 30px;
    color: #fff;
    border-radius: 4px;
    text-decoration: none;
    background: #ff8e55;
  }
  .popLayer {
    width: 500px;
    height: 300px;
    background: #fff;
    border: 3px solid #ff8e55;
    position: absolute;
    left: 50%;
    top: 50%;
    margin: -150px 0 0 -250px;
    border-radius: 5px;
    padding: 10px 20px;
    position: relative;
  }
  .close {
    position: absolute;
    right: 5px;
    top: 5px;
    cursor: pointer;
  }
  .popLayer h3 {
    padding-top: 20px;
  }
  .popLayer p {
    padding: 20px 0;
    text-indent: 2em;
    height: 160px;
  }
  .btn {
    text-align: center;
  }
  .btn a {
    padding: 10px 30px;
    font-size: 16px;
    line-height: 30px;
    color: #fff;
    border-radius: 4px;
    text-decoration: none;
  }
  .btn a:nth-child(1) {
    background: #ccc;
    margin-right: 20px;
  }
  .btn a:nth-child(2) {
    background: #ff8e55;
    margin-left: 20px;
  }
</style>
