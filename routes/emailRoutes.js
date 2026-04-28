const express = require("express");

const router = express.Router();

const {
  sendGroupMail
} = require("../controllers/emailController");

router.post("/send-group-mail", sendGroupMail);

module.exports = router;