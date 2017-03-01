<template>
  <div id="app">
    <div class="app-header">
      <span class="app-title fl">聚兔总管</span>
      <div class="app-account fr">
        <span class="app-count">通知中心</span>&nbsp;&nbsp;|&nbsp;&nbsp;
        <div class="app-name">Haven &nbsp;<span class=' el-icon-caret-bottom'></span></div>
      </div>
    </div>
    <div class="app-leftBar fade">
      <leftBar></leftBar>
      <div class="draw-handler fade"  @click="drawHandler">
        <i class="el-icon-arrow-left"></i>
        <p>收起菜单</p>
      </div>
      <p class="app-feedback" @click="openFeedback">意见反馈</p>
    </div>
    <div class="app-main fade">
      <el-breadcrumb separator="/" class="app-breadcrumb">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: $route.path}">{{$route.name}}</el-breadcrumb-item>
      </el-breadcrumb>
      <div class="app-box">
        <router-view></router-view>
      </div>
      <div class="app-foooter">©2017 聚兔外卖</div>
    </div>
    <el-dialog title="意见反馈" v-model="dialogVisible" custom-class="app-feedback-dialog">
      <div class="feedback-body">
        <h5>*类型</h5>
        <el-select v-model="feedback.value" placeholder="请选择" size="small">
          <el-option
            v-for="item in feedback.types"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
        <h5>*标题</h5>
        <el-input v-model="feedback.title" placeholder="请输入内容" size="small"></el-input>
        <h5>*详情</h5>
        <el-input
          type="textarea"
          :rows="2"
          placeholder="请输入内容"
          v-model="feedback.detailed">
        </el-input>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
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
      drawHandler(){
        let leftBars = $('.app-leftBar')
        var lw = leftBars.width()
        if(this.leftToggle){
          leftBars.css('left',-lw)
                  .find('.draw-handler i').removeClass().addClass('el-icon-arrow-right').siblings('p').text('打开菜单')
          $('.app-main').css('margin-left',0)
          this.leftToggle = false
        }else {
          leftBars.css('left',0)
                  .find('.draw-handler i').removeClass().addClass('el-icon-arrow-left').siblings('p').text('收起菜单')
          $('.app-main').css('margin-left',lw)
          this.leftToggle = true
        }
      },
      openFeedback(){
        this.dialogVisible = true
      }
    },
    computed: {
    },
    mounted(){
    },
    data(){
      return {
        leftToggle:true,
        dialogVisible:false,
        feedback:{
          types:[
            {value:1,label:"功能优化"},
            {value:2,label:"新增功能"},
            {value:3,label:"投诉反馈"},
            {value:4,label:"其他"}
          ],
          value:'',
          detailed:'',
          title:''
        }
      }
    }
  }
</script>
