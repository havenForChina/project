<template>
    <div class="tab-box">
        <el-form label-width="130px">
            <dl class="detailed-box">
                <dt>
                   合同模板
                </dt>
               <dd>
                  <el-form-item label="当前合同模板：">
                                    <el-select v-model="contract_template.value_template" placeholder="餐饮" :size="inputSize">
                                        <el-option
                                                v-for="el in contract_template.option_template"
                                                :label="el.label"
                                                :value="el.value">
                                        </el-option>
                                    </el-select>
                                </el-form-item>
                            </dd> 
                                  <dt>
                   合同状态
                </dt>
                  <dd>
                  <el-form-item label="合同状态:">
                  	<span>{{contract_state.states}}</span>
                    <span style="padding-left: 100px; color:#1D8CE0 ;">查看合同</span>                           
                      <span style="padding-left: 100px; color:#1D8CE0 ;">查看日志</span>         
                                </el-form-item>
                            </dd>  
                                            <dt>
                   合同有效期
                </dt>
                  <dd>
                  <el-form-item label="合同有效期:">
                  	         <el-radio-group v-model="contract_validity.radio_validity">
    <el-radio :label="1">3个月</el-radio>
    <el-radio :label="2">6个月</el-radio>
    <el-radio :label="3">12个月</el-radio>
    <el-radio :label="4">24个月</el-radio>
  </el-radio-group>
                                </el-form-item>
                                <el-form-item label="合同签订日期:">
                                   <span>{{contract_validity.sign}}</span>
                                </el-form-item>
                                  <el-form-item label="合同到期日期:">
                  	        <span>{{contract_validity.expire}}</span>
                                </el-form-item>
                            </dd> 
                                                      <dt>
                  甲方信息
                </dt>
                  <dd>
                  <el-form-item label="名称:"> 
                  	 <el-input :size="inputSize" placeholder="可输入1~50个字符" v-model="a_information.name"></el-input>
                                </el-form-item>
                                   <el-form-item label="地址:">
                        <el-input :size="inputSize" placeholder="可输入1~200个字符" v-model="a_information.address"></el-input>
                                </el-form-item>
                               </dd>  
                         <el-form-item label="联系人:">                    
   <el-form :inline="true"  class="demo-form-inline" v-for="item in add1">
   	<div>
   	<div class="fl">
  <el-form-item label="姓名" >
    <el-input  placeholder="必填,1~50个字符" style="width: 140px;" :value="item.name"></el-input>
  </el-form-item>
  </div>
  <div class="fl">
  <el-form-item label="QQ/微信" >
     <el-input  placeholder="选填,1~20个字符"style="width: 140px;":value="item.qq" ></el-input>
  </el-form-item >
  </div>
  <div class="fl">
  <el-form-item label="手机">
    <el-input  placeholder="必填" style="width: 140px;" :value="item.phone"></el-input>
  </el-form-item>
  </div>
  <div class="fl">
  <el-form-item label="邮箱">
    <el-input  placeholder="选填,1~50个字" style="width: 140px;" :value="item.email"></el-input>
  </el-form-item>
  </div>
  <div class="fl">
  	<span  @click="del1" style="color:#1D8CE0;">删除</span>
  </div>
  </div>
</el-form>
 </el-form-item> 
 <div @click="add_new1"><span style="color:#1D8CE0 ;margin-left:120px;">+联系人</span></div>
 
                       
                                                                         <dt>
                  乙方信息
                </dt>  
                  <el-form-item label="联系人:">                    
   <el-form :inline="true"  class="demo-form-inline" v-for="item in add2">
   	<div>
   	<div class="fl">
  <el-form-item label="姓名">
    <el-input  placeholder="必填,1~50个字符" style="width: 140px;" :value="item.name"></el-input>
  </el-form-item>
  </div>
  <div class="fl">
  <el-form-item label="QQ/微信">
     <el-input  placeholder="选填,1~20个字符"style="width: 140px;" :value="item.qq"></el-input>
  </el-form-item >
  </div>
  <div class="fl">
  <el-form-item label="手机">
    <el-input  placeholder="必填" style="width: 140px;" :value="item.phone"></el-input>
  </el-form-item>
  </div>
  <div class="fl">
  <el-form-item label="邮箱">
    <el-input  placeholder="选填,1~50个字" style="width: 140px;" :value="item.email"></el-input>
  </el-form-item>
  </div>
  <div class="fl">
  	<span @click="del2"style="color:#1D8CE0;">删除</span>
  </div>
  </div>
</el-form>
 </el-form-item>    
           <div @click="add_new2"><span style="color:#1D8CE0 ;margin-left:120px;">+联系人</span></div>  
           <dt>甲方账户信息</dt>
              <el-form-item label="账号类型：">
                                    <el-select v-model="a_account.value_accountType" placeholder="餐饮">
                                        <el-option
                                                v-for="el in a_account.option_accountType"
                                                :label="el.label"
                                                :value="el.value">
                                        </el-option>
                                    </el-select>
                                </el-form-item>
                                <dd> 
                                	<el-form-item label="开户行省份:"> 
                  	 <el-input :size="inputSize" placeholder="可输入1~10个字符" v-model="a_account.province"></el-input>
                                </el-form-item>
                                        	<el-form-item label="开户行城市:"> 
                  	 <el-input :size="inputSize" placeholder="可输入1~10个字符" v-model="a_account.city"></el-input>
                                </el-form-item>
                                        	<el-form-item label="银行名称:"> 
                  	 <el-input :size="inputSize" placeholder="可输入1~20个字符" v-model="a_account.bank_name"></el-input>
                                </el-form-item>
                                        	<el-form-item label="开户行:"> 
                  	 <el-input :size="inputSize" placeholder="可输入1~50个字符" v-model="a_account.open_bank"></el-input>
                  	 <p>如：中国工商银行中关村支行</p>
                                </el-form-item>
                                <el-form-item label="开户名:"> 
                  	 <el-input :size="inputSize" placeholder="可输入1~50个字符" v-model="a_account.open_name"></el-input>
                                </el-form-item>
                                <el-form-item label="账号:"> 
                  	 <el-input :size="inputSize" placeholder="可输入1~50个字符" v-model="a_account.account"></el-input>
                                </el-form-item>
                                <el-form-item label="结算联系人电话:"> 
                  	 <el-input :size="inputSize" placeholder="可输入1~20个字符" v-model="a_account.phone"></el-input>
                                </el-form-item>
                                            <el-form-item label="结算联系人邮箱:"> 
                  	 <el-input :size="inputSize" placeholder="可输入1~50个字符" v-model="a_account.email"></el-input>
                                </el-form-item>
                                </dd>
                                <dt>出餐方式</dt>
                                <dd>
                                 <el-form-item label="出餐时间：">
                                    <el-select v-model="way_meal.value_meal" placeholder="15分钟" :size="inputSize">
                                        <el-option
                                                v-for="el in way_meal.option_meal"
                                                :label="el.label"
                                                :value="el.value">
                                        </el-option>
                                    </el-select>
                                </el-form-item>	
                                     <el-form-item label="特殊菜品说明:">
                  	         <el-radio-group v-model="radio_explain">
    <el-radio :label="1">是</el-radio>
    <el-radio :label="2">否</el-radio>
  </el-radio-group>
                                </el-form-item>
                                </dd>
                                <dt>压款方式(仅限百度物流配送)</dt>
                               <div class="fl">
                                	 <el-form-item label="压款方式：">
                                    <el-select v-model="way_press.value_press" placeholder="15分钟" :size="inputSize">
                                        <el-option
                                                v-for="el in way_press.option_press"
                                                :label="el.label"
                                                :value="el.value">
                                        </el-option>
                                    </el-select>                          
                                </el-form-item>	
                               </div>
                                         <span class="fl" style="font-size: 12px; color: red; margin-left: 40px;"><p>压物流款：骑士到店取外卖，与商户现结；</p>
<p>压商户款：骑士到店取外卖不付款，由百度外卖与商户结算。</p></span>
                                  <dt style="clear: both;">
                                  	配送方式及付款方式
                                  </dt>
                              <dd>
                              <el-form-item label="配送方式：">
                                    <el-select v-model="way_distribution.value_distribution" placeholder="请选择" :size="inputSize">
                                        <el-option
                                                v-for="el in way_distribution.option_distribution"
                                                :label="el.label"
                                                :value="el.value">
                                        </el-option>
                                    </el-select>                          
                                </el-form-item>
                                <span>输入框内容为0~100的数值，且小数位不能大于2</span>
                                 </dd> 
                                 <div style="margin-left: 120px;">
                                 	   <el-radio-group v-model="radio1">
    <el-radio :label="1">每笔订单流水总额的<el-input placeholder="5" style="width: 60px;" v-model="way_distribution.rate"></el-input>%：按每笔成功成交订单的交易流水总额收取费用。</el-radio>
    </el-radio-group>
                               
                                 </div>
                                 <div class="fl">
                               <el-form-item label="结算周期：">
                                    <el-select v-model="way_distribution.value_settlement" placeholder="日结" :size="inputSize">
                                        <el-option
                                                v-for="el in way_distribution.option_settlement"
                                                :label="el.label"
                                                :value="el.value">
                                        </el-option>
                                    </el-select>                          
                                </el-form-item>
                                </div>
                                <div class="fl" style="margin-left: -100px;">
                                 <el-form-item>
                                    <el-select :disabled="true" placeholder="T+2" :size="inputSize">                    
                                    </el-select>                          
                                </el-form-item>
                              </div>
                              	<span class="fl" style="font-size: 12px; color: red; margin-left: 40px; padding-top: 10px;">当合同为乙方配送，且为压物流款时，实际结算方式为骑士到店现结。</span>
                       <dd>
                       <div style="clear: both;">
                        <el-form-item label="保底抽佣:">
                  	<span>当按菜品/流水/固定抽佣计算金额≤<el-input placeholder="5" style="width: 60px;" v-model="way_distribution.money"></el-input>元时，按0元收取保底抽佣</span>                         
                                </el-form-item> 
                                </div>
                                <span>输入框内容为0~10的整数</span>
                         </dd>   
                         <dt>补充约定</dt>
                         <div style="clear: both;"></div>
                         <div style="margin-left: 100px;">
                          <el-checkbox>基于甲乙双方的战略伙伴关系，甲方承诺不与任何其他外卖业务平台合作，仅与乙方在百度外卖平台开展合作。</el-checkbox>  
                          <div style="margin-left: -60px;" >
                           <el-form-item label="有效期:">
                  	         <el-radio-group style=" float: left; padding-top: 10px;" v-model="supply_agree.validity" >
    <el-radio :label="1">合同有效期内</el-radio>
    <el-radio :label="2">合同签订之日起</el-radio>
  </el-radio-group>
  <el-input placeholder="5" style="width: 60px; float: left;" v-model="supply_agree.amount_month"></el-input>
                              <el-form-item style="float: left;">
                                    <el-select v-model="supply_agree.value_validity" placeholder="月"  style="width: 80px;" >
                                        <el-option
                                                v-for="el in supply_agree.option_validity"
                                                :label="el.label"
                                                :value="el.value">
                                        </el-option>
                                    </el-select>
                                </el-form-item>
                                </el-form-item>
                                </div>
                         <el-checkbox>不参加技术服务费计算的品类。</el-checkbox>
                         <el-input
  type="textarea"
  :rows="2"
  placeholder="请输入内容"
  style="width: 800px;" v-model="supply_agree.explain">
</el-input>
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
            	add1:[
            {"name":"mingzi", "qq":"12","phone":"111","email":"12"} 
            	],
            		add2:[
            {"name":"mingzi", "qq":"12","phone":"111","email":"12"} 
            	],
            	
            	 inputSize:"small",
                 radio_explain:2,
                 radio1:1,
        "contract_template":{
               	  "value_template":1,
        "option_template":[
            {"label":"餐饮", "value":1},
            {"label":"商超", "value":2},
            {"label":"药店", "value":3},
            {"label":"鲜花", "value":4},
            {"label":"餐饮", "value":5},
            {"label":"早餐", "value":6},
            {"label":"生活服务", "value":7},
            {"label":"水果生鲜", "value":8},
             {"label":"质享生活", "value":9}
        ]}, 
        "contract_state":{
        	"states":"有效"
        },
        "contract_validity":{
        	 "radio_validity": 3,
        	"sign":"2017-02-06",
        "expire":"2018-02-06"
        },
        "a_information":{
        	"name":"bian",
        	"address":"爱康集团",       	
        },       
        "a_account":{
        	 "value_accountType":3,
        "option_accountType":[
            {"label":"请选择", "value":1},
            {"label":"对公", "value":2},
            {"label":"对私", "value":3},
            
        ],
        "province":"江苏",
        "city":"张家港",
        "bank_name":"农商银行",
        "open_bank":"中国工商银行中关村支行",
        "open_name":"aa",
        "account":"234df",
        "phone":"1235679",
        "email":"123@qq.com"
        },
        "way_meal":{
        	 "value_meal":2,
        "option_meal":[
            {"label":"请选择", "value":1},
            {"label":"15分钟", "value":2},
            {"label":"30分钟", "value":3},
            {"label":"其他", "value":4},
            
        ]
        },
        "way_press":{
        	 "value_press":2,
        "option_press":[
            {"label":"压商户款", "value":1},
            {"label":"压物流款", "value":2},
         
        ]
        },
      "way_distribution":{
      	  "value_distribution":2,
        "option_distribution":[
            {"label":"请选择", "value":1},
            {"label":"自配送", "value":2},
            {"label":"聚兔专送", "value":3},
        ],
         "value_settlement":1,
        "option_settlement":[
            {"label":"日结", "value":1},
            {"label":"周结", "value":2},
            {"label":"月结", "value":3},
        ],
        "rate":5,
        "money":"2000"
      },
      "supply_agree":{
      	  "value_validity":1,
        "option_validity":[
            {"label":"月", "value":1},
            {"label":"天", "value":2},     
        ],
        "amount_month":5,
        "explain":"请输入内容",
        "validity":""
      }
}
},
         methods:{
         	add_new1(){
         		if(this.add1.length<3){
         		this.add1.push( {"name":"mingzi", "qq":"12","phone":"111","email":"12"})
         		}
         	},
         	add_new2(){
         		if(this.add2.length<3){
            this.add2.push( {"name":"mingzi", "qq":"12","phone":"111","email":"12"})
           }
         	},
         	del1(){
         		if(this.add1.length>1){
         			this.add1.splice("add1.length",1)	
         		} 			
         	},
         	del2(){
         		if(this.add2.length>1){
         		this.add2.splice("add2.length",1)	
         		}
         	}
         }
    }
</script>
<style scoped>


</style>