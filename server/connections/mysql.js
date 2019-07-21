import mysql from  'mysql';
const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'new-password',
    database : 'sql_node'
});

connection.connect(function () {
    let createTodos = `create table if not exists todos(
                          id int primary key auto_increment,
                          title varchar(255)not null,
                          completed tinyint(1) not null default 0
                      )`;

    connection.query(createTodos, function(err, results, fields) {
        if (err) {
            console.log(err.message);
        }
    });
});

export default connection
