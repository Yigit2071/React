import { configureStore } from '@reduxjs/toolkit'
import appReducer from "../redux/slices/appSlice"
import productReducer from "../redux/slices/productSlice"
import basketReducer from './slices/basketSlice.jsx'


export const store = configureStore({
    reducer: {
        app: appReducer,
        product: productReducer,
        basket: basketReducer

    },
})