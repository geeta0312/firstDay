import React , {useState} from 'react'

function useCounter(initaial,incrementBy) {
    const [count, setCount] = useState(initaial);

    const Increment = () => {
        setCount(count + incrementBy)
    }

    const Decrement = () => {
        setCount(count - 1)
    }

    // const Reset = () => {
    //     setCount(initialValue)
    // }

    return [count, Increment,Decrement]


}

export default useCounter
