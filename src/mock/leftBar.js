module.exports = [
  {
    "name":"订单",
    "path":"/Order",
    "active":true,
    "icon":"icon-dingdan",
    "item":[
      {
        "name":"订单管理",
        "path":"/order_mgt",
        "active":true
      }
    ]
  },
  {
    "name":"商户",
    "path":"/Merchant",
    "active":true,
    "icon":"icon-shanghuzhongxin",
    "item":[
      {
        "name":"供应商管理",
        "path":"/Supplier",
        "active":false
      },
      {
        "name":"商户管理",
        "path":"/Merchant_mgt",
        "active":false
      }
    ]
  },
  {
    "name":"HES系统",
    "path":"/HES",
    "active":true,
    "icon":"icon-feiji",
    "item":[
      {
        "name":"拜访管理",
        "path":"/HES_visit",
        "active":false
      },
      {
        "name":"考勤管理",
        "path":"/HES_Attendance",
        "active":false
      }
    ]
  },
  {
    "name":"审核",
    "path":"/Review",
    "active":true,
    "icon":"icon-shenhe",
    "item":[
      {
        "name":"申请审核",
        "path":"/Review_Application",
        "active":false
      },
      {
        "name":"审核平台",
        "path":"/Review_platform",
        "active":false
      }
    ]
  },
  {
    "name":"产品",
    "path":"/Product",
    "active":true,
    "icon":"icon-chanpin",
    "item":[
      {
        "name":"公告管理",
        "path":"/Announcement",
        "active":false
      },
      {
        "name":"地标管理",
        "path":"/landmark",
        "active":false
      }
    ]
  },
  {
    "name":"销售",
    "path":"/xs",
    "active":true,
    "icon":"icon-gouwuche",
    "item":[
      {
        "name":"销售构架管理",
        "path":"/",
        "active":false
      }
    ]
  },
  {
    "name":"营销",
    "path":"/yingxao",
    "active":true,
    "icon":"icon-yingxiao",
    "item":[
      {
        "name":"活动管理",
        "path":"/activity",
        "active":false
      },
      {
        "name":"红包管理",
        "path":"/",
        "active":false
      }
    ]
  },
  {
    "name":"数据统计",
    "path":"/tg",
    "active":true,
    "icon":"icon-statistics",
    "item":[
      {
        "name":"商圈订单",
        "path":"/",
        "active":false
      },
      {
        "name":"商圈商户",
        "path":"/",
        "active":false
      },
      {
        "name":"商户数据",
        "path":"/",
        "active":false
      },
      {
        "name":"BD绩效",
        "path":"/",
        "active":false
      },
      {
        "name":"热销商品",
        "path":"/",
        "active":false
      }
    ]
  }
]
