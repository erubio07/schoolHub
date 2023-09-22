const {
  getALlStudents,
  postStudent,
  getStudentsByCourse,
  getStudentInfo,
} = require("../controllers/studentsControllers");
const { Student, Subject, Division, Shift, Course } = require("../db");

const getStudentsHandler = async (req, res) => {
  try {
    const allStudents = await getALlStudents();
    res.status(200).json(allStudents);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getStudentInfoHandler = async (req, res) => {
  const { studentId } = req.params;
  try {
    const studentData = await getStudentInfo(studentId);
    res.status(200).json(studentData);
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
};

const postStudentsHandler = async (req, res) => {
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
      const newStudent = await postStudent(
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
      );

      res.status(201).json(newStudent);
    } else {
      res.status(400).json({ error: "Faltan datos" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getStudentsByCourseHandler = async (req, res) => {
  const { courseId, divisionId, shiftId } = req.body;
  try {
    const studentsByCourse = await getStudentsByCourse(
      courseId,
      divisionId,
      shiftId
    );
    res.status(200).json(studentsByCourse);
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
};

const updateStudentHandler = async (req, res) => {
  const {
    name,
    lastname,
    dni,
    adress,
    city,
    province,
    course,
    division,
    shift,
    subject,
  } = req.body;
  const { studentId } = req.params;
  try {
    let studentToUpdate = await Student.findByPk(studentId);
    let studentUpdated = await studentToUpdate.update({
      name,
      lastname,
      dni,
      adress,
      city,
      province,
      course,
      division,
      shift,
      subject,
    });
    await studentUpdated.setCourse(course);
    await studentUpdated.setDivision(division);
    await studentUpdated.setShift(shift);
    await studentUpdated.addSubject(subject);
    res.status(200).json(studentUpdated);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getStudentsHandler,
  postStudentsHandler,
  getStudentsByCourseHandler,
  getStudentInfoHandler,
  updateStudentHandler,
};
