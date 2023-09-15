const { Router } = require("express");
const students = require("./students");
const shift = require("./shift");
const division = require("./division");
const course = require("./course");

const router = Router();

router.use("/students", students);
router.use("/shift", shift);
router.use("/division", division);
router.use("/course", course);

module.exports = router;
