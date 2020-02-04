<template>
	<view>
		<button type="primary" @tap="fetchDataHandle">测试获取数据</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		methods:{
			// fetchDataHandle(){
			// 	console.log(12)
			// }
			
			async fetchDataHandle () {
				const params = {"userId":"123456"}
					try {
						const res = await this.$minApi.uniapp(params)
						console.log( res)
					} catch (err) {
						console.log(err)
					}
		}}
	}
</script>

<style lang="less">

</style>
