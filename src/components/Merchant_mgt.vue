<template>
  <div>
    <div class="back-box pt-30">
      <el-form :inline="true" :model="merchantData.searchData" class="demo-form-inline">
        <ul class="app-input-list clearfix">
          <li>
            <el-form-item label="商户ID">
              <el-input v-model="merchantData.searchData.id" placeholder="商户ID" :size="inputSize" style="width: 160px"></el-input>
            </el-form-item>
            <el-form-item label="商户名称">
              <el-input v-model="merchantData.searchData.name" placeholder="商户名称" :size="inputSize" style="width: 160px"></el-input>
            </el-form-item>
            <selectInput
              :data="merchantData.searchData.userStatus"
              title="商户状态"
              size="small">
            </selectInput>
            <el-form-item label="营业状态">
              <el-select v-model="merchantData.searchData.businessStatus.value" placeholder="营业状态" :size="inputSize" style="width: 160px">
                <el-option v-for="el in merchantData.searchData.businessStatus.options"  :label="el.label" :value="el.value" ></el-option>
              </el-select>
            </el-form-item>
          </li>
          <li>
            <el-form-item label="城市">
              <el-input v-model="merchantData.searchData.city" placeholder="商户ID" :size="inputSize" style="width: 160px"></el-input>
            </el-form-item>
            <el-form-item label="商户类型">
              <el-select v-model="merchantData.searchData.merchantType.value" placeholder="营业状态" :size="inputSize" style="width: 160px">
                <el-option v-for="el in merchantData.searchData.merchantType.options"  :label="el.label" :value="el.value" ></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="商户类型">
              <el-select v-model="merchantData.searchData.merchantType.value" placeholder="营业状态" :size="inputSize" style="width: 160px">
                <el-option v-for="el in merchantData.searchData.merchantType.options"  :label="el.label" :value="el.value" ></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="商户类型">
              <el-select v-model="merchantData.searchData.merchantType.value" placeholder="营业状态" :size="inputSize" style="width: 160px">
                <el-option v-for="el in merchantData.searchData.merchantType.options"  :label="el.label" :value="el.value" ></el-option>
              </el-select>
            </el-form-item>
          </li>
        </ul>
        <div class="app-from-btn">
          <el-form-item>
            <el-button type="primary" @click="onSubmit"> 查询 </el-button>
          </el-form-item>
        </div>
        <p class="btn-more">
          <i class="el-icon-arrow-down" @click="openMore"></i>
        </p>
      </el-form>
    </div>
    <div class="mt-20">
      <el-button icon="plus">新增商户</el-button>
      <el-button icon="upload2">导出商户</el-button>
      <el-button>导出进度查询</el-button>
    </div>
    <div class="operating back-box clearfix mt-20">
      <input type="checkbox" id="selectAll" v-model="mSelectAll" @click="msa">
      <label for="selectAll">全选</label>
      <i>( 已选 <span>{{merchantData.selectMerchant.length}}</span>家 )</i>
      <el-button
        :plain="true"
        :disabled="noClick"
        size="small"
        v-for="el in merchantData.operating.operateAll" @click="operate(el.type)">
        {{el.label}}
      </el-button>
      <el-button :plain="true" size="small" :class="'fr'">商户等级与积分规则</el-button>
    </div>
    <ul class="merchant-list ">
      <li class="back-box mt-20" v-for="el in merchantData.merchantList">
        <div class="list-title clearfix">
          <input type="checkbox" :value="el.id" v-model="merchantData.selectMerchant" @change="mSelect">
          <a href="#">{{el.name}}</a>
          <ul class="list-edit clearfix fr">
            <li>拜访记录</li>|
            <li>活动设置</li>|
            <li>查看日志</li>|
            <li>物流日志</li>|
            <li>商户数据</li>|
            <li>上线</li>|
            <li>KA绑定设置</li>|
            <li>结算信息</li>
          </ul>
        </div>
        <div class="list-body clearfix pt-20">
          <div class="list-detailed fl">
            <el-button type="primary" @click="pageShow = true">详细</el-button>
          </div>
          <ul class="list-info clearfix">
            <li>
              <p>商户状态: 新增商户待上线</p>
              <p>营业状态: 暂停营业</p>
              <p>配送方: 自配送</p>
              <p>等级: 没有等级</p>
            </li>
            <li>
              <p>入主渠道: 平台创建</p>
              <p>合作方: 肯德基(苏州)</p>
              <p>商户ID: 12345678908</p>
              <p>创建时间: 2017-01-23 13：50：01</p>
            </li>
            <li>
              <p>标签: 暂无</p>
              <p>城市: 苏州</p>
              <p>合同状态: 有效</p>
              <p>积分(详情): 0</p>
            </li>
            <li>
              <p>商圈: 待定</p>
              <p>管理者: 苏州代理商</p>
              <p>近90天好评率：: 0</p>
            </li>
          </ul>
        </div>
      </li>
    </ul>
    <div class="app-dropdown-page fade" :class="pageShow && 'top0'">
      <div class="app-dropdown-box fade">
        <div class="app-dropdown-body back-box">
          <div class="app-dropdown-title">
            <h2>大叔的丝袜奶茶铺（老街店) - 商户详情</h2>
            <i class="app-dropdown-close el-icon-close" @click="pageShow = !pageShow"></i>
          </div>
          <tmp is="detailed" :data="merchantData"></tmp>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import selectInput from './template/selectInput.vue'
  import detailed from './Merchant_detailed/Merchant_detailed.vue'
export default {
  name: 'merchant',
  components:{
    selectInput,
    detailed
  },
  methods:{
    openMore(){

    },
    onSubmit(){

    },
    operate(type){
      console.log(type)
    },
    mSelect(){
      this.mSelectAll = this.merchantData.selectMerchant.length == this.merchantData.merchantList.length? true : false
    },
    msa(){
      let _this = this
      if(this.mSelectAll){
        this.merchantData.selectMerchant =[]
        this.merchantData.merchantList.forEach(function (el) {
          _this.merchantData.selectMerchant.push(el.id)
        })
      }else {
        this.merchantData.selectMerchant =[]
      }
    }
  },
  computed:{
      noClick(){
        return this.merchantData.selectMerchant.length === 0 ? true : false
      }
  },
  data () {
    return {
      merchantData:{},
      inputSize:"small",
      mSelectAll:false,
      pageShow:true
    }
  },
  watch:{
    pageShow(n,o){
      if(n){
        $('body').css('overflow','hidden')
      }else {
        $('body').css('overflow','auto')
      }
    }
  },
  created(){
    this.merchantData = this.$store.state.merchant
    this.mSelectAll = this.merchantData.selectMerchant.length == this.merchantData.merchantList.length? true : false
  }
}
</script>

<style scoped>
  .operating{
    padding: 13px 15px;
  }
  .operating label,.operating i {
    font-size: 14px;
  }
  .operating i {
    margin-right: 20px;
  }
  .operating i span {
    color: red;
  }
  .merchant-list>li{
    padding: 13px 15px 20px;
    font-size: 14px;
  }
  .list-title {
    border-bottom: 1px solid #ccc;
    padding-bottom: 20px;
  }
  .list-title,.list-title a {
    color: #20a0ff;
  }
  .list-edit li{
    display: inline-block;
    margin: 0 6px;
  }
  .list-body {
    position: relative;
  }
  .list-detailed {
    position: absolute;
    width: 15%;
    text-align: center  ;
    top:50%;
    transform: translateY(-50%);
  }
  .list-info{
    width: 85% ;
    margin-left: 15%;
  }
  .list-info li {
    line-height: 40px;
    margin-right: 80px;
    float: left;
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
