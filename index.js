const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const routers = require('./router');
let config = require('config');
const host = process.env.HOST || config.get("HOST");
const port = process.env.PORT || config.get("PORT");

app.use(bodyParser.urlencoded({
    exstended : true
}));
app.use(bodyParser.json());

app.get('/', function (req,res) {
    res.send('Hello, world!');
});
app.use('/todos', routers);
app.listen(port, host, function (req,res) {
    console.log(`Server started on ${host}:${port}`);
});