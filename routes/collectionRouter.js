const express = require("express");
const router = express.Router();
const collectionController = require("../controllers/collectionController");

router.use("/", collectionController.getStatistics);

module.exports = router;