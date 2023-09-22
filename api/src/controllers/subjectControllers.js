const {
  Subject,
  Student,
  Course,
  Division,
  Shift,
  Note,
  Professor,
} = require("../db");

const getStudentsBySubject = async (id, courseId, divisionId, shiftId) => {
  try {
    if (id && courseId && divisionId && shiftId) {
      const students = await Student.findAll({
        include: [
          {
            model: Subject,
            where: {
              id: id,
            },
            include: [
              {
                model: Note,
              },
            ],
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

// const getStudentSubjects = async (id) => {
//   try {
//     const student = await Student.findAll({
//       where: {
//         id: id,
//       },
//       include: [
//         {
//           model: Subject,
//           include: [
//             {
//               model: Note,
//             },
//           ],
//         },
//       ],
//     });
//     return student;
//   } catch (e) {
//     throw new Error(e.message);
//   }
// }; //Posiblemente no sirve porque se cambiaria por el endpoint que recibe toda la data del estudiante

const createSubject = async (name, professorId) => {
  try {
    if (!name) {
      throw new Error("debe proporcionar un nombre");
    }
    if (name) {
      const newSubject = await Subject.create({
        name: name,
      });
      await newSubject.addProfessor(professorId);
      return newSubject;
    }
  } catch (e) {
    throw new Error(e.message);
  }
};

const getSubjectByProfessor = async (professorId) => {
  try {
    const subjects = await Professor.findAll({
      where: {
        id: professorId,
      },
      include: [
        {
          model: Subject,
        },
      ],
    });
    return subjects;
  } catch (e) {
    throw new Error(e.message);
  }
};

module.exports = {
  getStudentsBySubject,

  createSubject,
  getSubjectByProfessor,
};
