import { ROUTER } from 'Store/RouterConst'

export function redirect(url) {
    return {
        type: ROUTER,
        payload: {
            method: 'push',
            nextUrl: url
        }
    }
}