const mysql = require('mysql');
// create connection to database
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'sport_shop'
});
// Mở kết nối
db.connect(error => {
    if (error) throw error;
    console.log('Successfully connected to the database.');
});

module.exports = db;