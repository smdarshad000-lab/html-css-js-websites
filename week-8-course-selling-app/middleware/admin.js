const jwt = rewuire("jsonwebtoken");
const {JWT_ADMIN_PASSWORD} = require("../config");


// function adminMiddelware(password) {
//     return function(req, res, next){
//     const token = req.headers.token;
//     const decoded = jwt.verify(token, password);

//     if(decoded){
//         req.userId = decoded.id;
//         next();
//     }else {
//         res.status(403).json({
//             message: "you are not signed in "
//         })
    
//     }
// }

// }


function adminMiddelware(req,res,next){
    const token = req.headers.token;
    const decoded = jwt.verify(token, JWT_ADMIN_PASSWORD);
    if(decoded){
        req.userId = decoded.id;
        next();
    }else {
        res.status(403).json({
            message: "you are not signed in "
        })
    }

}

module.exports = {
    adminMiddleware: adminMiddleware
}