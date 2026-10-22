const users = require("../models/signupModel");
const bcrypt = require("bcrypt");
const loginController = async (req, res) => {
  const { userName, password } = req.body;
  const user = await users.findOne({ userName });
  const unhashedPassword = await bcrypt.compare(password, user.hashedPassword);
  if (!unhashedPassword) {
    return res.send(false);
  }
  return res.send(true);
};
module.exports = loginController;
