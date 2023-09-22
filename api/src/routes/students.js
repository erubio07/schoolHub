const { Router } = require("express");
const {
  getStudentsHandler,
  postStudentsHandler,
  getStudentsByCourseHandler,
  getStudentInfoHandler,
  updateStudentHandler,
} = require("../handlers/studentsHandler");

const router = Router();

router.get("/", getStudentsHandler);

router.post("/course", getStudentsByCourseHandler);

router.post("/", postStudentsHandler);

router.get("/:studentId", getStudentInfoHandler);

router.put("/:studentId", updateStudentHandler);

module.exports = router;
