import React, {useState, useEffect} from "react";

export const Client = () => {
    const [serverMessage, setServerMessage] = useState("");
    useEffect(() => {
        const fetchMessage = async () => {
            try{
                const response = await
                fetch("http://localhost:3002");
                const text = await response.text();
                setServerMessage(text);
            } catch (error) {
                console.error("Error in fetching:", error);
            }
        };
        fetchMessage();
    },[]);
    return (
    <div>
        <h1>Message from server</h1>
        <p>{serverMessage}</p>
      
    </div>
  );
};


