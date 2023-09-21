const { Router } = require("express");
const { createAssistsHandler } = require("../handlers/assistsHandler");

const router = Router();

router.post("/", createAssistsHandler);

module.exports = router;
