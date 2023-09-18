const { Student, Shift, Course, Division } = require("../db");

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
  try{
    const studentsByCourse = await Student.findAll({
      include: [
        {
          model: Course,
          where: {
            id: courseId
          }
        },
        {
          model: Division,
          where: {
            id: divisionId
          },
        },
        {
          model: Shift,
          where: {
            id: shiftId
          }
        },
      ]
  })
    return studentsByCourse
  }catch (e) {
    throw new Error(e.message)
  }
}

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

module.exports = { getALlStudents, postStudent, getStudentsByCourse };
