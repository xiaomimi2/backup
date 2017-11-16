<template>
  <div>
    <ol class="breadcrumb">
      <li><a href="#">运维平台</a></li>
      <li>设备管理</li>
      <li>设备列表</li>
    </ol>
    <h4>设备列表<small id="recode">(共{{total}}条记录)</small></h4>
    <yw-search v-on:tableSearch="searchWarn"  :needDevice="true" :needIndex="false" :needProduct="true" :warnColor="true"></yw-search>
    <div class="list_table_show box box-primary">
      <table class="table table-striped">
        <thead>
          <tr>
            <th>状态</th>
            <th>房间号</th>
            <th>设备ID</th>
            <th>IP地址</th>
            <th>内存</th>
            <th>容量</th>
            <th>显示</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in indexResult">
            <td><span class="square" :class="{'yellow':item.WarnFlag == 1, 'red':item.WarnFlag == 2, 'green':item.WarnFlag == 0}"></span></td>
            <td>{{item.RoomID}}</td>
            <td>{{item.DeviceID}}</td>
            <td>{{item.IP}}</td>
            <td>{{item.Mem}}</td>
            <td>{{item.Disk}}</td>
            <td><span class="btn btn-default" @click="showModal()">设备信息</span></td>
          </tr>
        </tbody>
      </table>
    </div>
    <yw-pagination v-if="total !== 0" :pages="Math.ceil(total/10) > 2 ? 3: Math.ceil(total/10)" :currentPage="current" v-on:renderTable="pageChangeRenderResult"></yw-pagination>
  </div>
</template>
<script>
  import ywSearch from '../components/search.vue';
  import ywPagination from "../components/pagination.vue";
  import {searchDeviceInfo} from "../assets/js/common.js"
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
          device:obj.device
        }
        searchDeviceInfo(obj.project, obj.product, obj.type, this.current.page, obj.device).done(function(res) {
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
      
    }
  }
  
</script>