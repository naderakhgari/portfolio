const path = require('path');
const express  = require('express');
const bodyParser = require('body-parser');

const ENV = process.env.NODE_ENV;
const PORT = process.env.PORT || 5000;

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(bodyParser.json());

app.get("/test",(req, res)=>{
    res.send("hello !")
} )

app.listen(PORT, ()=>{
    console.log(`Server is listening on port ${PORT}!`)
})

module.exports = app;