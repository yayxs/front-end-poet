<template>
	<view>
		<view class="hoting-item">
			<view class="hoting-item-left-img">
				
			</view>
			<view class="hoting-item-middle-info">
				
			</view>
			<view class="hoting-item-right-buy">
				
			</view>
		</view>
	</view>
</template>
<script lang="ts">
    import Vue from 'vue';
    export default Vue.extend({
        props: {
       
        },
        computed: {
           
        },
        methods: {
           
        }
    })
</script>

<style lang="scss">
.hoting-item{
	width: 100%;
	height: 280upx;
	border: 1px solid red;
	display: flex;
	.hoting-item-left-img{
		background-color: pink;
		flex: 1;
	}
	.hoting-item-middle-info{
		background-color: orange;
		flex: 2;
	}
	.hoting-item-right-buy{
		background-color: blue;
		flex: 1;
	}
}
</style>
