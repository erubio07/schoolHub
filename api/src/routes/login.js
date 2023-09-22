const { Router } = require("express");
const {
  studentLoginHandler,
  professorLoginHandler,
  preceptorLoginHandler,
} = require("../handlers/loginHandlers");

const router = Router();

router.post("/studentlogin", studentLoginHandler);

router.post("/professorlogin", professorLoginHandler);

router.post("/preceptorlogin", preceptorLoginHandler);

module.exports = router;
