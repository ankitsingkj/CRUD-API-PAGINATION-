const express = require("express");
const router = express.Router();
const addThousandUsers = require("../controllers/addThousandUsers");
router.post("/add-1000-users", addThousandUsers);


const {
  createUser,
  getUsers,
  getUser,
  updateUser,
  deleteUser
} = require("../controllers/userController");

router.post("/users", createUser);

router.get("/users", getUsers);

router.get("/users/:id", getUser);

router.put("/users/:id", updateUser); 

router.delete("/users/:id", deleteUser);

module.exports = router;



