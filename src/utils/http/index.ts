/*
 * @Author: chenyx
 * @Date: 2023-04-03 00:53:36
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-04-04 23:22:33
 * @FilePath: /Ilight-V3/src/utils/http/index.ts
 */
import Qs from 'qs';
import { getBaseUrl } from '../env';

const service = (obj: UniApp.RequestOptions) => {
    return new Promise((resolve, reject) => {
        const baseUrl = getBaseUrl();
        const method = obj.method || 'GET';
        const url = baseUrl + obj.url || '';
        const data = Qs.stringify(obj.data || {});
        const header = obj.header || {
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
        };
        uni.request({
            url: url,
            data: data,
            method: method,
            header: header,
            sslVerify: false,
            success: (res) => {
                console.log('请求url====>', url);
                console.log('请求传值 ====>', data);
                console.log('请求返回值====>', res);

                if (res.statusCode === 200) {
                    const data = res.data as BaseApiResult;
                    if (data.tip === '10001') {
                        // 返回登录失效 需要重新登录
                        // quickLogin();
                    } else {
                        resolve(data);
                    }
                } else {
                    reject(res);
                }
            },
            fail: (err) => {
                reject(err);
            },
            complete: () => {},
        });
    });
};
export default service;
