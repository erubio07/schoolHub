const { createAssists } = require("../controllers/assistsControllers");

const createAssistsHandler = async (req, res) => {
  const { studentId, name } = req.body;
  try {
    const newAssists = await createAssists(studentId, name);
    res.status(201).json(newAssists);
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
};

module.exports = { createAssistsHandler };