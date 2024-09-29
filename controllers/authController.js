const { login, register } = require("../services/auth");

/**
 * @description calls logins services with req body passed
 * @param {object} req
 * @param {object} res
 * @param {Function} next
 */
const loginController = async (req, res, next) => {
  try {
    const response = await login(req.body);
    if (response!="Invalid") {
      res
        .status(200)
        .send({ status: 401, message: "Invalid Credentials", token: response });
    }
    else
    {
      res.status(200).json({message:"login Successful"})
    }
  } catch (error) {
    next(error);
  }
};

/**
 * @description calls register services with req body passed
 * @param {object} req
 * @param {object} res
 * @param {Function} next
 */
const registerController = async (req, res, next) => {
  try {
    const response = await register(req.body);
    if (response)
      res
        .status(201)
        .send({ status: 201, message: "User registered successfully" });
  } catch (error) {
    next(error);
  }
};

module.exports = { loginController, registerController };
