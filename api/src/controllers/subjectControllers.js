const { Subject, Student, Course, Division, Shift } = require("../db");

const getStudentsBySubject = async (id, courseId, divisionId, shiftId) => {
  try {
    if ((id, courseId, divisionId, shiftId)) {
      const students = await Student.findAll({
        include: [
          {
            model: Subject,
            where: {
              id: id,
            },
          },
          {
            model: Course,
            where: {
              id: courseId,
            },
          },
          {
            model: Division,
            where: {
              id: divisionId,
            },
          },
          {
            model: Shift,
            where: {
              id: shiftId,
            },
          },
        ],
      });
      return students;
    } else {
      throw new Error("todos los campos son requeridos");
    }
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = { getStudentsBySubject };
