// yf/news/news.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    msg:"我是业务逻辑里面的数据",
    obj:{
      name:"他是张三来的"
    },
    arr:[1,2,3,4],
    show:false,
    datas:"需要我绑定的数据",
    list:[
      {
        title:'新闻111'
      },

      {
        title:"我是新闻222"
      }
    ],
    list2:[
      {
        title:'宝马x系列',
        list:[
          {name:"x1"},
          {name:"x2"},
          {name:"x3"},
          {name:"x4"},
        ]
      },
      {
        title:'奥迪系列',
        list:[
          {name:"q1"},
          {name:"q2"},
          {name:"q3"},
          {name:"q4"},
        ]
      },
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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