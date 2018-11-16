//app.js
const mtjwxsdk = require("./utils/mtj-wx-sdk.js");

App({
  onLaunch: function () {
    var that = this;
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

  // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        if (res.code) {
          wx.request({
            url: this.globalData.url + "/getUserOppenId",
            data: {
              code: res.code
            },
            success:(res) => {
              console.log("获取open id")
              console.log(res.data.openid)
              wx.setStorageSync('openid', res.data.openid)
              that.globalData.openID = res.data.openid
            },
            fail: (error) => {
              console.log(error)
              wx.showToast({
                title: '抱歉，出现一个错误',
                icon: 'none',
                duration: 1500
              })
            }
          })
        }
      }
    });
  },
  // 全局对象
  globalData: {
    userInfo: null,
    url: "https://www.persistin.com/daoshu",
    openID: null,
    userList: null,
    rpxWidth: null,
    rpxHeight: null
  }
})