
const express = require('express'); 
const app = express();
const bodyParser = require('body-parser')
const cors = require("cors");

const sqlite3 = require('sqlite3').verbose();
const DBPATH = 'curriculo.db';

const hostname = '127.0.0.1';
const port = 1105;

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static("front-end"));
app.use(cors());

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

app.get('/getFormationData', (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS

	var db = new sqlite3.Database(DBPATH); // Abre o banco
    var sql = `SELECT
                    Formacao.ID,
                    Formacao.Titulo as Local,
                    Formacao.Periodo as Duracao,
                    Formacao.Tipo as Tipo
                FROM Formacao`;
    
	db.all(sql, [],  (err, rows ) => {
		if (err) {
		    throw err;
		}
      res.send(JSON.stringify(rows));
	});
	db.close(); // Fecha o banco
});

app.put('/updateFormacaoData/:id', (req, res) => {

	console.log(req.body);

	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS
	var db = new sqlite3.Database(DBPATH); // Abre o banco
    var sql = `UPDATE Formacao
              SET Titulo = ?,
                  Periodo = ?,
                  Tipo = ?
              WHERE
                  ID = ?;`

    let param = [];
    param.push(req.body.titulo, req.body.periodo, req.body.tipo, req.params.id);

	console.log(req.body.titulo, req.body.periodo, req.body.tipo, req.params.id);

	console.log(req.body);
	console.log(param);
	
	db.all(sql, param,  (err, rows ) => {
		if (err) {
		    throw err;
		}
		res.json(rows);
	});
	db.close(); // Fecha o banco
});

app.post('/insertFormacaoData', (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS
	var db = new sqlite3.Database(DBPATH); // Abre o banco
    var sql = `INSERT INTO Formacao (Titulo, Periodo, Tipo)
                VALUES 
                    (?, ?, ?)`
    
    let param = [];
    param.push(req.body.titulo, req.body.periodo, req.body.tipo);

	db.all(sql, param,  (err, rows ) => {
		if (err) {
		    throw err;
		}
		res.json(rows);
	});
	db.close(); // Fecha o banco
});

app.delete('/deleteFormacaoData', (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS
	var db = new sqlite3.Database(DBPATH); // Abre o banco
    var sql = `DELETE FROM Formacao
              WHERE id = ?;`
    
    let param = [];
    param.push(req.body.id);

	db.all(sql, param,  (err, rows ) => {
		if (err) {
		    throw err;
		}
		res.json(rows);
	});
	db.close(); // Fecha o banco
});