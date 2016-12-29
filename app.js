var express = require('express');

var todosController = require("./controllers/todosController");
var app = express();

app.use("view engine", "ejs");
app.use(express.static("public"));
app.set("views", "./public");

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


todosController(app);

