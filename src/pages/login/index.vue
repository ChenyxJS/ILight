<!--
* @Author: chenyx
 * @Date: 2023-04-03 00:53:36
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-04-05 22:05:59
 * @FilePath: /Ilight-V3/src/pages/login/index.vue
-->
<script setup lang="ts">
import { reactive, ref } from 'vue';
import { onLoad } from '@dcloudio/uni-app';
import { useRouter } from '@/hooks/router';
import { useAuthStore } from '@/store/modules/auth';
import { LoginForm, RegisterForm } from '@/services/api/anth.ts/type';
import { useMessageStore } from '@/store/modules/message';
import CMessage from '@/components/Message/index.vue';
import WaveInput from '@/components/WaveInput/index.vue';

const redirect = ref<string | undefined>(undefined);
onLoad((query: any) => {
    redirect.value = query.redirect ? decodeURIComponent(query.redirect) : undefined;
});

const router = useRouter();
const anthStore = useAuthStore();
const Message = useMessageStore();
const state = reactive({
    isLoginForm: false,
    loginForm: {
        username: '',
        password: '',
    } as LoginForm,
    registerForm: {
        username: '',
        password: '',
    } as RegisterForm,
});
function changeForm() {
    state.isLoginForm = !state.isLoginForm;
}
function scan() {
    Message.warn({ text: '二维码登录功能暂未开放，敬请期待...', timeout: 2000 });
}
function registerClick() {
    anthStore.regiset(state.registerForm);
}
function loginClick() {
    // 校验账号是否为手机号
    if (checkModbile(state.loginForm.username)) {
        anthStore.login(state.loginForm).then(() => {
            setTimeout(() => {
                if (redirect.value) {
                    router.go(redirect.value, { replace: true });
                    return;
                }
                router.pushTab('/pages/about/index');
            }, 1500);
        });
    } else {
        Message.warn({ text: '请输入正确手机号', timeout: 2000 });
    }
}

function checkModbile(mobile: string) {
    let re = /^1[3,4,5,6,7,8,9][0-9]{9}$/;
    let result = re.test(mobile);
    console.log(mobile);
    if (!result) {
        return false; //若手机号码格式不正确则返回false
    }
    return true;
}
</script>

<template>
    <view class="container">
        <c-message></c-message>
        <!-- logo -->
        <image class="logo" src="/static/logo.png"></image>
        <view class="form flex flex-cc" :class="[{ 'form-rotate': state.isLoginForm }]">
            <!-- 登录表单 -->
            <view class="login-form-front">
                <view class="head">
                    <button class="register-btn" @click="changeForm">注 册</button>
                    <image
                        @click="scan"
                        src="data:image/svg+xml,%3Csvg data-name='Iconly/Bold/Scan' xmlns='http://www.w3.org/2000/svg' width='22' height='18' viewBox='0 0 22 18'%3E%3Cpath data-name='Scan' d='M14.6 18a.747.747 0 1 1 0-1.493h1.593a2.44 2.44 0 0 0 2.462-2.414v-3.56h-2.623v.992a2.269 2.269 0 0 1-2.27 2.266H8.238a2.269 2.269 0 0 1-2.269-2.266v-.992H3.346V14.1A2.437 2.437 0 0 0 5.8 16.506h1.628a.747.747 0 1 1 0 1.493H5.8a3.946 3.946 0 0 1-3.974-3.9v-3.565H.762a.746.746 0 1 1 0-1.492h20.477a.746.746 0 1 1 0 1.492h-1.062v3.56A3.95 3.95 0 0 1 16.194 18zM6.24 7.523a.278.278 0 0 1-.27-.269V6.008a2.268 2.268 0 0 1 2.269-2.265h5.524a2.26 2.26 0 0 1 2.27 2.265v1.246a.28.28 0 0 1-.273.269zm12.415-1.76V3.906a2.44 2.44 0 0 0-2.461-2.413H14.6a.754.754 0 0 1-.761-.745A.755.755 0 0 1 14.6 0h1.593a3.948 3.948 0 0 1 3.983 3.906v1.857a.761.761 0 0 1-1.522 0zm-16.831 0V3.9A3.945 3.945 0 0 1 5.8 0h1.63a.755.755 0 0 1 .761.747.753.753 0 0 1-.761.746H5.8A2.436 2.436 0 0 0 3.347 3.9v1.862a.762.762 0 0 1-1.524 0z' fill='%2350858b'/%3E%3C/svg%3E"
                        mode="widthFix"
                    ></image>
                </view>
                <view class="input">
                    <view class="item">
                        <wave-input placeholder="UserName" v-model="state.loginForm.username"></wave-input>
                    </view>
                    <view class="item">
                        <wave-input placeholder="Password" type="password" v-model="state.loginForm.password"></wave-input>
                    </view>
                </view>
                <view class="footer"><button class="login-btn" @click="loginClick">sign up</button></view>
            </view>
            <!-- 注册表单 -->
            <view class="login-form-back">
                <view class="head">
                    <button class="register-btn" @click="changeForm">登 陆</button>
                </view>
                <view class="input">
                    <view class="item">
                        <wave-input placeholder="UserName" v-model="state.registerForm.username"></wave-input>
                    </view>
                    <view class="item">
                        <wave-input placeholder="Password" type="password" v-model="state.registerForm.password"></wave-input>
                    </view>
                </view>
                <view class="footer"><button class="login-btn" @click="registerClick">register</button></view>
            </view>
        </view>
    </view>
</template>

<style lang="scss" scoped>
.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    z-index: 1;
    background-color: #e8f4ef;
    height: 100%;
    position: relative;
    top: 0;
    overflow: hidden;
}

.logo {
    position: absolute;
    top: 8.75rem;
    height: 7.0625rem;
    width: 7.0625rem;
    box-shadow: $uni-box-shadow;
    border-radius: 1.25rem;
    margin-bottom: 3.75rem;
}
.form {
    position: absolute;
    top: 6.25rem;
    position: relative;
    width: 100%;
    height: 100%;
    transition: transform 0.8s;
    transform-style: preserve-3d;
}
.form-rotate {
    transform: rotateY(180deg);
}
.login-form-front,
.login-form-back {
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 19.375rem;
    height: 25.625rem;
    background: #ffffff;
    box-shadow: $uni-box-shadow;
    border-radius: 1.875rem;
    padding: 0 2.5rem;
    // TODO 卡片翻转兼容问题处理
    backface-visibility: hidden;
    -webkit-transform-style: preserve-3d; /*设置内嵌的元素在 3D 空间如何呈现：保留 3D*/
    -webkit-backface-visibility: hidden; /*(设置进行转换的元素的背面在面对用户时是否可见：隐藏)*/
}
.login-form-back {
    transform: rotateY(180deg);
}
.head {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 2.5rem 0;
    .register-btn {
        width: 3.75rem;
        margin: 0;
        font-size: 0.625rem;
        border-radius: 1.25rem;
        background: #50858b;
        color: #ffffff;
        text-align: center;
    }
    image {
        width: 1.5625rem;
        height: 1.5625rem;
    }
}
.input {
    width: 13.75rem;
    .item {
        margin-bottom: 2.25rem;
    }
}
.footer {
    position: absolute;
    bottom: 2.5rem;
    width: 12.5rem;
    .login-btn {
        width: 100%;
        margin: 0;
        font-size: 1.125rem;
        border-radius: 1.6875rem;
        background: $-color-theme-3;
        color: #ffffff;
        text-align: center;
    }
}
</style>
