<template>
    <div class="widget-createentry">
        <div class="block block-msg alert-info" v-html="activityData.Explain"></div>
        <div class="block-content" data-node="entry">
            <div class="entry-panel">
                <h4 class="panel-head"><span class="panel-head-text"><i class="fa fa-cogs"></i>&nbsp;营销活动</span></h4>
                <el-row>
                    <el-col :span="12"><div class="grid-content  panel-contetn row"></div>
                        <div class="col-md-6 entry-block" data-privilege="营销系统-立减优惠">
                            <div class="entry-icon red">
                                减
                            </div>
                            <div class="entry-content">
                                <div class="entry-name">
                                    立减优惠
                                </div>
                                <p class="entry-desc">立减优惠是指订单维度的价格满立减，是对满足指定条件的订单进行减价的营销规则，满X元，立减Y元，X,Y可设置。</p>
                                <a href="Activity-offer_list.html" class="btn btn-primary"><i class="fa fa-share fa-rotate-180"></i>&nbsp;进入</a>
                            </div>
                        </div>
                        <div class="col-md-6 entry-block" data-privilege="营销系统-免配送费">
                            <div class="entry-icon pink">
                                免
                            </div>
                            <div class="entry-content">
                                <div class="entry-name">
                                    免配送费
                                </div>
                                <p class="entry-desc">免配送费是指对满足指定条件的订单进行免配送费的营销规则，满X元，免配送费，X可设置。</p>
                                <a href="Activity-free_list.html" class="btn btn-primary"><i class="fa fa-share fa-rotate-180"></i>&nbsp;进入</a>
                            </div>
                        </div>
                        <div class="col-md-6 entry-block" data-privilege="营销系统-全店折扣">
                            <div class="entry-icon orange">
                                折
                            </div>
                            <div class="entry-content">
                                <div class="entry-name">
                                    全店折扣
                                </div>
                                <p class="entry-desc">全店折扣是针对商户全店享受固定折扣的营销活动，在线支付享X折，X可设置</p>
                                <a href="Activity-discount_list.html" class="btn btn-primary"><i class="fa fa-share fa-rotate-180"></i>&nbsp;进入</a>
                            </div>
                        </div>
                    </el-col>
                    <el-col :span="12"><div class="grid-content ">
                        <div class="col-md-6 entry-block" data-privilege="营销系统-全店折扣">
                            <div class="entry-icon red">
                                特
                            </div>
                            <div class="entry-content" >
                                <div class="entry-name">
                                    特价菜
                                </div>
                                <p class="entry-desc">每个月只有一次的特价菜</p>
                                <a href="Activity-special_food.html" class="btn btn-primary"><i class="fa fa-share fa-rotate-180"></i>&nbsp;进入</a>
                            </div>
                        </div>
                        <div class="col-md-6 entry-block" data-privilege="营销系统-下单满赠">
                            <div class="entry-icon lightblue">
                                赠
                            </div>
                            <div class="entry-content">
                                <div class="entry-name">
                                    下单满赠
                                </div>
                                <p class="entry-desc">下单满赠，是指用户消费的订单满X元，即可赠送赠品。</p>
                                <a href="Activity-gift_list.html" class="btn btn-primary"><i class="fa fa-share fa-rotate-180"></i>&nbsp;进入</a>
                            </div>
                        </div>
                    </div>
                 </el-col>
                </el-row>
            </div>
            <div class="entry-panel">
                <h4 class="panel-head"><span class="panel-head-text"><i class="fa fa-server"></i>&nbsp;监控与日志</span></h4>
                    <el-row>
                        <el-col :span="12"><div class="grid-content  panel-contetn row"></div>
                            <div class="col-md-6 entry-block">
                                <div class="entry-icon normal">
                                    <i class="fa fa-book"></i>
                                </div>
                                <div class="entry-icon lightblue">
                                    报
                                </div>
                                <div class="entry-content">
                                    <div class="entry-name">
                                        活动日报
                                    </div>
                                    <p class="entry-desc">查看活动受系统调整情况并对其进行反馈。</p>
                                    <a href="Activity-offer_log.html" class="btn btn-primary">
                                        <i class="fa fa-share fa-rotate-180"></i>&nbsp;进入</a>
                                </div>
                            </div>
                        </el-col>
                    </el-row>
                </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'activity',
        data() {
            return {
                activityData: null,
                isShow: false,
                dialogVisible: false
            }
        },
        methods: {
            changeData(){
                this.$store.commit('changeActivityData', this.activityData)
            }
        },
        created(){
            this.activityData = this.$store.state.activity
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
    color: ##fff;
    border:#46c3c1 solid 1px;
}
.btn{
    color: 4px 12px;
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
    user-select: none;;
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
</style>
