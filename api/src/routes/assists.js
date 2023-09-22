const { Router } = require("express");
const {
  createAssistsHandler,
  updateAssistsHandler,
} = require("../handlers/assistsHandler");

const router = Router();

router.post("/", createAssistsHandler);

router.put("/:id", updateAssistsHandler);

module.exports = router;
