var trueTime = function (year, month, day) {
  return {
    year: new Date(year, month, day).getFullYear(),
    month: new Date(year, month, day).getMonth() + 1 > 10 ? new Date(year, month, day).getMonth() + 1 : '0' + (new Date(year, month, day).getMonth() + 1),
    day: new Date(year, month, day).getDate() > 10 ? new Date(year, month, day).getDate() : '0' + (new Date(year, month, day).getDate())
  }
}

var today = function () {
  var year = new Date().getFullYear()
  var month = new Date().getMonth() + 1
  var day = new Date().getDate()
  return {
    year: year,
    month: month,
    day: day
  }
}

var fomatteDate = function (year, month, day, space) {
  return [trueTime(year, month, day).year, trueTime(year, month, day).month, trueTime(year, month, day).day].join(space)
}
/**
 * day1,day2都是具体的日期，类似与2017-08-11或这2017/08/11
 * space是上述日期的分隔符
 */
var dateCompare = function (day1, day2) {
  return new Date(day1.year, day1.month - 1, day1.day).getTime() - new Date(day2.year, day2.month -1, day2.day).getTime()
}
exports.dateCompare = dateCompare;
exports.today = today;
exports.trueTime = trueTime;
exports.fomatteDate = fomatteDate;
var canlender = function () {
  var last = 10


  var monthDays = function (year, month) {
    var time1 = new Date(year, month, 1).getTime()
    var time2 = new Date(year, month + 1, 1).getTime()
    return (time2 - time1) / (3600 * 1000 * 24)
  }


  var generateDate = function () {
    var month = today().month - 1
    var day = today().day
    var year = today().year
    var obj = []
    console.log(month, day, year)
    for (var i = month; i < (month + last); i++) {
      var data = {
        data: []
      }
      obj.push(data)
      for (var j = 1; j <= monthDays(year, i); j++) {
        data.data.push({
          'month': trueTime(year, i, j).month,
          'year': trueTime(year, i, j).year,
          "week": new Date(year, i, j).getDay(),
          "day": j,
          "before": new Date().getTime() > new Date(year, i, j + 1).getTime(),
          "enter": false,
          "leave": false
        })
      }

    }
    return obj;
  }
  return generateDate()
}

var dateSpace = function (date1, data2) {
  return (new Date(date1.year, date1.month, date1.day).getTime() - new Date(date2.year, date2.month, date2.day).getTime()) / (3600 * 100 * 24)
}

exports.canlender = canlender;
exports.dateSpace = dateSpace;
Page({
  data: {
    enter: [],
    leave: [],
    beginDate: {},
    endDate: {},
    cals: canlender(),
    classname: 'cal-notlive'
  },
  onload: function (options) {
    var url = options.url;
    console.log(this.data.enter)
  },
  chooseDate: function (ev) {
    console.log('选择了图')
    var i = ev.currentTarget.dataset.i
    var j = ev.target.dataset.j
    var isBefore = ev.target.dataset.before
    var date = {
      year: ev.target.dataset.year,
      month: ev.target.dataset.month,
      day: ev.target.dataset.day
    }
    console.log(date)
    console.log(i, j, isBefore)
    if (isBefore) {
      return;
    }
    //如果住店未选
    console.log(typeof this.data.enter[0])
    if (!this.data.enter[1]) {
      console.log('住店1')
      this.data.enter[0] = i
      this.data.enter[1] = j
      this.setData({
        enter: this.data.enter,
        beginDate: date
      })
      return;
    }
    //住店选了
    if (this.data.enter[1]) {
      //但是在所选日期之前，住店重选
      if (this.data.enter[0] > i || (this.data.enter[0] == i && this.data.enter[1] > j)) {
        console.log('住店2')
        this.setData({
          enter: [i, j],
          beginDate: date
        })
      } else {
        console.log('离店')
        //住店选了，在住店之后
        this.setData({
          leave: [i, j],
          endDate: date
        })
        //保存最后的日期选择
        wx.setStorageSync('beginDate', JSON.stringify(this.data.beginDate));
        wx.setStorageSync('endDate', JSON.stringify(this.data.endDate));
        //离店选中跳转,考虑一下要不要等一下
        wx.navigateBack({
          delta: 1
        })
      }
    }
  }
})