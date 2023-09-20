const { Professor, Subject } = require("../db");

const fillProfessor = async () => {
  const professor1 = await Professor.create({
    name: "Orlando",
    lastname: "Bloom",
    dni: "20659123",
    email: "mail@gmail.com",
    adress: "Andres Lamas 2868",
    city: "Córdoba",
    province: "Córdoba",
    postalcode: "5009",
    password: "123456",
  });
  await professor1.addSubject(1);
};

module.exports = fillProfessor;