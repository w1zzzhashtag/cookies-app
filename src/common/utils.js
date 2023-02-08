import {ROUTES} from "./constants";

const getRouteInfo = (key) => ROUTES[key]

export const getRoutePath = (key) => {
    return getRouteInfo(key).path
}