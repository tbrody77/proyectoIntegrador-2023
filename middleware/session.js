function sessioninview(req, res, next) {
    console.log('session', req.session);
    if(req.session && req.session.usuario){
        res.locals.usuario = req.session.usuario
    }
    next()
}

module.exports = sessioninview