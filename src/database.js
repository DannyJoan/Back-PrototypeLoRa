const mysql = require('mysql');

const mysqlConnection = mysql.createConnection(
    {
        host:'localhost',
        user: 'root',
        password: '',
        database: 'prototipolora'
    }
)

mysqlConnection.connect(function (err)
{
    if(err){
        console.log(err);
        return;
    }else{
        console.log('Database connected');
    }

});

module.exports = mysqlConnection;