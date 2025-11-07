
const express = require("express")
const port = 3000;
const app = express();


app.get('/', (req, res) => {
    res.send("this is node js and express js  ");
});
app.post('/createuser', (req, res) => {
    res.send('user created are success');
});

app.put('/updateuser', (req, res) => {
    res.send('user update success');
});

app.head('/retreiveuser', (req, res) => {
    res.send('user retreived are success');

});
app.delete('/removeuser', (req, res) => {
    res.send('user removed  are success');

});

//listening the server
app.listen(port, () => {

    console.log(`the server is running at localhost:${port}`);
});


