const { Subject, Student, Professor } = require("../db");

const fillSubject = async () => {
  try {
    await Subject.create({ name: "Matemáticas 1" });
    await Subject.create({ name: "Lengua 1" });
    await Subject.create({ name: "Historia 1" });
    await Subject.create({ name: "Geografía 1" });
    await Subject.create({ name: "Biología 1" });
    await Subject.create({ name: "Arte 1" });
    await Subject.create({ name: "Música 1" });

    // Materias de segundo año
    await Subject.create({ name: "Matemáticas 2" });
    await Subject.create({ name: "Lengua 2" });
    await Subject.create({ name: "Historia 2" });
    await Subject.create({ name: "Geografía 2" });
    await Subject.create({ name: "Biología 2" });
    await Subject.create({ name: "Arte 2" });
    await Subject.create({ name: "Música 2" });

    // Materias de tercer año
    await Subject.create({ name: "Matemáticas 3" });
    await Subject.create({ name: "Lengua 3" });
    await Subject.create({ name: "Historia 3" });
    await Subject.create({ name: "Geografía 3" });
    await Subject.create({ name: "Biología 3" });
    await Subject.create({ name: "Arte 3" });
    await Subject.create({ name: "Música 3" });

    // Materias de cuarto año
    await Subject.create({ name: "Matemáticas 4" });
    await Subject.create({ name: "Lengua 4" });
    await Subject.create({ name: "Historia 4" });
    await Subject.create({ name: "Geografía 4" });
    await Subject.create({ name: "Biología 4" });
    await Subject.create({ name: "Arte 4" });
    await Subject.create({ name: "Música 4" });

    // Materias de quinto año
    await Subject.create({ name: "Matemáticas 5" });
    await Subject.create({ name: "Lengua 5" });
    await Subject.create({ name: "Historia 5" });
    await Subject.create({ name: "Geografía 5" });
    await Subject.create({ name: "Biología 5" });
    await Subject.create({ name: "Arte 5" });
    await Subject.create({ name: "Música 5" });

    // Materias de sexto año
    await Subject.create({ name: "Matemáticas 6" });
    await Subject.create({ name: "Lengua 6" });
    await Subject.create({ name: "Historia 6" });
    await Subject.create({ name: "Geografía 6" });
    await Subject.create({ name: "Biología 6" });
    await Subject.create({ name: "Arte 6" });
    await Subject.create({ name: "Música 6" });
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = fillSubject;
