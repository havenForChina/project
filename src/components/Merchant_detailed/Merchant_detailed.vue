<template>
    <div class="detailed-main">
        <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
            <el-tab-pane label="商户详情" name="1">
                <div class="tab-box clearfix">
                    <el-form label-width="130px" :model="data.detailed" :rules="rules" ref="data">
                        <dl class="detailed-box">
                            <dt>
                                基本信息
                            </dt>
                            <dd class="text "><label>代理商</label> <span>{{data.detailed.Agents}}</span></dd>
                            <dd class="required">
                                <el-form-item label="商户名称" prop="name">
                                    <el-input :size="inputSize" v-model="data.detailed.name" placeholder="连锁店标注为“品牌(分店名)形式"></el-input>
                                </el-form-item>
                            </dd>
                            <dd><label>销售经理</label> <span>{{data.detailed.SalesManager}}</span></dd>
                            <dd><label>商圈经理</label> <span>{{data.detailed.DistrictManager}}</span></dd>
                            <dd>
                                <el-form-item label="所属品牌">
                                    <el-input :size="inputSize" v-model="data.OwnBrand"></el-input>
                                </el-form-item>
                            </dd>
                            <dd>
                                <el-form-item label="商户标签">
                                    <el-select v-model="data.detailed.MerchantLabel.value" placeholder="请选择活动区域" :size="inputSize">
                                        <el-option
                                                v-for="el in data.detailed.MerchantLabel.options"
                                                :label="el.label"
                                                :value="el.value">
                                        </el-option>
                                    </el-select>
                                </el-form-item>
                            </dd>
                            <dd>
                                <el-form-item label="商户品类" prop="categoryValue">
                                    <el-select v-model="data.detailed.categoryValue" placeholder="请选择" :size="inputSize">
                                        <el-option
                                                v-for="el in data.detailed.category"
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
                                        <li>
                                            <el-select placeholder="请选择" :size="inputSize" v-model="data.detailed.province" @change="Emptied('province')">
                                                <el-option v-for="(el,key) in country[86]" :label="el" :value="key">
                                                </el-option>
                                            </el-select>
                                        </li>
                                         <li>
                                             <el-select placeholder="请选择省份" :disabled="disableCity" :size="inputSize" v-model="data.detailed.city" @change="Emptied('city')">
                                                <el-option v-for="(el,key) in country[data.detailed.province]" :label="el" :value="key">
                                                </el-option>
                                            </el-select>
                                         </li>
                                         <li >
                                             <el-select placeholder="请选择市区" :disabled="disableCounty" :size="inputSize" v-model="data.detailed.county" @change="Emptied('county')">
                                                <el-option v-for="(el,key) in country[data.detailed.city]" :label="el" :value="key">
                                                </el-option>
                                            </el-select>
                                         </li>
                                    </ul>
                                    <el-input v-model="data.detailed.address" placeholder="范围仅限：中国大陆+香港+澳门" :size="inputSize"></el-input>
                                </span>
                            </dd>
                            <dd>
                                <el-form-item label="选择经纬度" >
                                    <el-input :size="inputSize" placeholder="经纬度坐标" v-model="data.detailed.coordinate"></el-input>
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
                                    <el-input v-model="data.detailed.tel" :size="inputSize" placeholder="格式为：区号-电话号码/其他号码，其他号码只能填一个"></el-input>
                                </el-form-item>
                            </dd>
           <dt>
                                营业资质
                            </dt>
                            <dd class="required ">
                                <el-form-item >
                                <div class="block">
                                    <!--<span class="demonstration"></span>-->
                                    <el-cascader
                                            expand-trigger="hover"
                                            :options="options"
                                            @change="handleChange">
                                    </el-cascader>
                                     <span  style="color: red;" >说明</span>
                                </div>
                                </el-form-item>
                               
                            </dd>
                            <div class="required">
                                 <div style="border:solid 1px #BFCBD9; height: 450px; margin-top: 20px;" v-if="hoverAlert1">
                            		<dt>
                            			<span style="font-size: 14px;">主体资质 &nbsp;营业执照</span>
                            			<span @click="hoverAlert1=false" style="font-size: 14px; color: #1D8CE0; float:right; margin-right: 20px;"  >删除</span>
                            		</dt>
                            	<div class="fl">
                            		<dd>
                                <el-form-item label="营业执照名称" prop="name">
                                    <el-input :size="inputSize" v-model="data.detailed.name" placeholder=""  style="width:300px"></el-input>
                                </el-form-item>
                                </dd>
                                <dd>
                                 <el-form-item label="营业执照注册号/社会统一信用代码" prop="name">
                                    <el-input :size="inputSize" v-model="data.detailed.name" placeholder="" style="width:300px"></el-input>
                                </el-form-item>
                                </dd>
                                <dd>
                                 <el-form-item label="营业执照有效期" prop="name">
                                    <el-input :size="inputSize" v-model="data.detailed.name" placeholder="" style="width:300px"></el-input>
                                </el-form-item>
                                </dd>
                                <dd>
                                <el-form-item label="税务登记证编号" >
                                    <el-input v-model="data.detailed.tel" :size="inputSize" placeholder=""style="width:300px"></el-input>
                                </el-form-item>
                                </dd>
                                <dd>
                                 <el-form-item label="组织机构代码证编号" >
                                    <el-input v-model="data.detailed.tel" :size="inputSize" placeholder="" style="width:300px"></el-input>
                                </el-form-item>
                                </dd>
                                <dd>
                                 <el-form-item label="许可证编号" >
                                    <el-input v-model="data.detailed.tel" :size="inputSize" placeholder="" style="width:300px"></el-input>
                                </el-form-item>
                                </dd>
                                <dd>
                                <el-form-item label="许可证有效期" >
                                    <el-input v-model="data.detailed.tel" :size="inputSize" placeholder="" style="width:300px"></el-input>
                                </el-form-item> 
                                </dd>
                            </div>
                            <div class="fl" style="border-left:1px solid #BFCBD9 ; height: 410px; margin-top:-20px; margin-left:-150px;">
                            	<el-upload
  class="upload-demo"
  action="//jsonplaceholder.typicode.com/posts/"
  :on-preview="handlePreview"
  :on-remove="handleRemove"
  :file-list="fileList2"
  list-type="picture" style="margin-top: 20px; margin-left: 10px;">
  <el-button size="small" type="primary" style="margin-top: 20px; margin-left: 10px;">上传照片</el-button>
  <div slot="tip" class="el-upload__tip" style="margin-top: 20px; margin-left: 10px;">只能上传jpg/png文件，且不超过500kb</div>
</el-upload>
</div>
                            	</div> 
                            	<div style="border:solid 1px #BFCBD9; height: 250px; margin-top: 20px;" v-if="hoverAlert2">
                            		<dt>
                            			<span style="font-size: 14px;">主体资质 &nbsp;税务登记证</span>
                            			<span @click="hoverAlert2=false" style="font-size: 14px; color: #1D8CE0; float:right; margin-right: 20px;"  >删除</span>
                            		</dt>
                            	<div class="fl">
                            		<dd>
                                <el-form-item label="单位名称" prop="name">
                                    <el-input :size="inputSize" v-model="data.detailed.name" placeholder=""  style="width:300px"></el-input>
                                </el-form-item>
                                </dd>
                                <dd>
                                 <el-form-item label="证件编号" prop="name">
                                    <el-input :size="inputSize" v-model="data.detailed.name" placeholder="" style="width:300px"></el-input>
                                </el-form-item>
                                </dd>
                                
                            </div>
                            <div class="fl" style="border-left:1px solid #BFCBD9 ; height: 210px; margin-top:-20px; margin-left:-150px;">
                            	<el-upload
  class="upload-demo"
  action="//jsonplaceholder.typicode.com/posts/"
  :on-preview="handlePreview"
  :on-remove="handleRemove"
  :file-list="fileList2"
  list-type="picture" style="margin-top: 20px; margin-left: 10px;">
  <el-button size="small" type="primary" style="margin-top: 20px; margin-left: 10px;">上传照片</el-button>
  <div slot="tip" class="el-upload__tip" style="margin-top: 20px; margin-left: 10px;">只能上传jpg/png文件，且不超过500kb</div>
</el-upload>
</div>
                            	</div> 
  <div style="border:solid 1px #BFCBD9; height: 250px; margin-top: 20px;" v-if="hoverAlert3">
                            		<dt>
                            			<span style="font-size: 14px;">主体资质 &nbsp;组织机构代码证</span>
                            			<span @click="hoverAlert3=false" style="font-size: 14px; color: #1D8CE0; float:right; margin-right: 20px;"  >删除</span>
                            		</dt>
                            	<div class="fl">
                            		<dd>
                                <el-form-item label="单位名称" prop="name">
                                    <el-input :size="inputSize" v-model="data.detailed.name" placeholder=""  style="width:300px"></el-input>
                                </el-form-item>
                                </dd>
                                <dd>
                                 <el-form-item label="组织机构代码" prop="name">
                                    <el-input :size="inputSize" v-model="data.detailed.name" placeholder="" style="width:300px"></el-input>
                                </el-form-item>
                                </dd>
                                <dd>
                                 <el-form-item label="证件有效期" prop="name">
                                    <el-input :size="inputSize" v-model="data.detailed.name" placeholder="" style="width:300px"></el-input>
                                </el-form-item>
                                </dd>          
                            </div>
                            <div class="fl" style="border-left:1px solid #BFCBD9 ; height: 210px; margin-top:-20px; margin-left:-150px;">
                            	<el-upload
  class="upload-demo"
  action="//jsonplaceholder.typicode.com/posts/"
  :on-preview="handlePreview"
  :on-remove="handleRemove"
  :file-list="fileList2"
  list-type="picture" style="margin-top: 20px; margin-left: 10px;">
  <el-button size="small" type="primary" style="margin-top: 20px; margin-left: 10px;">上传照片</el-button>
  <div slot="tip" class="el-upload__tip" style="margin-top: 20px; margin-left: 10px;">只能上传jpg/png文件，且不超过500kb</div>
</el-upload>
</div>
                            	</div> 
                            	<div style="border:solid 1px #BFCBD9; height: 250px; margin-top: 20px;" v-if="hoverAlert4">
                            		<dt>
                            			<span style="font-size: 14px;">主体资质 &nbsp;银行开户许可证</span>
                            			<span @click="hoverAlert4=false" style="font-size: 14px; color: #1D8CE0; float:right; margin-right: 20px;"  >删除</span>
                            		</dt>
                            	<div class="fl">
                            		<dd>
                                <el-form-item label="单位名称" prop="name">
                                    <el-input :size="inputSize" v-model="data.detailed.name" placeholder=""  style="width:300px"></el-input>
                                </el-form-item>
                                </dd>
                                <dd>
                                 <el-form-item label="核准号" prop="name">
                                    <el-input :size="inputSize" v-model="data.detailed.name" placeholder="" style="width:300px"></el-input>
                                </el-form-item>
                                </dd>
                                
                            </div>
                            <div class="fl" style="border-left:1px solid #BFCBD9 ; height: 210px; margin-top:-20px; margin-left:-150px;">
                            	<el-upload
  class="upload-demo"
  action="//jsonplaceholder.typicode.com/posts/"
  :on-preview="handlePreview"
  :on-remove="handleRemove"
  :file-list="fileList2"
  list-type="picture" style="margin-top: 20px; margin-left: 10px;">
  <el-button size="small" type="primary" style="margin-top: 20px; margin-left: 10px;">上传照片</el-button>
  <div slot="tip" class="el-upload__tip" style="margin-top: 20px; margin-left: 10px;">只能上传jpg/png文件，且不超过500kb</div>
</el-upload>
</div>
                            	</div>
                            	 <div style="border:solid 1px #BFCBD9; height: 250px; margin-top: 20px;" v-if="hoverAlert5">
                            		<dt>
                            			<span style="font-size: 14px;">主体资质 &nbsp;替代营业执照的资质</span>
                            			<span @click="hoverAlert5=false" style="font-size: 14px; color: #1D8CE0; float:right; margin-right: 20px;"  >删除</span>
                            		</dt>
                            	<div class="fl">
                            		<dd>
                                <el-form-item label="单位名称" prop="name">
                                    <el-input :size="inputSize" v-model="data.detailed.name" placeholder=""  style="width:300px"></el-input>
                                </el-form-item>
                                </dd>
                                <dd>
                                 <el-form-item label="证件编号" prop="name">
                                    <el-input :size="inputSize" v-model="data.detailed.name" placeholder="" style="width:300px"></el-input>
                                </el-form-item>
                                </dd>
                                <dd>
                                 <el-form-item label="证件有效期" prop="name">
                                    <el-input :size="inputSize" v-model="data.detailed.name" placeholder="" style="width:300px"></el-input>
                                </el-form-item>
                                </dd>          
                            </div>
                            <div class="fl" style="border-left:1px solid #BFCBD9 ; height: 210px; margin-top:-20px; margin-left:-150px;">
                            	<el-upload
  class="upload-demo"
  action="//jsonplaceholder.typicode.com/posts/"
  :on-preview="handlePreview"
  :on-remove="handleRemove"
  :file-list="fileList2"
  list-type="picture" style="margin-top: 20px; margin-left: 10px;">
  <el-button size="small" type="primary" style="margin-top: 20px; margin-left: 10px;">上传照片</el-button>
  <div slot="tip" class="el-upload__tip" style="margin-top: 20px; margin-left: 10px;">只能上传jpg/png文件，且不超过500kb</div>
</el-upload>
</div>
                            	</div> 
   <div style="border:solid 1px #BFCBD9; height: 250px; margin-top: 20px;" v-if="hoverAlert6">
                            		<dt>
                            			<span style="font-size: 14px;">行业资质 &nbsp;餐饮服务许可证</span>
                            			<span @click="hoverAlert6=false" style="font-size: 14px; color: #1D8CE0; float:right; margin-right: 20px;"  >删除</span>
                            		</dt>
                            	<div class="fl">
                            		<dd>
                                <el-form-item label="单位名称" prop="name">
                                    <el-input :size="inputSize" v-model="data.detailed.name" placeholder=""  style="width:300px"></el-input>
                                </el-form-item>
                                </dd>
                                <dd>
                                 <el-form-item label="证件编号" prop="name">
                                    <el-input :size="inputSize" v-model="data.detailed.name" placeholder="" style="width:300px"></el-input>
                                </el-form-item>
                                </dd>
                                <dd>
                                 <el-form-item label="证件有效期" prop="name">
                                    <el-input :size="inputSize" v-model="data.detailed.name" placeholder="" style="width:300px"></el-input>
                                </el-form-item>
                                </dd>          
                            </div>
                            <div class="fl" style="border-left:1px solid #BFCBD9 ; height: 210px; margin-top:-20px; margin-left:-150px;">
                            	<el-upload
  class="upload-demo"
  action="//jsonplaceholder.typicode.com/posts/"
  :on-preview="handlePreview"
  :on-remove="handleRemove"
  :file-list="fileList2"
  list-type="picture" style="margin-top: 20px; margin-left: 10px;">
  <el-button size="small" type="primary" style="margin-top: 20px; margin-left: 10px;">上传照片</el-button>
  <div slot="tip" class="el-upload__tip" style="margin-top: 20px; margin-left: 10px;">只能上传jpg/png文件，且不超过500kb</div>
</el-upload>
</div>
                            	</div>
                            	 <div style="border:solid 1px #BFCBD9; height: 250px; margin-top: 20px;" v-if="hoverAlert7">
                            		<dt>
                            			<span style="font-size: 14px;">行业资质 &nbsp;食品流通许可证</span>
                            			<span @click="hoverAlert7=false" style="font-size: 14px; color: #1D8CE0; float:right; margin-right: 20px;"  >删除</span>
                            		</dt>
                            	<div class="fl">
                            		<dd>
                                <el-form-item label="单位名称" prop="name">
                                    <el-input :size="inputSize" v-model="data.detailed.name" placeholder=""  style="width:300px"></el-input>
                                </el-form-item>
                                </dd>
                                <dd>
                                 <el-form-item label="证件编号" prop="name">
                                    <el-input :size="inputSize" v-model="data.detailed.name" placeholder="" style="width:300px"></el-input>
                                </el-form-item>
                                </dd>
                                <dd>
                                 <el-form-item label="证件有效期" prop="name">
                                    <el-input :size="inputSize" v-model="data.detailed.name" placeholder="" style="width:300px"></el-input>
                                </el-form-item>
                                </dd>          
                            </div>
                            <div class="fl" style="border-left:1px solid #BFCBD9 ; height: 210px; margin-top:-20px; margin-left:-150px;">
                            	<el-upload
  class="upload-demo"
  action="//jsonplaceholder.typicode.com/posts/"
  :on-preview="handlePreview"
  :on-remove="handleRemove"
  :file-list="fileList2"
  list-type="picture" style="margin-top: 20px; margin-left: 10px;">
  <el-button size="small" type="primary" style="margin-top: 20px; margin-left: 10px;">上传照片</el-button>
  <div slot="tip" class="el-upload__tip" style="margin-top: 20px; margin-left: 10px;">只能上传jpg/png文件，且不超过500kb</div>
</el-upload>
</div>
                            	</div>
                            	<div style="border:solid 1px #BFCBD9; height: 250px; margin-top: 20px;" v-if="hoverAlert8">
                            		<dt>
                            			<span style="font-size: 14px;">行业资质 &nbsp;食品经营许可证</span>
                            			<span @click="hoverAlert8=false" style="font-size: 14px; color: #1D8CE0; float:right; margin-right: 20px;"  >删除</span>
                            		</dt>
                            	<div class="fl">
                            		<dd>
                                <el-form-item label="单位名称" prop="name">
                                    <el-input :size="inputSize" v-model="data.detailed.name" placeholder=""  style="width:300px"></el-input>
                                </el-form-item>
                                </dd>
                                <dd>
                                 <el-form-item label="证件编号" prop="name">
                                    <el-input :size="inputSize" v-model="data.detailed.name" placeholder="" style="width:300px"></el-input>
                                </el-form-item>
                                </dd>
                                <dd>
                                 <el-form-item label="证件有效期" prop="name">
                                    <el-input :size="inputSize" v-model="data.detailed.name" placeholder="" style="width:300px"></el-input>
                                </el-form-item>
                                </dd>          
                            </div>
                            <div class="fl" style="border-left:1px solid #BFCBD9 ; height: 210px; margin-top:-20px; margin-left:-150px;">
                            	<el-upload
  class="upload-demo"
  action="//jsonplaceholder.typicode.com/posts/"
  :on-preview="handlePreview"
  :on-remove="handleRemove"
  :file-list="fileList2"
  list-type="picture" style="margin-top: 20px; margin-left: 10px;">
  <el-button size="small" type="primary" style="margin-top: 20px; margin-left: 10px;">上传照片</el-button>
  <div slot="tip" class="el-upload__tip" style="margin-top: 20px; margin-left: 10px;">只能上传jpg/png文件，且不超过500kb</div>
</el-upload>
</div>
                            	</div>
                            	<div style="border:solid 1px #BFCBD9; height: 250px; margin-top: 20px;" v-if="hoverAlert9">
                            		<dt>
                            			<span style="font-size: 14px;">行业资质 &nbsp;食品卫生许可证</span>
                            			<span @click="hoverAlert9=false" style="font-size: 14px; color: #1D8CE0; float:right; margin-right: 20px;"  >删除</span>
                            		</dt>
                            	<div class="fl">
                            		<dd>
                                <el-form-item label="单位名称" prop="name">
                                    <el-input :size="inputSize" v-model="data.detailed.name" placeholder=""  style="width:300px"></el-input>
                                </el-form-item>
                                </dd>
                                <dd>
                                 <el-form-item label="证件编号" prop="name">
                                    <el-input :size="inputSize" v-model="data.detailed.name" placeholder="" style="width:300px"></el-input>
                                </el-form-item>
                                </dd>
                                <dd>
                                 <el-form-item label="证件有效期" prop="name">
                                    <el-input :size="inputSize" v-model="data.detailed.name" placeholder="" style="width:300px"></el-input>
                                </el-form-item>
                                </dd>          
                            </div>
                            <div class="fl" style="border-left:1px solid #BFCBD9 ; height: 210px; margin-top:-20px; margin-left:-150px;">
                            	<el-upload
  class="upload-demo"
  action="//jsonplaceholder.typicode.com/posts/"
  :on-preview="handlePreview"
  :on-remove="handleRemove"
  :file-list="fileList2"
  list-type="picture" style="margin-top: 20px; margin-left: 10px;">
  <el-button size="small" type="primary" style="margin-top: 20px; margin-left: 10px;">上传照片</el-button>
  <div slot="tip" class="el-upload__tip" style="margin-top: 20px; margin-left: 10px;">只能上传jpg/png文件，且不超过500kb</div>
</el-upload>
</div>
                            	</div>
                            	<div style="border:solid 1px #BFCBD9; height: 250px; margin-top: 20px;" v-if="hoverAlert10">
                            		<dt>
                            			<span style="font-size: 14px;">行业资质 &nbsp;清真食品生产经营许可证</span>
                            			<span @click="hoverAlert10=false" style="font-size: 14px; color: #1D8CE0; float:right; margin-right: 20px;"  >删除</span>
                            		</dt>
                            	<div class="fl">
                            		<dd>
                                <el-form-item label="单位名称" prop="name">
                                    <el-input :size="inputSize" v-model="data.detailed.name" placeholder=""  style="width:300px"></el-input>
                                </el-form-item>
                                </dd>
                                <dd>
                                 <el-form-item label="证件编号" prop="name">
                                    <el-input :size="inputSize" v-model="data.detailed.name" placeholder="" style="width:300px"></el-input>
                                </el-form-item>
                                </dd>
                                <dd>
                                 <el-form-item label="证件有效期" prop="name">
                                    <el-input :size="inputSize" v-model="data.detailed.name" placeholder="" style="width:300px"></el-input>
                                </el-form-item>
                                </dd>          
                            </div>
                            <div class="fl" style="border-left:1px solid #BFCBD9 ; height: 210px; margin-top:-20px; margin-left:-150px;">
                            	<el-upload
  class="upload-demo"
  action="//jsonplaceholder.typicode.com/posts/"
  :on-preview="handlePreview"
  :on-remove="handleRemove"
  :file-list="fileList2"
  list-type="picture" style="margin-top: 20px; margin-left: 10px;">
  <el-button size="small" type="primary" style="margin-top: 20px; margin-left: 10px;">上传照片</el-button>
  <div slot="tip" class="el-upload__tip" style="margin-top: 20px; margin-left: 10px;">只能上传jpg/png文件，且不超过500kb</div>
</el-upload>
</div>
                            	</div>
                            	<div style="border:solid 1px #BFCBD9; height: 250px; margin-top: 20px;" v-if="hoverAlert11">
                            		<dt>
                            			<span style="font-size: 14px;">行业资质 &nbsp;全国工业产品生产许可证</span>
                            			<span @click="hoverAlert11=false" style="font-size: 14px; color: #1D8CE0; float:right; margin-right: 20px;"  >删除</span>
                            		</dt>
                            	<div class="fl">
                            		<dd>
                                <el-form-item label="单位名称" prop="name">
                                    <el-input :size="inputSize" v-model="data.detailed.name" placeholder=""  style="width:300px"></el-input>
                                </el-form-item>
                                </dd>
                                <dd>
                                 <el-form-item label="证件编号" prop="name">
                                    <el-input :size="inputSize" v-model="data.detailed.name" placeholder="" style="width:300px"></el-input>
                                </el-form-item>
                                </dd>
                                <dd>
                                 <el-form-item label="证件有效期" prop="name">
                                    <el-input :size="inputSize" v-model="data.detailed.name" placeholder="" style="width:300px"></el-input>
                                </el-form-item>
                                </dd>          
                            </div>
                            <div class="fl" style="border-left:1px solid #BFCBD9 ; height: 210px; margin-top:-20px; margin-left:-150px;">
                            	<el-upload
  class="upload-demo"
  action="//jsonplaceholder.typicode.com/posts/"
  :on-preview="handlePreview"
  :on-remove="handleRemove"
  :file-list="fileList2"
  list-type="picture" style="margin-top: 20px; margin-left: 10px;">
  <el-button size="small" type="primary" style="margin-top: 20px; margin-left: 10px;">上传照片</el-button>
  <div slot="tip" class="el-upload__tip" style="margin-top: 20px; margin-left: 10px;">只能上传jpg/png文件，且不超过500kb</div>
</el-upload>
</div>
                            	</div>
                            	<div style="border:solid 1px #BFCBD9; height: 250px; margin-top: 20px;" v-if="hoverAlert12">
                            		<dt>
                            			<span style="font-size: 14px;">行业资质 &nbsp;酒类资质</span>
                            			<span @click="hoverAlert12=false" style="font-size: 14px; color: #1D8CE0; float:right; margin-right: 20px;"  >删除</span>
                            		</dt>
                            	<div class="fl">
                            		<dd>
                                <el-form-item label="单位名称" prop="name">
                                    <el-input :size="inputSize" v-model="data.detailed.name" placeholder=""  style="width:300px"></el-input>
                                </el-form-item>
                                </dd>
                                <dd>
                                 <el-form-item label="证件编号" prop="name">
                                    <el-input :size="inputSize" v-model="data.detailed.name" placeholder="" style="width:300px"></el-input>
                                </el-form-item>
                                </dd>
                                <dd>
                                 <el-form-item label="证件有效期" prop="name">
                                    <el-input :size="inputSize" v-model="data.detailed.name" placeholder="" style="width:300px"></el-input>
                                </el-form-item>
                                </dd>          
                            </div>
                            <div class="fl" style="border-left:1px solid #BFCBD9 ; height: 210px; margin-top:-20px; margin-left:-150px;">
                            	<el-upload
  class="upload-demo"
  action="//jsonplaceholder.typicode.com/posts/"
  :on-preview="handlePreview"
  :on-remove="handleRemove"
  :file-list="fileList2"
  list-type="picture" style="margin-top: 20px; margin-left: 10px;">
  <el-button size="small" type="primary" style="margin-top: 20px; margin-left: 10px;">上传照片</el-button>
  <div slot="tip" class="el-upload__tip" style="margin-top: 20px; margin-left: 10px;">只能上传jpg/png文件，且不超过500kb</div>
</el-upload>
</div>
                            	</div>
                            	<div style="border:solid 1px #BFCBD9; height: 250px; margin-top: 20px;" v-if="hoverAlert13">
                            		<dt>
                            			<span style="font-size: 14px;">行业资质 &nbsp;药品类资质</span>
                            			<span @click="hoverAlert13=false" style="font-size: 14px; color: #1D8CE0; float:right; margin-right: 20px;"  >删除</span>
                            		</dt>
                            	<div class="fl">
                            		<dd>
                                <el-form-item label="单位名称" prop="name">
                                    <el-input :size="inputSize" v-model="data.detailed.name" placeholder=""  style="width:300px"></el-input>
                                </el-form-item>
                                </dd>
                                <dd>
                                 <el-form-item label="证件编号" prop="name">
                                    <el-input :size="inputSize" v-model="data.detailed.name" placeholder="" style="width:300px"></el-input>
                                </el-form-item>
                                </dd>
                                <dd>
                                 <el-form-item label="证件有效期" prop="name">
                                    <el-input :size="inputSize" v-model="data.detailed.name" placeholder="" style="width:300px"></el-input>
                                </el-form-item>
                                </dd>          
                            </div>
                            <div class="fl" style="border-left:1px solid #BFCBD9 ; height: 210px; margin-top:-20px; margin-left:-150px;">
                            	<el-upload
  class="upload-demo"
  action="//jsonplaceholder.typicode.com/posts/"
  :on-preview="handlePreview"
  :on-remove="handleRemove"
  :file-list="fileList2"
  list-type="picture" style="margin-top: 20px; margin-left: 10px;">
  <el-button size="small" type="primary" style="margin-top: 20px; margin-left: 10px;">上传照片</el-button>
  <div slot="tip" class="el-upload__tip" style="margin-top: 20px; margin-left: 10px;">只能上传jpg/png文件，且不超过500kb</div>
</el-upload>
</div>
                            	</div>
                            	<div style="border:solid 1px #BFCBD9; height: 250px; margin-top: 20px;" v-if="hoverAlert14">
                            		<dt>
                            			<span style="font-size: 14px;">行业资质 &nbsp;其他特殊资质(地方性)</span>
                            			<span @click="hoverAlert14=false" style="font-size: 14px; color: #1D8CE0; float:right; margin-right: 20px;"  >删除</span>
                            		</dt>
                            	<div class="fl">
                            		<dd>
                                <el-form-item label="单位名称/持证人姓名" prop="name">
                                    <el-input :size="inputSize" v-model="data.detailed.name" placeholder=""  style="width:300px"></el-input>
                                </el-form-item>
                                </dd>
                                <dd>
                                 <el-form-item label="证件编号" prop="name">
                                    <el-input :size="inputSize" v-model="data.detailed.name" placeholder="" style="width:300px"></el-input>
                                </el-form-item>
                                </dd>
                                <dd>
                                 <el-form-item label="证件有效期" prop="name">
                                    <el-input :size="inputSize" v-model="data.detailed.name" placeholder="" style="width:300px"></el-input>
                                </el-form-item>
                                </dd>          
                            </div>
                            <div class="fl" style="border-left:1px solid #BFCBD9 ; height: 210px; margin-top:-20px; margin-left:-150px;">
                            	<el-upload
  class="upload-demo"
  action="//jsonplaceholder.typicode.com/posts/"
  :on-preview="handlePreview"
  :on-remove="handleRemove"
  :file-list="fileList2"
  list-type="picture" style="margin-top: 20px; margin-left: 10px;">
  <el-button size="small" type="primary" style="margin-top: 20px; margin-left: 10px;">上传照片</el-button>
  <div slot="tip" class="el-upload__tip" style="margin-top: 20px; margin-left: 10px;">只能上传jpg/png文件，且不超过500kb</div>
</el-upload>
</div>
                            	</div>
          	<div style="border:solid 1px #BFCBD9; height: 250px; margin-top: 20px;" v-if="hoverAlert15">
                            		<dt>
                            			<span style="font-size: 14px;">身份证明 &nbsp;身份证</span>
                            			<span @click="hoverAlert15=false" style="font-size: 14px; color: #1D8CE0; float:right; margin-right: 20px;"  >删除</span>
                            		</dt>
                            	<div class="fl">
                            		<dd>
                                <el-form-item label="证件号码" prop="name">
                                    <el-input :size="inputSize" v-model="data.detailed.name" placeholder=""  style="width:300px"></el-input>
                                </el-form-item>
                                </dd>                                      
                            </div>
                            <div class="fl" style="border-left:1px solid #BFCBD9 ; height: 210px; margin-top:-20px; margin-left:-150px;">
                            	<el-upload
  class="upload-demo"
  action="//jsonplaceholder.typicode.com/posts/"
  :on-preview="handlePreview"
  :on-remove="handleRemove"
  :file-list="fileList2"
  list-type="picture" style="margin-top: 20px; margin-left: 10px;">
  <el-button size="small" type="primary" style="margin-top: 20px; margin-left: 10px;">上传照片</el-button>
  <div slot="tip" class="el-upload__tip" style="margin-top: 20px; margin-left: 10px;">只能上传jpg/png文件，且不超过500kb</div>
</el-upload>
</div>
                            	</div> 
                            	<div style="border:solid 1px #BFCBD9; height: 250px; margin-top: 20px;" v-if="hoverAlert16">
                            		<dt>
                            			<span style="font-size: 14px;">身份证明 &nbsp;替代身份证的证明</span>
                            			<span @click="hoverAlert16=false" style="font-size: 14px; color: #1D8CE0; float:right; margin-right: 20px;"  >删除</span>
                            		</dt>
                            	<div class="fl">
                            		<dd>
                                <el-form-item label="证件号码" prop="name">
                                    <el-input :size="inputSize" v-model="data.detailed.name" placeholder=""  style="width:300px"></el-input>
                                </el-form-item>
                                </dd>                                      
                            </div>
                            <div class="fl" style="border-left:1px solid #BFCBD9 ; height: 210px; margin-top:-20px; margin-left:-150px;">
                            	<el-upload
  class="upload-demo"
  action="//jsonplaceholder.typicode.com/posts/"
  :on-preview="handlePreview"
  :on-remove="handleRemove"
  :file-list="fileList2"
  list-type="picture" style="margin-top: 20px; margin-left: 10px;">
  <el-button size="small" type="primary" style="margin-top: 20px; margin-left: 10px;">上传照片</el-button>
  <div slot="tip" class="el-upload__tip" style="margin-top: 20px; margin-left: 10px;">只能上传jpg/png文件，且不超过500kb</div>
</el-upload>
</div>
                            	</div> 
                            	<div style="border:solid 1px #BFCBD9; height: 250px; margin-top: 20px;" v-if="hoverAlert17">
                            		<dt>
                            			<span style="font-size: 14px;">其他证件</span>
                            			<span @click="hoverAlert17=false" style="font-size: 14px; color: #1D8CE0; float:right; margin-right: 20px;"  >删除</span>
                            		</dt>
                            	
                            <div>
                            	<el-upload
  class="upload-demo"
  action="//jsonplaceholder.typicode.com/posts/"
  :on-preview="handlePreview"
  :on-remove="handleRemove"
  :file-list="fileList2"
  list-type="picture" style="margin-top: 20px; margin-left: 10px;">
  <el-button size="small" type="primary" style="margin-top: 20px; margin-left: 10px;">上传照片</el-button>
  <div slot="tip" class="el-upload__tip" style="margin-top: 20px; margin-left: 10px;">只能上传jpg/png文件，且不超过500kb</div>
</el-upload>
</div>
                            	</div>
                            	<div style="border:solid 1px #BFCBD9; height: 250px; margin-top: 20px;" v-if="hoverAlert18">
                            		<dt>
                            			<span style="font-size: 14px;">门脸照片</span>
                            			<span @click="hoverAlert18=false" style="font-size: 14px; color: #1D8CE0; float:right; margin-right: 20px;"  >删除</span>
                            		</dt>
                            	
                            <div>
                            	<el-upload
  class="upload-demo"
  action="//jsonplaceholder.typicode.com/posts/"
  :on-preview="handlePreview"
  :on-remove="handleRemove"
  :file-list="fileList2"
  list-type="picture" style="margin-top: 20px; margin-left: 10px;">
  <el-button size="small" type="primary" style="margin-top: 20px; margin-left: 10px;">上传照片</el-button>
  <div slot="tip" class="el-upload__tip" style="margin-top: 20px; margin-left: 10px;">只能上传jpg/png文件，且不超过500kb</div>
</el-upload>
</div>
                            	</div>
                            		<div style="border:solid 1px #BFCBD9; height: 250px; margin-top: 20px;" v-if="hoverAlert19">
                            		<dt>
                            			<span style="font-size: 14px;">堂食照片</span>
                            			<span @click="hoverAlert19=false" style="font-size: 14px; color: #1D8CE0; float:right; margin-right: 20px;"  >删除</span>
                            		</dt>
                            	
                            <div>
                            	<el-upload
  class="upload-demo"
  action="//jsonplaceholder.typicode.com/posts/"
  :on-preview="handlePreview"
  :on-remove="handleRemove"
  :file-list="fileList2"
  list-type="picture" style="margin-top: 20px; margin-left: 10px;">
  <el-button size="small" type="primary" style="margin-top: 20px; margin-left: 10px;">上传照片</el-button>
  <div slot="tip" class="el-upload__tip" style="margin-top: 20px; margin-left: 10px;">只能上传jpg/png文件，且不超过500kb</div>
</el-upload>
</div>
                            	</div>
                            	<div style="border:solid 1px #BFCBD9; height: 250px; margin-top: 20px;" v-if="hoverAlert20">
                            		<dt>
                            			<span style="font-size: 14px;">明厨亮灶</span>
                            			<span @click="hoverAlert20=false" style="font-size: 14px; color: #1D8CE0; float:right; margin-right: 20px;"  >删除</span>
                            		</dt>
                            	
                            <div>
                            	<el-upload
  class="upload-demo"
  action="//jsonplaceholder.typicode.com/posts/"
  :on-preview="handlePreview"
  :on-remove="handleRemove"
  :file-list="fileList2"
  list-type="picture" style="margin-top: 20px; margin-left: 10px;">
  <el-button size="small" type="primary" style="margin-top: 20px; margin-left: 10px;">上传照片</el-button>
  <div slot="tip" class="el-upload__tip" style="margin-top: 20px; margin-left: 10px;">只能上传jpg/png文件，且不超过500kb</div>
</el-upload>
</div>
                            	</div>
                            	<div style="border:solid 1px #BFCBD9; height: 250px; margin-top: 20px;" v-if="hoverAlert21">
                            		<dt>
                            			<span style="font-size: 14px;">合同</span>
                            			<span @click="hoverAlert21=false" style="font-size: 14px; color: #1D8CE0; float:right; margin-right: 20px;"  >删除</span>
                            		</dt>
                            	
                            <div>
                            	<el-upload
  class="upload-demo"
  action="//jsonplaceholder.typicode.com/posts/"
  :on-preview="handlePreview"
  :on-remove="handleRemove"
  :file-list="fileList2"
  list-type="picture" style="margin-top: 20px; margin-left: 10px;">
  <el-button size="small" type="primary" style="margin-top: 20px; margin-left: 10px;">上传照片</el-button>
  <div slot="tip" class="el-upload__tip" style="margin-top: 20px; margin-left: 10px;">只能上传jpg/png文件，且不超过500kb</div>
</el-upload>
</div>
                            	</div>
                            </div>                       
                          
                             
                        </dl>
                    </el-form>
                </div>
                
            </el-tab-pane>
            <el-tab-pane label="外卖信息" name="2">
                <info></info>
            </el-tab-pane>
            <el-tab-pane label="账号信息" name="3">
                <Account></Account>
            </el-tab-pane>
            <el-tab-pane label="操作日志" name="4">
                <log></log>
            </el-tab-pane>
            <el-tab-pane label="自主营销" name="5">
                <Independent></Independent>
            </el-tab-pane>
            <el-tab-pane label="合同" name="6">
                <contract></contract>
            </el-tab-pane>
            <el-tab-pane label="菜单" name="7">
                <merchant_menu :data = 'data.menu_manage'></merchant_menu>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>
<script>
	import info from './takeaway_info.vue'
	import Account from './Account_info.vue'
	import log from './operation_log.vue'
	import merchant_menu from './merchant_menu.vue'
	import Independent from './Independent.vue'
	import city from '../../../static/js/city'
	import contract from './contract.vue'
	export default {
		name: 'detailed',
		components: {
			info,
			Account,
			log,
			merchant_menu,
			Independent,
			contract
		},
		props: {
			data: Object
		},
		data() {
			return {
				hoverAlert1:false,
				hoverAlert2:false,
				hoverAlert3:false,
				hoverAlert4:false,
				hoverAlert5:false,
				hoverAlert6:false,
				hoverAlert7:false,
				hoverAlert8:false,
				hoverAlert9:false,
				hoverAlert10:false,
				hoverAlert11:false,
				hoverAlert12:false,
				hoverAlert13:false,
				hoverAlert14:false,
				hoverAlert15:false,
				hoverAlert16:false,
				hoverAlert17:false,
				hoverAlert18:false,
				hoverAlert19:false,
				hoverAlert20:false,
				hoverAlert21:false,
				 fileList2: [{name: '', url: ''}],
				options: [{
						value: 'zhutizizhi',
						label: '主体资质',
						children: [{
							value: 'yingyezhizhao',
							label: '营业执照',
							
							
						}, {
							value: 'shuiwudengjizheng',
							label: '税务登记证',
						}, {
							value: 'zuzhijigoudaimazheng',
							label: '组织机构代码证'
						}, {
							value: 'yinhangkaihuxukezheng',
							label: '银行开户许可证'
						}, {
							value: 'tidaiyingyezhizhaodezizhi',
							label: '替代营业执照的资质'
						}]
					}, {
						value: 'hangyezizhi',
						label: '行业资质',
						children: [{
							value: 'canyinfuwuxukezheng',
							label: '餐饮服务许可证',
						}, {
							value: 'shipinliutongxukezheng',
							label: '食品流通许可证'
						}, {
							value: 'shipinjingyingxukezheng',
							label: '食品经营许可证'
						}, {
							value: 'shipinweishengxukezheng',
							label: '食品卫生许可证'
						}, {
							value: 'qingzhenshipinjingyingxukezheng',
							label: '清真食品生产经营许可证'
						}, {
							value: 'quanguogongyechanpinshengchanxukezheng',
							label: '全国工业产品生产许可证'
						}, {
							value: 'jiuleizizhi',
							label: '酒类资质'
						}, {
							value: 'yaopinleizizhi',
							label: '药品类资质'
						}, {
							value: 'qitateshuzizhi',
							label: '其他特殊资质(地方性)'
						}]
					}, {
						value: 'shenfenzhengminng',
						label: '身份证明',
						children: [{
							value: 'shenfenzheng',
							label: '身份证',
						}, {
							value: 'tidaishenfenzhengdezhengming',
							label: '替代身份证的证明'
						}]
					}, {
						value: 'qitazhengjian',
						label: '其他证件',
					}, {
						value: 'menlianzhaopian',
						label: '门脸照片',
					}, {
						value: 'tangshizhaopian',
						label: '堂食照片',
					}, {
						value: 'mingchuliangzao',
						label: '明厨亮灶',
					}, {
						value: 'hetong',
						label: '合同',
					},
				],
				activeName: "7",
				inputSize: "small",
				input: '',
				rules: {
					name: [{
						required: true,
						message: '请输入活动名称',
						trigger: 'blur'
					}],
					categoryValue: [{
						type: 'number',
						required: true,
						message: '请选择',
						trigger: 'change'
					}]
				},
				country: city
			}
		},
		computed: {
			btnPrompt() {
				return this.data.detailed.categoryValue == '' ? '请先选择品类' : '请选择'
			},
			btnDisable() {
				return this.data.detailed.categoryValue == '' ? true : false
			},
			disableCity() {
				return this.data.detailed.province == '' ? true : false
			},
			disableCounty() {
				let _this = this.data.detailed
				return _this.city == '' ? true : this.country[_this.city] == undefined ? true : false
			}
		},
		methods: {
			handleClick(tab, event) {
				//console.log(tab, event);
			},
			openMap() {
				console.log('打开地图插件')
			},
			Emptied(type) {
				if (type == 'province') {
					this.data.detailed.city = '';
					this.data.detailed.county = ''
				} else if (type == 'city') {
					this.data.detailed.county = ''
				}
			},
			handleChange(value) {
				//             console.log(value[1])
				if (value[1] == 'yingyezhizhao') {
					this.hoverAlert1=true
				}
				else if(value[1] == 'shuiwudengjizheng')
				{
					this.hoverAlert2=true
				}
				else if(value[1] == 'zuzhijigoudaimazheng')
				{
					this.hoverAlert3=true
				}
				else if(value[1] == 'yinhangkaihuxukezheng')
				{
					this.hoverAlert4=true
				}
				else if(value[1] == 'tidaiyingyezhizhaodezizhi')
				{
					this.hoverAlert5=true
				}
				else if(value[1] == 'canyinfuwuxukezheng')
				{
					this.hoverAlert6=true
				}
				else if(value[1] == 'shipinliutongxukezheng')
				{
					this.hoverAlert7=true
				}
				else if(value[1] == 'shipinjingyingxukezheng')
				{
					this.hoverAlert8=true
				}
				else if(value[1] == 'shipinweishengxukezheng')
				{
					this.hoverAlert9=true
				}
				else if(value[1] == 'qingzhenshipinjingyingxukezheng')
				{
					this.hoverAlert10=true
				}
				else if(value[1] == 'quanguogongyechanpinshengchanxukezheng')
				{
					this.hoverAlert11=true
				}
				else if(value[1] == 'jiuleizizhi')
				{
					this.hoverAlert12=true
				}
				else if(value[1] == 'yaopinleizizhi')
				{
					this.hoverAlert13=true
				}
				else if(value[1] == 'qitateshuzizhi')
				{
					this.hoverAlert14=true
				}
				else if(value[1] == 'shenfenzheng')
				{
					this.hoverAlert15=true
				}
				else if(value[1] == 'tidaishenfenzhengdezhengming')
				{
					this.hoverAlert16=true
				}
				else if(value[0] == 'qitazhengjian')
				{
					this.hoverAlert17=true
				}
				else if(value[0] == 'menlianzhaopian')
				{
					this.hoverAlert18=true
				}
				else if(value[0] == 'tangshizhaopian')
				{
					this.hoverAlert19=true
				}
				else if(value[0] == 'mingchuliangzao')
				{
					this.hoverAlert20=true
				}
				else if(value[0] == 'hetong')
				{
					this.hoverAlert21=true
				}
			},
			handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
      },
      del(){
      	//alert("aa")
      },
      mounted() {
			let wh = $(window).height()
			$('.tab-box').css('height', wh - 190)
		}
		}
		   
      
      
		
	}
</script>
<style>
	.detailed-main {
		padding: 20px;
	}
	
	.detailed-main .tab-box {
		overflow: auto;
		padding: 0 10px;
		position: relative;
	}
	
	.detailed-main .detailed-box dt {
		width: 100%;
		padding-bottom: 10px;
		padding-left: 10px;
		margin: 10px 0 20px;
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
	
	.detailed-main .detailed-box dd.text {
		margin-bottom: 15px;
	}
	
	.detailed-main .detailed-box dd>label,
	.detailed-box dd>span {
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
		width: 100%;
	}
	
	.detailed-main .detailed-box dd>span .cascade li {
		float: left;
		width: 30%;
	}
	
	.detailed-main .detailed-box dd>span .cascade li:first-child {
		margin-right: 4.9%;
	}
	
	.detailed-main .detailed-box dd>span .cascade li:last-child {
		margin-left: 4.9%;
	}
	
	.detailed-main .detailed-box dd .el-form-item {
		margin-bottom: 0;
	}
	
	.detailed-main .detailed-box dd .prompt {
		font-size: 12px;
		color: #999;
	}
</style>