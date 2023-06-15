function sessioninview(req, res, next) {
    if(req.session && req.session.usuario){
        res.locals.usuario = req.session.usuario
    }
    next()
}

module.exports = sessioninview