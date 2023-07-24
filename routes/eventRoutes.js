const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/authMiddleware');
const eventController = require('../controllers/eventController');

// Route that requires authentication
router.get('/',  eventController.getAllEvents);
router.post('/',  eventController.createEvent);
router.get('/:id',  eventController.getEventById);
router.put('/:id',  eventController.updateEventById);
router.delete('/:id',  eventController.deleteEventById);

// Other routes...

module.exports = router;
