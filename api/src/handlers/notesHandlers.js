const { createNote } = require("../controllers/notesControllers");

const createNoteHandler = async (req, res) => {
  const { name, studentId, subjectId } = req.body;
  try {
    const newNote = await createNote(name, studentId, subjectId);
    res.status(201).json(newNote);
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
};

module.exports = { createNoteHandler };
