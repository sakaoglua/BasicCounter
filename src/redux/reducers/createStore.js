import { configureStore } from "@reduxjs/toolkit";

import allReducers from './index'

export default function createStore(){
    return configureStore({reducer: allReducers})
};