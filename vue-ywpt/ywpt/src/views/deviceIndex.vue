<template>
  <article>
    <ol class="breadcrumb">
      <li><a href="#">运维平台</a></li>
      <li>设备管理</li>
      <li>指标列表</li>
    </ol>
    <h4>指标列表<small id="recode">(共{{total}}条记录)</small></h4>
    <yw-search v-on:tableSearch="searchWarn" :needProject="true" :needDevice="true" :needIndex="true" :needProduct="true"></yw-search>
    <div class="list_table_show box box-primary">
      <table class="table table-responsive">
        <thead>
          <tr>
            <th>设备名称</th>
            <th>检测指标</th>
            <th>状态</th>
            <th>值</th>
            <th>告警阈值</th>
            <th>显示</th>
          </tr>
        </thead>
        <tbody>
          <template v-for="(item,index) in indexResult" v-if="indexResult.length">
            <tr>
              <td :rowspan="item.warn.length">{{(item.IP ? item.IP + '-' : '') + (item.RoomID ? item.RoomID + '-': '') + (item.DeviceID ? item.DeviceID : '')}}</td>
              <td>{{item.warn[0][0]}}</td>
              <td><span class="square" :class="{'yellow':item.warn[0][1] == 1, 'green':item.warn[0][1] == 0, 'red':item.warn[0][1] == 2}"></span></td>
              <td>{{item.warn[0][2]}}</td>
              <td>{{item.warn[0][3]}}</td>
              <td :rowspan="item.warn.length"><span class="btn btn-default" data-id="20474792145c" data-toggle="modal" data-target="#myModal_2">设备信息</span></td>
            </tr>
            <tr v-for="(warn,ind) in item.warn" v-if="ind > 0">
              <td>{{warn[0]}}</td>
              <td><span class="square" :class="{'yellow':warn[1] == 1, 'green':warn[1] == 0, 'red':warn[1] == 2}"></span></td>
              <td>{{warn[2]}}</td>
              <td>{{warn[3]}}</td>
            </tr>
          </template>
        </tbody>
      </table>
    </div>
    <yw-pagination v-if="total !== 0" :pages="Math.ceil(total/10) > 2 ? 3: Math.ceil(total/10)" :currentPage="current" v-on:renderTable="pageChangeRenderResult"></yw-pagination>
   <!--  <ul class="pagination pagination-sm inline pull-right">
      <li><a href="#1">&laquo;</a></li>
      <li class="active"><a href="#1">1</a></li>
      <li><a href="#1">2</a></li>
      <li><a href="#1">3</a></li>
      <li><a href="#1">&raquo;</a></li>
    </ul> -->
  </article>
</template>
<script>
  
</script>
<script>

import ywSearch from '../components/search.vue';
import ywPagination from "../components/pagination.vue"
import { searchWarnDeviceList } from '../assets/js/common.js';
export default {
  components: {
    ywSearch,
    ywPagination
  },
  data() {
    return {
      indexResult: [],
      total:0,
      current:{
        page:1
      },
      lastArgs:{}
    }
  },
  methods: {
    searchWarn(obj) {
      var vm = this
      this.lastArgs = {
        project:obj.project,
        product:obj.product,
        type:obj.type,
        index:obj.index,
        device:obj.device
      }
      searchWarnDeviceList(obj.project, obj.product, obj.type, this.current.page, obj.index, obj.device).done(function(res) {
        if (res.rescode == 200) {
          vm.indexResult = res.Content
          vm.total = res.total
        }
        console.log(res)
      })
    },
    pageChangeRenderResult() {
       this.searchWarn(this.lastArgs)
    }
  },
  computed: {

  },
  mounted() {
	
  },
  created() {
     var _mtac = {};
    (function() {
      var mta = document.createElement("script");
      mta.src = "http://pingjs.qq.com/h5/stats.js?v2.0.4";
      mta.setAttribute("name", "MTAH5");
      mta.setAttribute("sid", "500533267");

      var s = document.getElementsByTagName("script")[0];
      s.parentNode.insertBefore(mta, s);
    })(); 
  }

}

</script>
