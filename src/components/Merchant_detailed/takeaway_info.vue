<template>
    <div class="tab-box">
        <el-form label-width="130px"ref="data">
            <dl class="detailed-box">
                <dt>营业信息</dt>
                <dd class="text"><label>商户 Logo</label><span>
                    <el-radio class="radio" v-model="logo" label="default">默认</el-radio>
                    <el-radio class="radio" v-model="logo" label="upload">上传</el-radio>
                    <el-upload
                            action="//jsonplaceholder.typicode.com/posts/"
                            list-type="picture-card"
                            :on-preview="handlePictureCardPreview"
                            :on-remove="handleRemove">
                        <i class="el-icon-plus"></i>
                    </el-upload>
                    <el-dialog v-model="dialogVisible" size="tiny">
                     <img width="100%" :src="dialogImageUrl" alt="">
                    </el-dialog>
                </span></dd>
                <dd class="required">
                    <el-form-item label="外卖客服电话">
                        <el-input :size="inputSize" placeholder="连锁店标注为“品牌(分店名)形式"></el-input>
                    </el-form-item>
                </dd>
                <dd class="required">
                    <el-form-item label="配送时间范围">
                        <el-time-select
                                placeholder="起始时间"
                                v-model="startTime"
                                :picker-options="{
                             start: '08:30',
                             step: '00:15',
                             end: '18:30'
                                            }">
                        </el-time-select>
                        <el-time-select
                                placeholder="结束时间"
                                v-model="endTime"
                                :picker-options="{
                            start: '08:30',
                            step: '00:15',
                            end: '18:30',
                            minTime: startTime
                                             }">
                        </el-time-select>
                    </el-form-item>
                </dd>
                <dd class="required">
                    <el-form-item label="接单时间范围">
                        <el-time-select
                                placeholder="起始时间"
                                v-model="startTime"
                                :picker-options="{
                             start: '08:30',
                             step: '00:15',
                             end: '18:30'
                                            }">
                        </el-time-select>
                        <el-time-select
                                placeholder="结束时间"
                                v-model="endTime"
                                :picker-options="{
                            start: '08:30',
                            step: '00:15',
                            end: '18:30',
                            minTime: startTime
                                             }">
                        </el-time-select>
                    </el-form-item>
                </dd>
                <dd class="text"><label>非营业时间预定</label><span>
                    <el-radio class="radio" v-model="Reserve" label="Reserve">是</el-radio>
                    <el-radio class="radio" v-model="Reserve" label="disReserve">否</el-radio>
                </span></dd>
            </dl>
            <dl class="detailed-box">
                <dt>配送相关信息</dt>
                <dd class="text"><label>配送方</label>
                <span>
111
                </span>
                </dd>
                <dd class="text"><label>需提前预定天数</label><span>

                        <el-input placeholder="请输入内容" v-model="input4" style="width:160px ">
                            <template slot="append">天</template>
                        </el-input>
                    </span>
                </dd>
                <dd class="text"><label>支持提前预订天数</label>
                    <span>1212  </span>
                </dd>
                <dd class="text"><label>是否支持自动接单</label><span>
                    <el-radio class="radio" v-model="Autoorder" label="Autoorder">是</el-radio>
                    <el-radio class="radio" v-model="Autoorder" label="disAutoorder">否</el-radio>
                </span></dd>
                <dd class="text"><label>配送信息</label>
                    <span>
                        <p>配送范围(1)： 配送费3.0元； 配送时长50分钟； 起送价0元; 分级:1级</p>
                        <el-button type="text">编辑详情</el-button>
                    </span>
                </dd>
                <dd class="text"><label>全城配送</label>
                <span>
                    <el-checkbox v-model="allcity">我确定全城配送</el-checkbox>
                </span>
                </dd>
            </dl>
        </el-form>
        <dl class="detailed-box">
            <dt>交易信息</dt>
            <dd class="text"><label>支付方式</label>
                <span>
                    <el-checkbox v-model="facetoface">餐到付款</el-checkbox>
                    <el-checkbox v-model="Online">在线支付</el-checkbox>
                    （可多选）
                </span>
            </dd>
           <dd class="text"><label>支持开发票</label><span>
                <el-radio class="radio" v-model="invoice" label="invoice">是</el-radio>
                <el-radio class="radio" v-model="invoice" label="disinvoice">否</el-radio>
           </span>
           </dd>
            <dd class="text"><label>支持平台代金券</label><span>
                <el-radio class="radio" v-model="PlatformVouchers" label="Platform">是</el-radio>
                <el-radio class="radio" v-model="PlatformVouchers" label="disPlatform">否</el-radio>
           </span>
            </dd>
            <dd class="text"><label>支持商户代金券</label><span>
                <el-radio class="radio" v-model="BusinessVouchers" label="Bussiness">是</el-radio>
                <el-radio class="radio" v-model="BusinessVouchers" label="disBussiness">否</el-radio>
           </span>
            </dd>
            <dd class="text"><label> 餐盒单价</label>
                <span>12213</span>
            </dd>
            <dd class="text"><label>接单方式</label><span>
                <el-radio class="radio" v-model="mode" label="1">商户端产品</el-radio>
                <el-radio class="radio" v-model="mode" label="2">短信接单</el-radio>
                <el-radio class="radio" v-model="mode" label="3">接单器</el-radio>
           </span>
            </dd>
            <dd class="text"><label> 优惠信息</label>
                <span>
                    <el-input
                            type="textarea"
                            :rows="2"
                            placeholder="100字以内"
                            v-model="textarea">
                    </el-input>
                </span>
            </dd>
            <dd class="text"><label> 商家公告</label>
                <span>
                    <el-input
                            type="textarea"
                            :rows="2"
                            placeholder="300字以内"
                            v-model="textarea">
                    </el-input>
                </span>
            </dd>
        </dl>
        </el-form>
        <el-row :gutter="20">
            <el-col :span="12" :offset="6"><div class="grid-content">
                <el-button type="primary">保存</el-button>
            </div></el-col>
        </el-row>

    </div>
</template>
<script>
    export default {
        name: 'takeaway_info',
        props: {
            data: Object
        },
        data() {
            return {
                Autoorder:"Autoorder",
                invoice:'invoice',
                mode:'1',
                Reserve:'Reserve',
                BusinessVouchers:'Business',
                PlatformVouchers:'Platform',
                logo: 'default',
                dialogImageUrl: '',
                dialogVisible: false,
                 startTime: '',
                 endTime: '',
                inputSize:"small"
            };
        },
        methods: {
            handleRemove(file, fileList) {
                console.log(file, fileList);
            },
            handlePictureCardPreview(file) {
                this.dialogImageUrl = file.url;
                this.dialogVisible = true;
            }
        },
        mounted(){
            let wh = $(window).height()
            $('.tab-box').css('height',wh-190)
        }
    }
</script>
<style scoped>
    /*.icon-default {
        background-image: url("../../assets/497236c9d6616b4182ae6c4ef06c8710f0.jpg");
    }*/

</style>