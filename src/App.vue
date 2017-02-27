<template>
  <div id="app">
    <div class="app-header">
      <span class="app-title fl">聚兔总管</span>
      <div class="app-account fr">
        <span class="app-count">通知中心</span>&nbsp;&nbsp;|&nbsp;&nbsp;
        <div class="app-name">Haven &nbsp;<span class=' el-icon-caret-bottom'></span></div>
      </div>
    </div>
    <div class="app-leftBar">
      <leftBar></leftBar>
    </div>
    <div class="app-main">
      <el-breadcrumb separator="/" class="app-breadcrumb">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: $route.path}">{{$route.name}}</el-breadcrumb-item>
      </el-breadcrumb>
      <div class="app-box">
        <router-view></router-view>
      </div>

    </div>
  </div>
</template>
<script>
  import leftBar from 'components/leftBar.vue'
  export default {
    name: 'app',
    components: {
      leftBar
    },
    methods: {
      toggle(){
        this.$store.commit('dialog')
      },
      changeData(){

      }
    },
    computed: {},
    mounted(){

    }
  }
</script>
