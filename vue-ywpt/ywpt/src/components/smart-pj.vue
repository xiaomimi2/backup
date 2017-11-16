<template>
  <div class="modal" tabindex="-1" role="dialog" :class="{fade:isshow.bool, in: isshow.bool}">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          项目名称
        </div>
        <div class="modal-body clearfix">
          <div class="col-xs-2 pprovince">
            <ul>
              <li :class="{active:activeProivce == '全国'}" @click="changeProvice('全国')">全国</li>
              <li v-for="(value, key) in provices" :class="{active:activeProivce == key}" @click="changeProvice(key)">{{key}}</li>
            </ul>
          </div>
          <div class="col-xs-10">
            <form class="form-horizontal">
              <div class="form-group" style="margin-top:10px">
                <label class="col-xs-3 control-label">项目搜索:</label>
                <div class="col-xs-5">
                  <input type="text" class="form-control" placeholder="请输入项目名" id="smart_project" @keyup="searchProject" v-model="svalue">
                </div>
              </div>
              <div class="form-group">
                <div class="col-xs-offset-3 col-xs-10 checklist">
                  <template v-for="item in smartResult">
                    <div class="checkbox">
                      <label>
                        <input type="checkbox" @click="addToProject(item)" :checked="(item && checkedProject.indexOf(item[1]) > -1)">{{item && item[0]}}
                      </label>
                    </div>
                  </template>
                </div>
              </div>
            </form>
            <div class="modal-footer">
              <button type="button" class="btn btn-primary"  @click="emitToSearchProject">添加</button>
              <button type="button" class="btn btn-primary"  @click="closeModal">关闭</button>

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </article>
</template>
<style>
	
	.fade{
		display: block
	}

    .pprovince{
    	padding:0px;
    	text-align: center;
    }
    .pprovince li{
    	cursor:pointer;
    }
	.pprovince li.active{
	 	background-color: #89A3C3;
	 	color:#fff;
	 	display: block;
	 	width:100%;
	}
  /**
   * 这个要加个media查询
   */
  .modal-body{
    max-height:450px;
    overflow-x:hidden;
    overflow-y:scroll;
  }
</style>
<script>
import { searchProvinceProjectList } from '../assets/js/common.js'
import _ from 'lodash'
export default {
  data() {
    return {
      provices: {},
      activeProivce: '全国',
      needAddProject: [],//这需要存储的选中的项目，包括中文名和英文名。
      checkedProject:[],//这个只和激活状态相关。
      smartResult:[],//项目智能搜索的结果存取
      svalue:''//搜索框双向绑定值。
    }
  },
  props:['isshow'],
  methods: {
  	closeModal(ev) {
      if(ev.target.className)
  		this.isshow.bool = false;
  		// this.$emit('pjIsShow',{pj:this.isshow})
  	},
    searchProject() {
      console.log('这是搜索接口')
      this.smartResult = []
      var vm = this
      //this.svalue//这里支持中文搜索和英文搜索
      _.values(this.provices).forEach(function (item) {
        console.log(item[0][1])
        console.log(vm.svalue)
        if(item[0][0].indexOf(vm.svalue) > -1  || item[0][1].indexOf(vm.svalue) > -1) {
           vm.smartResult.push(item[0])
        }
      })
    },
    changeProvice(value) {
      this.activeProivce = value
      if(value == '全国') {
        this.smartResult = _.values(this.provices).map(function (item) {
          return item[0]
        })
      } else {
        this.smartResult = this.provices[value]
      }
    },
    addToProject(pj) {
      for(let i = 0 ; i < this.needAddProject.length; i++) {
        if(this.needAddProject[i][0] === pj[1]) {
           this.needAddProject.splice(i, 1)
           let index = this.checkedProject.indexOf(pj[1])
           this.checkedProject.splice(index, 1)
           return
        } 
      }
      this.needAddProject.push([pj[1],pj[0]])
      this.checkedProject.push(pj[1])
    },
    emitToSearchProject() {
    	this.$emit('activepj',this.needAddProject)
      this.isshow.bool = false;
    }
  },
  created() {
    var vm = this
    searchProvinceProjectList().done(function(res) {
      console.log(res)
      if (res.rescode == 200) {
        vm.provices = res.province //[{上海:["上海泓颐精品酒店","hongyi"]}]
        vm.smartResult = _.values(vm.provices).map(function (item) {
          return item[0]
        })
      }
    })
  }
}

</script>
