const mysql = require("mysql2");

const client = mysql.createConnection({
    host:"localhost",
    user:"root",
    // password:"",
    database:"food"
})

function connectMySQL1(){
    client.query(sql,arr,function(err,result){
        if(err){
            console.log(err);
            return;
        }
        callback(result);
    })

}

function connectMySQL(sql,callback){
    client.query(sql,function(err,result){
        if(err){
            console.log(err);
            return;
        }
        callback(result);
    })

}


module.exports = connectMySQL