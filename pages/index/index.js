//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    name: 'WeChat',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    //轮播图
    swiperCurrent:1,
    arr: [{
    images: '/pages/images/login.jpg'
    },
    {
    images: '/pages/images/login.jpg'
    },
    {
    images: '/pages/images/login.jpg'
    },
    {
    images: '/pages/images/login.jpg'
    }
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 500,
    duration: 100,
    circular: true,
    beforeColor: "white",//指示点颜色 
    afterColor: "coral",//当前选中的指示点颜色 
    previousmargin:'20px',//前边距
    nextmargin:'20px',//后边距
    // 通告栏消息
    text:'pppppppppppppppppppppppppppppppppppppp',
    speedValue:"30",
  },
  //轮播图的切换事件 
 swiperChange: function (e) {
  console.log(e.detail.current);
  this.setData({
    swiperCurrent: e.detail.current //获取当前轮播图片的下标
  })
  },
  //滑动图片切换 
  chuangEvent: function (e) { 
  this.setData({
  swiperCurrent: e.currentTarget.id
  })
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  changeName: function(e) {
    wx.navigateTo({
      url:  "../login/login"
    })
    // sent data change to view
    this.setData({
      name: 'MINA'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
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
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
