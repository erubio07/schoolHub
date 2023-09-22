const {
  getStudentsBySubject,
  createSubject,
  getSubjectByProfessor,
} = require("../controllers/subjectControllers");

const createSubjectHandler = async (req, res) => {
  const { name, professorId } = req.body;
  try {
    const newSubject = await createSubject(name, professorId);
    res.status(201).json(newSubject);
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
};

const getSubjectsByProfessorHandler = async (req, res) => {
  const { professorId } = req.body;
  try {
    const subjects = await getSubjectByProfessor(professorId);
    res.status(200).json(subjects);
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
};
const getStudentsBySubjectHandler = async (req, res) => {
  const { id, courseId, divisionId, shiftId } = req.body;
  try {
    const students = await getStudentsBySubject(
      id,
      courseId,
      divisionId,
      shiftId
    );
    res.status(201).json(students);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// const getStudentSubjectsHandler = async (req, res) => {
//   const { id } = req.body;
//   try {
//     const studentSubjects = await getStudentSubjects(id);
//     res.status(201).json(studentSubjects);
//   } catch (e) {
//     res.status(400).json({ error: e.message });
//   }
// }; //Posiblemente no sirve porque se cambiaria por el endpoint que recibe toda la data del estudiante

module.exports = {
  getStudentsBySubjectHandler,
  createSubjectHandler,
  getSubjectsByProfessorHandler,
};
