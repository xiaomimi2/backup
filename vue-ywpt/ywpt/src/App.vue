<template>
<div class="wrapper">
  <yw-header></yw-header>
  <yw-sidebar></yw-sidebar>
  <div class="content-wrapper" style="background-color:#ecf0f5">
      <section class="content-header">
          <!--<ol class="breadcrumb">-->
          <!--<li><a href="#"><i class="fa fa-dashboard"></i>主页</a></li>-->
          <!--</ol>-->
      </section>
      <section class="content">
          <div class="row">
              <div class="col-md-12">
                  <div id="reload">
                    <router-view></router-view>
                  </div>
                  <!-- /. box -->
              </div>
              <!-- /.col -->
          </div>
          <!-- /.row -->
      </section>
  </div>
  <yw-footer></yw-footer>
</div>
    
</template>

<script>
require('./assets/all.css')

import ywHeader from '../src/components/header.vue'
import ywSidebar from  '../src/components/navbar.vue'
import ywFooter from '../src/components/footer.vue'
export default {
    components:{
       ywHeader,
       ywSidebar,
       ywFooter
    }
}
</script>

<style>

</style>
