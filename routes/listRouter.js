const express = require("express");
const router = express.Router();
const listController = require("../controllers/listController");

router.get("/:id/tasks", listController.getList);

router.get("/", listController.getAllLists);

router.post("/", listController.createList);

router.put("/:id/tasks", listController.updateList);

router.patch("/:id/tasks", listController.updateList);

router.delete("/:id/tasks", listController.deleteList);

module.exports = router;
