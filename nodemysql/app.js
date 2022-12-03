const dbconn = require("./dbconnect");

if(dbconn=="connected");
{
    console.log("Connected from app");
    //q = "SELECT * FROM stu_details limit 1";
    dbconn.connection.query("use test_db");
    
    dbconn.connection.query("Insert into stu_details values ('17IT004','pratham soni')", function (err, result, fields) {
        if (err) throw err;
        console.log(result);});

    dbconn.connection.query("SELECT * FROM stu_details", function (err, result, fields) {
        if (err) throw err;
        console.log(result);});
    }