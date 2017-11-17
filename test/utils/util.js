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

module.exports = {
  formatTime: formatTime,
  serviceImageTable: serviceImageTable
}
