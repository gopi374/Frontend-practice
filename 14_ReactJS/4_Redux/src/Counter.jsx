import React from "react"
import { u } from "react"
import {increment,decrement,incrementByAmount} from "./counterSlice"
import { useDispatch, useSelector } from "react-redux"

const Counter=()=>{

    const count=useSelector((state)=>state.counter.value);

    const dispatch=useDispatch();

    return (
        <div>
            <h2>Global Count :{count}</h2>
            <button onClick={()=>dispatch(increment())}>+</button>
            <button onClick={()=>dispatch(decrement())}>-</button>
            <button onClick={()=>dispatch(incrementByAmount(5))}>Add 5</button>
            
        </div>
    )
}

export default Counter;