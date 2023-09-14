const { Router } = require("express");
const students = require("./students");

const router = Router();

router.use("/students", students);

module.exports = router;
