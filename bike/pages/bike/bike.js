var app = getApp()
var network = require("../../utils/network.js")
var util = require("../../utils/util.js")
var that

Page({
  data: {
    showView: true,
    imgesurl: '../images/down_rate.png',
    bikelist: [
      {
        icon: "补内胎",
        price: "5",
        cont: "KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK"

      }, {
        icon: "换内胎",
        price: "5",
        cont: "KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK"

      }, {
        icon: "前叉变形",
        price: "5",
        cont: "KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK"

      }, {
        icon: "更换辐条",
        price: "5",
        cont: "KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK"

      }, {
        icon: "链条故障",
        price: "5",
        cont: "KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK"

      }, {
        icon: "XX故障",
        price: "5",
        cont: "KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK"

      }, {
        icon: "修反光镜",
        price: "5",
        cont: "KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK"

      }, {
        icon: "方向盘不好使",
        price: "5",
        cont: "KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK"

      }
    ]
  },
  onLoad: function (options) {
    // 生命周期函数--监听页面加载

  },
  onReady: function () {
    // 生命周期函数--监听页面初次渲染完成

  },
  onShow: function () {
    // 生命周期函数--监听页面显示

  },
  onHide: function () {
    // 生命周期函数--监听页面隐藏

  },
  onUnload: function () {
    // 生命周期函数--监听页面卸载

  },
  onPullDownRefresh: function () {
    // 页面相关事件处理函数--监听用户下拉动作

  },
  onReachBottom: function () {
    // 页面上拉触底事件的处理函数

  },
  onChangeShowState: function (e) {
    var that = this;
    that.setData({
      showView: (!that.data.showView),
      _num: e.target.dataset.num,
      imgesurl: "../images/up_rate.png"
    })
  },
  onShareAppMessage: function () {
    // 用户点击右上角分享
    return {
      title: 'title', // 分享标题
      desc: 'desc', // 分享描述
      path: 'path' // 分享路径
    }
  }
})