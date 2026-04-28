const Group = require("../models/groupModel");

// CREATE GROUP
const createGroup = async (req, res) => {
  try {
    const group = await Group.create(req.body);

    res.json({
      message: "Group created successfully",
      group
    });

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

// GET GROUPS
const getGroups = async (req, res) => {
  try {
    const groups = await Group.find();

    res.json(groups);

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

module.exports = {
  createGroup,
  getGroups
};