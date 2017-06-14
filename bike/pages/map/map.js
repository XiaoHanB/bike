// pages/map/map.js
Page({
  data:{
    scale:3,
    location:{},
     markers: [],
    hasLocation:false
  },
  onLoad:function(options){
    var that=this
    // 页面初始化 options为页面跳转所带来的参数
    wx.getLocation({
      type: 'wgs84', // 默认为 wgs84 返回 gps 坐标，gcj02 返回可用于 wx.openLocation 的坐标
      success: function(res){
        // success
        that.setData(
          {
            location:{
              longitude:res.longitude,
              latitude:res.latitude
            },
               markers: [{
            id: "1",
            latitude: res.latitude,
            longitude: res.longitude,
            width: 50,
            height: 50,
            iconPath: "../images/home.png",
            title: "哪里"

          }],
          }
        )

      },
      fail: function(res) {
        // fail
      },
      complete: function(res) {
        // complete
      }
    })
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  }
})

atitude
:
39.90403
longitude
:
116.407526