
const express = require('express'); 
const app = express();
const bodyParser = require('body-parser')

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