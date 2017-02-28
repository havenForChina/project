<template>
  <div class="left-box">
    <div class="search">
      <el-autocomplete
        icon="search"
        class="inline-input"
        size="small"
        v-model="state"
        :fetch-suggestions="querySearch"
        placeholder="请输入内容"
        :trigger-on-focus="false"
        @select="handleSelect"
      ></el-autocomplete>
    </div>
    <el-menu :default-active="defaultActive" :router="true" theme="dark" class="app-menu">
      <el-menu-item index="/"><i class="iconfont icon-zhuye"></i>首页工作台</el-menu-item>
      <el-submenu v-for="(els,index) in leftBar" :index="els.path">
        <template slot="title"><i class="iconfont" :class="els.icon"></i>{{els.name}}</template>
          <el-menu-item v-for="(el,ind) in els.item" :index="el.path">{{el.name}}</el-menu-item>
      </el-submenu>
    </el-menu>

  </div>
</template>
<script>
  export default {
    name: 'leftBar',
    data() {
      return {
        restaurants: [],
        state: '',
        leftBar:null
      }
    },
    methods: {
      querySearch(queryString, cb) {
        var restaurants = this.restaurants;
        var results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants;
        // 调用 callback 返回建议列表的数据
        cb(results);
      },
      createFilter(queryString) {
        return (restaurant) => {
          return (restaurant.value.indexOf(queryString.toLowerCase()) === 0);
        }
      },
      loadAll() {
        return this.searchData
      },
      handleSelect(item) {
        this.$router.push(item.path)
      }
    },
    computed:{
      defaultActive(){
        return this.$route.path
      },
      searchData(){
        let a=[]
        $(this.leftBar).each(function (index,el) {
          $(el.item).each(function (_in,val) {
            let obj = {}
            obj.value = el.name+'-'+val.name
            obj.path = val.path
            a.push(obj)
          })
        })
        return a
      }
    },
    mounted() {
      this.restaurants = this.loadAll();
    },
    created(){
      this.leftBar = this.$store.state.leftBar
    }
  }
</script>
<style scoped>
  .search{
    padding:4px;
  }
  .app-menu i {
    font-size: 18px;
    padding-right: 10px;
  }
  .left-box {
    height: 100%;
    background: #324157;
    position: relative;
    z-index:1;
  }
</style>
