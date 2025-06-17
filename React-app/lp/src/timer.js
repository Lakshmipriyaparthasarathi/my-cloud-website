import React, {useState,useEffect} from "react";
export const Timer = () => {
    const [count,setCount] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setCount((prevCount) => prevCount + 1);
        }, 5000);
        return ()=>clearInterval(interval);
    },[]);
    return(
            <div>
                <h1>Timer :</h1>
                <p>Count : {count}</p>
            </div>
        );
    };
