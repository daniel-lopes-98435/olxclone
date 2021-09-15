require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const fileupload = require('express-fileupload');

mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedtopology: true
});
mongoose.connection.on('error', (error) => {
    console.log('Error: ', error.message)
})

const server = express();
server.use(cors());
server.use(express.json())
server.use(fileupload());
server.use(express.urlencoded({extended: true}))

server.use(express.static(__dirname+'/puclic'))
server.get('/ping', (req, res) => {
    res.send({
        pong: true
    })
})

server.listen(process.env.PORT, () =>{
    console.log(`Server is running on: ${process.env.BASE}`)
})
