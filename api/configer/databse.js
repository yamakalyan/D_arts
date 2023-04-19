const mysql = require('mysql')

const database = mysql.createConnection({
    host : 'localhost',
    user : "root",
    password :'',
    database: "arts_gallery"
})
database.connect((err, result)=>{
    if (err) {
        console.log("there is an error")
    } else {
        console.log("database succesful")
    }
})

module.exports = database