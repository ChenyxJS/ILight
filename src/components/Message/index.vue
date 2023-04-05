<!--
 * @Author: chenyx
 * @Date: 2023-04-05 02:59:14
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-04-05 20:27:26
 * @FilePath: /Ilight-V3/src/components/Message/index.vue
-->

<script lang="ts" setup>
import { useMessageStore } from '@/store/modules/message';
const Message = useMessageStore();
</script>

<template>
    <view :class="['message', Message.messageConfig.type, { 'fade-enter-active': Message.isShow }]" v-if="Message.isShow">
        <span class="text">{{ Message.messageConfig.text }}</span>
    </view>
</template>

<style scoped lang="scss">
.fade-enter-active {
    animation: fade 0.5s;
}
.fade-leave-active {
    animation: fade 0.5s reverse;
}

/* 定义帧动画 */
@keyframes fade {
    0% {
        opacity: 0;
        transform: translateY(-50px);
    }
    100% {
        opacity: 1;
    }
}
.message {
    min-width: 300px;
    max-width: 350px;
    padding: 8px;
    position: fixed;
    z-index: 9999;
    left: 50%;
    margin-left: -150px;
    /* #ifdef APP-PLUS */
    top: 60px;
    /* #endif */

    /* #ifdef H5 */
    top: 25px;
    /* #endif */
    border-radius: 8px;
    text-align: center;
    box-shadow: $uni-box-shadow;
    .text {
        vertical-align: middle;
        margin: 0 8px;
    }
    &.warn {
        color: #e6a23c;
        background: #fff7e6;
        border-color: #ffe7ba;
    }
    &.error {
        color: #f56c6c;
        background: #fff1f0;
        border-color: #ffccc7;
    }
    &.success {
        color: #67c23a;
        background: #f6ffed;
        border-color: #d9f7be;
    }
    &.info {
        color: #409eff;
        background: #e6f7ff;
        border-color: #bae7ff;
    }
}
</style>
