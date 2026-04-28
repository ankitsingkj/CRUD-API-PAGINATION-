const User = require("../models/userModel");
const bcrypt = require("bcryptjs");   // IMPORTANT import

const addThousandUsers = async (req, res) => {
  try {
    let users = [];

    // ✅ YAHAN DEFINE KARNA HAI
    const hashedPassword =
      await bcrypt.hash("123456", 10);

    for (let i = 1; i <= 1000; i++) {
      users.push({
        name: "User " + i,
        email: `user${i}@gmail.com`,
        contact: 9000000000 + i,
        password: hashedPassword   // ab defined hai
      });
    }

    await User.insertMany(users);

    res.json({
      message: "1000 users added successfully with password"
    });

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

module.exports = addThousandUsers;