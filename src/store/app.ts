/*
 * @Author: chenyx
 * @Date: 2023-04-03 00:53:36
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-04-03 11:45:39
 * @FilePath: /Ilight-V3/src/state/app.ts
 */
import { defineStore } from 'pinia';

interface AppState {
    sys?: string | number;
}

export const useAppStore = defineStore('app-store', {
    state: (): AppState => ({}),
    getters: {},
    actions: {},
});
