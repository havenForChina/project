<template>
    <div class="detailed-main">
        <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
            <el-tab-pane label="商户详情" name="1">
                <div class="tab-box">
                    <el-form label-width="130px" :model="data" :rules="rules" ref="data">
                        <dl class="detailed-box">
                            <dt>
                                基本信息
                            </dt>
                            <dd class="text"><label>代理商</label> <span>{{data.Agents}}</span></dd>
                            <dd class="required">
                                <el-form-item label="商户名称" prop="name">
                                    <el-input :size="inputSize" v-model="data.name" placeholder="连锁店标注为“品牌(分店名)形式"></el-input>
                                </el-form-item>
                            </dd>
                            <dd><label>销售经理</label> <span>{{data.SalesManager}}</span></dd>
                            <dd><label>商圈经理</label> <span>{{data.DistrictManager}}</span></dd>
                            <dd>
                                <el-form-item label="所属品牌">
                                    <el-input :size="inputSize" v-model="data.OwnBrand"></el-input>
                                </el-form-item>
                            </dd>
                            <dd>
                                <el-form-item label="商户标签">
                                    <el-select v-model="data.MerchantLabel.value" placeholder="请选择活动区域" :size="inputSize">
                                        <el-option
                                                v-for="el in data.MerchantLabel.options"
                                                :label="el.label"
                                                :value="el.value">
                                        </el-option>
                                    </el-select>
                                </el-form-item>
                            </dd>
                            <dd>
                                <el-form-item label="商户品类" prop="categoryValue">
                                    <el-select v-model="data.categoryValue" placeholder="请选择" :size="inputSize">
                                        <el-option
                                                v-for="el in data.category"
                                                :label="el.label"
                                                :value="el.value">
                                        </el-option>
                                    </el-select>
                                </el-form-item>
                            </dd>
                            <dd>
                                <label class="is-label">经营范围</label>
                                <span><el-button type="primary" :disabled="btnDisable" :size="inputSize">{{btnPrompt}}</el-button></span>
                            </dd>
                            <dd><label>用户端分类</label> <span>暂未有</span></dd>
                            <dt>
                                位置/电话
                            </dt>
                            <dd>
                                <label class="is-label">商户地址</label>
                                <span>
                                    <ul class="cascade clearfix">
                                        <li><el-select placeholder="请选择" :size="inputSize">
                                        <el-option label="1" :value="1"></el-option>
                                    </el-select></li>
                                         <li><el-select placeholder="请选择" :size="inputSize">
                                        <el-option label="1" :value="1"></el-option>
                                    </el-select></li>
                                         <li><el-select placeholder="请选择" :size="inputSize">
                                        <el-option label="1" :value="1"></el-option>
                                    </el-select></li>
                                    </ul>
                                    <el-input v-model="input" placeholder="范围仅限：中国大陆+香港+澳门" :size="inputSize"></el-input>
                                </span>
                            </dd>
                            <dd>
                                <el-form-item label="选择经纬度" >
                                    <el-input :size="inputSize" placeholder="经纬度坐标"></el-input>
                                    <p class="prompt">使用高德坐标系，示例(116.376673,39.99679)在
                                        <span style="color: #428bca; cursor: pointer" @click="openMap">地图上选位置</span>
                                    </p>
                                </el-form-item>
                            </dd>
                            <dd>
                                <label class="is-label">商户区域</label>
                                <span>
                                    <ul class="cascade clearfix">
                                        <li><el-select placeholder="请选择" :size="inputSize">
                                        <el-option label="1" :value="1"></el-option>
                                    </el-select></li>
                                         <li><el-select placeholder="请选择" :size="inputSize">
                                        <el-option label="1" :value="1"></el-option>
                                    </el-select></li>
                                         <li><el-select placeholder="请选择" :size="inputSize">
                                        <el-option label="1" :value="1"></el-option>
                                    </el-select></li>
                                    </ul>
                                </span>
                            </dd>
                            <dd>
                                <el-form-item label="商户电话" >
                                    <el-input :size="inputSize" placeholder="格式为：区号-电话号码/其他号码，其他号码只能填一个"></el-input>
                                </el-form-item>
                            </dd>
                            <dt>
                                营业资质
                            </dt>
                        </dl>
                    </el-form>
                </div>
            </el-tab-pane>
            <el-tab-pane label="外卖信息" name="2">配置管理</el-tab-pane>
            <el-tab-pane label="账号信息" name="3">角色管理</el-tab-pane>
            <el-tab-pane label="操作日志" name="4">定时任务补偿</el-tab-pane>
            <el-tab-pane label="自主营销" name="5">定时任务补偿</el-tab-pane>
            <el-tab-pane label="合同" name="6">定时任务补偿</el-tab-pane>
            <el-tab-pane label="菜单" name="7">定时任务补偿</el-tab-pane>
        </el-tabs>
    </div>
</template>
<script>
    export default {
        name: 'detailed',
        props:{
            data:Object
        },
        data() {
            return {
                activeName: "1",
                inputSize:"small",
                input:'',
                rules: {
                    name: [
                        { required: true, message: '请输入活动名称', trigger: 'blur' }
                    ],
                    categoryValue: [
                        {type: 'number', required: true, message: '请选择', trigger: 'change' }
                    ]
                }
            }
        },
        computed:{
            btnPrompt(){
                return this.data.categoryValue == '' ? '请先选择品类' : '请选择'
            },
            btnDisable(){
                return this.data.categoryValue == '' ? true : false
            }
        },
        methods: {
            handleClick(tab, event) {
                console.log(tab, event);
            },
            openMap(){
                console.log('打开地图插件')
            }
        },
        mounted(){
            let wh = $(window).height()
            $('.tab-box').css('height',wh-190)
        }
    }
</script>
<style scoped>
    .detailed-main {
        padding: 20px;
    }
    .tab-box {
        overflow: auto;
    }
    .detailed-box {
        padding: 0 10px;
    }
    .detailed-box dt {
        width: 100%;
        padding-bottom: 10px;
        padding-left: 10px;
        margin:10px 0 20px;
        font-size: 18px;
        line-height: inherit;
        color: #333;
        border: 0;
        border-bottom: 1px solid #e5e5e5;
    }
    .detailed-box dd {
        font-size: 14px;
        width: 600px;
        overflow: hidden;
        line-height: 1;
        margin-bottom: 15px;
        position: relative;
    }
    .detailed-box dd.text{
        margin-bottom: 15px;
    }
    .detailed-box dd label,.detailed-box dd>span{
        vertical-align: middle;
        font-size: 14px;
        color: #48576a;
        line-height: 36px;
        box-sizing: border-box;
    }
    .detailed-box dd>label {
        width: 130px;
        text-align: right;
        position: absolute;
        padding-right: 12px;

    }
    .detailed-box dd>span {
        display: block;
        margin-left: 130px;
    }
    .detailed-box dd>span .cascade {
        width:100%;
    }
    .detailed-box dd>span .cascade li {
        float: left;
        width: 30%;
    }
    .detailed-box dd>span .cascade li:first-child{
        margin-right: 4.9%;
    }
    .detailed-box dd>span .cascade li:last-child{
        margin-left: 4.9%;
    }
   .detailed-box dd .el-form-item{
        margin-bottom: 0;
    }
    .detailed-box dd .prompt{
        font-size: 12px;
        color: #999;
    }
    .is-label:before{
        content: "*";
        color: #ff4949;
        margin-right: 4px;
    }
</style>