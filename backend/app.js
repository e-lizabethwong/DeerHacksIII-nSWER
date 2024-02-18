const express = require("express");
const cors = require("cors");
const {queryOpenAI} = require('./utilities');
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.post('/', async(req, res)=>{
    // console.log(req.body);
    console.log(req.body)
    const {content, text} = req.body;
    // console.log(content, text);
    if(!content) {
        res.status(500).send({message:"No ContentFound"});
        throw Error("No Content Received!")
    }
    const respond = await queryOpenAI(content+text);
    res.send({
        message:"Success",
        respond
    })
})

app.listen(port, ()=>{
    console.log('Listening On Port '+port);
})