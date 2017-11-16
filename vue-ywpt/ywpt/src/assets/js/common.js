 function setUrl(url) {
   var domain = 'http://monitor.cleartv.cn:86';
   return domain + url
 }

 /**
  * [smartDevice description] 终端id智能搜索
  * @param  {[type]} key          [description]
  * @param  {[type]} project_name [description]
  * @param  {[type]} device_type  [description]
  * @return {[type]}              [description]
  */
 export function smartDevice(key, project_name, device_type) {
   return $.ajax({
     type: 'post',
     url: setUrl('/backend/searchDeviceByVague'),
     dataType: 'json',
     data: {
       input_key: key,
       project_name: project_name.join(','),
       device_type: device_type.join(',')
     }
   })
 };
 /**
  * [searchErrName description]模糊查询错误名称
  * @param  {[type]} value [description]
  * @return {[type]}       [description]
  */
 export function searchErrName(value) {
   return $.ajax({
     type: 'POST',
     data: {
       input_key: value,
     },
     dataType: 'json',
     url: setUrl('/backend/searchErrName'),
   })
 }

 export function searchVersionList(value) {
   return $.ajax({
     type: 'POST',
     data: {
       input_key: value,
     },
     dataType: 'json',
     url: setUrl('/backend/searchVersionList'),
   })
 }
 /**搜索推荐的项目类型和产品类型
  * [getPjAndPT description]
  * @return {[type]} [description]
  */
 export function getPjAndPT() {
   return $.ajax({
     type: 'POST',
     url: setUrl('/backend/searchRecommendProjects'),
     dataType: 'json'
   })
 };

 /**
  * [IndexCategory description] 指标类型搜索
  */
 export function IndexCategory() {
   return $.ajax({
     type: 'POST',
     url: setUrl('/backend/searchWarnItem'),
     dataType: 'json'
   })
 };

 /**指标列表的详情
  * [searchWarnDeviceList description]
  * @return {[type]} [description]
  */
 export function searchWarnDeviceList(project_name, device_type, type, start, warns, devices) {
   return $.ajax({
     type: 'POST',
     url: setUrl('/backend/searchWarnDeviceList'),
     dataType: 'json',
     data: {
       project_name: project_name.join(','),
       device_type: device_type.join(','),
       notice_type: type,
       start_idx: start,
       page_size: 10,
       warn_item: JSON.stringify(warns),
       devices: JSON.stringify(devices)
     }
   })
 };

 /**
  * [searchProvinceProjectList description] 获得类型搜索的按省市分部的列表。
  * @return {[type]} [description]
  */
 export function searchProvinceProjectList() {
   return $.ajax({
     type: 'POST',
     url: setUrl('/backend/searchProvinceProjectList'),
     dataType: 'json'
   })
 }

 /**
  * [searchDeviceInfo description] 设备列表搜索结果
  * @return {[type]} [description]
  */
 export function searchDeviceInfo(project_name, device_type, type, start, devices) {
   return $.ajax({
     type: 'POST',
     url: setUrl('/backend/searchDeviceInfo'),
     data: {
       project_name: project_name.join(','),
       device_type: device_type.join(','),
       notice_type: type,
       start_idx: start,
       page_size: 10,
       devices: JSON.stringify(devices)
     },
     dataType: 'json'
   })
 }

 /**
  * [searchProjectInfo description] 这是项目管理表格
  * @return {[type]} [description]
  */
 export function searchProjectInfo() {
   return $.ajax({
     type: 'GET',
     url: setUrl('/backend/searchProjectInfo'),
     dataType: 'json'
   })
 }


 /**获取错误类别
  * [searchErrCategory description] 
  * @return {[type]} [description]
  */
 export function searchErrCategory() {
   return $.ajax({
     type: 'POST',
     url: setUrl('/backend/searchErrCategory'),
     dataType: 'json'
   })
 }

 /**
  * [searchErrList description]
  * @param  {[type]} project_name [description]数组
  * @param  {[type]} device_type  [description]数组
  * @param  {[type]} version      [description]数组
  * @param  {[type]} category     [description]数组
  * @param  {[type]} err          [description]数组
  * @param  {[type]} starttemp    [description]开始时间，时间戳
  * @param  {[type]} endtemp      [description]结束时间，时间戳
  * @param  {[type]} start        [description]分页起始页码
  * @return {[type]}              [description]
  */
 export function searchErrList(project_name, device_type, version, category, err, starttemp, endtemp, start) {
   return $.ajax({
     type: 'POST',
     url: setUrl('/backend/searchErrList'),
     dataType: 'json',
     data: {
       start:start,
       projectName: project_name.join(','),
       deviceType: device_type.join(','),
       versions: version.join(','),
       errCategory: category.join(','),
       errName: err.join(','),
       startTime: starttemp,
       endTime: endtemp,
       start_idx: start
     }
   })
 }


 export function initDate(start, end, autoinput) {
   function cb(start, end) {
     console.log(start, end)
     $('.reportrange span').html(start.format('YYYY/MM/DD') + ' - ' + end.format('YYYY/MM/DD'));
   }

   $('.reportrange').daterangepicker({
     startDate: start,
     endDate: end,
     ranges: {
       '今天': [moment(), moment().add(1, 'days')],
       '最近7天': [moment().subtract(6, 'days'), moment()],
       '最近15天': [moment().subtract(14, 'days'), moment()],
       '最近30天': [moment().subtract(29, 'days'), moment()],
     },
     locale: {
       applyLabel: '确定',
       cancelLabel: '取消',
       fromLabel: '起始时间',
       toLabel: '结束时间',
       customRangeLabel: '自定义',
       daysOfWeek: ['日', '一', '二', '三', '四', '五', '六'],
       monthNames: ['一月', '二月', '三月', '四月', '五月', '六月',
         '七月', '八月', '九月', '十月', '十一月', '十二月'
       ],
       firstDay: 1
     },
     autoUpdateInput: autoinput
   }, cb);
   //cb(start, end)
 }