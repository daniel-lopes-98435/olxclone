const express = require('express');
const router = express.Router();

const AuthController = require('./controllers/AuthController');
const UserController = require('./controllers/UserController');
const AdsController = require('./controllers/AdsController');

const Auth = require('./middlewares/Auth');
const AuthValidator = require('./validators/AuthValidator');

router.get('/ping', (req,res) => {
    res.json({pong: true});
})

router.post('/user/signin',AuthValidator.singin, AuthController.signin);
router.post('/user/signup', AuthValidator.signup, AuthController.signup);


router.get('/states', Auth.private, UserController.getStates);
router.get('/user/me', UserController.info);
router.get('/user/me', UserController.editAction)

router.get('/categories', AdsController.getCategories);

router.post('/ad/add', AdsController.addAction);
router.get('/ad/list', AdsController.getList);
router.get('/ad/item', AdsController.getItem);
router.post('/ad/:id', AdsController.editAction); 



module.exports = router;