const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userController');

router.post("/create", UserController.create);
router.post("/login", UserController.validator);
router.post("/delete:_id", UserController.deleteUser);
router.post("/update:_id", UserController.updateUser);

module.exports = router;
