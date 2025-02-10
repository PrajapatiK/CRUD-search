const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');

console.log('user route called...');


router.post('/addUser', userController.addUser);
router.post('/getUser', userController.getUser);

module.exports = router;