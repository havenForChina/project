<template>
    <div class="tab-box">
        <el-form label-width="130px" :model="MerchantAccount" :rules="rules" ref="data">
            <dl class="detailed-box">
                <dt>
                   账号信息
                </dt>
                <dd><label class="is-label">商户账号</label> <span>{{MerchantAccount.M_account}}</span></dd>
                <dd class="required">
                   <el-form-item label="账号绑定手机号">
                   <el-input :size="inputSize" v-model="MerchantAccount.M_phone" placeholder="13962250159"></el-input>
                   </el-form-item>
                </dd>
                <dt></dt>
                 <div class="col-md-8">
  <span class="wrapper">
  	<el-button type="info">保存</el-button>
    <el-button type="warning">重置按钮</el-button>
  </span>
</div>      	
            </dl>
        </el-form>
    </div>
</template>
<script>
    export default {
        name: 'account',
        data(){
            return {
               "MerchantAccount":{
               	"M_account":"ds13962250159",
               	"M_phone":"13962250159"
               },
                inputSize:"small"
            }
        }
    }
</script>
<style scoped>
.col-md-8{
	position: relative;
    min-height: 1px;
   padding-left: 145px;
}

</style>