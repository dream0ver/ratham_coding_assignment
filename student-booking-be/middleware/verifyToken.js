const queries = require("../util/queries");
const pool = require("../util/db");
const createError = require("../util/createError");

const verifyToken = async (req, res, next) => {
  const bearer = req.headers.authorization.split(" ")[1];
  try {
    const foundUser = await pool.query(queries.findUserByToken, [bearer]);
    if (foundUser.rowCount) {
      next();
    } else {
      createError(res, {}, "Token Validatin Error , Unauthorized access.", 401);
    }
  } catch (err) {
    createError(res, err, "Server Error.");
  }
};

module.exports = verifyToken;
