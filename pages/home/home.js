// pages/home/home.js
const util = require('../../utils/util.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    birthday: '2018-06-11',
    thisday: '',
    thismonth: 0,
    thisyear: 0
  },

  bindDateChange: function (e) {
    this.setData({
      birthday: e.detail.value
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    var time = util.formatData(new Date()) + ' 00:00:00'

    var diffDay = util.getDiffDay(new Date(time), new Date(that.data.birthday + ' 00:00:00'))
    console.log("今天差值", diffDay)
    var thismonth = time.slice(5, 7)
    var thisyear = time.slice(0, 4)
    this.setData({
      thisday: time,
      thismonth: thismonth,
      thisyear: thisyear
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    var that = this;
    const context = wx.createCanvasContext('draw_canvas')
    context.setStrokeStyle("#848198")
    //横坐标
    for (var i = 0; i < 10; i++) {
      context.setFillStyle("#848198");
      context.setFontSize('8');
      context.fillText(i * 2, 2, 150 - i * 15);

    }
    //纵坐标
    for (var i = 1; i < 17; i++) {
      context.setFillStyle("#848198");
      context.setFontSize('8');
      var label = parseInt(that.data.thismonth) + "." + i
      context.fillText(i * 2 - 1, 20 * i, 170);
    }
    context.setLineWidth(1)
    context.moveTo(15, 10)
    context.lineTo(15, 160)
    context.lineTo(330, 160)

    //context.arc(50, 100, 60, 30, 2 * Math.PI, true)

    // context.setStrokeStyle("#00ff00")
    // context.setLineWidth(5)
    // context.rect(0, 0, 200, 200)
    // context.stroke()
    // context.setStrokeStyle("#ff0000")
    // context.setLineWidth(2)
    // context.moveTo(160, 100)
    // context.arc(100, 100, 60, 0, 2 * Math.PI, true)
    // context.moveTo(140, 100)
    // context.arc(100, 100, 40, 0, Math.PI, false)
    // context.moveTo(85, 80)
    // context.arc(80, 80, 5, 0, 2 * Math.PI, true)
    // context.moveTo(125, 80)
    // context.arc(120, 80, 5, 0, 2 * Math.PI, true)
    context.stroke()
    context.draw()
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})