const {
  getALlStudents,
  postStudent,
  getStudentsByCourse
} = require("../controllers/studentsControllers");

const getStudentsHandler = async (req, res) => {
  try {
    const allStudents = await getALlStudents();
    res.status(200).json(allStudents);
  } catch (error) {
    res.status(400).json({ error: error.message });
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
  const {courseId, divisionId, shiftId} = req.body;
  try {
    const studentsByCourse = await getStudentsByCourse(courseId, divisionId, shiftId);
    res.status(200).json(studentsByCourse)
  }catch (e) {
    res.status(400).json({error:e.message})
  }
}

module.exports = { getStudentsHandler, postStudentsHandler, getStudentsByCourseHandler };
