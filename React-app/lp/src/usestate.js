import React,{useState} from "react";
export const Usestate = () => {
    const[message, setmessage] = useState("Hi");
    const changemessage = () => {
        if (message == "Hi") {
            setmessage("Hello");
        } else {
            setmessage("Hi");
        }
    };
    return (
        <div>
            <p>{message}</p>
            <button onClick={changemessage}>Click here</button>
        </div>
    );
};
