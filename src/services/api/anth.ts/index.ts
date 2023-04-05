/*
 * @Author: chenyx
 * @Date: 2023-04-03 00:53:36
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-04-04 23:46:44
 * @FilePath: /Ilight-V3/src/services/api/anth.ts/index.ts
 */
import request from '@/utils/http';
import { LoginForm, RegisterForm } from './type';

export function login(data: LoginForm): Promise<BaseApiResult> {
    return request({
        url: `/api/client/login?username=${data.username}&password=${data.password}`,
        method: 'GET',
    }) as Promise<BaseApiResult>;
}

export function register(data: RegisterForm): Promise<BaseApiResult> {
    return request({
        url: '/api/client/register',
        method: 'POST',
        data,
    }) as Promise<BaseApiResult>;
}
