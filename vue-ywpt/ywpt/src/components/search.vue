<template>
  <article>
    <div class="list_all" @click="closeSmartSearchPop">
      <div class="list_op" style="margin-top:-30px">
        <div class="clearfix" style="margin-bottom:10px">
          <div class="input-group" role="group" aria-label="..." v-if="needErrName">
            <input type="text" name="daterange" style="width:180px;border-radius:5px;outline:none;float:right;margin-right:16px" class="form-control reportrange" @click="changeTimespace">
            <div class="input-group-btn" style="text-align: right">
              <span class="btn btn-default btn-xs"  id="cleartypes" @click="clearAll">取消<i class="iconfont icon-shibai"></i></span>
            </div>
          </div>
          <div class="input-group" role="group" aria-label="..." v-else>
            <!--  <input type="text" name="daterange" style="width:180px;border-radius:5px;outline:none;float:right;margin-right:16px" class="form-control"> -->
            <div class="input-group-btn" style="text-align: right">
              <span style="font-size:12px;vertical-align: middle;margin-right:20px">状态选择：</span>
              <label class="radio-inline">
                <input type="radio" name="optionsRadios" id="optionsRadios" value="danger" :checked="activeType1" @click="changeType(2)"> <span class="square red"></span>
              </label>
              <label class="radio-inline">
                <input type="radio" name="optionsRadios" id="optionsRadios" value="warning" :checked="activeType2" @click="changeType(1)"><span class="square yellow"></span>
              </label>a
              <label class="radio-inline">
                <input type="radio" name="optionsRadios" id="optionsRadios" value="safe" :checked="activeType3" @click="changeType(0)"><span class="square green"></span>
              </label>
              
            </div><span class="btn btn-default btn-xs"  id="cleartypes" @click="clearAll">取消<i class="iconfont icon-shibai"></i></span>
          </div>
        </div>
        <div class="list_type_choose">
        </div>
      </div>
      <div class="list_nav_choose" v-if="specific">
        <span data-action="simplify_reverse" class="simplify_reverse iconfont icon-jia" @click="simpleMode"></span>
        <ul style="padding:5px 20px">
          <li class="label label-custom" v-for="active in activeAll">{{active}}</li>
        </ul>
      </div>
      <div class="list_types" v-else>
        <span class="more" @click="showProjectModal">更多</span>
        <span data-action="simplify" class="simplify iconfont icon-jian" @click="simpleMode"></span>
        <ul>
          <li>项目类型:</li>
          <li class="label" :class="{'label-custom': activePj.indexOf(pj[0]) > -1}" v-for="pj in recPj" @click="tableRender('pj',pj[0], pj[1])">{{pj[1]}}</li>
        </ul>
        <ul>
          <li>产品类型:</li>
          <li class="label" :class="{'label-custom': activePt.indexOf(pt[0]) > -1}" v-for="pt in recPt" @click="tableRender('pt',pt[0], pt[1])">{{pt[1]}}</li>
        </ul>
        <ul v-if="needDevice">
          <li>终端筛选:</li>
          <li class="label" :class="{'label-custom': activeDv.indexOf(dev[1]) > -1}" @click="tableRender('dv', dev[1], dev[0])" v-for="dev in device">{{dev[0]}}</li>
          <li @click.stop="showInputSearch($event,'dev')" class="label never" data-type="type" data-index="2" id="device_smart"><i class="plus iconfont icon-jia">
          <div class="device_plus" :class="{active:dvsmart}"><input type="text" id="devide_smart" v-model="sdv" @keyup="smartSearchDevice">
          <div>
            <span v-for="id in deviceList" @click="addToChoooseDev(id)">{{id[0]}}</span>
          </div>
          </div></i><i>(支持ip/roomid/mac地址搜索)</i></li>
        </ul>
        <ul v-if="needCategory">
          <li>错误类型:</li>
          <li v-for="catg in errCategory" class="label" :class="{'label-custom': activeCatg.indexOf(catg) > -1}" @click="tableRender('catg', catg, catg)">{{catg}}</li>
        </ul>
        <ul v-if="needErrName">
          <li>错误名称:</li>
          <li class="label" v-for="err in errName" :class="{'label-custom': activeErr.indexOf(err) > -1}" @click="tableRender('err', err, err)">{{err}}></li>
          <li @click.stop="showInputSearch($event,'err')" class="label never" id="device_smart"><i class="plus iconfont icon-jia">
          <div class="device_plus" :class="{active:errsmart}"><input type="text" id="devide_smart" v-model="serr" @keyup="smartSearchErr">
          <div>
            <span v-for="id in deviceList" @click="addToChooseErr(id)">{{id[0]}}</span>
          </div>
          </div></i><i>(中文搜索)</i></li>
        </ul>
        <ul v-if="needVersion">
          <li>版本号:</li>
          <li class="label" v-for="ver in versions" :class="{'label-custom': activeVer.indexOf(ver) > -1}" @click="tableRender('ver', ver, ver)">{{ver}}></li>
          <li @click.stop="showInputSearch($event,'ver')" class="label never" id="device_smart"><i class="plus iconfont icon-jia">
          <div class="device_plus" :class="{active:versmart}"><input type="text" id="devide_smart" v-model="sver" @keyup="smartSearchVer">
          <div>
            <span v-for="id in deviceList" @click="addToChooseVer(id)">{{id[0]}}</span>
          </div>
          </div></i><i>(中文搜索)</i></li>
        </ul>
        <ul v-if="needIndex">
          <li>指标类型:</li>
          <li class="label">1069</li>
          <li @click="tableRender('index',warn.Type + '-' + warn.NameEng, warn.TypeName + warn.Name)" class="label" :class="{'label-custom': activeIndex.indexOf(warn.Type + '-' + warn.NameEng) > -1}" v-for="warn in index">{{warn.TypeName + warn.Name}}</li>
        </ul>
      </div>
    </div>
    <yw-smartpj :isshow="pjshow" v-on:activepj="addtoActivePj"></yw-smartpj>
  </article>
</template>
<style>
.device_plus.active {
  display: block;
}

input[type=radio] {
  margin: 0px;
}

</style>
<script>
import { getPjAndPT, IndexCategory, smartDevice, searchErrCategory, searchErrName, searchVersionList, } from '../assets/js/common.js';
import ywSmartpj from '../components/smart-pj.vue';
import {getTodayAndTomorrow} from '../assets/js/util.js';
export default {
  data() {
    return {
      recPj: [], //这是推荐项目
      recPt: [], //这是推荐产品类型
      index: [], //这是指标搜索项
      activePj: [], //这是选中的项目,仅仅和class的激活状态有关,最后用在搜索接口
      activePt: [], //这是选中的产品类型,仅仅和class的激活状态有关
      activeDv: [], //这是选中的设备id,仅仅和class的激活状态有关
      activeIndex: [], //这是选中的指标类型,仅仅和class的激活状态有关,
      activeAll: [],
      dvsmart: false, //加号选中后是否弹出搜索框
      versmart: false,
      errsmart: false,
      device: [], //这是所有曾经被选中的设备id
      deviceList: [], //设备id智能搜索出来的roomid/ip/mac
      sdv: '', //智能搜索id的input框双向绑定值。
      serr: '',
      sver: '',
      type: '', //0是绿色,1是黄色,2是红色
      activeType1: false, //红色报警状态选中
      activeType2: false, //黄色报警状态选中
      activeType3: false, //绿色报警状态选中
      pjshow: { bool: false }, //更多显示项目,这里必须是对象，是为了
      specific: false, //展示复杂搜索模式还是简单搜索项
      errCategory: [], //这个没有英文中文的区别，所以单项
      activeCatg: [],
      errName: [],
      activeErr: [],
      versions: [],
      activeVer: [],
      starttemp:getTodayAndTomorrow().today,
      endDate:getTodayAndTomorrow().tomorrow,
    }
  },
  props: ['needIndex', 'needDevice', 'needCategory', 'needErrName', 'needVersion'],
  computed: {

  },
  methods: {
    // changePjShow(state){
    //  this.pjshow = state.pj
    // },
    emitTableRender() {
      this.$emit('tableSearch', {
        project: this.activePj,
        product: this.activePt,
        device: this.activeDv,
        Index: this.activeIndex,
        type: this.type,
        version: this.activeVer,
        category:this.activeCatg,
        errName: this.activeErr,
        start:this.starttemp,
        end:this.endtemp
      })
    },
    tableRender(type, en, ch) {
      let index = -1
      let key
      switch (type) {
        case 'pj':
          console.log('pj')
          key = this.activePj
          break;
        case 'pt':
          key = this.activePt
          break;
        case 'dv':
          key = this.activeDv;
          break;
        case 'index':
          key = this.activeIndex;
          break;
        case 'ver':
          key = this.activeVer;
          break;
        case 'catg':
          key = this.activeCatg;
          break;
        case 'err':
          key = this.activeErr;
          break;
      }
      if (!key) return;
      index = key.indexOf(en);
      if (index > -1) {
        key.splice(index, 1)
        this.activeAll.splice(this.activeAll.indexOf(ch), 1)
      } else {
        key.push(en)
        this.activeAll.push(ch)
      }
      this.emitTableRender()
    },
    showInputSearch(event, name) {
      if (event.target.tagName.toLowerCase() == 'i' || event.target.tagName.toLowerCase() === 'li') {
        switch (name) {
          case 'dev':
            this.dvsmart = !this.dvsmart
            this.versmart = false
            this.errsmart = false
            break;
          case 'ver':
            this.versmart = !this.versmart
            this.errsmart = false
            this.dvsmart = false
            break;
          case 'err':
            this.errsmart = !this.errsmart
            this.versmart = false
            this.dvsmart = false
            break;
        }

      }
    },
    closeSmartSearchPop() {
      this.dvsmart = false
      this.versmart = false
      this.errsmart = false
    },
    smartSearchDevice() {
      var vm = this
      smartDevice(this.sdv, this.activePj, this.activePt).done(function(res) {
        vm.deviceList = res.devices && res.devices.slice(0, 30) //为了不显示太多的条数，这里限制最多是30条
      })
    },
    smartSearchErr() {
      var vm = this
      searchErrName(this.serr).done(function(res) {
        if (res.rescode == 200) {
          vm.errCategory = res.errName
          vm.activeCatg = res.errName
        }
      })

    },
    smartSearchVer() {
      var vm = this
      searchVersionList(this.sver).done(function(res) {
        if (res.rescode == 200) {
          vm.versions = res.versions
          vm.activeVer = res.versions
        }
      })
    },
    addToChoooseDev(value) { //这个value是一个数组，["8112", "F4ED5F04242D"]
      for (let i = 0; i < this.device.length; i++) {
        if (this.device[i][1] == value[1]) {
          if (this.activeDv.indexOf(value[1]) == -1) {
            this.activeDv.push(value[1])
            this.activeAll.push(value[0])
          }
          //这里选中了关闭搜索框
          this.dvsmart = false
          this.deviceList = []
          this.emitTableRender()

          return;
        }
      }
      this.dvsmart = false
      this.deviceList = []
      this.device.push(value)
      this.activeDv.push(value[1])
      this.activeAll.push(value[0])
      this.emitTableRender()
    },
    changeType(num) {
      this.type = num;
      num = parseInt(num, 10)
      switch (num) {
        case 0:
          this.activeType3 = !this.activeType3;
          this.activeType1 = false;
          this.activeType2 = false;
          break;
        case 1:
          this.activeType2 = !this.activeType2;
          this.activeType1 = false;
          this.activeType3 = false;
          break;
        case 2:
          this.activeType1 = !this.activeType1;
          this.activeType2 = false;
          this.activeType3 = false;
          break;
      }
      this.emitTableRender()
    },
    clearAll() {
      this.activeType1 = false;
      this.activeType2 = false;
      this.activeType3 = false;
      this.activePj = [];
      this.activePt = [];
      this.activeDv = [];
      this.activeIndex = [];
      this.emitTableRender()
    },
    showProjectModal() {
      this.pjshow.bool = true
    },
    addtoActivePj(arr) {
      console.log(arr)
      var vm = this
      for (let i = 0; i < arr.length; i++) {
        vm.recPj.forEach(function(pj) {
          if (arr[i][0] == pj[0]) {
            arr.splice(i, 1)
          }
        })
      }
      this.recPj.push(...arr)

    },
    simpleMode() {
      this.specific = !this.specific
    },
    changeTimespace() {
       
    }
  },
  filter: {
    getWarnChName(name) {

    }
  },
  mounted() {
    var vm = this;
    getPjAndPT().done(function(res) {
      if (res.rescode == 200) {
        vm.recPj = res.projects;
        vm.recPt = res.products
      }
    });
    if (this.needIndex == true) {
      IndexCategory().done(function(res) {
        if (res.rescode == 200) {
          vm.index = res.Content
        }
      })
    };
    if (this.needCategory == true) {
      searchErrCategory().done(function(res) {
        if (res.rescode == 200) {
          vm.errCategory = res.category
        }
      })
    }


  },
  components: {
    ywSmartpj
  }
}

</script>
