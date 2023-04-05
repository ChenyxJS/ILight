/*
 * @Author: chenyx
 * @Date: 2023-04-03 00:53:36
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-04-05 20:30:11
 * @FilePath: /Ilight-V3/src/store/modules/auth.ts
 */
import { defineStore } from 'pinia';
import { getCache, removeCache, setCache } from '@/utils/cache';
import { TOKEN_KEY } from '@/enums/cacheEnum';
import { login, register } from '@/services/api/anth.ts';
import { LoginForm, RegisterForm } from '@/services/api/anth.ts/type';
import { useMessageStore } from './message';

interface AuthState {
    token?: string;
}

export const useAuthStore = defineStore('auth', {
    state: (): AuthState => ({
        token: undefined,
    }),
    getters: {
        getToken: (state) => state.token,
        isLogin: (state): boolean => !!state.token,
        getAuthorization: (state) => {
            return state.token ? { authorization: `Bearer ${state.token}` } : {};
        },
    },
    actions: {
        initToken() {
            this.token = getCache<string>(TOKEN_KEY) || undefined;
        },
        setToken(token: string | undefined) {
            setCache(TOKEN_KEY, token);
            this.token = token;
        },

        /**
         * @description: 注册账户
         * @param {RegisterForm} form 注册表单
         * @return {*}
         */
        regiset(form: RegisterForm) {
            const Message = useMessageStore();
            register(form).then((data) => {
                console.log(data);
                if (data.success) {
                    Message.success({ text: '注册成功，请前往登录', timeout: 2000 });
                } else {
                    Message.error({ text: data.failReasonShow, timeout: 2000 });
                }
            });
        },
        login(form: LoginForm) {
            return new Promise((resolve, reject) => {
                const Message = useMessageStore();
                login(form).then((data) => {
                    if (data.success) {
                        resolve(data);
                    } else {
                        Message.error({ text: data.failReasonShow, timeout: 2000 });
                        reject();
                    }
                });
            });
        },
    },
});
