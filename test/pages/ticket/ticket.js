Page({
  data: {
    ticketType: ['普通发票', '专用发票'],
    ticketTypeIndex: 0,
    ticketContent: ['住宿费', '餐饮费'],
    ticketContentIndex: 0,
    ticketHeaderType: ['单位', '个人'],
    ticketHeader: '',
    ticketNum: '',
    ticketInfo: {
      type:0
    }
  },
  bindTicketType: function (e) {
    console.log(e.details)
  },
  onLoad: function () {
    var that = this
    //获取发票抬头
    wx.getSetting({
      success(res) {
        if (!res.authSetting['scope.invoiceTitle']) {
          wx.authorize({
            scope: 'scope.invoiceTitle',
            success() {
              // 用户已经同意小程序使用录音功能，后续调用 wx.startRecord 接口不会弹窗询问
              console.log('调用了')
              wx.chooseInvoiceTitle()
            },
            fail(){
              console.log('此权限被放弃了')
              //提示可以通过打开设置打开这个权限
              wx.showModal({
                title: '已禁止发票信息权限',
                content: '可以通过确认键重新打开权限',
                success: function(res) {
                  console.log(res)
                  wx.openSetting({
                    success: (res) => {
                      console.log(res)
                      /*
                       * res.authSetting = {
                       *   "scope.userInfo": true,
                       *   "scope.userLocation": true
                       * }
                       */
                    }
                  })
                }
              })
            }
          })
        } else {
          console.log('发票抬头')
          var info = wx.chooseInvoiceTitle({
            success: function (res) {
              console.log(res)
              that.setData({
                ticketInfo: res
              })

            },
            fail: function () {
              wx.showModal({
                title: '提示',
                content: '这是测试取消',
                success: function (res) {
                  if (res.confirm) {
                    console.log('用户点击确定')
                  } else if (res.cancel) {
                    console.log('用户点击取消')
                  }
                }
              })
            }
          })

        }
      }
    })
  },
  onShow: () => {

  }

})