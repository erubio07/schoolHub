const { Subject, Student } = require("../db");

const fillSubject = async () => {
  try {
    const subject1 = await Subject.create({
      name: "Matematica 1",
    });
    const subject2 = await Subject.create({
      name: "Matematica 2",
    });
    const subject3 = await Subject.create({
      name: "Matematica 3",
    });
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = fillSubject;
