import React from "react";
import { useState } from "react";
import {deposit, withdraw,incrementByAmount, decrementByAmount} from './app/features/counter/counterSlice'
import { useDispatch } from "react-redux";
export default function Shop(){
    const dispatch = useDispatch()
    const [incrementAmount, setIncrementAmount] = useState('100');
    return(
        <div>
            <h2>Deposit/Withdraw money</h2>
            <button className="btn btn-primary mx-2" onClick={()=>dispatch(withdraw())}>-</button>
            Update balance
            <button className="btn btn-primary mx-2" onClick={()=>dispatch(deposit())}>+</button>
            <hr/>  
            <button
                 onClick={() =>
                 dispatch(decrementByAmount(Number(incrementAmount) || 0))
            }
              >-Button</button>
            <input
              aria-label="Set increment amount"
              value={incrementAmount}
              onChange={e => setIncrementAmount(e.target.value)} />
               <button
                 onClick={() =>
                 dispatch(incrementByAmount(Number(incrementAmount) || 0))}
              >+Button</button>
        </div>
     )
}