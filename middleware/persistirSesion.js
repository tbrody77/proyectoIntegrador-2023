
function persistirSesion (req, res, next) { 
if (req.cookies.usuario) {
    req.session.usuario = JSON.parse(req.cookies.usuario)
} 
next()
}
module.exports = persistirSesion