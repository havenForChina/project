module.exports = {
    "contactumber":"1566750136",
    "Explain":" 商户营销，是指开展满减、满赠、满免的活动，刺激新/老用户购买，提高订单量；设置优惠门槛，提高客单价，从而提高整体的流水，最大化下单用户对平台的贡献度。",
    "account":"15366750136",
    "business":"张家港融贝科技有限公司",
    "orderNumber":"00000000000",
    "orderStatus": {
        "value":1,
        "options":[
            {"label":"全部", "value":1},
            {"label":"用户下单", "value":2},
            {"label":"等待确认", "value":3},
            {"label":"正在下单", "value":4},
            {"label":"订单已修改", "value":5},
            {"label":"商户已确认", "value":6},
            {"label":"正在分配", "value":7},
            {"label":"正在取餐", "value":8},
            {"label":"正在配送", "value":9},
            {"label":"订单已完成", "value":10},
            {"label":"订单已取消", "value":11},
            {"label":"第三方订单创建失败", "value":12},
            {"label":"系统错误", "value":13}
        ]
    },
    "orderTime":{
        "startTime":"2017-02-20 00:00:00",
        "endTime":"2017-02-25 00:00:00"
    },
    "complaintsStatus": {
        "value":1,
        "options":[
            {"label":"全部","value":1},
            {"label":"处理中","value":2},
            {"label":"紧急处理中","value":3},
            {"label":"再次开启","value":4},
            {"label":"待关闭","value":5},
            {"label":"已关闭","value":6},
        ]
    },
    "orderSource": {
        "value":1,
        "options":[
            {"label":"全部","value":1},
            {"label":"外卖ios","value":2},
            {"label":"外卖android","value":3},
            {"label":"pc","value":4},
            {"label":"webapp","value":5},
            {"label":"糯米ios","value":6},
            {"label":"糯米android","value":7},
            {"label":"手百ios","value":8},
            {"label":"手百android","value":9}
        ]
    },
    "orderType":{
        "value":1,
        "options":[
            {"label":"默认","value":1},
            {"label":"可疑订单","value":2},
            {"label":"大额订单","value":3},
            {"label":"新用户订单","value":4},
            {"label":"预约单","value":5},
            {"label":"折损订单","value":6},
            {"label":"超时订单","value":7},
            {"label":"投诉订单","value":8},
            {"label":"催单","value":9},
            {"label":"客服介入催单","value":10},
            {"label":"在线支付","value":11}
        ]
    },
    "distribution":{
        "value":1,
        "options":[
            {"label":"默认","value":1},
            {"label":"可疑订单","value":2},
            {"label":"大额订单","value":3},
            {"label":"新用户订单","value":4},
            {"label":"预约单","value":5},
            {"label":"折损订单","value":6},
            {"label":"超时订单","value":7},
            {"label":"投诉订单","value":8},
            {"label":"催单","value":9},
            {"label":"客服介入催单","value":10},
            {"label":"在线支付","value":11}
        ]
    },
    "city":"张家港",
    "customize":{
        "visible_fields":[
            {"fieldKey":'status',"name":"订单状态"},
            {"fieldKey":'user_phone',"name":"联系人电话"},
            {"fieldKey":'city_name',"name":"城市"},
            {"fieldKey":'delivery_party_desc',"name":"配送方"},
            {"fieldKey":'channel_from',"name":"订单来源"},
            {"fieldKey":'source_name',"name":"商户来源"},
            {"fieldKey":'create_time',"name":"下单时间"}
        ],
        "hide_fields":[
            
        ]
    }
}