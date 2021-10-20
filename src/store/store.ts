import {createStore, applyMiddleware,Middleware} from "redux";
import {combinedReducers, initialState} from "./reducers";
import SagaMiddleware, {AppSaga} from "./sagas";
import {composeWithDevTools} from 'redux-devtools-extension';

//middlewares array
const middlewares:Middleware[] = [];

//saga middleware
middlewares.push(SagaMiddleware);

//create store method
export const storeCreator = () => {
    //create store
    const store = createStore(
        combinedReducers,
        // @ts-ignore
        initialState,
        composeWithDevTools(applyMiddleware(...middlewares))
    );

    //run app saga after create sore
    SagaMiddleware.run(AppSaga);

    return store;
};
