const { Course, Shift, Division } = require("../db");

const fillCourses = async () => {
  try {
    const course1 = await Course.create({
      name: "1",
    });

    const course2 = await Course.create({
      name: "2",
    });

    const course3 = await Course.create({
      name: "3",
    });

    const course4 = await Course.create({
      name: "4",
    });

    const course5 = await Course.create({
      name: "5",
    });

    const course6 = await Course.create({
      name: "6",
    });
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = fillCourses;
