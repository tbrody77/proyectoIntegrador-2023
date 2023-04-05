//Requires



//Metodos
const productController={
   index: function(req, res, next) {
        res.render('product', { title: 'product' });
      },
}


//Exportaciones
module.exports = productController;