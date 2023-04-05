/*
 * @Author: chenyx
 * @Date: 2023-04-03 00:53:36
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-04-03 11:42:45
 * @FilePath: /Ilight-V3/src/types/env.d.ts
 */
// / <reference types="vite/client" />

declare module '*.vue' {
    import { DefineComponent } from 'vue';
    // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
    const component: DefineComponent<{}, {}, any>;
    export default component;
}

interface ImportMetaEnv {
    [x: string]: string | undefined;
    readonly VITE_ENV: string;
    readonly VITE_APP_TITLE: string;
    readonly VITE_APP_BASE_API: string;
    readonly VITE_UPLOAD_URL: string;
    readonly VITE_APP_CACHE_PREFIX: string;
    readonly VITE_PORT: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
