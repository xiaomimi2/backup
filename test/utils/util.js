const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

/**
 * [serviceImageTable description] 酒店服务对应的iconfont的样式库
 * @param  {[type]} str [description]
 * @return {[type]}     [description]
 */
const serviceImageTable = function (str) {
  var res
  switch (str) {
    case 'atm机':
      res = 'icon-ATM';
      break;
    case '停车场':
      res = 'icon-tingche';
      break;
    case '信用卡/银联卡收费':
      res = 'icon-xinyongqia';
      break;
    case '叫醒服务':
      res = 'icon-jiaoxingfuwu';
      break;
    case '24小时前台接待服务':
      res = 'icon-24xiaoshiqiantaifuwu';
      break;
    case '行李寄存':
      res = 'icon-hanglijicun';
      break;
    case '接送机服务':
      res = 'icon-jiesongjifuwu2';
      break;
    case '雨伞租借服务':
      res = 'icon-yusan';
      break;
    case '叫车服务':
      res = 'icon-qiche';
      break;
    case '代订机票':
      res = 'icon-jipiaoyuding';
      break;
    case '代订火车票':
      res = 'icon-huochepiao';
      break;
    case 'wifi':
      res = 'icon-wifi-';
      break;
    case '宠物携带':
      res = 'icon-chongwu';
      break;
    case '拖鞋':
      res = 'icon-tuoxie';
      break;
    case '电吹风':
      res = 'icon-xiangqingchuifengji';
      break;
    case '空调':
      res = 'icon-kongtiao';
      break;
    case '电水壶':
      res = 'icon-dianreshuihu-copy';
      break;
    case '台式电脑':
      res = 'icon-taishidiannao';
      break;
    case '写字台':
      res = 'icon-shuzhuo';
      break;
    case '针线包':
      res = 'icon-zhenxianbao';
      break;
    case '阳台':
      res = 'icon-yangtai';
      break;
    case '座椅':
      res = 'icon-zuoyi';
      break;
    case '暖气':
      res = 'icon-nuanqi';
      break;
    case '24小时热水':
      res = 'icon-xiaoshireshui';
      break;
    case '独立卫生间':
      res = 'icon-duliweishengjian';
      break;
    case '办公用品（笔、便签）':
      res = 'icon-bangongyongpinxuqiu';
      break;
    case '有线电视':
      res = 'icon-dianshi';
      break;
    case '淋浴':
      res = 'icon-linyu-';
      break;
    case '洗漱用品':
      res = 'icon-muyulu';
      break;
    default:
      console.error('存在不存在的酒店服务文字');
      break;
  }
  return res
}
/**
 * 
 */
const compatibility = (fn, msg) => {
  if (wx.openBluetoothAdapter) {
    wx.openBluetoothAdapter()
  } else {
    // 如果希望用户在最新版本的客户端上体验您的小程序，可以这样子提示
    wx.showModal({
      title: '提示',
      content: msg || '当前微信版本过低，无法使用该功能，请升级到最新微信版本后重试。'
    })
  }
}
/**
 * 包括了pixelRatio,version,screenWidth,screenHeight,system,version and so on
 */
const wxBaseInfo = () => {
  return wx.getSystemInfoSync()
}

/**微信授权  1.2.0版本开始支持,会立刻弹窗询问用户是否同意授权小程序使用某项功能或获取用户的某些数据，但不会实际调用对应接口
 * scope.userInfo
*/
const authInvoiceTitle = (obj, fn) => {
  wx.getSetting({
    success(res) {
      if (!res.authSetting['scope.invoiceTitle']) {
        wx.authorize({
          scope: 'scope.invoiceTitle',
          success() {
            // 用户已经同意小程序使用录音功能，后续调用 wx.startRecord 接口不会弹窗询问
            console.log('调用了')
            wx.chooseInvoiceTitle({
              success: function (res) {
                fn.call(obj, res)
              }
            })
          },
          fail() {
            console.log('此权限被放弃了')
            //提示可以通过打开设置打开这个权限
            wx.showModal({
              title: '已禁止发票信息权限',
              content: '可以通过确认键重新打开权限,或者稍后需要的时候可以通过点击右上角，选择关于xx,然后再点击右上角选择设置，进去设置相关的权限',
              success: function (res) {
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
        wx.chooseInvoiceTitle({
          success: function (res) {
            fn.call(obj, res)
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
}
/**
 * 验证获取定位
 * 用这个方法可以获取经纬度
  altitude
  longitude
 */
const authGetLocation = (obj, fn) => {
  wx.getSetting({
    success(res) {
      if (!res.authSetting['scope.userLocation']) {
        wx.authorize({
          scope: 'scope.userLocation',
          success() {
            // 用户已经同意小程序使用录音功能，后续调用 wx.startRecord 接口不会弹窗询问
            console.log('调用了')
            wx.getLocation({
              success: function (res) {
                fn.call(obj, res)
              }
            })
          },
          fail() {
            console.log('此权限被放弃了')
            //提示可以通过打开设置打开这个权限
            wx.showModal({
              title: '已禁止定位权限',
              content: '可以通过确认键重新打开权限,或者稍后需要的时候可以通过点击右上角，选择关于xx,然后再点击右上角选择设置，进去设置相关的权限',
              success: function (res) {
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
        console.log('获取地址')
        wx.getLocation({
          success: function (res) {
            console.log(res)
            fn.call(obj, res)
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
}

/**
 * 验证获取通讯地址
 */
const authGetTelAddress = (obj, fn) => {
  wx.getSetting({
    success(res) {
      if (!res.authSetting['scope.address']) {
        wx.authorize({
          scope: 'scope.address',
          success() {
            // 用户已经同意小程序使用录音功能，后续调用 wx.startRecord 接口不会弹窗询问
            console.log('通讯地址')
            wx.chooseAddress({
              success: function (res) {
                fn.call(obj, res)
              }
            })
          },
          fail() {
            console.log('此权限被放弃了')
            //提示可以通过打开设置打开这个权限
            wx.showModal({
              title: '已禁止调用通讯地址',
              content: '可以通过确认键重新打开权限,或者稍后需要的时候可以通过点击右上角，选择关于xx,然后再点击右上角选择设置，进去设置相关的权限',
              success: function (res) {
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
        console.log('获取地址')
        wx.chooseAddress({
          success: function (res) {
            console.log(res)
            fn.call(obj, res)
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
}

/**
 * 获取用户信息
 */
const authUserInfo = (obj, fn) => {
  wx.getSetting({
    success(res) {
      if (!res.authSetting['scope.userInfo']) {
        wx.authorize({
          scope: 'scope.userInfo',
          success() {
            // 用户已经同意小程序使用录音功能，后续调用 wx.startRecord 接口不会弹窗询问
            console.log('用户信息')
            wx.getUserInfo({
              success: function (res) {
                console.log(res)
                fn.call(obj, res)
              }
            })
          },
          fail() {
            console.log('获取用户信息内容失败')
            //提示可以通过打开设置打开这个权限
            // wx.showModal({
            //   title: '已禁止调用通讯地址',
            //   content: '可以通过确认键重新打开权限,或者稍后需要的时候可以通过点击右上角，选择关于xx,然后再点击右上角选择设置，进去设置相关的权限',
            //   success: function (res) {
            //     console.log(res)
            //     wx.openSetting({
            //       success: (res) => {
            //         console.log(res)
            //         /*
            //          * res.authSetting = {
            //          *   "scope.userInfo": true,
            //          *   "scope.userLocation": true
            //          * }
            //          */
            //       }
            //     })
            //   }
            // })
          }
        })
      } else {
        console.log('获取地址')
        wx.getUserInfo({
          success: function (res) {
            fn.call(obj, res)
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
}

/**
 * 验证登录
 */
const checkLogin = () => {
  wx.checkSession({
    success: function () {
      //session 未过期，并且在本生命周期一直有效,这里登录可能做过的事情，比如说获取用户信息（withCredential）和电话，这两个是在登录的前提下需要的。
      console.log('还在登录期内')
    },
    fail: function () {
      //登录态过期
      console.log('重新登录')
      wx.login() //重新登录，通过res.code送去后台后去openid,unionid,session_key
    }
  })
}

/**同步获取第三放平台的config数据 */
var getThirdFloorConfig = () =>{
  let extConfig = wx.getExtConfigSync ? wx.getExtConfigSync() : {}
  return extConfig
}
module.exports = {
  formatTime: formatTime,
  serviceImageTable: serviceImageTable,   
  authGetTelAddress: authGetTelAddress,
  authInvoiceTitle: authInvoiceTitle,
  authGetLocation: authGetLocation,
  authUserInfo: authUserInfo,
  checkLogin: checkLogin
}
