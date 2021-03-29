import coreTypes from "./core.types";

export const setAppName = (payload) => {
    return {
        type: coreTypes.SET_APP_NAME,
        payload,
    }
}