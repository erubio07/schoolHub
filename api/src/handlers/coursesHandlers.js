const {
  postDivision,
  getDivision,
} = require("../controllers/coursesControllers");

const postCoursesHandler = async (req, res) => {
  const { name, division, shift } = req.body;
  try {
    const newCourse = await postDivision(name, division, shift);
    res.status(201).json(newCourse);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getCoursesHandler = async (req, res) => {
  try {
    const allCourses = await getDivision();
    res.status(200).json(allCourses);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { postCoursesHandler, getCoursesHandler };
