<template>
    <div class="tab-box clearfix">
        <template>
            <el-tabs v-model="activeName" @tab-click="handleClick">
                <el-tab-pane label="管理菜单" name="first">
                    <div class="combo-manage">
                        <div class="alert" v-if="isAlert">
                            <i class="el-icon-close" @click="isAlert = false"></i>
                            <ol type="1">
                                <li>上架菜品，将右侧单品库中的单品/套餐拖入菜单分类既可</li>
                                <li>配料不可单独上架售卖，只可放在套餐中，套餐可上架售卖</li>
                                <li>在分类中移出的单品可在菜品库中查看</li>
                                <li>拖动可以调整分类、菜品的顺序</li>
                                <li>可以通过分类右侧的“设置为必选分类”来设置订单的必选分类，如：若将“锅底”分类设置为必选分类，则订单中必须包含“锅底”分类中的菜品才能正常下单</li>
                                <li>设置必选分类后，若某一分类可以直接下单（如饮料或主食），则可通过“解除绑定必选分类”来实现</li>
                                <li>菜品操作“下架”，则将其从所有分类中停售，且不会自动恢复售卖，可人工操作“上架”将其从所有分类中恢复售卖</li>
                            </ol>
                        </div>
                        <div class="top-input clearfix">
                            <div class="search fl">
                                <el-form label-width="50px">
                                    <el-form-item label="搜索">
                                        <el-input
                                                v-model="data.searchValue"
                                                :size="inputSize">
                                            <el-button slot="append" icon="search"></el-button>
                                        </el-input>
                                    </el-form-item>
                                </el-form>
                            </div>
                            <div class="createCate fr">
                                <el-input placeholder="请输入内容" v-model="data.createCate" :size="inputSize">
                                    <el-button slot="append" type="primary">创建分类</el-button>
                                </el-input>
                            </div>
                        </div>
                        <div class="category-box">
                            <div class="category" v-for="(el,index) in data.cateList" :key="el.id">
                                <div class="category-heading clearfix">
                                    <i class="el-icon-caret-bottom fade" :class="!el.isOpen && 'rotate'" @click="el.isOpen = !el.isOpen"></i>&nbsp;&nbsp;
                                    <a>{{el.name}} &nbsp;<i class="el-icon-edit"></i> </a>
                                    <div class="title-edit" v-if="false">
                                        <el-input placeholder="请输入内容" v-model="data.createCate" :size="inputSize">
                                            <el-button slot="append" icon="check"></el-button>
                                        </el-input>
                                    </div>
                                    <span> &nbsp;&nbsp;&nbsp;&nbsp;数量: 5</span>
                                    <div class="btn-edit fr">
                                        <el-button type="text">设为必选分类</el-button>
                                        <el-button type="text">删除</el-button>
                                    </div>
                                </div>
                                <ul class="category-body sortable clearfix" v-show="el.isOpen">
                                    <li v-for="(val,key) in el.item" :key="val.id">
                                        <div class="combo-icon-wrap">
                                            <img class="combo-icon" src="../../assets/timg.jpeg" width="100%">
                                            <span class="lowPixel" v-if="val.isClearance">低清</span>
                                            <span class="saleout-status" v-if="val.isDiscontinued">停 售</span>
                                            <span class="saleout-status" v-if="val.isSectionDis">部分停售</span>
                                        </div>
                                        <div class="info">
                                            <div class="dish-top-info">
                                                <span class="dish-name">{{val.name}}</span>
                                                <span class="el-icon-edit"></span>
                                            </div>
                                            <div class="dish-store-nums">
                                                <span class="dish-counts">库存：{{val.stock}}</span>
                                                <span class="price fr">¥{{val.price}}</span>
                                                <span class="discount">{{val.discount}}折</span>
                                            </div>
                                            <div class="info_nav"> 剩余库存： <span>{{val.RemainingStock}}</span>
                                                <span class="el-icon-edit" @click="val.isEdit = true"></span>
                                                <span class="info_ipt_group" v-show="val.isEdit">
                                                    <input type="text" class="form-control" v-model="val.RemainingStock">
                                                    <span class="el-icon-check" @click="val.isEdit = false"></span>
                                                </span>
                                            </div>
                                            <div class="tag-wrap">
                                                <div class="">
                                                    <span v-if="val.isSingle">单品</span>
                                                    <span v-if="val.isMultiple">多属性</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="action">
                                            <el-button size="mini">移出该分类</el-button>
                                            <el-button size="mini" :disabled="!val.isDisable">暂停售卖</el-button>
                                            <el-button size="mini" :disabled="val.isDisable">恢复售卖</el-button>
                                            <el-button size="mini">下架</el-button>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="select-bar fr">
                        <div class="filter-type">
                            <div class="filter-selected" @click="filterShow = !filterShow">
                                单品
                                <i class="el-icon-caret-bottom fade" :class="filterShow && 'rotate-180'"></i></div>
                            <ul class="filter-list" v-if="filterShow">
                                <li>全部</li>
                                <li>单品</li>
                                <li>套餐</li>
                            </ul>
                        </div>
                        <div class="filter-key">
                            <el-input placeholder="请输入搜索" size="small">
                                <el-button slot="append">搜索</el-button>
                            </el-input>
                        </div>
                    </div>
                </el-tab-pane>
                <el-tab-pane label="菜品库" name="second">
                    <div class="alert" v-if="isAlert1">
                        <i class="el-icon-close" @click="isAlert1 = false"></i>
                        <ul type="1">
                            <li><b>提示：</b>上架菜品，请在管理菜单中将菜品拖入菜品分类中即可。</li>
                        </ul>
                    </div>
                    <div class="top-input clearfix">
                        <div class="toolbar clearfix fl">
                            <div class="search fl">
                                <el-form label-width="50px">
                                    <el-form-item label="搜索">
                                        <el-input
                                            placeholder="菜品、配料、套餐名称"
                                            v-model="data.searchValue"
                                            :size="inputSize">
                                            <el-button slot="append" icon="search"></el-button>
                                        </el-input>
                                    </el-form-item>
                                </el-form>
                            </div>
                            <el-button type="primary" :size="inputSize">批量同步菜单</el-button>
                            <el-button type="primary" :size="inputSize">批量操作</el-button>
                        </div>

                        <div class="dish-number-wrap fr">
                            <span>在线/全部菜品 91/91 </span>
                            <span class="recycling"><i class="el-icon-delete2"></i> 回收站</span>
                        </div>
                    </div>
                    <div class="category-box">
                        <div class="category" v-for="(el,index) in data.cateList" :key="el.id">
                            <div class="category-heading clearfix">
                                单品
                            </div>
                            <ul class="category-body clearfix" v-show="el.isOpen">
                                <li v-for="(val,key) in el.item" :key="val.id">
                                    <input type="checkbox" class="batch-checkbox" />
                                    <div class="combo-icon-wrap">
                                        <img class="combo-icon" src="../../assets/timg.jpeg" width="100%">
                                        <span class="lowPixel" v-if="val.isClearance">低清</span>
                                        <span class="saleout-status" v-if="val.isDiscontinued">停 售</span>
                                        <span class="saleout-status" v-if="val.isSectionDis">部分停售</span>
                                    </div>
                                    <div class="info">
                                        <div class="dish-top-info">
                                            <span class="dish-name">{{val.name}}</span>
                                            <span class="el-icon-edit"></span>
                                            <span class="el-icon-delete"></span>
                                        </div>
                                        <div class="dish-store-nums">
                                            <span class="dish-counts">库存：{{val.stock}}</span>
                                            <span class="price fr">¥{{val.price}}</span>
                                            <span class="discount">{{val.discount}}折</span>
                                        </div>
                                        <div class="info_nav"> 剩余库存： <span>{{val.RemainingStock}}</span>
                                            <span class="el-icon-edit" @click="val.isEdit = true"></span>
                                                <span class="info_ipt_group" v-show="val.isEdit">
                                                    <input type="text" class="form-control" v-model="val.RemainingStock">
                                                    <span class="el-icon-check" @click="val.isEdit = false"></span>
                                                </span>
                                        </div>
                                        <div class="tag-wrap">
                                            <div class="">
                                                <span v-if="val.isSingle">单品</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="action">
                                        <el-button size="mini">移出该分类</el-button>
                                        <el-button size="mini" :disabled="!val.isDisable">暂停售卖</el-button>
                                        <el-button size="mini" :disabled="val.isDisable">恢复售卖</el-button>
                                        <el-button size="mini">下架</el-button>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </el-tab-pane>
                <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
                <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
            </el-tabs>
        </template>
    </div>
</template>
<script>
    export default {
        name: 'merchant_menu',
        props: {
            data: Object
        },
        data() {
            return {
                activeName: 'second',
                inputSize: "small",
                isAlert:true,
                isAlert1:true,
                filterShow:false
            };
        },
        methods: {
            handleClick(tab, event) {
                console.log(tab, event);
            },
            handleIconClick (){

            }
        },
        mounted(){
            var el = $('.sortable')
            el.each(function (index) {
                Sortable.create(this, {
                    group: {
                        pull: false,
                        put: false
                    },
                    animation: 150,
                    delay:100,
                    sort: true,
                    onEnd:function (evt) {
                        console.log(evt.oldIndex)
                        console.log(evt.newIndex)
                    }
                });
            })
        }
    }
</script>
<style scoped>
    .combo-manage {
        width: calc(100% - 250px) !important;
        float: left;
        position: relative;
        transition: width .2s ease-in-out;
    }

    .alert {
        padding: 15px;
        margin-bottom: 20px;
        border: 1px solid #bce8f1;
        border-radius: 4px;
        color: #31708f;
        background-color: #d9edf7;
        font-size: 14px;
        position: relative;
    }

    .alert i {
        position: absolute;
        right: 16px;
        top: 18px;
        cursor: pointer;
    }

    .select-bar {
        width: 220px;
        background-color: #fafafa;
        padding: 10px;
        border: #ccc solid 1px;
        border-radius: 4px;
        position: relative;
        opacity: 1;
        right: 0;
        transition: width .2s ease-in-out;
    }
    .toolbar {
        line-height: 34px;
    }
    .search {
        margin-right: 20px;
    }
    .search, .createCate {
        width: 260px;
    }
    .createCate {
        padding-top: 4px;
    }
    .category {
        margin-bottom: 20px;
        background-color: #fff;
        border: 1px solid #ddd;
        border-radius: 4px;
        -webkit-box-shadow: 0 1px 1px rgba(0, 0, 0, .05);
        box-shadow: 0 1px 1px rgba(0, 0, 0, .05);
        font-size: 14px;
    }

    .category-heading {
        padding: 10px 15px;
        border-bottom: 1px solid #ddd;
        border-top-right-radius: 3px;
        border-top-left-radius: 3px;
        background-color: #f5f5f5;
    }

    .category-heading a {
        color: #46c3c1;
    }

    .category-heading .el-icon-edit {
        color: #1D8CE0;
        cursor: pointer;
    }

    .title-edit {
        display: inline-block;
        width: 240px;
    }

    .btn-edit button {
        padding: 0;
    }

    .category-body {
        padding: 15px 15px 0;
    }
    .rotate {
        transform: rotate(-90deg);
    }
    .category-body li {
        float: left;
        margin: 0 20px 20px 0;
        background-color: #fafafa;
        position: relative;
        overflow: hidden;
    }

    .combo-icon-wrap {
        width: 120px;
        height: 120px;
        display: block;
        float: left;
        position: relative;
    }

    .lowPixel {
        color: #fff;
        font-size: 20px;
        border: 1px solid rgba(255, 255, 255, .3);
        border-radius: 4px;
        background: rgba(67, 67, 67, .8);
        position: absolute;
        left: 0;
        bottom: 0;
        padding: 3px 7px;
    }

    .saleout-status {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 30px;
        line-height: 30px;
        background: rgba(0, 0, 0, .4);
        text-align: center;
        color: #fff;
        font-size: 14px;
        display: none;
    }
    .batch-checkbox {
        position: absolute;
        left: 2px;
        top:2px;
        z-index: 10;
    }
    .info {
        float: left;
        width: 160px;
        height: 120px;
        padding: 5px 10px;
    }
    .dish-top-info {
        display: flex;
        display: -webkit-flex;
        height: 30px;
        margin-bottom: 10px;
        border-bottom: 1px dashed #e7e7e7;
        overflow: hidden;
        line-height: 30px;
    }
    .dish-name {
        flex: 1;
        -webkit-flex: 1;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .dish-top-info span[class^=el-icon-] {
        line-height: 30px;
        color: #ccc;
        cursor: pointer;
        margin: 0 2px;
    }
    .discount,.price{
        color: #9a9a9a;
    }
    .price {
        line-height: 20px;
    }
    .info_nav {
        position: relative;
        height: 20px;
    }
    .info_nav .el-icon-edit{
        float: right;
        color: #cccccc;
        cursor: pointer;
        line-height: 20px;
        display: none;
        position: relative;
        z-index: 0;
    }
    .info_nav:hover .el-icon-edit{
        display: block;
    }
    .info_ipt_group {
        position: absolute;
        width: 88px;
        right: 0;
        bottom: 0;
        height: 18px;
        border:1px solid #ccc;
        overflow: hidden;
        border-radius: 4px;
        z-index: 1;
        background: #fff;
    }
    .info_ipt_group span {
        color: #20A0FF;
        font-size: 12px;
        cursor: pointer;
    }
    .info_ipt_group input {
        padding: 0 3px;
        width: 59px;
        height: 18px;
        line-height: 16px;
        border: 0;
        border-right: 1px solid #ccc;
    }
    .tag-wrap {
        padding-top: 8px;
    }
    .tag-wrap span {
        background: #58B7FF;
        color: #fff;
        font-size: 12px;
        padding: 2px;
        border-radius: 4px;
    }
    .action {
        padding: 10px 0;
        text-align: center;
    }
    .filter-type {
        width: 100px;
        height: 30px;
        margin: 0 auto;
        text-align: center;
        font-size: 14px;
        position: relative;
        cursor: pointer;
    }
    .filter-selected i {
        font-size: 10px;
    }
    .filter-type ul{
        position: absolute;
        left: -6px;
        width: 100%;
        background: #fff;
        border-radius: 4px;
        border:1px solid #ccc;
        padding: 6px 0;
        line-height: 2;
    }
    .dish-number-wrap {
        font-size: 14px;
    }
    .recycling {
        color: #79C208;
        margin-left: 20px;
        padding-right: 4px;
        cursor: pointer;
    }
</style>