import Rough from'./one';

function App() {
    return (
    <div>
    <center>  
    <h1>DORAEMON</h1>
        <img src="https://i.pinimg.com/736x/da/fc/08/dafc08ea504481bb5af616fd31a5f664.jpg" height="700" width="1350" />
    </center>
    <video src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" controls loop></video>
    <Rough />
    </div>
    );
}
export default App;






ARROWFUNCTION :

const Arrowfunction=()=>{
    return(
        <h1>Arrow function</h1>
    );
}
export default Arrowfunction;



if we need to direct export means....we remove the export default arrowfunction which is at the end of the above code....and in the index.js page we put a curly brackets for arrowfuncion..direct export only works on arrowfunction

before we have                       import arrowfunction from './arrowfunction'

after changing this..it must be      import {arrowfunction} from './arrowfunction'




CHANGES WHILE WE OPEN THE SITE IT WILL SHOW HI MSG:

export const Arrowfunction=(n)=>{
    n=300;
    alert(n)
    return(
        <h1>Arrow function</h1>
    );
}
 

but here we give the number so it will show 300.

TO LINK THE WEBSITE :  (use anchor tag)

<a href = "link">name</a>