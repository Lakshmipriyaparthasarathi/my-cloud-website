import { eventWrapper } from '@testing-library/user-event/dist/utils';
import React, {useState} from 'react';
function Name(){
    const[name,setName] =useState("");
    const[age,setAge] =useState("");
    const[color,setColor] =useState("");

    const[displayName, setDisplayName] = useState("");
    const[displayAge, setDisplayAge] = useState("");
    const[displayColor, setDisplayColor] = useState("");
    const Resetbutton=()=>{
        setName("");
        setAge("");
        setColor("");
        setDisplayName("");
        setDisplayAge("");
        setDisplayColor("");
    };
    
    const handleNameChange = (event) =>{
       setName(event.target.value);
    }
    
    const handleAgeChange = (event) => {
       setAge(event.target.value);
    }

    
    const handleColorChange = (event) => {
       setColor(event.target.value); 
    };
    const handleButtonClick= () => {
        setDisplayName(name);

    };
    const handleButtonAge= () => {
        setDisplayAge(age);
    };
    const handleButtonColor= () => {
        setDisplayColor(color);
    };
    return(
        <div>
            
            <h1>ENTER YOUR NAME</h1>
            <input
            type="text"
            value={name}
            onChange={handleNameChange} />
            <button onClick={handleButtonClick}>SUBMIT</button>
            {displayName && <h2>YOUR NAME IS : {displayName}</h2>}
            
             
            <h1>ENTER YOUR AGE</h1>
            <input
            type="number"
            value={age}
            onChange={handleAgeChange} />
            <button onClick={handleButtonAge}>SUBMIT</button>
            {displayAge && <h2>YOUR AGE  IS : {displayAge}</h2>}
        
             
            <h1>ENTER YOUR FAV COLOUR</h1>
            <input
            type="text"
            value={color}
            onChange={handleColorChange} />
            <button onClick={handleButtonColor}>SUBMIT</button>
            {displayColor && <h2>YOUR FAVOURITE COLOUR IS : {displayColor}</h2>}
            <button onClick={Resetbutton}>RESET</button>
            </div>
    );
}
export default Name;

 