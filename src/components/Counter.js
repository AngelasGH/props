import { useState } from "react";

export function Counter(){
    
    const [count, setCount] = useState(0);

    return (
        <>
        <button onClick={()=>{setCount((prevCount)=>prevCount+1)}}>+</button>
        <h1>{count}</h1>
        <button onClick={()=>{setCount((prevCount)=>prevCount-1)}}>-</button>
        <button onClick={()=>{setCount(0)}}>Reset</button>
        </>
    );
}