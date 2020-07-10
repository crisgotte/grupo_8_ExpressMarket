function authMiddleware(req, res, next){
    if(req.session.usuarilogueado == undifined){
        next();
       
    } else {
        res.send ("Esta pagina es solo para usuarios");
    }

} 
module.exports = authMiddleware;