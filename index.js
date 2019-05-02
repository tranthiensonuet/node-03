let express = require('express');
let bodyParser = require('body-parser');
let app = express();
let routers = require('./router');
let config = require('config');

let host = process.env.HOST || config.get("HOST");
let port = process.env.PORT || config.get("PORT");

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