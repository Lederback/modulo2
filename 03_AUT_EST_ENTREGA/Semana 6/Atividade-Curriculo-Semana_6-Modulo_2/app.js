
const express = require('express'); 
const app = express();
const bodyParser = require('body-parser')

const sqlite3 = require('sqlite3').verbose();
const DBPATH = 'curriculo.db';

const hostname = '127.0.0.1';
const port = 1105;

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("front-end"));

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

app.get("/user", function(req, res){
  res.header("Access-Control-Allow-Origin", "*");
  res.send(JSON.stringify(
  {
    nome:"Renato",
    idade:17
  }));
});

app.get('/getUserData', (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS

	var db = new sqlite3.Database(DBPATH); // Abre o banco
    var sql = `SELECT
                    Usuario.id,
                    Usuario.Nome AS Nome,
                    Usuario.Idade AS Idade 
                FROM Usuario`;
    
	db.all(sql, [],  (err, rows ) => {
		if (err) {
		    throw err;
		}
      res.send(JSON.stringify(rows));
	});
	db.close(); // Fecha o banco
});