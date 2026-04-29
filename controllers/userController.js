const User = require("../models/userModel");

// CREATE
const createUser = async (req, res) => {
  try {
    const { name, email, password, contact } = req.body;

    if (!name) {
      return res.status(400).json({
        message: "Name is required"
      });
    }

    if (!email) {
      return res.status(400).json({
        message: "Email is required"
      });
    }

    if (!password) {
      return res.status(400).json({
        message: "Password is required"
      });
    }

    if (!contact) {
      return res.status(400).json({
        message: "Contact is required"
      });
    }

    const user = await User.create(req.body);

    // ✅ 201 Created
    res.status(201).json({
      message: "User created successfully",
      user
    });

  } catch (error) {
    // ❌ 500 Server Error
    res.status(500).json({
      message: error.message
    });
  }
};

// READ ALL WITH PAGINATION
const getUsers = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;

    const skip = (page - 1) * limit;

    const { name, email, contact } = req.query;

    let filter = {};

    if (name) {
      filter.name = { $regex: name, $options: "i" };
    }

    if (email) {
      filter.email = { $regex: email, $options: "i" };
    }

    if (contact) {
      filter.contact = contact;
    }

    const users = await User.find(filter)
      .skip(skip)
      .limit(limit);

    const total = await User.countDocuments(filter);

    // ✅ 200 OK
    res.status(200).json({
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
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({
        message: "User ID is required"
      });
    }

    const user = await User.findById(id);

    if (!user) {
      return res.status(404).json({
        message: "User not found"
      });
    }

    // ✅ 200 OK
    res.status(200).json(user);

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

// UPDATE
const updateUser = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({
        message: "User ID is required"
      });
    }

    if (
      !req.body.name &&
      !req.body.email &&
      !req.body.password &&
      !req.body.contact
    ) {
      return res.status(400).json({
        message: "At least one field is required to update"
      });
    }

    const user = await User.findByIdAndUpdate(
      id,
      req.body,
      { returnDocument: "after" }
    );

    if (!user) {
      return res.status(404).json({
        message: "User not found"
      });
    }

    // ✅ 200 OK
    res.status(200).json(user);

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

// DELETE
const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({
        message: "User ID is required"
      });
    }

    const user = await User.findByIdAndDelete(id);

    if (!user) {
      return res.status(404).json({
        message: "User not found"
      });
    }

    // ✅ 200 OK
    res.status(200).json({
      message: "User Deleted"
    });

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

module.exports = {
  createUser,
  getUsers,
  getUser,
  updateUser,
  deleteUser
};