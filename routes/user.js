var express = require('express');
var router = express.Router();
const userController = require('../controladores/userController');
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname, '../public/images/users'))
    },
    filename: function (req, file, cb) {
        console.log(file);
      const uniqueSuffix = Date.now() + '.' + file.originalname.split('.')[1]
      cb(null,'imagen-' + uniqueSuffix)
    }
  })

  const upload = multer({ storage: storage })



/* GET users listing. */
router.post('/register', upload.single('photo'), userController.store);
router.get('/register', userController.register)

router.get('/profileEdit', userController.profileEdit);
router.get('/logout', userController.logout);

router.get('/login', userController.login);
router.post('/login', userController.autenticate)
router.get('/profile/:id', userController.profile);

module.exports = router;
