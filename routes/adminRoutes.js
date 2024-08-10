const { getAllUsersController, getAllDoctorsController, changeAccountStatusController } = require('../controllers/adminController');
const authMiddleware = require('../middlewares/authMiddleware');
const express = require('express');

const router = express.Router()

//GET METHOD || USERS
router.get('/getAllUsers', authMiddleware, getAllUsersController)
// GET METHOD || DOCTORS
router.get('/getAllDoctors', authMiddleware, getAllDoctorsController)
// POST METHOD || ACCOUNT STATUS
router.post('/changeAccountStatus', authMiddleware, changeAccountStatusController )

module.exports = router