const { Preceptor, Course } = require("../db");

const fillPreceptor = async () => {
  const preceptor1 = await Preceptor.create({
    name: "Gonzalo",
    lastname: "Higuain",
    dni: "20123456",
    email: "mail@mail.com.ar",
    adress: "Calle S/N",
    city: "Ciudad",
    province: "Provincia",
    postalcode: "1000",
    password: "123456",
  });
  await preceptor1.setCourse(1);
  const preceptor2 = await Preceptor.create({
    name: "Fernando",
    lastname: "Cavenaghi",
    dni: "20123457",
    email: "mail@mail.com.ar",
    adress: "Calle S/N",
    city: "Ciudad",
    province: "Provincia",
    postalcode: "1000",
    password: "123456",
  });
  await preceptor2.setCourse(2);
  const preceptor3 = await Preceptor.create({
    name: "German",
    lastname: "Burgos",
    dni: "20123458",
    email: "mail@mail.com.ar",
    adress: "Calle S/N",
    city: "Ciudad",
    province: "Provincia",
    postalcode: "1000",
    password: "123456",
  });
  await preceptor3.setCourse(3);
  const preceptor4 = await Preceptor.create({
    name: "Martin",
    lastname: "Demichelis",
    dni: "20123459",
    email: "mail@mail.com.ar",
    adress: "Calle S/N",
    city: "Ciudad",
    province: "Provincia",
    postalcode: "1000",
    password: "123456",
  });
  await preceptor4.setCourse(4);
  const preceptor5 = await Preceptor.create({
    name: "Pablo",
    lastname: "Apostol",
    dni: "20123460",
    email: "mail@mail.com.ar",
    adress: "Calle S/N",
    city: "Ciudad",
    province: "Provincia",
    postalcode: "1000",
    password: "123456",
  });
  await preceptor5.setCourse(5);
  const preceptor6 = await Preceptor.create({
    name: "Pedro",
    lastname: "Apostol",
    dni: "20123461",
    email: "mail@mail.com.ar",
    adress: "Calle S/N",
    city: "Ciudad",
    province: "Provincia",
    postalcode: "1000",
    password: "123456",
  });
  await preceptor6.setCourse(6);
};

module.exports = fillPreceptor;
