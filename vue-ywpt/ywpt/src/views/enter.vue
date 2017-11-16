<template>
    <article>
    	<ol class="breadcrumb">
    	    <li><a href="#">运维平台</a></li>
    	    <li>首页概览</li>
    	</ol>
    	<section class="content">
    	    <!-- Info boxes -->
    	    <div class="row"  id="card">
    	        <div class="col-md-3 col-sm-6 col-xs-12">
    	            <div class="info-box">
    	                <span class="info-box-icon bg-aqua"><i class="iconfont icon-xiangmu"></i></span>
    	                <div class="info-box-content">
    	                    <span class="info-box-text">项目总数</span>
    	                    <span class="info-box-number" id="p_total"></span>
    	                </div>
    	            </div>
    	        </div>
    	        <div class="col-md-3 col-sm-6 col-xs-12">
    	            <div class="info-box">
    	                <span class="info-box-icon bg-red"><i class="iconfont icon-wenti"></i></span>
    	                <div class="info-box-content">
    	                    <span class="info-box-text">问题项目数</span>
    	                    <span class="info-box-number" id="p_trouble"></span>
    	                </div>
    	            </div>
    	        </div>
    	        <div class="clearfix visible-sm-block"></div>
    	        <div class="col-md-3 col-sm-6 col-xs-12">
    	            <div class="info-box">
    	                <span class="info-box-icon bg-green"><i class="iconfont icon-fuwuqi"></i></span>
    	                <div class="info-box-content">
    	                    <span class="info-box-text">设备总数</span>
    	                    <span class="info-box-number" id="d_total"></span>
    	                </div>
    	            </div>
    	        </div>
    	        <div class="col-md-3 col-sm-6 col-xs-12">
    	            <div class="info-box">
    	                <span class="info-box-icon bg-yellow"><i class="iconfont icon-yichangzhongduan"></i></span>
    	                <div class="info-box-content">
    	                    <span class="info-box-text">问题设备数</span>
    	                    <span class="info-box-number" id="d_trouble">344</span>
    	                </div>
    	            </div>
    	        </div>
    	    </div>

    	     <div class="show_table_list" id="error">
    	        <table class="table table-hover table-bordered table-responsive box">
    	            <tr>
    	                <th width="25%">设备管理</th>
    	                <th width="25%"><span class="square red"></span></th>
    	                <th width="25%"><span class="square yellow"></span></th>
    	                <th width="25%"><span class="square green"></span></th>
    	            </tr>
    	            <tr id="color_warn">
    	            </tr>
    	        </table>

    	        <table class="table table-hover table-responsive table-bordered box" id="device">
    	            <tr>
    	                <th width="25%">错误设备</th>
    	                <th width="25%">小前端</th>
    	                <th width="25%">终端</span></th>
    	                <th width="25%">
    	                    <input type="text" name="daterange" style="width:100%;border-radius:5px;outline:none;" class="form-control reportrange">
    	                </th>
    	            </tr>
    	            <tr id="product_list">
    	            </tr>
    	        </table>
    	    </div>
    	   
    	</section>
    </article>
</template>
<style>
	
</style>
<script>
	
</script>