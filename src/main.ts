/*
 * @Author: chenyx
 * @Date: 2023-04-03 00:53:36
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-04-05 13:58:40
 * @FilePath: /Ilight-V3/src/main.ts
 */
import { createSSRApp } from 'vue';
import App from './App.vue';
import { setupStore } from '@/store';

// import 'amfe-flexible';

export function createApp() {
    const app = createSSRApp(App);
    // Configure store
    setupStore(app);

    return {
        app,
    };
}
