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

var fomatteDate = function (year,month,day,space){
  return [trueTime(year, month, day).year, trueTime(year, month, day).month, trueTime(year, month, day).day].join(space)
}

exports.today = today;
exports.trueTime = trueTime;
exports.fomatteDate = fomatteDate;
var canlender = function () {
  var last = 10
  /**
   * day1,day2都是具体的日期，类似与2017-08-11或这2017/08/11
   * space是上述日期的分隔符
   */
  var dateCompare = function (day1, day2, space) {
    var arr1 = day1.split(space)
    var arr2 = day1.split(space)
    return new Date(arr1[0], arr1[1] - 1, arr1[2]).getTime() > new Date(arr2[0], arr2[1] - 1, arr2[2]).getTime()
  }

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

var dateSpace = function (date1,data2){
  return (new Date(date1.year, date1.month, date1.day).getTime() - new Date(date2.year, date2.month, date2.day).getTime())/(3600 * 100 * 24)
}

exports.canlender = canlender;
exports.dateSpace = dateSpace;