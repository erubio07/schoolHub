const {
  getStudentsBySubject,
  getStudentSubjects,
} = require("../controllers/subjectControllers");

const getStudentsBySubjectHandler = async (req, res) => {
  const { id, courseId, divisionId, shiftId } = req.body;
  try {
    const students = await getStudentsBySubject(
      id,
      courseId,
      divisionId,
      shiftId,
    );
    res.status(201).json(students);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getStudentSubjectsHandler = async (req, res) => {
  const { id } = req.body;
  try {
    const studentSubjects = await getStudentSubjects(id);
    res.status(201).json(studentSubjects);
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
};

module.exports = { getStudentsBySubjectHandler, getStudentSubjectsHandler };
