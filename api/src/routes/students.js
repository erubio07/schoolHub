const { Router } = require("express");
const { Student, Shift, Course, Division } = require("../db");

const router = Router();

router.get("/", async (req, res) => {
  try {
    const allStudents = await Student.findAll({
      include: [
        {
          model: Course,
        },
        {
          model: Division,
        },
        {
          model: Shift,
        },
      ],
    });
    res.status(200).json(allStudents);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.post("/", async (req, res) => {
  const {
    name,
    lastname,
    dni,
    email,
    adress,
    city,
    province,
    postalcode,
    password,
    course,
    division,
    shift,
  } = req.body;
  try {
    if (
      name &&
      lastname &&
      dni &&
      email &&
      adress &&
      city &&
      province &&
      postalcode &&
      password &&
      course &&
      division &&
      shift
    ) {
      const newStudent = await Student.create({
        name,
        lastname,
        dni,
        email,
        adress,
        city,
        province,
        postalcode,
        password,
        course,
        division,
        shift,
      });
      await newStudent.setCourse(course);
      await newStudent.setDivision(division);
      await newStudent.setShift(shift);
      res.status(200).json(newStudent);
    } else {
      res.status(400).json({ error: "Faltan datos" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
