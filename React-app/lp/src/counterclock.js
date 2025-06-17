import React,{useState} from "react";
export const Counterclock = () => {
    const[count,setcount] = useState(0);
    const increment = () => {
        setcount(count + 1);
    }
    const decrement = () => {
        setcount(count - 1);
    }
    return(
        <div>
            <h1>counter clock</h1>
            <p>current count : {count}</p>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
                    
        </div>
    );
}
