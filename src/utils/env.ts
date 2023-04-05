/*
 * @Author: chenyx
 * @Date: 2023-04-03 00:53:36
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-04-04 22:37:53
 * @FilePath: /Ilight-V3/src/utils/env.ts
 */
import pkg from '../../package.json';
import { judgePlatform } from '@/utils/platform';
import { PLATFORMS } from '@/enums/platformEnum';

/**
 * @description: Generate cache key according to version
 */
export function getPkgVersion() {
    return `${`__${pkg.version}`}__`.toUpperCase();
}

/**
 * @description: Development mode
 */
export const devMode = 'development';

/**
 * @description: Production mode
 */
export const prodMode = 'production';

/**
 * @description: Get environment mode
 * @returns:
 * @example:
 */
export function getEnvMode(): string {
    return getEnvValue('VITE_ENV');
}

/**
 * @description: Get environment variables
 * @returns:
 * @example:
 */
export function getEnvValue<T = string>(key: keyof ImportMetaEnv): T {
    return import.meta.env[key] as unknown as T;
}

/**
 * @description: Is it a development mode
 * @returns:
 * @example:
 */
export function isDevMode(): boolean {
    return getEnvMode() === devMode;
}

/**
 * @description: Is it a production mode
 * @returns:
 * @example:
 */
export function isProdMode(): boolean {
    return getEnvMode() === prodMode;
}

/**
 * @description: Get environment VITE_APP_BASE_URL value
 * @returns:
 * @example:
 */
export function getBaseUrl(): string {
    let BaseUrl = '';
    // #ifdef MP||APP-PLUS
    BaseUrl = 'VITE_APP_BASE_URL';
    // #endif
    // #ifdef H5
    BaseUrl = 'VITE_APP_BASE_API';
    // #endif
    return getEnvValue<string>(BaseUrl);
}

/**
 * @description: Get environment VITE_UPLOAD_URL value
 * @returns:
 * @example:
 */
export function getUploadUrl(): string {
    if (judgePlatform(PLATFORMS.H5) && isDevMode()) return '/upload';
    return getEnvValue<string>('VITE_UPLOAD_URL');
}
