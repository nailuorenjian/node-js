const express = require("express");
const app = express();
const router = require("./router");

app.use("/",router);


app.listen(3000,function(){
// 终端打印如下信息
console.log('Server running at http://127.0.0.1:3000/');
})
