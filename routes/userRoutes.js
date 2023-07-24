const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authMiddleware = require('../middlewares/authMiddleware');

// Public route - Register a new user
router.post('/register', userController.registerUser);

// Public route - User login
router.post('/login', userController.loginUser);

// Protected route - Get current user profile (requires authentication)
router.get('/profile', authMiddleware, userController.getUserProfile);

// Protected route - Update current user profile (requires authentication)
router.put('/profile', authMiddleware, userController.updateUserProfile);

// Protected route - Delete current user account (requires authentication)
router.delete('/profile', authMiddleware, userController.deleteUserAccount);

// Other routes...

module.exports = router;
