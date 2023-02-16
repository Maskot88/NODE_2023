"use strict";

const {MyMath} = require("./MyMath");
const {Component} = require("./Component");


const result = MyMath.sum(4, 8);
console.log("result = ", result);

const component1 = new Component();
component1.render();


// require
// resolving -> loading -> wrapping -> evaluation -> caching 

// resolving:
// 1 - core modules
// 2 - file.js filename.json
// 3 - directory 
//  3.1 - directory/packege.json -> "main"
//  3.2 - directory/index.js | directory/index.json
// 4 - node_modules
// 5 - throw new Errorr()