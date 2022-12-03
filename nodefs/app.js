const fs = require("fs");

// Sync
//var filelist = fs.readdirSync("./");
//console.log(filelist);

// Async
fs.readdir('./hemant',function(err,data){
    if(err)
        console.log("There is error"+err);
    else
        console.log(data)

});
