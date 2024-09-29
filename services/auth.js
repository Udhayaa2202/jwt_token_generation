/**
 * @description checks for valid username and password on success returns jwt token
 * @param {object} requestBody
 * @returns returns the token on successful login
 */
const { Users } = require("../modals/stepDbSchema");
const jwt = require("jsonwebtoken");

const login = async (requestBody) => {
  // logic for login
  const {userId,password}=requestBody;
  const userFound = await Users.findOne({userId:userId});
  if(userFound.password==password)
  {
    const token = jwt.sign({userId},process.env.SECRET_KEY,{
      expiresIn:"3000s"
    });
    return token;
  }
  else
  {
    return "invalid";
  }
};

/**
 * @description checks for valid username and password on success registers the user in user json file
 * @param {*} param - contains username password
 * @returns registered user
 */
const register = async ({ userId, username, password }) => {
  const Id = userId;
  const name = username;
  const pwd = password;
  const newUser = new Users({
    userId: Id,
    userName: name,
    password: pwd,
  });
  console.log("User Created");
  const result = await newUser.save();
  return result;
};

module.exports = { login, register };
