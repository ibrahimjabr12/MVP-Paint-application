const mysql      = require('mysql');
const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',

  database : 'mydrwing'
});
 
connection.connect();
 function addImage(image){
   connection.query(`insert into drwars (image) values ('${image}')`, function (error, results, fields) {
  if (error){
    throw error;
  }else{
    console.log('one image inserted');
  } 
});
 }
 function retrevallImages(cb){
  connection.query(`select image from drwars;`, function (error, results, fields) {
 if (error){
   cb(error)
 }else{
   cb(null,results)
 }

});
}
 module.exports={addImage,retrevallImages}
