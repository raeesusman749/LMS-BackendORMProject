var express = require('express');
const { getUsersController, createUserController, updateUserController, deleteUserController } = require('../controller/user/userController');
var router = express.Router();


/* GET users listing. */
router.get('/get-users', getUsersController);
router.post('/create-user', createUserController);
router.patch('/update-user/:id', updateUserController);
router.delete('/delete-user/:id', deleteUserController);


module.exports = router;