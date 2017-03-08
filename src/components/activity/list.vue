<template>
  <div class="detailed-main">
      <el-form >
          <dl class="detailed-box">
              <dt>活动配置</dt>
          </dl>
          <el-row>
              <el-col :span="6"><div class="grid-content">
                  <label class="list-label">活动城市
                      <el-select v-model="list.value" placeholder="请选择" style="width: 150px">
                          <el-option
                                  v-for="item in list.city"
                                  :label="item.label"
                                  :value="item.value">
                          </el-option>
                      </el-select>
                      </el-input></label>
              </div></el-col>
              <el-col :span="6"><div class="grid-content ">
                  <label class="list-label">活动编号<el-input v-model="list.input" placeholder="请输入内容" style="width: 150px;padding-left: 10px"></el-input></label>
              </div></el-col>
              <el-col :span="6"><div class="grid-content">
                  <label class="list-label">活动名称<el-input v-model="list.input" placeholder="请输入内容" style="width: 150px;padding-left: 10px"></el-input></label>
              </div></el-col>
              <el-col :span="6"><div class="grid-content">
                  <label class="list-label">创建人<el-input v-model="list.input" placeholder="请输入内容" style="width: 150px;padding-left: 10px"></el-input></label>
              </div></el-col>
              <el-col :span="6"><div class="grid-content">
                  <label class="list-label">创建人<el-input v-model="list.input" placeholder="请输入内容" style="width: 150px;padding-left: 10px"></el-input></label>
              </div></el-col>
              <el-col :span="6"><div class="grid-content" >
                  <label class="list-label">活动状态
                      <el-select v-model="list.value" placeholder="请选择" style="width: 150px">
                          <el-option
                                  v-for="item in list.state"
                                  :label="item.label"
                                  :value="item.value">
                          </el-option>
                      </el-select>
                      </el-input></label>
              </div></el-col>
              <el-col :span="6"><div class="grid-content">
                  <label class="list-label"> <el-button type="info">查询</el-button></label>
              </div></el-col>
          </el-row>
      </el-form>
      <el-row  class="list_border">
          <el-col :span="3"><div class="grid-content">
              <label class="list-label"> <el-button type="info">新建活动</el-button></label>
          </div></el-col>
          <el-col :span="6" :offset="15"><div class="grid-content">
              <label class="list-label"> <el-button type="info">导出商户列表</el-button></label>
              <label class="list-label"> <el-button type="info">导出城市商圈</el-button></label>
          </div></el-col>
      </el-row>
      <el-table
              :data="list.list"
              border
              style="width: 100%">
          <el-table-column
                  prop="datanumber"
                  label="活动编号"
                  width="100">
          </el-table-column>
          <el-table-column
                  prop="name"
                  label="活动名称"
                  width="100">
          </el-table-column>
          <el-table-column
                  prop="content"
                  label="优惠内容"
                  width="100">
          </el-table-column>
          <el-table-column
                  prop="cycle"
                  label="活动周期"
                  width="100">
          </el-table-column>
          <el-table-column
                  prop="type"
                  label="活动类型"
                  width="100">
          </el-table-column>
           <el-table-column
                  prop="city"
                  label="城市"
                  width="70">
          </el-table-column>
          <el-table-column
                  prop="contact"
                  label="创建人"
                  width="80">
          </el-table-column>
          <el-table-column
                  prop="activity_number"
                  label="活动商户数"
                  width="110">
          </el-table-column>
          <el-table-column
                  prop="state"
                  label="活动状态"
                  width="100">
          </el-table-column>
          <el-table-column
                  prop="operation"
                  label="操作">
          </el-table-column>
      </el-table>
      <el-row>
          <el-col :span="6" :offset="15"><div class="grid-content">
          <div class="block">
              <el-pagination
                      @size-change="list.handleSizeChange"
                      @current-change="list.handleCurrentChange"
                      :current-page="list.currentPage2"
                      :page-sizes="[10, 20, 30, 40]"
                      :page-size="100"
                      layout="sizes, prev, pager, next"
                      :total="100">
              </el-pagination>
          </div>
          </div>
          </el-col>
      </el-row>
  </div>

</template>
<script>
    export default {
        name: 'list',
        props:{
            data:Object
        },
        data(){
            return{
                list:{
                    currentPage2:5,
                    handleSizeChange:'',
                    handleCurrentChange:'',

                    list: [{
                        datanumber: '活动编号',
                        name: '活动名称',
                        content:'优惠内容',
                        contact: '创建人',
                        cycle:'周期',
                        activity_number:'活动商户数',
                        state:'活动状态',
                        type:'活动类型',
                        city:'城市',
                        operation:'操作'
                    }, {
                        datanumber: '活动编号',
                        name: '活动名称',
                        content:'优惠内容',
                        contact: '创建人',
                        cycle:'周期',
                        activity_number:'活动商户数',
                        state:'活动状态',
                        type:'活动类型',
                        city:'城市',
                        operation:'操作',
                    }],
                    city: [{
                        value: '选项1',
                        label: '北京'
                    }, {
                        value: '选项2',
                        label: '双皮奶'
                    }, {
                        value: '选项3',
                        label: '蚵仔煎'
                    }, {
                        value: '选项4',
                        label: '龙须面'
                    }, {
                        value: '选项5',
                        label: '北京烤鸭'
                    }],
                    state: [{
                        value: '选项1',
                        label: '状态'
                    }, {
                        value: '选项2',
                        label: '双皮奶'
                    }, {
                        value: '选项3',
                        label: '蚵仔煎'
                    }, {
                        value: '选项4',
                        label: '龙须面'
                    }, {
                        value: '选项5',
                        label: '北京烤鸭'
                    }],
                    value: '',
                    inputdata:'',
                    input:''
                },
                methods:{
                    handleSizeChange(val){
                        console.log(`每页 ${val} 条`);
                    },
                    handleCurrentChange(val) {
                        this.currentPage = val;
                        console.log(`当前页: ${val}`);
                    }
                }
                }


            }
    }
</script>
<style>
    .grid-content{
        text-align:center;
        margin:0 auto;
    }
    .list-label {
        text-align: right;
        vertical-align: middle;
        display: inline-block;
        font-size: 14px;
        color: #48576a;
        line-height: 1;
        padding: 11px 12px 11px 0;
        box-sizing: border-box;
    }
    .detailed-main .tab-box {
        overflow: auto;
        padding: 0 10px;
        position: relative;
    }
    .list_border{
        border-bottom: 1px solid #e5e5e5;
        border-top:1px solid #e5e5e5 ;
    }
    .detailed-main .detailed-box dt {
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
    .detailed-main .detailed-box dd {
        font-size: 14px;
        width: 600px;
        overflow: hidden;
        line-height: 1;
        margin-bottom: 15px;
        position: relative;
    }
    .detailed-main .detailed-box dd.text{
        margin-bottom: 15px;
    }
    .detailed-main .detailed-box dd>label,.detailed-box dd>span{
        vertical-align: middle;
        font-size: 14px;
        color: #48576a;
        line-height: 36px;
        box-sizing: border-box;
    }
    .detailed-main .detailed-box dd>label {
        width: 130px;
        text-align: right;
        position: absolute;
        padding-right: 12px;

    }
    .detailed-main .detailed-box dd>span {
        display: block;
        margin-left: 130px;
    }
    .detailed-main .detailed-box dd>span .cascade {
        width:100%;
    }
    .detailed-main .detailed-box dd>span .cascade li {
        float: left;
        width: 30%;
    }
    .detailed-main .detailed-box dd>span .cascade li:first-child{
        margin-right: 4.9%;
    }
    .detailed-main .detailed-box dd>span .cascade li:last-child{
        margin-left: 4.9%;
    }
    .detailed-main .detailed-box dd .el-form-item{
        margin-bottom: 0;
    }
    .detailed-main .detailed-box dd .prompt{
        font-size: 12px;
        color: #999;
    }
</style>