//index.js
//获取应用实例
var app = getApp()
var network = require("../../utils/network.js")
var util = require("../../utils/util.js")
var that
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    indicatorDots: true,
    
    imageUrl: [],
       menu:{  
      imgUrls:[  
        '../images/bike.png',  
        '../images/lock.png',  
        '../images/key.png',  
        '../images/shoes.png',  
        '../images/sewing.png',
        '../images/home.png',
        '../images/home.png'
      ],  
      descs:[  
          '单车维修',  
          '修锁换锁',  
          '配钥匙',  
          '修鞋',  
          '缝纫',  
          '到家服务',  
          '一键下单',  
          '领金币' 
      ] ,
      tap:[
          'bind1',  
          'bind2',  
          'bind3',  
          'bind4',  
          'bind5',  
          'bind6',  
          'bind7',  
          'bind8', 
    
      ] 
    } 
  },
  onLoad: function () {
    that = this;
    
    
   
    app.$api.home
      .getbanner({
        data: {
          usertel: '13720022401',
        
        },
        success(data) {
           that.setData({
          imageUrl: data.data1.banner,
        });
        },
        fail(code, msg) {
          app.showToast(msg)
          self.setData({
            getCodeLock: false
          })
        }
      })
  },


  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  bind1:function(){
  wx.navigateTo({
      url: '../bike/bike'
    })
  }

})
