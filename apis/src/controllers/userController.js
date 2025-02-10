const User = require("../models/userModel");
const { v4: uuidv4 } = require("uuid");
const { generateCustomId } = require("../util");

module.exports.addUser = async (req, res) => {
  try {
    const bodyData = req.body;
    console.log(bodyData);
    const userId = generateCustomId();
    const userName = generateCustomId(bodyData.dept.slice(0, 3));
    const mngrId = generateCustomId();
    const empCode = generateCustomId(bodyData.dept.slice(0, 3));
    const user = new User({ ...req.body, userId, userName, mngrId, empCode });
    const newUser = await user.save();
    console.log(newUser);

    res.status(200).json({ data: newUser, message: "New User created" });
  } catch (err) {
    res.status(200).json({ error: err });
  }
};

module.exports.getUser = async (req, res) => {
  try {
    const bodyData = req.body;
    let searchQuery = {};
    let userData;
    // if (bodyData?.fName) searchQuery = { ...bodyData };
    if (Object.keys(bodyData).length > 0) {
      searchQuery = {
        $or: [
          { userId: { $regex: bodyData.query, $options: "i" } },
          { userName: { $regex: bodyData.query, $options: "i" } },
          { fName: { $regex: bodyData.query, $options: "i" } },
          { lName: { $regex: bodyData.query, $options: "i" } },
          { dept: { $regex: bodyData.query, $options: "i" } },
          { email: { $regex: bodyData.query, $options: "i" } },
        ],
      };
    }
    userData = await User.find(searchQuery);
    console.log(userData);

    res.status(200).json({ data: userData });
  } catch (err) {
    res.status(200).json({ error: err });
  }
};
