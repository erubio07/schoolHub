const { Router } = require("express");
const {
  getStudentsHandler,
  postStudentsHandler,
  getStudentsByCourseHandler,
  getStudentInfoHandler,
} = require("../handlers/studentsHandler");

const router = Router();

router.get("/", getStudentsHandler);

router.post("/course", getStudentsByCourseHandler);

router.post("/", postStudentsHandler);

router.get("/:studentId", getStudentInfoHandler);

module.exports = router;
