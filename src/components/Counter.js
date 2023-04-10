/**
 * Task 2: Understanding State
 */

import { useState } from "react";

export function Counter(){
    
    const [count, setCount] = useState(0);

    return (
        <>
        {/* increment button */}
        <button onClick={()=>{setCount((prevCount)=>prevCount+1)}}>+</button>
        <h1>{count}</h1>

        {/* decrement button */}
        <button onClick={()=>{setCount((prevCount)=>prevCount-1)}}>-</button>

        {/* reset button */}
        <button onClick={()=>{setCount(0)}}>Reset</button>
        </>
    );
}