const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'fsbootcamp2024'
})

connection.connect((error) => {
    if (error) console.log(error);
    else console.log('Connected to the database');
})

module.exports = connection;