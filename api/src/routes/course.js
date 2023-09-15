const { Router } = require("express");
const {
  getCoursesHandler,
  postCoursesHandler,
} = require("../handlers/coursesHandlers");

const router = Router();

router.post("/", postCoursesHandler);

router.get("/", getCoursesHandler);

module.exports = router;
