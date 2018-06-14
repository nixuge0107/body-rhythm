// pages/home/home.js
const util = require('../../utils/util.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    imageWidth: 0,
    birthday: '1996-01-07',
    thisday: '',
    thismonth: 0,
    thisyear: 0,
    offsetDay: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log("222222222222")
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    //获取当前页面高度
    this.setData({
      imageWidth: wx.getSystemInfoSync().windowWidth,
      thisday: util.formatData(new Date())
    })
    var time1 = this.updateBirthday(this.data.birthday)
    var time2 = this.updateThisday(this.data.thisday)
    this.updateDiffDay(time1, time2)
    this.drawAll()
  },
  drawAll: function () {
    var that = this;
    const context = wx.createCanvasContext('draw_canvas')
    // 画坐标系
    context.beginPath()
    context.setStrokeStyle("#848198")
    context.setFillStyle("#848198");
    //纵坐标
    context.setFontSize('8');
    for (var i = 0; i < 11; i++) {
      context.fillText(i * 2, 2, 170 - i * 15);
    }
    //横坐标
    for (var i = 1; i < 17; i++) {
      var label = parseInt(that.data.thismonth) + "." + i
      context.fillText(i * 2 - 1, 20 * i, 180);
    }
    context.setLineWidth(1)
    context.moveTo(15, 17)
    context.lineTo(15, 170)
    context.lineTo(330, 170)
    context.stroke()
    this.drawSin(context, 23, that.data.offsetDay, "#00ff00")
    this.drawSin(context, 28, that.data.offsetDay, "#ff0000")
    this.drawSin(context, 33, that.data.offsetDay, "#0000ff")

    context.stroke()
    context.draw()
  },

  drawSin: function (context, peroid, offset, color) {
    var x = 0;
    console.log(offset)
    context.beginPath()
    context.setStrokeStyle(color)
    context.moveTo(20 + x, 93 - 76 * Math.sin(Math.PI / (peroid * 5) * (x + offset * 10)))
    for (var i = 0; i < 300; i++) {
      x = x + 1;
      context.lineTo(20 + x, 93 - 76 * Math.sin(Math.PI / (peroid * 5) * (x + offset * 10)));
    }
    context.stroke()
  },

  updateBirthday: function (birthday) {
    var time = birthday + 'T00:00:00'
    console.log("try",new Date())
    console.log("update", new Date(time))
    return new Date(time)
  },

  updateThisday: function (thisday) {
    var time_str = thisday + 'T00:00:00'
    var time_mon_str = time_str.slice(0, 7) + '-01T00:00:00'

    var thismonth = time_str.slice(5, 7)
    var thisyear = time_str.slice(0, 4)
    this.setData({
      // thisday: time_str,
      thismonth: thismonth,
      thisyear: thisyear
    })
    return new Date(time_mon_str)
  },

  updateDiffDay: function (birthday, thisday) {
    var diffDay = util.getDiffDay(birthday, thisday)
    console.log("今天差值", diffDay)
    this.setData({
      offsetDay: diffDay
    })
  },

  bindThisDateChange: function (e) {
    this.setData({
      thisday: e.detail.value
    })
    var time1 = this.updateBirthday(this.data.birthday)
    var time2 = this.updateThisday(this.data.thisday)
    this.updateDiffDay(time1, time2)
    this.drawAll()
  },
  bindBirthdayChange: function (e) {
    this.setData({
      birthday: e.detail.value
    })
    var time1 = this.updateBirthday(this.data.birthday)
    var time2 = this.updateThisday(this.data.thisday)
    this.updateDiffDay(time1, time2)
    this.drawAll()
  },

  up_action: function (e) {
    var thisday = this.data.thisday
    const date = new Date(thisday)
    const month = date.getMonth()
    console.log(month)
    const year = date.getFullYear()
    const day = date.getDate()

    thisday = [year, month, day].map(util.formatNumber).join('-')
    this.setData({
      thisday: thisday
    })
    var time1 = this.updateBirthday(this.data.birthday)
    var time2 = this.updateThisday(this.data.thisday)
    this.updateDiffDay(time1, time2)
    this.drawAll()
  },
  down_action: function (e) {
    var thisday = this.data.thisday
    const date = new Date(thisday)
    const month = date.getMonth() + 2
    console.log(month)
    const year = date.getFullYear()
    const day = date.getDate()

    thisday = [year, month, day].map(util.formatNumber).join('-')
    this.setData({
      thisday: thisday
    })
    var time1 = this.updateBirthday(this.data.birthday)
    var time2 = this.updateThisday(this.data.thisday)
    this.updateDiffDay(time1, time2)
    this.drawAll()
  },
  // ***************************************************************************************

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