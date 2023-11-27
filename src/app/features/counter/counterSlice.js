import { createSlice } from "@reduxjs/toolkit";
const counterSlice = createSlice({
    name: 'amount',
    initialState: {
        value : 5000,
        payload: 500
    },
    reducers: {
        deposit: state =>{
            state.value +=state.payload
        },
        withdraw: state =>{
            state.value -=state.payload
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload
        },
        decrementByAmount: (state, action) => {
            state.value -= action.payload
        },
    }
})
// export const incrementAsync = (amount) => (dispatch) => {
//     setTimeout(() => {
//       dispatch(incrementByAmount(amount))
//     }, 1000)
//   }
export const { deposit, withdraw,incrementByAmount, decrementByAmount } = counterSlice.actions
// export const selectCount = (state) => state.counter.value
export default counterSlice.reducer