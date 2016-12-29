var PORT = process.env.PORT || 4000;
module.exports = function (app) {
    app.get("/", function (req, res) {
        res.sendFile(process.cwd() + "/public/index.ejs");
    });

    app.get("/todos", function (req, res) {
        res.json({
            "todos" : ["grocery", "primark", "milk"]
        });
    });

    app.post("/todos", function (req, res) {
        res.send("posted");
    });

    // app.put("/todos", function (req, res) {
    //
    // });
    //
    // app.delete("/todos", function (req, res) {
    //
    // });

    app.listen(PORT, function () {
        console.log("listening on port " + PORT);
    });
};