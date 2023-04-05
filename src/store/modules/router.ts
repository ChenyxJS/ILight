/*
 * @Author: chenyx
 * @Date: 2023-04-03 00:53:36
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-04-03 11:44:59
 * @FilePath: /Ilight-V3/src/state/modules/router.ts
 */
import { defineStore } from 'pinia';
import { Route } from '@/types/router/route';
import { pagesMap } from '@/utils/router/routes';

interface routeStore {
    routes: Map<string, Route> | undefined;
    currentRouter: Route | undefined;
}

export const useRouterStore = defineStore('routerStore', {
    state: (): routeStore => ({
        routes: undefined,
        currentRouter: undefined,
    }),
    getters: {
        getRoutes(state) {
            return state.routes;
        },
        getCurrentRoute(state) {
            return state.currentRouter;
        },
    },
    actions: {
        initialize() {
            this.setRoutes();
        },
        setRoutes() {
            this.routes = pagesMap;
        },
        setCurrentRoute(path: string) {
            this.currentRouter = this.routes?.get(path) || undefined;
        },
    },
});
