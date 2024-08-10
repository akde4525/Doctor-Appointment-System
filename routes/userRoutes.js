const express = require('express');
const { loginController, registerController, authController, applyDoctorController, getAllNotificationController, deleteAllNotificationController, getAllDoctorsController, bookAppointmentController, bookingAvailabilityController, userAppointmentsController } = require('../controllers/userController');
const authMiddleware = require('../middlewares/authMiddleware');

// router object
const router = express.Router();

// routes
// LOGIN || POST
router.post("/login", loginController);
// REGISTER || POST
router.post("/register", registerController);
// Auth || POST
router.post("/getUserData", authMiddleware, authController);
// APPLY DOCTOR || POST
router.post("/apply-doctor", authMiddleware, applyDoctorController);
// NOTIFICATION || POST
router.post("/get-all-notification", authMiddleware, getAllNotificationController)
// DELETE NOTIFICATION || POST
router.post("/delete-all-notification", authMiddleware, deleteAllNotificationController)
// GET ALL DOCTOR
router.get('/getAllDoctors', authMiddleware, getAllDoctorsController )
// BOOK APPOINTMENT
router.post('/book-appointment', authMiddleware, bookAppointmentController )
// BOOKING AVAILABILITY
router.post('/booking-availability', authMiddleware, bookingAvailabilityController )
// APPOINTMENTS LIST
router.get('/user-appointments', authMiddleware, userAppointmentsController )

module.exports = router;