const express = require("express");
const router = express.Router();
const tasksRouter = require("./tasksRouter");
const listRouter = require("./listRouter");
const dashboardRouter = require("./dashboardRouter");
const collectionRouter = require("./collectionRouter");

router.use("/lists", listRouter);
router.use("/tasks", tasksRouter);
router.use("/dashboard", dashboardRouter);
router.use("/collection/today", collectionRouter);
module.exports = router;
