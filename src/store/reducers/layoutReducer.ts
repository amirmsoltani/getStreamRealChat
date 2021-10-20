import {
    HTTP_REQUEST, HTTP_REQUEST_FAILURE,
    HTTP_REQUEST_SUCCESS,
    LayoutActionsType,
    LayoutReducerType,
} from "../../types";

export const initialLayoutReducers: LayoutReducerType = {auth: {authToken: undefined, status: 'idle'}};

export default (store: LayoutReducerType = initialLayoutReducers, action: LayoutActionsType) => {
    switch (action.type) {
        case HTTP_REQUEST:
            if (action.payload.reducer !== "layout") return store;
            return {
                ...store,
                [action.payload.target]: {
                    ...store[action.payload.target],
                    status: "loading",
                },
            };
        case HTTP_REQUEST_SUCCESS:
            if (action.payload.reducer !== "layout") return store;
            return {
                ...store,
                [action.payload.target]: {
                    status: "success",
                    response: action.payload.response,
                },
            };
        case HTTP_REQUEST_FAILURE:
            if (action.payload.reducer !== "layout") return store;
            return {
                ...store,
                [action.payload.target]: {
                    status: "failure",
                    error: action.payload.error,
                },
            };
        default:
            return store;
    }
}
