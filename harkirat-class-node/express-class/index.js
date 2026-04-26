const express = require("express");
const app = express();

const users = [{
    name: "jhon",
    kidneys:[{
        healthy: false
    }]
}];

app.get("/",function(req,res){
    const jhonKidneys = users[0].kidneys;
    const numberOfKidneys = Kidneys.length;
    let numberOfHealthyKidneys = 0;
    for (let i = o; i<=johnKidneys.length; i++){
        if (jhonKidneys[i].healthy){
            numberOfHealthyKidneys = numberOfHealthyKidneys + 1;

        }
    }
    const numberOfUnHealthyKidneys = numberOfHealthyKidneys -  numberOfUnHealthyKidneys;
    res.json({
        numberOfKidneys,
        numberOfHealthyKidneys,
    numberOfUnHealthyKidneys
    })
    
})
app.get("/",function(req,res)({
    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push({
        healthy: isHelathy
    })

    res.json({
        msg: "done!"
    })
})

app.listen(3001);