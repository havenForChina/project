<template>
	<div>
  <div class="back-box pt-30">
    <el-form :inline="true" :model="redpackageData" class="demo-form-inline">
      <ul class="app-input-list clearfix">
        <li>
          <el-form-item label="红包名称">
            <el-input v-model="redpackageData.RedName" placeholder="红包名称" :size="inputSize"></el-input>
          </el-form-item>
          <el-form-item label="红包类型">
             <el-select v-model="redpackageData.redpackageStatus.value" placeholder="订单状态" :size="inputSize">
              <el-option v-for="el in redpackageData.redpackageStatus.options"  :label="el.label" :value="el.value" ></el-option>
            </el-select>
          </el-form-item>
          <span style="display: inline-block;margin-bottom: 22px">
            <span class="list-label">有效期</span>
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
          <el-form-item label="所属商家">
            <el-input v-model="redpackageData.merchant" placeholder="所属商家" :size="inputSize"></el-input>
          </el-form-item>
          <el-form-item label="创建人">
            <el-input v-model="redpackageData.createPeople" placeholder="创建人" :size="inputSize"></el-input>
          </el-form-item>
        </li>      
      </ul>
      <div class="app-from-btn">
        <el-form-item>
          <el-button type="primary" @click="onSubmit">查询</el-button>
        </el-form-item>
      </div>
    </el-form> 
  </div>
  <div class="mt-20">
  	<el-button type="primary">新建红包</el-button>
  </div>
  <div class="mt-20">
   <el-table
      :data="redpackageData.tableData""
      style="width: 100%">
      <el-table-column
        prop="redName"
        label="红包名称"
        width="120">
      </el-table-column>
      <el-table-column
        prop="redDescribe"
        label="红包描述"
        width="120">
      </el-table-column>
      <el-table-column
        prop="validity"
        label="有效期"
        width="120" >
      </el-table-column>
       <el-table-column
        prop="redType"
        label="红包类型"
        width="120" >
      </el-table-column>
       <el-table-column
        prop="createPeople"
        label="创建人"
        width="120" >
      </el-table-column>
       <el-table-column
        prop="redNumber"
        label="红包分配人数"
        width="120" >
      </el-table-column>
       <el-table-column
        prop="redStatus"
        label="红包状态"
        width="120" >
      </el-table-column>
       <el-table-column
        prop="operation"
        label="操作" >
        <template scope="scope">
        	<el-button type="primary" size="small">编辑</el-button>
          	<el-button type="primary" size="small" @click="coil">下线</el-button>
        <el-button @click="handleClick" type="primary" size="small">查看日志</el-button>
      </template>
      </el-table-column>
    </el-table>
    </div>
    <div class="block mt-20">
    <!--	<span class="demonstration">共42条</span>-->
    		<el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage4"
      :page-sizes="[10, 20, 40, 80,100]"
      :page-size="10"
      layout="total, sizes, prev, pager, next, jumper"
      :total="42">
    </el-pagination>
  </div>
  </div>
</template>

<script>
  export default {
    name: 'redpackage',
      data() {
      return {
        redpackageData:null,
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
//      isShow:false
       currentPage4: 4
      }
      
    },
     methods: {
      onSubmit() {
        console.log('submit!');
      },
      handleClick() {
        console.log(1);
      },
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        this.currentPage = val;
        console.log(`当前页: ${val}`);
      }     
     },
    created(){
      this.redpackageData = this.$store.state.redpackage
    }
  }
</script>
<style scoped>
  
    
  
</style>
