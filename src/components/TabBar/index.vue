<script lang="ts" setup>
import { reactive } from 'vue';
import { useRouter } from '@/hooks/router';

interface Tab {
    label: string;
    value: number;
    path: string;
    icon: string;
    selectIcon: string;
}
const router = useRouter();
const state = reactive({
    tabList: [
        {
            label: '首页',
            value: 1,
            path: 'pages/home/index',
            icon: '../../static/icons/Iconly-Light-Home.png',
            selectIcon: '../../static/icons/Iconly-Bold-Home.png',
        },
        {
            label: '发现',
            value: 2,
            path: 'pages/find/index',
            icon: '../../static/icons/Iconly-Light-Category.png',
            selectIcon: '../../static/icons/Iconly-Bold-Category.png',
        },
        {
            label: '轻友圈',
            value: 3,
            path: 'pages/friend/index',
            icon: '../../static/icons/Iconly-Light-User.png',
            selectIcon: '../../static/icons/Iconly-Bold-User.png',
        },
        {
            label: '我的',
            value: 4,
            path: 'pages/mine/index',
            icon: '../../static/icons/Iconly-Light-Profile.png',
            selectIcon: '../../static/icons/Iconly-Bold-Profile.png',
        },
    ] as Tab[],
});

function changeTab(obj: Tab) {
    console.log(obj);
    router.pushTab('/' + obj.path);
}
</script>

<template>
    <view class="footer">
        <view class="float-btn">
            <i>
                <image style="width: 68rpx; height: 68rpx" src="../../static/icons/Iconly-Light-Edit.png"></image>
            </i>
        </view>
        <view class="footer-item" @click="changeTab(item)" v-for="item in state.tabList" :key="item.value">
            <i>
                <!--  <image v-if="item.value == nowTabbar" style="width: 42rpx;height: 42rpx;" :src="item.selectIcon"></image>
                <image v-else style="width: 42rpx;height: 42rpx;" :src="item.icon"></image> -->
            </i>
            <text>{{ item.label }}</text>
        </view>
    </view>
</template>

<style lang="scss" scoped>
.footer {
    position: fixed;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    bottom: 0;
    left: 0;
    width: 100%;
    border-radius: 80rpx;
    box-shadow: 0 6rpx 20rpx -4rpx $-color-theme-3;
    background: $-color-theme-2;
    color: $-color-theme-3;
    font-size: 24rpx;
    z-index: 9999;
    padding-top: 20rpx;
    // padding-bottom: 30rpx;
    padding-bottom: constant(safe-area-inset-bottom);
    padding-bottom: env(safe-area-inset-bottom);

    .footer-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
}

.float-btn {
    position: absolute;
    bottom: 200rpx;
    right: 10rpx;
    width: 116rpx;
    height: 116rpx;
    border-radius: 50%;
    background: $-color-theme-yellow-1;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 5;
}
</style>
