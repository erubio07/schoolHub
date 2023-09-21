const { Assists, Student } = require("../db");

const createAssists = async (studentId, name) => {
  try {
    if (studentId && name) {
      const newAssists = await Assists.create({
        name: name,
      });
      newAssists.addStudent(studentId);
      return newAssists;
    } else {
      throw new Error("todos los campos son requeridos");
    }
  } catch (e) {
    throw new Error(e.message);
  }
};

module.exports = { createAssists };
