"use strict";


const fs = require("fs/promises");


fs.readFile('./test.txt', 'utf-8')
    .then((data)=>{
        console.log(data);
        fs.appendFile("./newTest.txt", data+"\nLOREM!!!", 'utf-8')
    })
    .catch((err)=>{console.log(err)})
