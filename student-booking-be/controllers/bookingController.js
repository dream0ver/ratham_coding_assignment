const pool = require("../util/db");
const queries = require("../util/queries");
const createError = require("../util/createError");

const getAllUsers = async (req, res) => {
  try {
    const result = await pool.query(queries.getAllUsers);
    res.json({
      users: result.rows,
      total: result.rowCount,
    });
  } catch (err) {
    createError(res, err, "Error occurred while fetching all users.");
  }
};

const getAvailableSlots = async (req, res) => {
  try {
    const availableSlots = await pool.query(queries.availableSlots);
    res.json({
      available_slots: availableSlots.rows,
      total: availableSlots.rowCount,
    });
  } catch (err) {
    createError(res, err, "Error occurred while fetching available sessions.");
  }
};

const getAllDeanSessions = async (req, res) => {
  const { username } = req.body;
  try {
    const foundUser = await pool.query(queries.findUser, [username]);
    if (foundUser.rowCount < 1)
      return createError(res, {}, "User does not exist.", 404);
    if (foundUser.rows[0].role != 9000)
      return createError(
        res,
        {},
        "Students are not authorized to use this API.",
        401
      );
    const bookedSlots = await pool.query(queries.getBookedSlots, [
      username,
      new Date(),
    ]);
    res.json({
      booked_slots: bookedSlots.rows,
      total: bookedSlots.rowCount,
    });
  } catch (err) {
    createError(res, err, "Error occurred while fetching booked sessions.");
  }
};

const bookSlot = async (req, res) => {
  const { username, session_id } = req.body;
  if (!username || !session_id) {
    return createError(res, {}, "Username and Session ID are required.", 400);
  }
  try {
    const foundUser = await pool.query(queries.findUser, [username]);
    if (foundUser.rowCount < 1)
      return createError(res, {}, "User does not exist.", 404);
    await pool.query(queries.bookSlot, [username, session_id]);
    res.json({
      message: `Slot with session id ${session_id} successfully booked by user ${username}.`,
    });
  } catch (err) {}
};

module.exports = {
  getAllUsers,
  getAvailableSlots,
  bookSlot,
  getAllDeanSessions,
};
