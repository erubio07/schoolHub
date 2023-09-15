const { Router } = require("express");
const {
  postShiftHandler,
  getShiftHandler,
} = require("../handlers/shiftsHandlers");

const router = Router();

router.post("/", postShiftHandler);

router.get("/", getShiftHandler);

module.exports = router;
