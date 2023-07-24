const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authMiddleware = require('../middlewares/authMiddleware');

// Public route - Register a new user
router.post('/register', userController.registerUser);

// Public route - User login
router.post('/login', userController.loginUser);



// Other routes...

module.exports = router;
