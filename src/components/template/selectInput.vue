<template>
    <div class="selectInput" :class="size">
        <label class="label">{{title}}</label>
        <div class="selectInput-content">
            <input v-model='input' readonly type="text" @click.stop="ulShow = !ulShow" />
            <i class="el-input__icon el-icon-caret-bottom"
               :class="ulShow && 'selectInput-rotate'" @click.stop="ulShow = !ulShow"></i>
            <span></span>
            <ul v-show="ulShow" @click.stop>
                <li>
                    <input type="checkbox" id="checkedAll" @change="changeAll()" v-model="checkedAdd">
                    <label for="checkedAll">全部</label>
                </li>
                <li v-for="(el,index) in data.options">
                    <input type="checkbox" :id="index" :value="el.value" v-model="data.value" @change="change()">
                    <label :for="index">{{el.label}}</label>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    name: 'selectInput',
    props:{
        data:Object,
        title:String,
        size:String
    },
    methods:{
        changeAll(){
            let _this = this
            if(_this.checkedAdd){
                _this.data.value=[]
                _this.data.options.forEach(function (item) {
                    _this.data.value.push(item.value)
                })
            }else {
                _this.data.value=[]
            }
        },
        change(){
            this.checkedAdd = this.data.options.length === this.data.value.length ? true : false
        }
    },
    mounted(){
        let _this = this
        $('body').click(function () {
           _this.ulShow = false
        })
    },
    computed:{
        input(){
            let _this = this
            let a = []
            _this.data.value.forEach(function (el) {
                _this.data.options.forEach(function (item) {
                    if(item.value == el){
                        a.push(item.label)
                    }
                })
            })
            return a.join(', ')
        }
    },
    data(){
        return {
            checkedAdd:false,
            ulShow:false
        }
    }
}
</script>
<style scoped>
    .selectInput {
        display: inline-block;
        margin-right: 10px;
        vertical-align: top;
        margin-bottom: 22px;
        position: relative;
        z-index:1;
    }
    .selectInput .label {
        width: 110px;
        text-align: right;
        vertical-align: middle;
        float: left;
        font-size: 14px;
        color: #48576a;
        padding-right: 12px;
        box-sizing: border-box;
    }
    .selectInput-content {
        float: left;
        position: relative;
    }
    .selectInput input[type='text'] {
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        background-color: #fff;
        background-image: none;
        border-radius: 4px;
        border: 1px solid #bfcbd9;
        box-sizing: border-box;
        color: #1f2d3d;
        display: block;
        font-size: inherit;
        height: 36px;
        line-height: 1;
        outline: 0;
        padding: 3px 10px;
        transition: border-color .2s cubic-bezier(.645,.045,.355,1);
        width: 100%;
        cursor: pointer;
    }
    .selectInput-content ul {
        position: absolute;
        width: 100%;
        left: 0;
        background: #fff;
        border-radius: 2px;
        border: 1px solid #ccc;
        box-shadow: 0 6px 12px rgba(0,0,0,.175);
        height: 240px;
        overflow: auto;
    }
    .selectInput-content ul li {
        height: 30px;
        line-height: 30px;
        padding: 0 14px;
        overflow: hidden;
        white-space:nowrap;
        text-overflow:ellipsis;
    }
    .selectInput i {
        z-index: 1;
        cursor: pointer;
    }
    .selectInput span {
        width: 26px;
        height: 80%;
        position: absolute;
        top: 10%;
        right: 4px;
        background: #fff;
        z-index: 0;
    }
    .selectInput-rotate {
        transform:rotate(180deg);
        -ms-transform:rotate(180deg); 	/* IE 9 */
        -moz-transform:rotate(180deg); 	/* Firefox */
        -webkit-transform:rotate(180deg); /* Safari 和 Chrome */
        -o-transform:rotate(180deg); 	/* Opera */
    }
    .small{
        font-size: 13px;
    }
    .small input[type='text'] {
        height: 30px;
    }
    .small .label {
        line-height: 30px;
    }
    .small .selectInput-content ul{
        top:30px;
    }
</style>