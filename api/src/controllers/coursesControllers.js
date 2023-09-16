const { Course, Division, Shift } = require("../db");

const postDivision = async (name) => {
  try {
    if (!name) throw new Error("Todos los campos son requeridos");
    if (name) {
      const newCourse = await Course.create({
        name,
      });

      return newCourse;
    }
  } catch (error) {
    throw new Error(error.message);
  }
};

const getDivision = async () => {
  try {
    const allCourses = await Course.findAll();
    return allCourses;
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = { postDivision, getDivision };
