const Button=()=>{
    function handleclick(){
        const n1=100
        const n2=200
        alert(n1+n2)
    }
    function sub(){
        const n1=100
        const n2=200
        alert(n1-n2)
    }
    function mul(){
        const n1=100
        const n2=200
        alert(n1*n2)
    }
    return(
        <div>
            <h1>n1=100</h1>
            <h1>n2=200</h1>
        <button name="btn" onClick={handleclick}>+</button>
        <button name="btn" onClick={sub}>-</button>
        <button name="btn" onClick={mul}>*</button>
        </div>
    );
}
export default Button;