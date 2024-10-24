import React from 'react'
import useCounter from './useCounter'

const initial=10;
const incrementBy=5
function Sample() {
    const [count, Increment, Decrement] = useCounter(initial,incrementBy);
    return (
        <div>
            <h1>Counter 2:{count}</h1>
            <button onClick={Increment}>Increment</button>
            <button onClick={Decrement}>Decrement</button>
        </div>
    )
}

export default Sample
