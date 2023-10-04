const pool = require("../util/db");
const queries = require("../util/queries");
const createError = require("../util/createError");
const { v4: uuid } = require("uuid");

const login = async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password)
    return createError(res, {}, "Username and Password are required.", 400);
  try {
    const foundUser = await pool.query(queries.findUser, [username]);
    if (foundUser.rowCount < 1)
      return createError(res, {}, "User does not exist.", 404);
    if (foundUser.rows[0].password !== password)
      return createError(res, {}, "Password incorrect.", 401);
    const newToken = uuid();
    await pool.query(queries.updateToken, [username, newToken]);
    res.json({
      message: "Login successfull",
      token: newToken,
    });
  } catch (err) {
    createError(res, err, "Error occurred while trying to login.");
  }
};

module.exports = {
  login,
};
