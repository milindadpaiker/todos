const express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');

const app = express();
const todosRoutes = require('./routes/todos');
// var corsOptions = {
//     origin: 'http://127.0.0.1:3000',
//     optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
//   }
//app.use(cors(corsOptions))
app.use(cors())
app.use(express.static('public'))
app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({ extended: false }));

app.use('/todos', todosRoutes.router);


app.listen(8000)