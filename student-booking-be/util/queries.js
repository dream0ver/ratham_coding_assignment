const getAllUsers = `SELECT * from users`;
const findUser = `SELECT * from users WHERE username = $1`;
const updateToken = `UPDATE users SET token = $2 WHERE username = $1`;
const availableSlots = "SELECT * from sessions WHERE is_booked = false";
const bookSlot =
  "UPDATE sessions SET is_booked = true,booked_by=$1 WHERE session_id = $2";
const getBookedSlots =
  "SELECT * from sessions WHERE is_booked=true AND dean_name=$1 AND slot_date >= $2";

const findUserByToken = "SELECT * from users WHERE token = $1";
module.exports = {
  getAllUsers,
  findUser,
  updateToken,
  availableSlots,
  bookSlot,
  getBookedSlots,
  findUserByToken,
};
