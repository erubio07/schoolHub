const { Course, Division, Shift } = require("../db");

const postDivision = async (name, division, shift) => {
  try {
    if (!name || !division || !shift)
      throw new Error("Todos los campos son requeridos");
    if (name && division && shift) {
      const newCourse = await Course.create({
        name,
        division,
        shift,
      });
      await newCourse.setDivision(division);
      await newCourse.setShift(shift);
      return newCourse;
    }
  } catch (error) {
    throw new Error(error.message);
  }
};

const getDivision = async () => {
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
    return allCourses;
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = { postDivision, getDivision };
