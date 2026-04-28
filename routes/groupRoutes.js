const express = require("express");

const router = express.Router();

const {
  createGroup,
  getGroups
} = require("../controllers/groupController");

router.post("/groups", createGroup);

router.get("/groups", getGroups);

module.exports = router;



