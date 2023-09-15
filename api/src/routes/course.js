const { Router } = require("express");
const { Course, Division, Shift } = require("../db");

const router = Router();

router.post("/", async (req, res) => {
  const { name, division, shift } = req.body;
  try {
    if (!name || !division || !shift)
      res.status(400).json({ error: "Campos Incompletos" });
    if (name && division && shift) {
      const newCourse = await Course.create({
        name,
        division,
        shift,
      });
      await newCourse.setDivision(division);
      await newCourse.setShift(shift);
      res.status(201).json(newCourse);
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const allCourses = await Course.findAll({
      include: [
        {
          model: Shift,
        },
        {
          model: Division,
        },
      ],
    });
    res.status(200).json(allCourses);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
