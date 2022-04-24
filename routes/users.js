const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userController');

router.post("/create", UserController.create);
router.post("/login", UserController.validator);

module.exports = router;
