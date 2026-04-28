

const User = require("../models/userModel");


// CREATE
const createUser = async (req, res) => {
  const user = await User.create(req.body);
  res.json(user);
};


// READ ALL
// const getUsers = async (req, res) => {
//   const users = await User.find();
//   res.json(users);
// };

// READ ALL WITH PAGINATION
const getUsers = async (req, res) => {
  try {
    // page aur limit lena
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;

    // skip calculate
    const skip = (page - 1) * limit;

    // database se limited data lana
    const users = await User.find()
      .skip(skip)
      .limit(limit);

    // total users count
    const total = await User.countDocuments();

    // response bhejna
    res.json({
      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit),
      users
    });

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};


// READ ONE
const getUser = async (req, res) => {
  const user = await User.findById(req.params.id);
  res.json(user);
};


// UPDATE
const updateUser = async (req, res) => {
  const user = await User.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  res.json(user);
};


// DELETE
const deleteUser = async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.json({ message: "User Deleted" });
};

module.exports = {
  createUser,
  getUsers,
  getUser,
  updateUser,
  deleteUser
};




