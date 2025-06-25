const express = require('express');
const router = express.Router();
const { login, getMe } = require('../controllers/user.controller');
const { protect } = require('../middlewares/auth.middlewares');


router.post('/login', login);
router.get('/me', protect, getMe);

module.exports = router;