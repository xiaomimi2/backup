<template>
	<article>
		<ol class="breadcrumb">
		    <li><a href="#">运维平台</a></li>
		    <li>设备管理</li>
		</ol>
		<div class="list_table">
			<table class="table table-bordered table-responsive box">
				<thead>
					<tr>
						<th>序号</th>
						<th>项目ID</th>
						<th>项目名称</th>
						<th>部署终端数</th>
						<th>反跳地址</th>
						<th>项目负责人</th>
						<th></th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="(item, index) in projectInfo">
						<td>{{index + 1}}</td>
						<td>{{item.NamePiyin}}</td>
						<td>{{item.NameChinese}}</td>
						<td>{{item.TermNum}}</td>
						<td>{{item.BounceAddress}}</td>
						<td>{{item.BounceAddress}}</td>
						<td><span class="btn btn-default" data-target="#myModal_1" data-toggle="modal">详细信息</span></td>
					</tr>
				</tbody>
			</table>
		</div>
	</article>
</template>
<script>
	import {searchProjectInfo} from "../assets/js/common.js"
	export default {
		data() {
			return {
				projectInfo:[]
			}
		},
		created() {
			var vm = this
			searchProjectInfo().done(function (res) {
				console.log(res)
				if(res.rescode == 200) {
					vm.projectInfo = res.project
				}
				
			})
		}
	}
</script>