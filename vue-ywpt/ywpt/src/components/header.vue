<template>
	<header class="main-header">
	    <!-- logo start -->
	    <a href="#" class="logo">
	    <span class="logo-mini"></span>
	    <span class="logo-lg"><b>清鹤运维平台</b></span>
	</a>
	    <!-- logo start -->
	    <!-- nav start -->
	    <nav class="navbar navbar-static-top" role="navigation">
	        <a href="#" class="sidebar-toggle" data-toggle="offcanvas" role="button">
	        <span class="sr-only">Toggle navigation</span>
	    </a>
	        <div class="navbar-custom-menu">
	            <ul class="nav navbar-nav">
	                <li class="dropdown notifications-menu">
	                    <a href="#bell" class="dropdown-toggle">
	                              <i class="fa fa-bell-o"></i>
	                              <span class="label label-warning">10</span>
	                            </a>
	                </li>
	                <li class="dropdown user user-menu">
	                    <a class="dropdown-toggle" href="javascript:;" data-toggle="dropdown">
	                        <!-- <img src="resources/dist/img/user2-160x160.jpg" class="user-image" alt="User Image"> -->
	                        <!--下面这个地方替换掉java的模板标签-->
	                        <span class="hidden-xs">用户名: <span id="userN">未登录！</span></span>
	                        <i class="glyphicon glyphicon-triangle-bottom" style="font-size: 12px; transform: translateY(2px) scale(0.9); margin-left: 4px;"></i>
	                    </a>
	                    <ul class="dropdown-menu">
	                        <!-- User image -->
	                        <li class="user-header" style="padding-left:0; padding-right:0; height: 132px;">
	                            <!-- <img src="resources/dist/img/user2-160x160.jpg" class="img-circle" alt="User Image"> -->
	                            <p id="bar"></p>
	                            <a id="repassword" class="index-header-user-option"><i class="fa fa-unlock-alt"></i>修改密码 </a>
	                            <a id="exit" class="index-header-user-option"><i class="glyphicon glyphicon-log-out"></i>退出</a>
	                        </li>
	                    </ul>
	                </li>
	                <li class="simg"><a href="javascript:;">客服</a></li>
	            </ul>
	        </div>
	    </nav>
	    <!-- nav start -->
	</header>
</template>