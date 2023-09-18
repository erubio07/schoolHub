const { Router } = require("express");
const {
  getStudentsHandler,
  postStudentsHandler,
  getStudentsByCourseHandler
} = require("../handlers/studentsHandler");

const router = Router();

router.get("/", getStudentsHandler);

router.post("/course", getStudentsByCourseHandler)

router.post("/", postStudentsHandler);

module.exports = router;
