const {
  createAssists,
  updateAssists,
} = require("../controllers/assistsControllers");

const createAssistsHandler = async (req, res) => {
  const { studentId, name } = req.body;
  try {
    const newAssists = await createAssists(studentId, name);
    res.status(201).json(newAssists);
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
};

const updateAssistsHandler = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  try {
    const updatedAssists = updateAssists(id, name);
    res.status(200).send("asistencia actualizada con éxito");
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { createAssistsHandler, updateAssistsHandler };
