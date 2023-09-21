const { Router } = require("express");
const students = require("./students");
const shift = require("./shift");
const division = require("./division");
const course = require("./course");
const subjects = require("./subjects");
const notes = require("./notes");
const assists = require("./assists");

const router = Router();

router.use("/students", students);
router.use("/shift", shift);
router.use("/division", division);
router.use("/course", course);
router.use("/subjects", subjects);
router.use("/notes", notes);
router.use("/assists", assists);

module.exports = router;
