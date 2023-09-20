const { Router } = require("express");
const { createNoteHandler } = require("../handlers/notesHandlers");

const router = Router();

router.post("/", createNoteHandler);

module.exports = router;