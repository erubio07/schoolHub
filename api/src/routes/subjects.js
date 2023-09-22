const { Router } = require("express");
const {
  getStudentsBySubjectHandler,
  createSubjectHandler,
  getSubjectsByProfessorHandler,
} = require("../handlers/subjectsHandlers");

const router = Router();

router.post("/students", getStudentsBySubjectHandler);

// router.post("/students/id", getStudentSubjectsHandler);

router.post("/", createSubjectHandler);

router.post("/professors", getSubjectsByProfessorHandler);
module.exports = router;
