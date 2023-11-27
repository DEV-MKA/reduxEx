import { configureStore } from "@reduxjs/toolkit";
import reducerAmount from './features/counter/counterSlice'
const store = configureStore({
    reducer: {
        amount: reducerAmount
    },
})
export default store;