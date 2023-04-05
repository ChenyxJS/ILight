<!--
 * @Author: chenyx
 * @Date: 2023-04-03 00:53:36
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-04-05 17:47:10
 * @FilePath: /Ilight-V3/src/App.vue
-->
<script setup lang="ts">
import { onLaunch, onShow, onHide } from '@dcloudio/uni-app';
import { useAuthStore } from '@/store/modules/auth';
import { removeInterceptor, setupInterceptors } from '@/utils/interceptors';
import { useRouterStore } from '@/store/modules/router';
onLaunch(() => {
    console.log('App Launch');
    removeInterceptor();
    setupInterceptors();
    const appStore = useRouterStore();
    appStore.initialize();
});
onShow(() => {
    uni.hideTabBar({
        animation: false,
    });
    const authStore = useAuthStore();
    authStore.initToken();

    console.log('App Show');
});
onHide(() => {
    console.log('App Hide');
});
</script>

<style lang="scss">
@import '@/assets/main.scss';
</style>
