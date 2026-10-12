const express = require("express");
const router = express.Router();
const connectMySQL = require("./config");

router.get("/list", function(req,res){
    res.send({
        status:200,
        results:[
            {
                name:"tester",
                age:"22"
            }
        ]
    })
})

router.use(express.static('public'))
router.get("/pic", function(req,res){
    res.send({
        status:200,
        results:[
            {
                id:1,
                name:"cat",
                image:"http://127.0.0.1:3000/images/1.jpg"
            }
        ]
        
    })
})

router.post("/login", function(req,res){
    res.send({
        msg:"login secusess"
    })
})


router.get("/sql", function(req,res){
    const sql = "SELECT * FROM dish";
    connectMySQL(sql,function(result){
        console.log(result);
    })
})

module.exports = router;
