// yf/shop/shop.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    srcs:"/static/img/im.jpg"
  },
  toRouter(event){
    console.log(event.currentTarget.dataset.aid)

    // console.log(event.currenTarger.dataset.aid)
      wx.navigateTo({
        url:"../router/router?aid="+event.currentTarget.dataset.aid
      })      
  }
})