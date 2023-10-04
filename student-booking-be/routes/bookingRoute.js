const router = require("express").Router();
const bookingController = require("../controllers/bookingController");
const verifyToken = require("../middleware/verifyToken");

router.get("/getAllUsers", verifyToken, bookingController.getAllUsers);
router.get(
  "/getAvailableSlots",
  verifyToken,
  bookingController.getAvailableSlots
);
router.post("/bookSlot", verifyToken, bookingController.bookSlot);
router.get(
  "/getAllDeanSessions",
  verifyToken,
  bookingController.getAllDeanSessions
);

module.exports = router;
