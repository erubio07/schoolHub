const {
  Student,
  Shift,
  Course,
  Division,
  Assists,
  Note,
  Subject,
} = require("../db");

const getALlStudents = async () => {
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
  return allStudents;
};

const getStudentsByCourse = async (courseId, divisionId, shiftId) => {
  try {
    const studentsByCourse = await Student.findAll({
      include: [
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
    return studentsByCourse;
  } catch (e) {
    throw new Error(e.message);
  }
};

const postStudent = async (
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
  shift
) => {
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
    try {
      const existingDni = await Student.findOne({
        where: {
          dni,
        },
      });
      if (existingDni) {
        throw new Error("EL dni ya se encuentra registrado");
      } else {
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
        return newStudent;
      }
    } catch (error) {
      throw new Error(error.message);
    }
  }
};

const getStudentInfo = async (studentId) => {
  try {
    if (studentId) {
      const studentData = await Student.findByPk(studentId, {
        include: [
          {
            model: Course,
          },
          {
            model: Shift,
          },
          {
            model: Division,
          },
          {
            model: Subject,
            include: [
              {
                model: Note,
              },
            ],
          },
          {
            model: Assists,
          },
        ],
      });
      return studentData;
    } else {
      throw new Error("todos los campos son requeridos");
    }
  } catch (e) {
    throw new Error(e.message);
  }
};

module.exports = {
  getALlStudents,
  postStudent,
  getStudentsByCourse,
  getStudentInfo,
};
