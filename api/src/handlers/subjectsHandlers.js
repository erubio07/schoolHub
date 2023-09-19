const { getStudentsBySubject } = require("../controllers/subjectControllers");

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

module.exports = { getStudentsBySubjectHandler };
