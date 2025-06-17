//npm i express,cors
const express= require('express');
const cors=require('cors');
const app=express();
app.use(cors());
app.get('/',(req,res)=> {
    res.send('Hi This is message from server::');
});
app.listen(3002, () => {
    console.log('Server running on http://localhost:3002');
});