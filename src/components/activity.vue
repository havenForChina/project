<template>
    <div class="widget-createentry">
        <div class="block block-msg alert-info" v-html="activityData.Explain"></div>
        <div class="block-content" data-node="entry">
            <div class="entry-panel">
                <h4 class="panel-head"><span class="panel-head-text"><i class="fa fa-cogs"></i>&nbsp;营销活动</span></h4>
                <el-row >
                    <el-col :span="12" v-for="item in activitydata"><div class="grid-content  panel-contetn row"></div>
                            <div class="col-md-6 entry-block" :data-privilege="[item.name]">
                                <div class="entry-icon" :class="[item.color]">
                                    {{item.icon_text}}
                                </div>
                                <div class="entry-content">
                                    <div class="entry-name">
                                        {{item.name}}
                                    </div>
                                    <p class="entry-desc">{{item.detail}}</p>
                                    <a class="btn btn-primary" @click="pageShow=true,key_link=item"></i>&nbsp;进入</a>
                                </div>
                            </div>
                    </el-col>
                 </el-row>
            </div>
            <div class="entry-panel">
                <h4 class="panel-head"><span class="panel-head-text"><i class="fa fa-server"></i>&nbsp;监控与日志</span></h4>
                    <el-row>
                        <el-col :span="12" v-for="item in logging"><div class="grid-content  panel-contetn row"></div>
                            <div class="col-md-6 entry-block" data-privilege="营销系统">
                                <div class="entry-icon" :class="[item.color]">
                                    {{item.icon_text}}
                                </div>
                                <div class="entry-content">
                                    <div class="entry-name">
                                        {{item.name}}
                                    </div>
                                    <p class="entry-desc">{{item.detail}}</p>
                                    <a class="btn btn-primary"></i>&nbsp;进入</a>
                                </div>
                            </div>
                        </el-col>
                    </el-row>
                </div>
        </div>
        <div class="app-dropdown-page fade" :class="pageShow && 'top0'">
            <div class="app-dropdown-box">
                <div class="app-dropdown-body back-box">
                    <div class="app-dropdown-title">
                        <el-breadcrumb separator="/" class="app-breadcrumb">
                            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                            <el-breadcrumb-item :to="{ path: $route.path}">{{$route.name}}</el-breadcrumb-item>
                            <h2>营销活动-{{key_link.name}}</h2>
                        </el-breadcrumb>
                        <i class="app-dropdown-close el-icon-close" @click="pageShow = !pageShow"></i>
                    </div>
                    <tmp is="list"></tmp>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import list from"./activity/list.vue"
    export default {
        name: 'activity',
        components:{
            list
        },
        data() {
            return {
                activityData: null,
                isShow: false,
                dialogVisible: false,
                pageShow:false,
                key_link:'',
                activitydata:[
                    {"icon_text":'减',
                        "key":'jian',
                        "color":'red',
                        "name":'立减优惠',
                        "detail":'立减优惠是指订单维度的价格满立减，是对满足指定条件的订单进行减价的营销规则，满X元，立减Y元，X,Y可设置。'},
                    {"icon_text":'免',
                        "key":'mian',
                        "color":'pink',
                        "name":'免配送费',
                        "detail":'免配送费是指对满足指定条件的订单进行免配送费的营销规则，满X元，免配送费，X可设置。'},
                    {"icon_text":'折',
                        "key":'zhe',
                        "color":'orange',
                        "name":'全店折扣',
                        "detail":'全店折扣是针对商户全店享受固定折扣的营销活动，在线支付享X折，X可设置'},
                    {"icon_text":'特',
                        "key":'te',
                        "color":'red',
                        "name":'特价菜',
                        "detail":'每月独享一次的特价菜'},
                    {"icon_text":'赠',
                        "key":'zeng',
                        "color":'pink',
                        "name":'下单满赠',
                        "detail":'下单满赠，是指用户消费的订单满X元，即可赠送赠品。'}
                ],
                logging:[
                    {
                        "icon_text":'报',
                        "key":'bao',
                        "color":'lightblue',
                        "name":' 活动日报',
                        "detail":'查看活动受系统调整情况并对其进行反馈。'
                    }
                ]
            }

        },
        methods: {
            changeData(){
                this.$store.commit('changeActivityData', this.activityData)
            }
        },
        created(){
            this.activityData = this.$store.state.activity
        },
        watch:{
            pageShow(n,o){
                if(n){
                    $('body').css('overflow','hidden')
                }else {
                    $('body').css('overflow','auto')
                }
            }
        }

    }
</script>
<style scoped>
.widget-createentry .block-msg{
    padding: 15px;
    border-style: solid;
    border-width: 1px;
    border-radius: 5px;
}
.widget-createentry .block{
    margin-bottom: 15px;

}
.alert-info{
    color: #31708f;
    background-color: #d9edf7;
    border-color: #bce8f1;
}
.widget-createentry .block-content{
    background-color: #fff;
    border:solid 1px #eaeaea;
    border-radius: 5px;
}
.entry-panel{
   margin: 10px 15px 30px;
    height:100%;
}
.entry-panel .panel-head{
    border-bottom: solid 1px #eaeaea;
    margin:20px;
}
.entry-panel .panel-head .panel-head-text{
    display: inline-block;
    position: relative;
    padding: 8px 15px;
    border-bottom: solid 1px #333;
    margin-bottom: -1px;
}
.row{
    margin-right:-15px;
    margin-left: -15px;
}
.entry-panel .entry-block{
    margin-bottom: 30px;
    position: relative;
}
.entry-panel .entry-icon{
    position: absolute;
    top: 5px;
    left: 30px;
    width:70px;
    text-align: center;
    font-size: 40px;
    overflow: hidden;
    border-radius: 35px;
    border:solid 4px rgba(0,0,0,.05);
}
.widget-createentry .entry-panel .entry-icon{
    color:#fff;
    line-height:65px;
}
.widget-createentry .entry-panel .red{
    background-color: #ff5151;
}
.col-md-6{
    /*width: 50%;*/
    float: left;
    min-height:1px;
    padding-right: 15px;
    padding-left: 15px;
}
.widget-createentry .entry-content{
    height:110px;
}
.entry-panel .entry-content{
    margin-left: 100px;
}
.entry-panel .entry-name{
    margin-bottom: 10px;
    font-weight: 700;
}
.entry-panel .entry-desc{
    color: #999;
}
.btn-primary{
    background-color: #46c3c1;
    border:#46c3c1 solid 1px;
}
.btn{
    display: inline-block;
    padding: 6px 12px;
    margin-bottom: 0;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.428571429;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    cursor: pointer;
    background-image: none;
    border: 1px solid transparent;
    border-radius: 4px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    -o-user-select: none;
    user-select: none;
}
a{
    text-decoration:none;
    background: transparent;
    color: #fff;
}
p{
    margin: 0 0 10px 0;
}
.widget-createentry .entry-panel .pink{
    background: #ff548c;
}
.widget-createentry .entry-panel .lightblue{
    background:#74b9f5;
}
.widget-createentry .entry-panel .orange{
    background: #ff9e36;
}
.app-dropdown-page{
    width:100%;
    height: 100%;
    position: fixed;
    left: 0;
    top:-1000px;
    z-index: 10;
}
.app-dropdown-page .app-dropdown-box {
    position: relative;
    padding: 44px 20px 0 189px;
}
.app-dropdown-title{
    font-size: 14px;
    padding: 20px;
    position: relative;
}
.app-dropdown-close {
    position: absolute;
    right: 20px;
    top: 23px;
    cursor: pointer;
}
.top0 {
    top:0
}

</style>
