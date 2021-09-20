const express = require('express');
const router = express.Router();

const AuthController = require('./controllers/AuthController');
const UserController = require('./controllers/UserController');
const AdsController = require('./controllers/AdsController');

const Auth = require('./middlewares/Auth');
const AuthValidator = require('./validators/AuthValidator');
const UserValidator = require('./validators/UserValidator');

router.get('/ping', (req,res) => {
    res.json({pong: true});
})

router.post('/user/signin',AuthValidator.singin, AuthController.signin);
router.post('/user/signup', AuthValidator.signup, AuthController.signup);


router.get('/states', Auth.private, UserController.getStates);

router.get('/user/me', Auth.private,  UserController.info);
router.put('/user/me', UserValidator.editAction, Auth.private, UserController.editAction)

router.get('/categories', AdsController.getCategories);

router.post('/ad/add', Auth.private, AdsController.addAction);
router.get('/ad/list', AdsController.getList);
router.get('/ad/item', AdsController.getItem);
router.post('/ad/:id', AdsController.editAction); 



module.exports = router;

