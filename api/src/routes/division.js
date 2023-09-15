const { Router } = require("express");
const {
  postHandlerDivision,
  getDivisionHandler,
} = require("../handlers/divisionsHandlers");

const router = Router();

router.post("/", postHandlerDivision);

router.get("/", getDivisionHandler);

module.exports = router;
