<template>
  <div>
    <div class="back-box pt-30">
      <el-form :inline="true" :model="merchantData.searchData" class="demo-form-inline">
        <ul class="app-input-list clearfix">
          <li>
            <el-form-item label="商户ID">
              <el-input v-model="merchantData.searchData.id" placeholder="商户ID" :size="inputSize"></el-input>
            </el-form-item>
            <el-form-item label="商户名称">
              <el-input v-model="merchantData.searchData.name" placeholder="商户名称" :size="inputSize"></el-input>
            </el-form-item>
            <selectInput
              :data="merchantData.searchData.userStatus"
              title="商户状态"
              size="small">
            </selectInput>
            <el-form-item label="营业状态">
              <el-select v-model="merchantData.searchData.businessStatus.value" placeholder="营业状态" :size="inputSize">
                <el-option v-for="el in merchantData.searchData.businessStatus.options"  :label="el.label" :value="el.value" ></el-option>
              </el-select>
            </el-form-item>
          </li>
          <li>
            <el-form-item label="城市">
              <el-input v-model="merchantData.searchData.city" placeholder="商户ID" :size="inputSize"></el-input>
            </el-form-item>
            <el-form-item label="商户类型">
              <el-select v-model="merchantData.searchData.merchantType.value" placeholder="营业状态" :size="inputSize">
                <el-option v-for="el in merchantData.searchData.merchantType.options"  :label="el.label" :value="el.value" ></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="商户类型">
              <el-select v-model="merchantData.searchData.merchantType.value" placeholder="营业状态" :size="inputSize">
                <el-option v-for="el in merchantData.searchData.merchantType.options"  :label="el.label" :value="el.value" ></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="商户类型">
              <el-select v-model="merchantData.searchData.merchantType.value" placeholder="营业状态" :size="inputSize">
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
      <input type="checkbox" id="selectAll"><label for="selectAll">全选</label>
      <i>( 已选 <span> 0</span>家 )</i>
      <el-button :plain="true"  :disabled="merchantData.operating.disabled" size="small">开业设置</el-button>
      <el-button :plain="true"  :disabled="merchantData.operating.disabled" size="small">暂停营业</el-button>
      <el-button :plain="true"  :disabled="merchantData.operating.disabled" size="small">批量获得</el-button>
      <el-button :plain="true"  :disabled="merchantData.operating.disabled" size="small">特批</el-button>
      <el-button :plain="true"  :disabled="merchantData.operating.disabled" size="small">批量打标签</el-button>
      <el-button :plain="true"  :disabled="merchantData.operating.disabled" size="small">批量待上线</el-button>
      <el-button :plain="true"  :disabled="merchantData.operating.disabled" size="small">批量上线</el-button>
      <el-button :plain="true" size="small" :class="'fr'">商户等级与积分规则</el-button>
    </div>
    <ul class="merchant-list back-box mt-20">
      <li>
        <div class="list-title clearfix">
          <input type="checkbox">
          <a href="#">肯德基宅急送(塘市店)</a>
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
        <div class="list-body">
          
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  import selectInput from './template/selectInput.vue'
export default {
  name: 'merchant',
  components:{
    selectInput
  },
  methods:{
    openMore(){

    },
    onSubmit(){

    }
  },
  data () {
    return {
      merchantData:{},
      inputSize:"small"
    }
  },
  created(){
    this.merchantData = this.$store.state.merchant
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
  .merchant-list {
    padding: 13px 15px;
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
</style>
