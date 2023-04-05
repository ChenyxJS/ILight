<!--
 * @Author: chenyx
 * @Date: 2023-04-03 00:53:36
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-04-03 13:57:57
 * @FilePath: /Ilight-V3/src/pages/notFound/404.vue
-->
<script lang="ts" setup>
import { onLoad } from '@dcloudio/uni-app';
import { ref } from 'vue';
import BasicButton from '@/components/BasicButton/index.vue';
import { useRouter } from '@/hooks/router';

const go = ref<string>('');
const router = useRouter();
const redirect = ref<string>('');
onLoad((query: any) => {
    go.value = query.go || '';
    redirect.value = query.redirect || '';
});

/**
 * 返回首页
 */
const backHome = () => {
    router.pushTab(redirect.value);
};
</script>

<template>
    <view class="w-screen flex flex-col items-center pt-320rpx">
        <image class="w-360rpx" mode="widthFix" src="/static/svg/weep.svg" />
        <view class="mb-40rpx">
            <text>{{ go }} 页面找不到了~</text>
        </view>
        <BasicButton @click="backHome">返回首页</BasicButton>
    </view>
</template>

<style lang="scss" scoped></style>
