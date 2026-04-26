const express = require("express");
const loggerMiddleware = require("logger")

const app = express();
// logs the method, timestamp and te url

function middleware(req, res, next){
    console.log("method is" + req.method);
    console.log("host" + req.hostname);
    console.log("Route is" + req.url);
    console.log(new dete());
    
    next();
}
app.use(loggerMiddleware);

app.get("/sum", function(req, res) {
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    res.json({
        ans: a + b
    })
});

app.get("/multiply", function(req, res) {
    const a = req.query.a;
    const b = req.query.b;
    res.json({
        ans: a * b
    })
});

app.get("/divide", function(req, res) {
    const a = req.query.a;
    const b = req.query.b;
    res.json({
        ans: a / b
    })

});

app.get("/subtract", function(req, res) {
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    res.json({
        ans: a - b
    })
});

app.listen(3000);