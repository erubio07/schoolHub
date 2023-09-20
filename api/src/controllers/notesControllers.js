const { Note, Subject, Student } = require("../db");

const createNote = async (name, studentId, subjectId) => {
  try {
    if (name && studentId && subjectId) {
      const newNote = await Note.create({
        name: name,
      });
      await newNote.addSubject(subjectId);
      await newNote.addStudent(studentId);
      return newNote;
    } else {
      throw new Error("todos los campos son requeridos");
    }
  } catch (e) {
    throw new Error(e.message);
  }
};

module.exports = { createNote };
