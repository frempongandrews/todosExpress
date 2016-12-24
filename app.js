var express = require('express');
var app = express();
var PORT = 4000;
app.get('/api', function (req, res) {
        res.send("express working");
});

app.listen(PORT, function () {
    console.log("listening on port " + PORT);
});
