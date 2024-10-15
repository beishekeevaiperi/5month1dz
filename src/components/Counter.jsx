import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {decrement, decrementBy10, increment, incrementBy10, reset} from "../actions /Actions.js";

const Counter = () => {
    const count = useSelector((state) => state.count);
    const dispatch = useDispatch();
    console.log(count)
    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={() => dispatch(increment())}>Increment</button>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
            <button onClick={() => dispatch(reset())}>Reset</button>
            <button onClick={() => dispatch(incrementBy10())}>+10</button>
            <button onClick={() => dispatch(decrementBy10())}>-10</button>
        </div>
    );
};

export default Counter;
