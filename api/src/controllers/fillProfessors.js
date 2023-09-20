const { Professor, Subject } = require("../db");

const fillProfessor = async () => {
  const professor1 = await Professor.create({
    name: "Orlando",
    lastname: "Bloom",
    dni: "20659123",
    email: "orlando@gmail.com",
    adress: "Andres Lamas 2868",
    city: "Córdoba",
    province: "Córdoba",
    postalcode: "5009",
    password: "123456",
  });

  const professor2 = await Professor.create({
    name: "Emma",
    lastname: "Watson",
    dni: "30598124",
    email: "emma@gmail.com",
    adress: "Av. Libertad 123",
    city: "Buenos Aires",
    province: "Buenos Aires",
    postalcode: "1001",
    password: "abcdef",
  });

  const professor3 = await Professor.create({
    name: "Leonardo",
    lastname: "DiCaprio",
    dni: "40876235",
    email: "leo@gmail.com",
    adress: "Calle Hollywood 789",
    city: "Los Angeles",
    province: "California",
    postalcode: "90001",
    password: "pacific",
  });

  const professor4 = await Professor.create({
    name: "Jennifer",
    lastname: "Aniston",
    dni: "50789432",
    email: "jennifer@gmail.com",
    adress: "Sunrise Avenue 567",
    city: "Los Angeles",
    province: "California",
    postalcode: "90005",
    password: "jenny",
  });

  const professor5 = await Professor.create({
    name: "Chris",
    lastname: "Hemsworth",
    dni: "60981245",
    email: "chris@gmail.com",
    adress: "Ocean View Drive 789",
    city: "Sydney",
    province: "New South Wales",
    postalcode: "2000",
    password: "thor",
  });

  const professor6 = await Professor.create({
    name: "Angelina",
    lastname: "Jolie",
    dni: "70983421",
    email: "angelina@gmail.com",
    adress: "Beverly Hills 123",
    city: "Los Angeles",
    province: "California",
    postalcode: "90006",
    password: "angel",
  });

  const professor7 = await Professor.create({
    name: "Robert",
    lastname: "Downey Jr.",
    dni: "80976234",
    email: "robert@gmail.com",
    adress: "Malibu Beach 456",
    city: "Los Angeles",
    province: "California",
    postalcode: "90007",
    password: "ironman",
  });

  // Obtener todas las materias
  const subjects = await Subject.findAll();

  // Asignar materias a profesores
  await professor1.addSubjects([1, 8, 15, 22, 29, 36]); // Asignar a Orlando Bloom
  await professor2.addSubjects([2, 9, 16, 23, 30, 37]); // Asignar a Emma Watson
  await professor3.addSubjects([3, 10, 17, 24, 31, 38]); // Asignar a Leonardo DiCaprio
  await professor4.addSubjects([4, 11, 18, 25, 32, 39]); // Asignar a Jennifer Aniston
  await professor5.addSubjects([5, 12, 19, 26, 33, 40]); // Asignar a Chris Hemsworth
  await professor6.addSubjects([6, 13, 20, 27, 34, 41]); // Asignar a Angelina Jolie
  await professor7.addSubjects([7, 14, 21, 28, 35, 42]); // Asignar a Robert Downey Jr.
};

module.exports = fillProfessor;
