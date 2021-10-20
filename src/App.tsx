import React from 'react';
import {Provider} from 'react-redux';

import './App.css';
import Layout from './layout';
import {storeCreator} from "./store";
import {BrowserRouter} from "react-router-dom";


function App() {
    return (
        <Provider store={storeCreator()}>
            <BrowserRouter>
                <Layout/>
            </BrowserRouter>
        </Provider>
    );
}

export default App;
