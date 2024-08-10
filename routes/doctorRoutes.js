const express = require('express')
const authMiddleware = require('../middlewares/authMiddleware');
const { getDoctorInfoController, updateProfileController, getDoctorByIdController, doctorAppointmentsController, updateStatusController } = require('../controllers/doctorController');
const router = express.Router()

// POSt SINGLE DOC INFO
router.post('/getDoctorInfo', authMiddleware, getDoctorInfoController )
// POST UPDATE PROFILE
router.post('/updateProfile', authMiddleware, updateProfileController )
//POST GET SINGLE DOCTOR INFO
router.post('/getDoctorById', authMiddleware, getDoctorByIdController )
// GET APPOINTMENTS
router.get('/doctor-appointments', authMiddleware, doctorAppointmentsController )
// POST UPDATE STATUS
router.post('/update-status', authMiddleware, updateStatusController )

module.exports = router