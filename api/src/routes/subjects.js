const { Router } = require("express");
const {
  getStudentsBySubjectHandler,
  getStudentSubjectsHandler,
} = require("../handlers/subjectsHandlers");

const router = Router();

router.post("/", getStudentsBySubjectHandler);

router.post("/id", getStudentSubjectsHandler);
module.exports = router;
