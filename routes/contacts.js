const express = require("express");
const router = express.Router();

const UsersController = require("../controllers/users");

router.get("/", UsersController.getAll);
router.get("/:id", UsersController.getSingle);


module.exports = router;