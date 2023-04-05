<script setup lang="ts">
import AppProvider from '@/components/AppProvider/inedx.vue';
import { reactive } from 'vue';

const state = reactive({
    navBarAnimationStatus: false,
    listData: [
        {
            id: 1,
            imageUrl: 'https://p15.qhimg.com/bdm/1000_618_85/t018c0c8acac14f4b64.jpg',
            title: '夏日抹茶泥',
        },
        {
            id: 2,
            imageUrl: 'https://p19.qhimg.com/bdm/1000_618_85/t0109893ede48a51609.jpg',
            title: '糖心鸡蛋饼',
        },
        {
            id: 3,
            imageUrl: 'https://p17.qhimg.com/bdm/1000_618_85/t015431bd195f23271a.jpg',
            title: '茄汁嫩豆腐',
        },
        {
            id: 4,
            imageUrl: 'https://p18.qhimg.com/bdm/1000_618_85/t01c24350497757390b.jpg',
            title: '全麦减脂卷饼',
        },
        {
            id: 5,
            imageUrl: 'https://p18.qhimg.com/bdm/1000_618_85/t01f1fc0449ef3e9470.jpg',
            title: '低糖黑森林',
        },
    ],
    navBarList: [
        {
            label: '今日精选',
            value: 1,
            icon: '../../static/icons/Iconly-Bold-Show.png',
            select: true,
        },
        {
            label: '为你推荐',
            value: 2,
            icon: '../../static/icons/Iconly-Light-Heart.png',
            select: false,
        },
    ],
    topNavList: [
        {
            label: '自制轻食',
            value: 1,
            select: true,
        },
        {
            label: '店铺推荐',
            value: 2,
            select: false,
        },
        {
            label: '好物分享',
            value: 3,
            select: false,
        },
    ],
});
// 切换topNav
function changeTopNav(index: number) {
    state.topNavList.forEach((item) => {
        if (item.value === index) {
            item.select = true;
        } else {
            item.select = false;
        }
    });
}
function changeNavBar(index: number) {
    state.navBarAnimationStatus = true;
    state.navBarList.forEach((item) => {
        if (item.value === index) {
            item.select = true;
        } else {
            item.select = false;
        }
    });
}
function toCardDetail() {
    uni.navigateTo({
        url: '../redirect/foot-detail-redirect/index',
        animationType: 'pop-in',
    });
}
</script>

<template>
    <AppProvider>
        <view class="container">
            <view class="navbar">
                <view class="nav-item flex-clo flex-cc" @click="changeNavBar(item.value)" v-for="item in state.navBarList" :key="item.value">
                    <view class="flex-row">
                        <i>
                            <image style="width: 40rpx; height: 40rpx; margin-right: 10rpx" :src="item.icon"></image>
                        </i>
                        <text>{{ item.label }}</text>
                    </view>
                    <view v-if="item.select" :class="[state.navBarAnimationStatus ? 'active' : 'paused']"></view>
                </view>
            </view>
            <view class="content flex-clo flex-sc">
                <view class="content-top flex-row flex-cc">
                    <view
                        :class="[item.select ? 'top-item-select' : 'top-item']"
                        @click="changeTopNav(item.value)"
                        v-for="item in state.topNavList"
                        :key="item.value"
                    >
                        {{ item.label }}
                    </view>
                </view>
                <view class="line"></view>
                <view class="content-list flex-row">
                    <view class="card" @click="toCardDetail()" v-for="item in state.listData" :key="item.id">
                        <image class="avatar" :src="item.imageUrl"></image>
                        <image class="card-image" :src="item.imageUrl"></image>
                        <view class="card-info">
                            <image class="author-avatar" :src="item.imageUrl"></image>
                            <text>{{ item.title }}</text>
                            <i></i>
                        </view>
                    </view>
                    <view class="null-box"></view>
                </view>
            </view>
        </view>
    </AppProvider>
</template>

<style lang="scss" scoped>
.container {
    padding: 128rpx 0;
    text-align: center;
}
i {
    vertical-align: middle;
}
.top {
    width: 100%;
    height: 9%;
    margin-top: 60rpx;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: row;
    .input {
        height: 70rpx;
        background: $-color-theme-2;
        border-radius: 40rpx;
    }
}
.navbar {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    width: 100%;
    height: 6%;
    margin: 0 0 40rpx 0;
    .nav-item {
        margin: 5rpx 20rpx;
        color: #ffffff;
        .active {
            margin: 10rpx;
            width: 16rpx;
            height: 16rpx;
            border-radius: 50%;
            background-color: #ffffff;
            animation-name: zoomDot;
            animation-duration: 1s;
            animation-direction: alternate;
            animation-play-state: running;
        }
        .paused {
            margin: 10rpx;
            width: 16rpx;
            height: 16rpx;
            border-radius: 50%;
            background-color: #ffffff;
            animation-name: zoomDot;
            animation-duration: 1s;
            animation-direction: alternate;
            animation-play-state: paused;
        }
    }
}

@keyframes zoomDot {
    /*定义关键帧、scaleDrew是需要绑定到选择器的关键帧名称*/
    0% {
        transform: scale(1); /*开始为原始大小*/
    }
    75% {
        transform: scale(2);
    }
}
.content {
    background: #ffffff;
    border-radius: 80rpx 80rpx 0 0;
    width: 100%;
    height: 85%;
    position: relative;

    .content-top {
        .top-item {
            border: 4rpx solid $-color-theme-3;
            color: $-color-theme-3;
            border-radius: 40rpx;
            padding: 10rpx 20rpx;
            margin: 48rpx 25rpx 48rpx 25rpx;
            font-size: $uni-font-size-sm;
        }
        .top-item-select {
            border: 4rpx solid $-color-theme-3;
            background: $-color-theme-3;
            color: $-color-theme-4;
            border-radius: 40rpx;
            padding: 10rpx 20rpx;
            margin: 48rpx 25rpx 48rpx 25rpx;
            font-size: $uni-font-size-sm;
        }
    }
    .line {
        width: calc(100% - 40px);
        height: 0;
        border: 2rpx solid $-color-theme-yellow-1;
        z-index: 4;
        // margin-bottom: 20rpx;
    }
    .content-list {
        overflow: scroll;
        width: 100%;
        flex-wrap: wrap;

        .card {
            position: relative;
            width: 50%;
            .avatar {
                position: absolute;
                left: 50rpx;
                top: 50rpx;
                width: 120rpx;
                height: 120rpx;
                border-radius: 50%;
                z-index: 2;
                box-shadow: -40rpx 30rpx 20rpx -25rpx $-color-theme-3;
            }
            .card-image {
                margin: 100rpx 0 0 80rpx;
                width: 268rpx;
                height: 294rpx;
                border-radius: 45rpx;
                z-index: 1;
            }
            .card-info {
                z-index: 2;
                position: absolute;
                bottom: 40rpx;
                left: 100rpx;
                width: 230rpx;
                height: 70rpx;
                border-radius: 50rpx;
                background: rgba($color: #ffffff, $alpha: 0.85);
                overflow: hidden;
                font-size: 20rpx;
                .author-avatar {
                    margin: 20rpx;
                    width: 30rpx;
                    height: 30rpx;
                    border-radius: 50%;
                    vertical-align: middle;
                }
                i {
                    display: none;
                    vertical-align: middle;
                }
            }
        }
    }
}
</style>
