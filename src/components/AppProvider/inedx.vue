<!--
 * @Author: chenyx
 * @Date: 2023-04-03 00:53:36
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-04-05 23:43:07
 * @FilePath: /Ilight-V3/src/components/AppProvider/inedx.vue
-->
<script lang="ts" setup name="AppProvider">
import TabBar from '@/components/TabBar/index.vue';
import CMessage from '@/components/Message/index.vue';

import { onLoad } from '@dcloudio/uni-app';
onLoad(() => {
    uni.hideTabBar();
});
</script>
<template>
    <view class="_u_bg-blue-500">
        <slot></slot>
        <c-message></c-message>
        <tab-bar></tab-bar>
    </view>
</template>
<style lang="scss" scoped></style>
