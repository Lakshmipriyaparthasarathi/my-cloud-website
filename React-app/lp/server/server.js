const express = require('express');
const app = express();
const PORT = 3005;
const message = "Hello, good aftn lp!";
app.get('/message', (req, res) => {
    res.json({message});
});
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});