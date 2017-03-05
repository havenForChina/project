<template>
    <div class="tab-box">    	   
    	<div class="back-box pt-30">
    		 <el-form :inline="true" :model="Merchant_log" class="demo-form-inline"> 
    		 	<div class="pl-65">
    	 <el-form-item label="操作类型">
              <el-select v-model="Merchant_log.value" placeholder="营业状态" :size="inputSize">
                <el-option v-for="el in Merchant_log.options"  :label="el.label" :value="el.value" ></el-option>
              </el-select>
            </el-form-item>
             <span style="display: inline-block;margin-bottom: 22px" class="pl-65">
            <span class="list-label">操作时间</span>
            <el-date-picker
              :size="inputSize"
              v-model="value4"
              type="datetimerange"
              :picker-options="pickerOptions2"
              placeholder="选择时间范围"
              :editable="false"
              align="right">
            </el-date-picker>
          </span>
           <div class="app-from-btn fr pr-80">
        <el-form-item>
          <el-button type="primary" @click="onSubmit">查询</el-button>
        </el-form-item>
      </div>
          </div>
                </el-form>
    	</div>
    	<div class="back-box mt-20">
    	 <el-table
    :data="tableData"
    border
    style="width: 100%">
    <el-table-column
      prop="operation"
      label="操作"
      width="180">
    </el-table-column>
    <el-table-column
      prop="op_description"
      label="操作描述"
      width="180">
    </el-table-column>
    <el-table-column
      prop="op_time"
      label="操作时间"
      width="180">
    </el-table-column>
     <el-table-column
      prop="op_people"
      label="操作员">
    </el-table-column>
  </el-table>
    	</div>
</div>
</template>
<script>
    export default {
        name: 'operation_log',
        data(){
            return{
               "Merchant_log":{
               	  "value":1,
        "options":[
            {"label":"全部", "value":1},
            {"label":"添加菜品", "value":2},
            {"label":"删除菜品", "value":3},
            {"label":"编辑菜品", "value":4},
            {"label":"添加分类", "value":5},
            {"label":"删除分类", "value":6},
            {"label":"修改分类", "value":7}
           
        ]
               },
        inputSize:'small',
        pickerOptions2: {
          shortcuts: [{
            text: '今天',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime());
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '三天',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 3);
              picker.$emit('pick', [start, end]);
            }
          }],
          disabledDate(time){
            return time.getTime() > Date.now()
          }
        },
          value4: [new Date(2017, 1, 20, 10), new Date()],
         "tableData": [{
         "operation": '编辑菜品',
          "op_description": '修改 米饭 价格由 【2】 改为【1】',
          "op_time": '2017-2-06 13：48：26',
          "op_people":"[菜品监控]袁浩溢"
        }, {
          "operation": '编辑菜品',
          "op_description": '修改 米饭 价格由 【2】 改为【1】',
          "op_time": '2017-2-06 13：48：26',
          "op_people":"[菜品监控]袁浩溢"
        }]
            }
        }
    }
</script>
<style scoped>
.pl-65{
	padding-left: 65px;
}
.pr-80{
	padding-right: 80px;
}
</style>