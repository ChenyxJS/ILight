<!--
 * @Author: chenyx
 * @Date: 2023-04-03 00:53:36
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-04-03 13:34:09
 * @FilePath: /Ilight-V3/src/pages/index/index.vue
-->
<script setup lang="ts">
	import BasicButton from '@/components/BasicButton/index.vue';
	import AppProvider from '@/components/AppProvider/inedx.vue';
	import { useRouter } from '@/hooks/router';
	import { CURRENT_PLATFORM, PLATFORMS } from '@/enums/platformEnum';
	import { judgePlatform } from '@/utils/platform';

	const platform = CURRENT_PLATFORM;

	const isVue3 = judgePlatform(PLATFORMS.VUE3);

	const router = useRouter();
	const handleGetStarted = () => {
		router.pushTab('/pages/demo/index');
	};
</script>
<template>
	<AppProvider>
		<view class="content">
			<view class="text-area">
				<text class="">是否是Vue3: {{ isVue3 }}</text>
			</view>
			<view class="text-area">
				<text class="_u_text-red">当前平台: {{ platform }}</text>
			</view>
			<BasicButton @click="handleGetStarted">Get Started → </BasicButton>
		</view>
	</AppProvider>
</template>
<style lang="scss">
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin: 280rpx auto 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
		margin-bottom: 60rpx;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>