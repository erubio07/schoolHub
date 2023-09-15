const { Router } = require("express");
const {
  getStudentsHandler,
  postStudentsHandler,
} = require("../handlers/studentsHandler");

const router = Router();

router.get("/", getStudentsHandler);

router.post("/", postStudentsHandler);

module.exports = router;
