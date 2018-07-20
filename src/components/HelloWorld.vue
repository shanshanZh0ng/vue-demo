<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Hello world</h2>
    <ul>
      <li>
        <a href="http://www.baidu.com">百度一下</a>
      </li>
      <li>
        <a href="https://cn.vuejs.org/">Vue.js文档</a>
      </li>
    </ul>
    <div>     
      <p>{{text1}}</p>
      <input v-model="text" />
      <button @click="reverseMessage">点击反转</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      text: "I'm coming back",
      text1: "I'm coming back"
    }
  },
  methods:{
    reverseMessage: function () {
      this.text1 = this.text;
      this.text = this.text.split('').reverse().join('');
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
  text-decoration: none;
}
</style>
