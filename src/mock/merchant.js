module.exports = {
    "searchData":{
        "id":"SB-1122334",
        "name":"Haven",
        "userStatus": {
            "options": [
                {"value": 1, "label": "新增商户"},
                {"value": 2, "label": "新增商户待上线"},
                {"value": 3, "label": "审核不通过"},
                {"value": 4, "label": "下线暂停合作"},
                {"value": 5, "label": "上线合作中"},
                {"value": 6, "label": "新增待审核"},
                {"value": 7, "label": "上线驳回"},
                {"value": 8, "label": "待初审"},
                {"value": 9, "label": "初审驳回"},
                {"value": 10, "label": "通过品控"},
                {"value": 11, "label": "上线修改待确认"},
                {"value": 12, "label": "上线修改确认驳回"},
                {"value": 13, "label": "上线修改待审核"},
                {"value": 14, "label": "下线修改待确认"},
                {"value": 15, "label": "下线修改确认驳回"},
                {"value": 16, "label": "下线修改待审核"},
                {"value": 17, "label": "封禁中"}
            ],
            "value":[]
        },
        "businessStatus":{
            "options":[
                {"value":1,"label":"营业中"},
                {"value":2,"label":"休息中"},
                {"value":3,"label":"暂停营业"}
            ],
            "value":1
        },
        "city":"张家港",
        "merchantType":{
            "options":[
                {"value":1,"label":"全部"},
                {"value":2,"label":"单体商户"},
                {"value":3,"label":"供应商商户"}
            ],
            "value":1
        }
    },
    "operating":{
        "operateAll":[
            {"label":"开业设置","type":"opened"},
            {"label":"暂停营业","type":"stop"},
            {"label":"批量获得","type":"batchAccess"},
            {"label":"特批","type":"special"},
            {"label":"批量打标签","type":"printLabel"},
            {"label":"批量待上线","type":"waitOnline"},
            {"label":"批量上线","type":"online"}
        ]
    },
    "merchantList":[
        {
            "id":1,
            "name":"肯德基宅急送(塘市店)"
        },
        {
            "id":2,
            "name":"必胜客披萨(塘市店)"
        }
    ],
    "selectMerchant":[],
    "detailed":{
        "Agents":"苏州食到家信息技术有限公司",
        "name":"",
        "SalesManager":"hetaiyao",
        "DistrictManager":"何太垚 (15995730710)",
        "OwnBrand":"",
        "categoryValue":'',
        "MerchantLabel":{
            "options":[
                {"label":"无","value":1},
                {"label":"本地KA","value":2}
            ],
            "value":1
        },
        "category":[
            {"label":"餐饮","value":1},
            {"label":"商超","value":2},
            {"label":"鲜花","value":3},
            {"label":"生活服务","value":4},
            {"label":"水果生鲜","value":5},
            {"label":"药店","value":6},
            {"label":"早餐","value":7},
            {"label":"商户商城","value":8}
        ]
    }
}