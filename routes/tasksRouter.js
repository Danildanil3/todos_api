const express = require("express");
const router = express.Router();
const taskController = require("../controllers/taskController");

router.get("/", taskController.getTasks_List);

router.get("/:id", taskController.getTask);

router.post("/", taskController.createTask);

router.put("/:id", taskController.fullyUpdateTask);

router.patch("/:id", taskController.updateTask);

router.delete("/:id", taskController.deleteTask);

module.exports = router;
