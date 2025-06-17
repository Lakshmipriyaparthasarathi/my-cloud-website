const  Button=()=>{
function handleclick(){
    alert ("hello")
}
return(
    <button name="btn" onClick={handleclick}>click</button>

);
}

    
export default Button;


onclick is event

handleclick is a call back function....if we click the on click..it will call the function and our output hello will be shown


2IMPORTANT THINGS ABOUT EVERY COMPONENET :

1)Props
2)state

PROPS will not be changeed.....eg:water bottle brand namr :bisleri

state will change.....eg:water bottle level

state will be implemented using a concept called "HOOKS".

IMPORTANT HOOKS:

1)useState
2)useeffect
3)usecontext
4)useref
5)usereducer


USESTATE :
  
1) Initial state will be assigned straightaway using this hook.

2)use state returns an array with 2 values or 2 elements

3)frst element or value denotes initial state of the component

4)second element is a function which will be used to update the state.




import React,{ useState } from 'react';

const Usestate=() => {
    const [message, SetMesssage]=useState("Hi");
    const changeMesssage=() => {
        if(message ==="Hi") {
            SetMesssage("Hello");
        }else{
            SetMesssage("Hi");
        }
    };
    return(
        <div>
            <p>{message}</p>
            <button onClick={changeMesssage}>clickMe</button>
        </div>

    );
};
export default Usestate;


1)Initial state will be assigned straightway using this Hook
2)Use state returns an array with two values or two elements 
3)first element denotes initial state of the component 
4)second element will be a function which will be used to update the state
----------------------------------------------------------------------------
create 3 files under src
home.js
about.js
contact.js to integrate all these install router
use this cmd in terminal of the app in the vs code "npm install react-router-dom"