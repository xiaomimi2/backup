<template>
  <div>
    <ol class="breadcrumb">
      <li><a href="#">运维平台</a></li>
      <li>错误管理</li>
      <li>错误列表</li>
    </ol>
    <h4>错误列表<small id="record">(共10条记录)</small></h4>
     <yw-search v-on:tableSearch="searchResult"  :needDevice="false" :needIndex="false"  :warnColor="false" :needCategory="true" :needErrName="true" :needVersion="true"></yw-search>
    <div class="list_table_show box box-primary">
      <table class="table table-responsive">
        <thead>
          <tr>
            <th>错误类型</th>
            <th>错误名称</th>
            <th>数量<i class="iconfont icon-"></i></th>
            <th>影响版本号</th>
            <th>错误详情</th>
            <th>影响项目数</th>
            <th>影响终端数</th>
            <th>最后发生时间</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Boot</td>
            <td>主页地址无法访问</td>
            <td>0</td>
            <td>
              <div class="dropdown">
                <button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">1067<span class="caret"></span></button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
                  <li>1067</li>
                </ul>
              </div>
            </td>
            <td style="cursor:pointer"><span class="btn btn-xs btn-default" data-toggle="modal" data-target="#myModal" data-md5="6175876f9dd26ea0e07d9e9f99f6cc38">...</span></td>
            <td style="cursor:pointer" data-toggle="modal" data-target="#myModal_2" data-md5="6175876f9dd26ea0e07d9e9f99f6cc38">1</td>
            <td style="cursor:pointer" data-action="to-device" data-md5="6175876f9dd26ea0e07d9e9f99f6cc38">1</td>
            <td>2017-09-18 15:20:35.247000</td>
          </tr>
          <tr>
            <td>Boot</td>
            <td>主页地址无法访问</td>
            <td>0</td>
            <td>
              <div class="dropdown">
                <button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">1067<span class="caret"></span></button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
                  <li>1067</li>
                </ul>
              </div>
            </td>
            <td style="cursor:pointer"><span class="btn btn-xs btn-default" data-toggle="modal" data-target="#myModal" data-md5="49efb7d39a2fff26245a00ebe0b9ae93">...</span></td>
            <td style="cursor:pointer" data-toggle="modal" data-target="#myModal_2" data-md5="49efb7d39a2fff26245a00ebe0b9ae93">1</td>
            <td style="cursor:pointer" data-action="to-device" data-md5="49efb7d39a2fff26245a00ebe0b9ae93">1</td>
            <td>2017-09-18 15:18:05.166000</td>
          </tr>
          <tr>
            <td>Upgrade</td>
            <td>下载升级包失败</td>
            <td>0</td>
            <td>
              <div class="dropdown">
                <button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">1069<span class="caret"></span></button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
                  <li>1069</li>
                  <li>1068</li>
                  <li>1070</li>
                  <li>1067</li>
                </ul>
              </div>
            </td>
            <td style="cursor:pointer"><span class="btn btn-xs btn-default" data-toggle="modal" data-target="#myModal" data-md5="b519ab8fee7cdc6bb4848fa095aa8eaf">...</span></td>
            <td style="cursor:pointer" data-toggle="modal" data-target="#myModal_2" data-md5="b519ab8fee7cdc6bb4848fa095aa8eaf">1</td>
            <td style="cursor:pointer" data-action="to-device" data-md5="b519ab8fee7cdc6bb4848fa095aa8eaf">4</td>
            <td>2017-09-18 15:08:01.993000</td>
          </tr>
          <tr>
            <td>Download</td>
            <td>下载失败</td>
            <td>0</td>
            <td>
              <div class="dropdown">
                <button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">1069<span class="caret"></span></button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
                  <li>1069</li>
                  <li>1068</li>
                  <li>1070</li>
                  <li>1067</li>
                </ul>
              </div>
            </td>
            <td style="cursor:pointer"><span class="btn btn-xs btn-default" data-toggle="modal" data-target="#myModal" data-md5="65f18ec562c7c95928dca48d44622378">...</span></td>
            <td style="cursor:pointer" data-toggle="modal" data-target="#myModal_2" data-md5="65f18ec562c7c95928dca48d44622378">1</td>
            <td style="cursor:pointer" data-action="to-device" data-md5="65f18ec562c7c95928dca48d44622378">4</td>
            <td>2017-09-18 15:08:01.991000</td>
          </tr>
          <tr>
            <td>Upgrade</td>
            <td>下载升级包失败</td>
            <td>0</td>
            <td>
              <div class="dropdown">
                <button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">1069<span class="caret"></span></button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
                  <li>1069</li>
                  <li>1068</li>
                  <li>1070</li>
                  <li>1067</li>
                </ul>
              </div>
            </td>
            <td style="cursor:pointer"><span class="btn btn-xs btn-default" data-toggle="modal" data-target="#myModal" data-md5="b519ab8fee7cdc6bb4848fa095aa8eaf">...</span></td>
            <td style="cursor:pointer" data-toggle="modal" data-target="#myModal_2" data-md5="b519ab8fee7cdc6bb4848fa095aa8eaf">1</td>
            <td style="cursor:pointer" data-action="to-device" data-md5="b519ab8fee7cdc6bb4848fa095aa8eaf">4</td>
            <td>2017-09-18 15:08:01.993000</td>
          </tr>
          <tr>
            <td>Download</td>
            <td>下载失败</td>
            <td>0</td>
            <td>
              <div class="dropdown">
                <button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">1069<span class="caret"></span></button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
                  <li>1069</li>
                  <li>1068</li>
                  <li>1070</li>
                  <li>1067</li>
                </ul>
              </div>
            </td>
            <td style="cursor:pointer"><span class="btn btn-xs btn-default" data-toggle="modal" data-target="#myModal" data-md5="65f18ec562c7c95928dca48d44622378">...</span></td>
            <td style="cursor:pointer" data-toggle="modal" data-target="#myModal_2" data-md5="65f18ec562c7c95928dca48d44622378">1</td>
            <td style="cursor:pointer" data-action="to-device" data-md5="65f18ec562c7c95928dca48d44622378">4</td>
            <td>2017-09-18 15:08:01.991000</td>
          </tr>
          <tr>
            <td>JSON</td>
            <td>JSON解析错误</td>
            <td>0</td>
            <td>
              <div class="dropdown">
                <button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">1067<span class="caret"></span></button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
                  <li>1067</li>
                </ul>
              </div>
            </td>
            <td style="cursor:pointer"><span class="btn btn-xs btn-default" data-toggle="modal" data-target="#myModal" data-md5="fcc14c9bba1fcda253ae0207a1da8b06">...</span></td>
            <td style="cursor:pointer" data-toggle="modal" data-target="#myModal_2" data-md5="fcc14c9bba1fcda253ae0207a1da8b06">5</td>
            <td style="cursor:pointer" data-action="to-device" data-md5="fcc14c9bba1fcda253ae0207a1da8b06">23</td>
            <td>2017-09-18 14:29:26.598000</td>
          </tr>
          <tr>
            <td>CacheMoviesCategory</td>
            <td>下载电影列表失败</td>
            <td>0</td>
            <td>
              <div class="dropdown">
                <button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">1070<span class="caret"></span></button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
                  <li>1070</li>
                  <li>1067</li>
                </ul>
              </div>
            </td>
            <td style="cursor:pointer"><span class="btn btn-xs btn-default" data-toggle="modal" data-target="#myModal" data-md5="a3bdf7a1b7ca269379e5bfb6fa4746a0">...</span></td>
            <td style="cursor:pointer" data-toggle="modal" data-target="#myModal_2" data-md5="a3bdf7a1b7ca269379e5bfb6fa4746a0">2</td>
            <td style="cursor:pointer" data-action="to-device" data-md5="a3bdf7a1b7ca269379e5bfb6fa4746a0">22</td>
            <td>2017-09-18 14:04:17.336000</td>
          </tr>
          <tr>
            <td>Upgrade</td>
            <td>下载升级包失败</td>
            <td>0</td>
            <td>
              <div class="dropdown">
                <button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">1070<span class="caret"></span></button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
                  <li>1070</li>
                </ul>
              </div>
            </td>
            <td style="cursor:pointer"><span class="btn btn-xs btn-default" data-toggle="modal" data-target="#myModal" data-md5="f6317482116a167ade09f0accd81aafb">...</span></td>
            <td style="cursor:pointer" data-toggle="modal" data-target="#myModal_2" data-md5="f6317482116a167ade09f0accd81aafb">1</td>
            <td style="cursor:pointer" data-action="to-device" data-md5="f6317482116a167ade09f0accd81aafb">1</td>
            <td>2017-09-18 14:03:53.978000</td>
          </tr>
          <tr>
            <td>Download</td>
            <td>下载失败</td>
            <td>0</td>
            <td>
              <div class="dropdown">
                <button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">1070<span class="caret"></span></button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
                  <li>1070</li>
                </ul>
              </div>
            </td>
            <td style="cursor:pointer"><span class="btn btn-xs btn-default" data-toggle="modal" data-target="#myModal" data-md5="3b3695102b30836b77880a0c9ac5ece0">...</span></td>
            <td style="cursor:pointer" data-toggle="modal" data-target="#myModal_2" data-md5="3b3695102b30836b77880a0c9ac5ece0">1</td>
            <td style="cursor:pointer" data-action="to-device" data-md5="3b3695102b30836b77880a0c9ac5ece0">1</td>
            <td>2017-09-18 14:03:53.976000</td>
          </tr>
        </tbody>
      </table>
    </div>
    <ul class="pagination pagination-sm inline pull-right">
      <li class="first disabled" jp-role="first" jp-data="1"><a href="javascript:void(0);">首页</a></li>
      <li class="prev disabled" jp-role="prev" jp-data="0"><a href="javascript:void(0);">上一页</a></li>
      <li class="page active" jp-role="page" jp-data="1"><a href="javascript:void(0);">1</a></li>
      <li class="page" jp-role="page" jp-data="2"><a href="javascript:void(0);">2</a></li>
      <li class="page" jp-role="page" jp-data="3"><a href="javascript:void(0);">3</a></li>
      <li class="next" jp-role="next" jp-data="2"><a href="javascript:void(0);">下一页</a></li>
      <li class="last" jp-role="last" jp-data="457"><a href="javascript:void(0);">末页</a></li>
    </ul>
  </div>
</template>
<script>
  import ywSearch from '../components/search.vue'
  import {searchErrList} from '../assets/js/common.js'
  require('../assets/plugins/daterangepicker/daterangepicker.css')
  export default {
    data() {
      return {

      }
    },
    components:{
      ywSearch
    },
    methods:{
      searchResult(obj) {
        return searchErrList(obj.project, obj.type, obj.version, obj.category, obj.errName, obj.start, obj.end, start).done(function (res) {
          console.log(res)
        })
      }
    }
  }
</script>
