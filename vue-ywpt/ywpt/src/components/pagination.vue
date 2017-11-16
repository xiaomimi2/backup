<template>
    <ul class="pagination pagination-sm inline pull-right">
        <li><a href="#1">&laquo;</a></li>
        <li v-for="page in pages" :class="{active:page == currentPage.page}" @click.prevent="changePage(page)"><a href="">{{page}}</a></li>
        <li><a href="#1">&raquo;</a></li>
    </ul>
</template>
<script>
	export default {
		data() {
			return {
				
			}
		},
		props:['pages','currentPage'],
		methods:{
			changePage(page) {
				this.currentPage.page = page;
				this.$emit('renderTable')
			}
		}

	}
</script>