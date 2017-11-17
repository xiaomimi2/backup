var config = require('../../utils/config.js')
var cal = require('../calender/calender.js')
var util =require('../../utils/util.js')
Page({
  data:{
    hotels:{},
    showid:null,
    beginDate:{},
    endDate:{},
    space:0
  },
  onLoad: function (options){
    console.log('onload')
    console.log(options)
    
      var nowYear = cal.today().year
      var nowMonth = cal.today().month
      var nowDay = cal.today().day
      var beginDate = cal.fomatteDate(nowYear, nowMonth - 1, nowDay, '-')
      var endDate = cal.fomatteDate(nowYear, nowMonth - 1, nowDay + 1, '-')
      this.setData({
        beginDate: cal.trueTime(nowYear, nowMonth - 1, nowDay),
        endDate: cal.trueTime(nowYear, nowMonth - 1, nowDay + 1),
        space: 1
      })
    
    var that = this
    console.log(beginDate,endDate)
     wx.request({
       url: config.prefix + 'backend/spot_detail?spot_id=' + options.id + "&startDate=" + beginDate +  "&endDate=" + endDate,
       header:{
         "content-type":"application/json"
       },
       success: function(res) {
         console.log(res.data)
         if(res.data.rescode != 200) {
             wx.showToast({
               title:res.data.errinfo,
               icon:'loading',
               fail:function (){
                 console.log('微信消息提示失败')
               },
               duration:2000
             })
             return;
         }
         //字符串逗号添加的改成数组
         res.data.goods.map(function (item) {
           item.roomLabel = item.roomLabel.split(',')
         });
         var service = res.data.spots.roomlabel.split(',')
         var service2 = service.map(function (son){
            return {
               name:son,
               classname: util.serviceImageTable(son)
            }
         })
        console.log(service2)
        res.data.spots.roomlabel = service2
         that.setData({
            hotels:res.data
         })
       }
     })
  },
  onReady: function() {
    console.log('ready')
  },
  onShow: function (options){
    console.log('show')
    var beginDate = JSON.parse(wx.getStorageSync('beginDate'))
    var endDate = JSON.parse(wx.getStorageSync('endDate'))
    console.log(beginDate, endDate)
    // if(beginDate && beginDate !== 'undefined'){
    //   this.setData({
    //     beginDate: beginDate,
    //     endDate: endDate
    //   })
    // }
    //改变日期了需要重新获取数据，没改变就不需要
    console.log(cal.dateCompare(this.data.beginDate, beginDate))
    if (cal.dateCompare(this.data.beginDate, beginDate) != 0 || cal.dateCompare(this.data.endDate,endDate) != 0) {
       //重新发送请求
      console.log('需要重新请求')
      this.setData({
        beginDate: beginDate,
        endDate: endDate
      })
      return;
    }
    console.log('不请求')


  },
  onHide: function (){
    console.log('reserve hide')
  },
  showDetails: function (ev){
    var id = ev.currentTarget.dataset.id
    if(id == this.data.showid) {
       this.setData({
         showid:null
       })
    } else {
      this.setData({
        showid:id
      })
    }
  }
})