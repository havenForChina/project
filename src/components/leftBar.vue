<template>
  <div>
    <div class="search">
      <el-autocomplete
        icon="search"
        class="inline-input"
        size="small"
        popper-class="my-autocomplete"
        custom-item="my-item-zh"
        v-model="state2"
        :fetch-suggestions="querySearch"
        placeholder="请输入内容"
        :trigger-on-focus="false"
        @select="handleSelect"
      ></el-autocomplete>
    </div>
    <ul class="list">
      <li class="homePage">首页工作台</li>
      <li v-for="(els,index) in leftBar" >
        <i class="icon"></i>
        <span v-on:click="toggleSlide(els)">{{els.name}}</span>
        <ul :class="els.active == true ? 'show' : 'hide'" class="fade">
          <li v-for="el in els.item" :path="el.path"
              :class="el.active && 'active'" @click="jump(el.path)">{{el.name}}</li>
        </ul>
      </li>
    </ul>
  </div>
</template>
<script>
  import Vue from 'vue'
  Vue.component('my-item-zh', {
    functional: true,
    render: function (h, ctx) {
      var item = ctx.props.item;
      return h('li', ctx.data, [
        h('div', { attrs: { "data-path": item.path } }, [item.value])
      ]);
    },
    props: {
      item: { type: Object, required: true }
    }
  });
  export default {
    name: 'leftBar',
    data() {
      return {
        restaurants: [],
        state1: '',
        state2: '',
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
        return [
          {"value": "三全鲜食（北新泾店）", "path": "/"},
          { "value": "Hot honey 首尔炸鸡（仙霞路）", "path": "/" }
        ];
      },
      handleSelect(item) {
        console.log(item);
      },
      toggleSlide(el){
        el.active = !el.active
        this.$store.commit('changeLeftBarData',this.leftBar)
      },
      jump(path){
        this.$router.push(path)
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
  .list>li {
    padding: 14px 0 6px;
    color: #75809a;
    font-size: 12pt;
    text-indent: 40px;
    border-bottom: 1px solid rgb(60, 60, 60);
    position: relative;
    cursor: pointer;
  }
  .list .homePage {
    color: #fff;
    padding: 0;
    height: 50px;
    line-height: 50px;
  }
  .list>li>span{
    display: block;
  }
  .list>li i {
    width: 16px;
    height: 16px;
    position: absolute;
    left:14px;
    top: 17px;
    background: #ccc;
  }
  .list>li ul {
    margin-top: 6px;
  }
  .list>li ul li {
    font-size: 10pt;
    color: #fff;
    height: 20px;
    line-height: 20px;
    margin-bottom: 6px;
  }
  .list>li ul li.active,.list>li ul li.active:hover{
    background: #46c3c1;
    color: #fff;
  }
  .list>li ul li:hover{
    color: #46c3c1;
  }
</style>
