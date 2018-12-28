var connection = require("./connection.js");

var orm = {
    selectAll: function(tableInput,cb){
        console.log("TABLE"+tableInput);
        var queryString = "SELECT * FROM ??";
        connection.query(queryString, [tableInput], function(err,result){
            if (err) throw err;
            console.log(result);
        
            cb(result);
        })
    },
    insertOne: function(tableInput,khana,cb){
        var queryString = "INSERT INTO ??(khana_name) VALUES (?)";
        connection.query(queryString, [tableInput, khana],function(err, result){
            if (err) throw err;
            console.log(result);

            cb(result);
        })
    },
    updateOne: function(tableInput,id,cb){
        console.log(tableInput);
        var queryString = "UPDATE ?? SET devoured=? WHERE ID=?";
        connection.query(queryString, [tableInput,true,id], function(err,result){
            if (err) throw err;
            console.log(result);

            cb(result);
        })

    }
}
module.exports = orm;