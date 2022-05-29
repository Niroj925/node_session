import mysql from 'mysql2/promise';

var connection= await mysql.createConnection({
    host:'localhost',
    user:'admin',
    password:'Admin@123',
    database:'testdb'
});
export default connection;