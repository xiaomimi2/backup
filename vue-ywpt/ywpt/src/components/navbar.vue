 <template>
      <aside class="main-sidebar">
            <section class="sidebar">
                <!-- SidebarMenu start -->
                <ul class="sidebar-menu">
                    <li>
                        <router-link to="enter"><i class="iconfont icon-chart78"></i><span>首页概览</span></router-link>
                    </li>
                    <li class="treeview">
                        <a href="javascript:;"><i class="iconfont icon-path3"></i> <span>设备管理</span><span class="pull-right-container">
                                <i class="fa fa-angle-left pull-right"></i>
                            </span></a>
                        <ul class="treeview-menu" style="display:block">
                            <li>
                                 <router-link to="device-index" style="padding-left:45px">指标列表</router-link>
                            </li>
                            <li>
                                <router-link to="device" style="padding-left:45px">设备列表</router-link>
                            </li>
                        </ul>
                    </li>
                    <!--   <li>
                        <a href="#mirror_info"><i class="iconfont icon-paymg"></i> <span>支付信息</span></a>
                    </li> -->
                    <!-- <li>
                        <a href="#copy"><i class="iconfont icon-banben"></i> <span>版本信息</span></a>
                    </li> -->
                     <li>
                        <router-link to="project"><i class="iconfont icon-xiangmu-copy"></i> <span>项目管理</span></router-link>
                    </li>
                    <li class="treeview">
                        <a href="#project"><i class="iconfont icon-qita"></i> <span>错误管理</span><span class="pull-right-container">
                                <i class="fa fa-angle-left pull-right"></i>
                            </span>
                        </a>
                        <ul class="treeview-menu" style="display:block">
                            <li><router-link to="error-list" style="padding-left:45px"></i>错误列表</router-link></li>
                            <li><router-link to="error-device" style="padding-left:45px"></i>设备列表</router-link></li>
                        </ul>
                    </li>
                    <!-- <li class="treeview">
                        <a href="javascript:;"><i class="iconfont icon-monitor"></i> <span>运营监控</span><span class="pull-right-container">
                                <i class="fa fa-angle-left pull-right"></i>
                            </span></a>
                        <ul class="treeview-menu">
                            <li><a href="#paly_download"><i class="iconfont icon-xiazai1-copy-copy"></i>下载信息</a></li>
                            <li><a href="#play_list"><i class="iconfont icon-bofang"></i>播放监控</a></li>
                            <li><a href="#pageroute"><i class="iconfont icon-lujing"></i>页面路径</a></li>
                        </ul>
                    </li> -->
                </ul>
                <!-- SidebarMenu over -->
            </section>
            <!-- /.sidebar -->
 </aside>
 </template>