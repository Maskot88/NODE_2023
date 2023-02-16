"use strict";

const fs = require("fs");
// console.log(fs.promises);
// const fs = require("fs/promises");
// const fs = require("fs").promises;
console.log(fs);

fs.readFile('./test.txt', {encoding:'utf-8'}, (err, data) => {
    if (err) throw err;
    console.log(data)
})