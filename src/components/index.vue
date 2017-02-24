<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
  export default {
    name: 'index',
    data () {
      return {
        msg: '这是一个未完成的首页管理模块'
      }
    }
  }
</script>
<style scoped>
  p {
    color: red;
  }
  div {
    width: 100%;
    height: 100px;
    background-color: white;
  }
</style>
