<template>
    <div class="tab-box">
        <el-form label-width="130px">
            <dl class="detailed-box">           
                     <el-tabs v-model="activeName2" type="card" @tab-click="handleClick">
    <el-tab-pane label="代金券" name="first"></el-tab-pane>
  </el-tabs>
  <el-button type="primary">创建进店领代金券</el-button>
  <el-button type="primary">创建下单返代金券</el-button>
  <el-button type="primary">创建直领新用户代金券</el-button>             
            </dl>           
        </el-form>   
       <div class="common-widget-common-filter-wrap ">
    		 <el-form :inline="true" :model="Independent" class="demo-form-inline"> 
    		 	<div class="mt-20 ml-20 fl">
    	 <el-form-item label="活动类型">
              <el-select v-model="Independent.value" placeholder="活动类型" :size="inputSize" style="width: 175px">
                <el-option v-for="el in Independent.options"  :label="el.label" :value="el.value" ></el-option>
              </el-select>
            </el-form-item>        
          </div>
          <div class="mt-20 ml-20 fl">
    	 <el-form-item label="活动状态">
              <el-select v-model="Independent.value" placeholder="活动状态" :size="inputSize" style="width: 175px">
                <el-option v-for="el in Independent.options_status"  :label="el.label" :value="el.value" ></el-option>
              </el-select>
            </el-form-item>        
          </div>
          <div class="mt-20 ml-20 fl">
    	 <el-form-item label="城市">
              <el-select v-model="Independent.value" placeholder="城市" :size="inputSize" style="width: 175px">
                <el-option v-for="el in Independent.options_city"  :label="el.label" :value="el.value" ></el-option>
              </el-select>
            </el-form-item>        
          </div>
          <div class="mt-20 ml-20 fl">
    	 <el-form-item label="门店">
              <el-select v-model="Independent.value" placeholder="门店" :size="inputSize" style="width: 175px">
                <el-option v-for="el in Independent.options_shop"  :label="el.label" :value="el.value" ></el-option>
              </el-select>
            </el-form-item>        
          </div>         
                </el-form>
    	</div>
             
    	</div>
    </div>
</template>
<script>
export default {
    name: 'Independent',   
    data(){
        return{
        	 inputSize:'small',
        	 "Independent":{
        	 	  "value":1,
        "options":[
            {"label":"全部", "value":1},
            {"label":"进店领券", "value":2},
            {"label":"下单返券", "value":3},
            {"label":"新用户券", "value":4}           
          ],
          "options_status":[
            {"label":"全部", "value":1},
            {"label":"待上线", "value":2},
            {"label":"上线中", "value":3},
            {"label":"提前终止", "value":4},
             {"label":"已结束", "value":4} 
          ],
          "options_city":[],
          "options_shop":[]
               },
        activeName2: 'first'
        }
        
    },
     methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    },
   
}
</script>
<style scoped>
.ml-20{
	margin-left: 20px;
}
.common-widget-common-filter-wrap{
	background-color: #fff;
    border: #dde3ea solid 1px;
    border-radius: 2px;
    width: 1100px;
    margin: 20px 0 15px;
    display: -webkit-flex;
    display: flex;
}
</style>