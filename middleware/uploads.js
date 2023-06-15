const multer = require("multer");

// Como se guarda el archivo
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '../public/products')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, file.fieldname + '-' + uniqueSuffix)
  }
})
// le dice que el sistema de upload use storage
const uploadProduct = multer({
  storage: storage
});

const storageUser = multer.diskStorage({
    destination: function(req, file, cb){
cb(null, '../public/images/users/default-image.png')
    },
filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, file.fieldname + '-' + uniqueSuffix)
}
});
const uploadUser = multer({storageUser})


module.exports = {uploadProduct, uploadUser}