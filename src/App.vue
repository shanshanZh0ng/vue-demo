<template>
  <div id="app">
    <topHeader></topHeader>
  </div>
</template>

<script>
import TopHeader from '@/components/TopHeader'
export default {
  name: 'App',
  components: {
    TopHeader
  },
  data(){
      return {
        
      }
    }
}
</script>

<style scoped>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 10px;
  }
  
</style>
