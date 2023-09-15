const { Students, Shift, Division, Course } = require("../db");

const fillStudents = async () => {
  try {
    const student1 = await Students.create({
      name: "Ezequiel",
      lastname: "Rubio",
      dni: "32683308",
      email: "erubio07@gmail.com",
      adress: "Andres Lamas 2868",
      city: "Córdoba",
      province: "Córdoba",
      postalcode: "5009",
      password: "123456",
    });
    //Falta agregar turno, division, curso
  } catch (error) {}
};
