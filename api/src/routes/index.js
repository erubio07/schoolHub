const { Router } = require("express");
const students = require("./students");
const shift = require("./shift");

const router = Router();

router.use("/students", students);
router.use("/shift", shift);

module.exports = router;
