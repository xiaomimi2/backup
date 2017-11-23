var util = require('../../utils/util.js')
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
    util.authInvoiceTitle(this, function (res){
       this.setData({
           ticketInfo: res
       })
    })
  },
  onShow: () => {

  }

})