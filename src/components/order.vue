<template>
  <div class="back-box pt-30">
    <el-form :inline="true" :model="orderData" class="demo-form-inline">
      <ul class="app-input-list clearfix">
        <li>
          <el-form-item label="审批人">
            <el-input v-model="orderData.account" placeholder="审批人" :size="inputSize"></el-input>
          </el-form-item>
          <el-form-item label="账号手机号">
            <el-input v-model="orderData.contactumber" placeholder="账号手机号" :size="inputSize"></el-input>
          </el-form-item>
          <el-form-item label="商户名称">
            <el-input v-model="orderData.business" placeholder="商户名称" :size="inputSize"></el-input>
          </el-form-item>
          <el-form-item label="订单号">
            <el-input v-model="orderData.orderNumber" placeholder="订单号" :size="inputSize"></el-input>
          </el-form-item>
        </li>
        <li>
          <el-form-item label="订单状态">
            <el-select v-model="orderData.orderStatus.value" placeholder="订单状态" :size="inputSize">
              <el-option v-for="el in orderData.orderStatus.options"  :label="el.label" :value="el.value" ></el-option>
            </el-select>
          </el-form-item>
          <span style="display: inline-block;margin-bottom: 22px">
            <span class="list-label">下单时间</span>
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
        </li>
        <li v-show="isShow">
          <el-form-item label="投诉状态">
            <el-select v-model="orderData.complaintsStatus.value" placeholder="投诉状态" :size="inputSize">
              <el-option v-for="el in orderData.complaintsStatus.options" :label="el.label" :value="el.value"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="订单来源">
            <el-select v-model="orderData.orderSource.value" placeholder="投诉状态" :size="inputSize">
              <el-option v-for="el in orderData.orderSource.options" :label="el.label" :value="el.value"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="订单类型">
            <el-select v-model="orderData.orderType.value" placeholder="订单类型" :size="inputSize">
              <el-option v-for="el in orderData.orderType.options" :label="el.label" :value="el.value"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="配送方">
            <el-select v-model="orderData.distribution.value" placeholder="订单类型" :size="inputSize">
              <el-option v-for="el in orderData.distribution.options" :label="el.label" :value="el.value"></el-option>
            </el-select>
          </el-form-item>
        </li>
        <li v-show="isShow">
          <el-form-item label="城市">
            <el-input v-model="orderData.city" placeholder="城市" :size="inputSize"></el-input>
          </el-form-item>
        </li>
      </ul>
      <p class="btn-more">
        <i class="el-icon-arrow-down" @click="openMore()"></i>
      </p>
      <div class="app-from-btn">
        <el-form-item>
          <el-button type="primary" @click="onSubmit">查询</el-button>
          <el-button icon="edit" @click="dialogVisible = true">自定义指标</el-button>
        </el-form-item>
      </div>
    </el-form>
    <el-dialog v-model="dialogVisible" :show-close="false" custom-class="order-dialog">
      <p class="dialogInfo">注：可选择要显示的订单数据项，拖拽可以改变显示位置</p>
      <div class="dialog-content">
        <h5>已显示数据项：</h5>
        <ul class="clearfix visible_fields">
          <li v-for="(el,index) in orderData.customize.visible_fields">
            {{el.name}}
            <i class="el-icon-close" @click="delItem(index)"></i>
          </li>
        </ul>
        <h5>已显示数据项：</h5>
        <ul class="clearfix hide_fields">
          <li v-for="(el,index) in orderData.customize.hide_fields">
            {{el.name}}
            <i class="el-icon-plus" @click="addItem(index)"></i>
          </li>
        </ul>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
  export default {
    name: 'order',
    data() {
      return {
        orderData:null,
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
        isShow:false,
        dialogVisible:false
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      },
      openMore(){
        this.isShow = !this.isShow
        if(this.isShow){
          $(event.target).removeClass().addClass('el-icon-arrow-up')
        }else {
          $(event.target).removeClass().addClass('el-icon-arrow-down')
        }
      },
      delItem(index){
        var a = this.orderData.customize.visible_fields.splice(index,1)
        this.orderData.customize.hide_fields.push(a[0])
        this.changeData()
      },
      addItem(index){
        var a = this.orderData.customize.hide_fields.splice(index,1)
        this.orderData.customize.visible_fields.push(a[0])
        this.changeData()
      },
      changeData(){
        this.$store.commit('changeOrderData',this.orderData)
      }
    },
    created(){
      this.orderData = this.$store.state.order
    }
  }
</script>
<style scoped>

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
  .btn-more {
    text-align: center;
    cursor: pointer;
    margin: 20px 0;
  }
  .app-from-btn {
    padding-left: 110px;
  }
  .order-dialog {
    width: 650px;
  }
  .dialog-content h5 {
  }
  .dialogInfo{
    padding: 0 0 10px;
    color: #999;
  }
  .visible_fields {
    margin-bottom: 30px;
  }
  .visible_fields li,.hide_fields li {
    width: 150px;
    height: 27px;
    line-height: 25px;
    border: #e5e5e5 solid 1px;
    border-radius: 3px;
    padding: 0 5px;
    margin: 10px 10px 0 0;
    float: left;
    position: relative;
    text-indent: 6px;
  }
  .visible_fields li i,.hide_fields li i {
    font-size: 12px;
    position: absolute;
    right:6px;
    top:8px;
    cursor: pointer;
  }
</style>
