var express = require('express');
var PORT = process.env.PORT || 4000;
var app = express();

app.use(express.static("public"));
app.set("views", "./public");

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get("/", function (req, res) {
    res.sendFile(process.cwd() + "/public/index.html");
});

app.get("/todos", function (req, res) {
   res.json({
       "todos" : ["grocery", "primark", "milk"]
   });
});

app.listen(PORT, function () {
    console.log("listening on port " + PORT);
});
