import React from 'react'

export const Form = () => {
    const handleclick=()=>{
        alert("Submitted successfully")
    }
  return (
    <div>
        <form>
            <label name="name">FIRST NAME:</label>
            <input name="n" type="text"></input>
            <br></br><br></br><label name="name">LAST NAME:</label>
            <input name="n" type="text"></input>
            <br></br><br></br><label name="name">AGE:</label>
            <input name="n" type="number"></input>
            <br></br><br></br><label name="name">GENDER:</label>
            <input name="n" type="text"></input>
            <br></br><br></br><label name="name">CONTACT NUMBER:</label>
            <input name="n" type="number"></input>
            <br></br><br></br><label name="name">COLLEGE NAME:</label>
            <input name="n" type="text"></input>
            <br></br><br></br><label name="name">DEPARTMENT:</label>
            <input name="n" type="text"></input>
            <br></br><br></br><label name="name">EMAIL:</label>
            <input name="n" type="email"></input>
            <br></br><br></br><label name="name">DATE OF BIRTH:</label>
            <input name="n" type="number"></input>
            <center>
            <br></br><br></br><button type="submit" onClick={handleclick}>SUBMIT</button>
            </center>
        </form>
        </div>
  )
}


