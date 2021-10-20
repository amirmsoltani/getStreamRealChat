import {HTTP_REQUEST, SignInRequestActionType} from "../../../types";
import {COINS_MARKETS_URL} from "../../../URLS";

export const signInRequestAction: SignInRequestActionType = ({email, password}) => {

    return {
        type: HTTP_REQUEST,
        payload: {
            reducer: "layout",
            target: "auth",
            method: "POST",
            url: '',
        },
    };
};
