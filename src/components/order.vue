<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
  export default {
    name: 'order',
    data () {
      return {
        msg: '这是一个未完成的订单管理模块'
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
    background-color: green;
  }
</style>
