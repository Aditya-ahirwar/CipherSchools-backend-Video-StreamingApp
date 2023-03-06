import  jwt  from "jsonwebtoken";

export const verifyToken = (req, res, next) =>{
    const Token = req.cookies.access_token;
    if(!Token){
        res.status(404).send("user not Logged in")
        return next("user not Logged in");
    }
    jwt.verify(Token, process.env.JWT, (err, user) =>{
        
        if(err) {
            res.status(404).send("Invalid Token")
            return next("Invalid Token");
        }
        req.user = user;
        next();
    })
}