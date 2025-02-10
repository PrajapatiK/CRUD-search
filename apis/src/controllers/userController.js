const User = require("../models/userModel");
const { v4: uuidv4 } = require("uuid");

module.exports.addUser = async (req, res) => {
  try {
    const bodyData = req.body;
    console.log(bodyData);
    const userId = uuidv4().toString();
    const userName = uuidv4().toString();
    const mngrId = uuidv4().toString();
    const empCode = uuidv4().toString();
    const user = new User({ ...req.body, userId, userName, mngrId, empCode });
    const newUser = await user.save();
    console.log(newUser);
    
    res.status(200).json({ data: newUser, message: 'New User created' });
  } catch (err) {
    res.status(200).json({ error: err });
  }
};

module.exports.getUser = async (req, res) => {
    try {
      const bodyData = req.body;
    let searchQuery = {};
      let userData;
      if (bodyData?.fName) searchQuery = { ...bodyData }
      userData = await User.find(searchQuery);
      console.log(userData);
      
      res.status(200).json({ data: userData });
    } catch (err) {
      res.status(200).json({ error: err });
    }
  };