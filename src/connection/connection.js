const mysql = require ('mysql')

const conn = mysql.createConnection({
    user: 'root',
    password: 'Vya22Feb1994',
    host: 'localhost',
    database: 'ujianbackend',
    port: '3306'
})

module.exports= conn