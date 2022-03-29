const express = require('express');
const foodItemController = require('../controller/foodItem')

const router = express.Router();

router.post('/food', foodItemController.createFood)

module.exports = router;

