import coreTypes from "./core.types";

const INITIAL_STATE = {
    application: {
        name: 'Bestow',
    }
}

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case coreTypes.SET_APP_NAME:
            return {
                ...state,
                application: {
                    ...state.application,
                    name: action.payload,
                }
            }
        default:
            return state;
    }
}

export default reducer;