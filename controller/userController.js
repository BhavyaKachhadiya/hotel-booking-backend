const User = require('../models/userSchema'); 

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find({}); // Exclude password_hash from response
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
    // res.send("User");
};

// ... other controller functions as before ...

