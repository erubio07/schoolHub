const { Course, Shift, Division } = require("../db");

const fillCourses = async () => {
  try {
    const course1 = await Course.create({
      name: "1",
    });
    await course1.setDivision(1);
    await course1.setShift(1);
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = fillCourses;
