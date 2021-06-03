// yf/da/da.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    "cp": [{
        title: "精选热菜",
        items: [{
            src: "/static/img/1.jpg",
            q: "245",
            name: "手把肉"
          },
          {
            src: "/static/img/1.jpg",
            q: "999",
            name: "手把肉"
          },
          {
            src: "/static/img/1.jpg",
            q: "245",
            name: "手把肉"
          },
          {
            src: "/static/img/1.jpg",
            q: "245",
            name: "手把肉"
          },
          {
            src: "/static/img/1.jpg",
            q: "460",
            name: "手把肉"
          }
        ]
      },
      {
        title: "精选凉菜",
        items: [{
            src: "/static/img/1.jpg",
            q: "66",
            name: "手把肉"
          },
          {
            src: "/static/img/1.jpg",
            q: "66",
            name: "手把肉"
          },
        ]
      }
    ],
    host: "http://a.itying.com/"
  },
  itemclick(item) {
    console.log(item)
  },
  footclick(event) {
    let k = event.currentTarget.dataset.itemid;
    wx.navigateTo({
      url: '../footDetile/footDetile?itemid=' + k,
    });
  },
  requestData() {
    console.log("请求数据")
    let thet = this;
    wx.request({
      url: 'http://a.itying.com/api/productlist', //仅为示例，并非真实的接口地址
      data: {

      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        console.log(res.data.result)

        let result = res.data.result;


        for (var i = 0; i < result.length; i++) {
          for (var u = 0; u < result[i].list.length; u++) {
            result[i].list[u].img_url = result[i].list[u].img_url.replace(/\\/g, "/")
          }
        }
        thet.setData({
          cp: result
        })

      }
    })
  },
  onLoad() {
    console.log("onload执行")
    this.requestData()
  }
})