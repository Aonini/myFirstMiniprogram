// yf/footDetile/footDetile.js
let  wxParse =  require('../../wxParse/wxParse.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    info: {
      imgsrc: "",
      q: "2000",
      content:"默认数据来的"
    },
    host: "http://a.itying.com/"
  },

  /**
   * 生命周期函数--监听页面加载
   */

  requestDetailes(itemid) {
    let pro = new Promise((resolve, reject) => {
      wx.request({
        url: "http://a.itying.com/api/productcontent?id=" + itemid,
        header: {
          'content-type': 'application/json' // 默认值
        },
        success(res) {
          resolve(res.data.result[0]);
        },
        fail() {
          reject([]);
        }
      })

    })
    return pro;
  },
  setHtml(val) {
    console.log(val)
    this.setData({
      "info.q":val.title,
      "info.imgsrc":val.img_url.replace(/\\/g,"/"),
   
    })
    let  thet  =this,s = val.content;
    wxParse.wxParse("oo","html",s,thet,0)
  },
  onLoad: function (options) {
    this.requestDetailes(options.itemid).then(res => {
      this.setHtml(res);
    });
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

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