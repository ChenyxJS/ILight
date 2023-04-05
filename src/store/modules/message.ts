import { defineStore } from 'pinia';
import { reactive, ref } from 'vue';

export interface MessageConfig {
    type?: string;
    text: string;
    timeout: number;
}
export const useMessageStore = defineStore('message', {
    state() {
        const isShow = ref(false);
        const messageConfig = reactive({} as MessageConfig);
        return { isShow, messageConfig };
    },
    getters: {},
    actions: {
        error(config: MessageConfig) {
            if (this.isShow) return;
            this.isShow = true;
            config.type = 'error';
            this.messageConfig = config;
            setTimeout(() => {
                this.isShow = false;
            }, config.timeout);
        },
        warn(config: MessageConfig) {
            if (this.isShow) return;
            this.isShow = true;
            config.type = 'warn';
            this.messageConfig = config;
            setTimeout(() => {
                this.isShow = false;
            }, config.timeout);
        },
        success(config: MessageConfig) {
            this.isShow = true;
            config.type = 'success';
            this.messageConfig = config;
            setTimeout(() => {
                this.isShow = false;
            }, config.timeout);
        },
        info(config: MessageConfig) {
            if (this.isShow) return;
            this.isShow = true;
            config.type = 'info';
            this.messageConfig = config;
            setTimeout(() => {
                this.isShow = false;
            }, config.timeout);
        },
    },
});
