import React, { useState } from "react";
import './style.css'

const Count = ({numInit})=>{
    const [count, setCount] = useState(numInit)
    const increment = () =>{
        setCount((prev) => prev+1)
    }
    const decrement = () =>{
        setCount((prev) => prev-1)
    }
    const reset = () =>{
        setCount(0)
    }
    return(
        <div>
            <p>Contador: {count}</p>
            <div>
                <button onClick={increment}>+</button>
                <button onClick={decrement}>-</button>
                <button onClick={reset}>reset</button>
            </div>
        </div>
    )
}

export default Count