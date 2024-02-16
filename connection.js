const mysql      = require('mysql');
const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'Nouran123',
  database :'world'
});



connection.connect((err) => {
  if (err) {
    console.error('connection error' );
    return;
  }
 
  console.log('connected ' );
});


connection.query('SELECT * FROM city', function (error, results, fields) {
  if (error) throw error;
  console.log( results);
});

//insert


connection.query('INSERT INTO city SET ?', {

  ID:50000,
  Name: 'cairo',
  CountryCode: 'AFG'

}
, (err, result, fields) => {
  if (err) {
    console.log('Insertion error:');
    throw err;
  }

  console.log('insertion is good');
  console.log(result);
});

//update 
connection.query('update city  set ? where ?',[{Name :'cairo'},{CountryCode :'AFG'}],(err,result,fields) =>{
  if (err) {
    console.log(' error');
    throw err;
  }
  console.log(result);
});


//Delete 

connection.query('delete from city where ?',{Name :'Dubai'},(err,result,fields) => {
  if (err) {
    console.log(' error on delete');
    throw err;
  }
  console.log(result);

});


//create 

const q=`CREATE TABLE IF NOT EXISTS x (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL
)`;
connection.query(q,(err,result ,fields) => {
  if (err) {
    console.log(' error');
    throw err;
  }
  console.log(result);
});

connection.end();

