/*
 * @Author: chenyx
 * @Date: 2023-04-03 00:53:36
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-04-03 11:45:27
 * @FilePath: /Ilight-V3/src/state/modules/user.ts
 */
import { defineStore } from 'pinia';

interface UserState {
    id?: string | number;
}

export const useUserStore = defineStore('user', {
    state: (): UserState => ({}),
    getters: {},
    actions: {},
});
