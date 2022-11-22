const express = require('express');
const router = express.Router();


const auth = require('../controllers/authController');
const fees = require('../controllers/feesToPayController')


router.post('/register', auth.register)

router.post('/login', auth.login)

router.put('/logout', auth.logout)

router.post('/fees', fees.generatePayment);

module.exports = router