const { Student, Shift, Division, Course } = require("../db");

const fillStudents = async () => {
  try {
    const student1 = await Student.create({
      name: "Ezequiel",
      lastname: "Rubio",
      dni: "32683308",
      email: "mail@gmail.com",
      adress: "Andres Lamas 2868",
      city: "Córdoba",
      province: "Córdoba",
      postalcode: "5009",
      password: "123456",
    });
    await student1.setCourse(1);
    await student1.setDivision(1);
    await student1.setShift(1);
    const student2 = await Student.create({
      name: "Virginia",
      lastname: "Valverdi",
      dni: "32683309",
      email: "mail@gmail.com",
      adress: "Temistocles Castellanos 1444",
      city: "Córdoba",
      province: "Córdoba",
      postalcode: "5009",
      password: "123456",
    });
    await student2.setCourse(1);
    await student2.setDivision(1);
    await student2.setShift(1);
    const student3 = await Student.create({
      name: "Cristian",
      lastname: "Aramayo",
      dni: "32683310",
      email: "mail@gmail.com",
      adress: "Gato y Mancha 345",
      city: "Córdoba",
      province: "Córdoba",
      postalcode: "5009",
      password: "123456",
    });
    await student3.setCourse(1);
    await student3.setDivision(1);
    await student3.setShift(1);
    const student4 = await Student.create({
      name: "Fernanda",
      lastname: "Silva",
      dni: "32683311",
      email: "mail@gmail.com",
      adress: "Luis Galeano 1256",
      city: "Córdoba",
      province: "Córdoba",
      postalcode: "5009",
      password: "123456",
    });
    await student4.setCourse(1);
    await student4.setDivision(1);
    await student4.setShift(1);
    const student5 = await Student.create({
      name: "Joel",
      lastname: "Dupraz",
      dni: "32683312",
      email: "mail@gmail.com",
      adress: "Luis Galeano 1345",
      city: "Córdoba",
      province: "Córdoba",
      postalcode: "5009",
      password: "123456",
    });
    await student5.setCourse(1);
    await student5.setDivision(1);
    await student5.setShift(1);
    const student6 = await Student.create({
      name: "Gabriel",
      lastname: "Troncosa",
      dni: "32683313",
      email: "mail@gmail.com",
      adress: "Andres Lamas 2870",
      city: "Córdoba",
      province: "Córdoba",
      postalcode: "5009",
      password: "123456",
    });
    await student6.setCourse(1);
    await student6.setDivision(2);
    await student6.setShift(1);
    const student7 = await Student.create({
      name: "Gabriel",
      lastname: "Valverdi",
      dni: "32683314",
      email: "mail@gmail.com",
      adress: "Sagrada Familia 200",
      city: "Córdoba",
      province: "Córdoba",
      postalcode: "5009",
      password: "123456",
    });
    await student7.setCourse(1);
    await student7.setDivision(2);
    await student7.setShift(1);
    const student8 = await Student.create({
      name: "Celina",
      lastname: "Fushimi",
      dni: "32683315",
      email: "mail@gmail.com",
      adress: "Andres Lamas 2870",
      city: "Córdoba",
      province: "Córdoba",
      postalcode: "5009",
      password: "123456",
    });
    await student8.setCourse(1);
    await student8.setDivision(2);
    await student8.setShift(1);
    const student9 = await Student.create({
      name: "Jose",
      lastname: "Valverdi",
      dni: "32683316",
      email: "mail@gmail.com",
      adress: "Ocatvio Pinto 200",
      city: "Córdoba",
      province: "Córdoba",
      postalcode: "5009",
      password: "123456",
    });
    await student9.setCourse(1);
    await student9.setDivision(2);
    await student9.setShift(1);
    const student10 = await Student.create({
      name: "Mabel",
      lastname: "Andrada",
      dni: "32683317",
      email: "mail@gmail.com",
      adress: "Andres Lamas 2870",
      city: "Córdoba",
      province: "Córdoba",
      postalcode: "5009",
      password: "123456",
    });
    await student10.setCourse(1);
    await student10.setDivision(2);
    await student10.setShift(1);
    const student11 = await Student.create({
      name: "Matias",
      lastname: "Valverdi",
      dni: "32683318",
      email: "mail@gmail.com",
      adress: "Betania 2000",
      city: "Córdoba",
      province: "Córdoba",
      postalcode: "5009",
      password: "123456",
    });
    await student11.setCourse(1);
    await student11.setDivision(3);
    await student11.setShift(2);
    const student12 = await Student.create({
      name: "Diego",
      lastname: "Encina",
      dni: "32683319",
      email: "mail@gmail.com",
      adress: "Betania 2000",
      city: "Córdoba",
      province: "Córdoba",
      postalcode: "5009",
      password: "123456",
    });
    await student12.setCourse(1);
    await student12.setDivision(3);
    await student12.setShift(2);
    const student13 = await Student.create({
      name: "German",
      lastname: "Brouwer",
      dni: "32683320",
      email: "mail@gmail.com",
      adress: "Temistocles Castellanos 1442",
      city: "Córdoba",
      province: "Córdoba",
      postalcode: "5009",
      password: "123456",
    });
    await student13.setCourse(1);
    await student13.setDivision(3);
    await student13.setShift(2);
    const student14 = await Student.create({
      name: "German",
      lastname: "Capdevilla",
      dni: "32683322",
      email: "mail@gmail.com",
      adress: "Betania 2040",
      city: "Córdoba",
      province: "Córdoba",
      postalcode: "5009",
      password: "123456",
    });
    await student14.setCourse(1);
    await student14.setDivision(3);
    await student14.setShift(2);
    const student15 = await Student.create({
      name: "Roberto",
      lastname: "Villa",
      dni: "32683323",
      email: "mail@gmail.com",
      adress: "Sagrada Familia 100",
      city: "Córdoba",
      province: "Córdoba",
      postalcode: "5009",
      password: "123456",
    });
    await student15.setCourse(1);
    await student15.setDivision(3);
    await student15.setShift(2);
    const student16 = await Student.create({
      name: "Sebastian",
      lastname: "Argüello",
      dni: "32683324",
      email: "mail@gmail.com",
      adress: "Sagrada Familia 111",
      city: "Córdoba",
      province: "Córdoba",
      postalcode: "5009",
      password: "123456",
    });
    await student16.setCourse(1);
    await student16.setDivision(4);
    await student16.setShift(2);
    const student17 = await Student.create({
      name: "Sion",
      lastname: "Laingboro",
      dni: "32683325",
      email: "mail@gmail.com",
      adress: "Sagrada Familia 211",
      city: "Córdoba",
      province: "Córdoba",
      postalcode: "5009",
      password: "123456",
    });
    await student17.setCourse(1);
    await student17.setDivision(4);
    await student17.setShift(2);
    const student18 = await Student.create({
      name: "Leonardo",
      lastname: "Rojas",
      dni: "32683326",
      email: "mail@gmail.com",
      adress: "Martin Coronado 200",
      city: "Córdoba",
      province: "Córdoba",
      postalcode: "5009",
      password: "123456",
    });
    await student18.setCourse(1);
    await student18.setDivision(4);
    await student18.setShift(2);
    const student19 = await Student.create({
      name: "Omar",
      lastname: "Arrieta",
      dni: "32683327",
      email: "mail@gmail.com",
      adress: "Luna Y Cardenas 200",
      city: "Córdoba",
      province: "Córdoba",
      postalcode: "5009",
      password: "123456",
    });
    await student19.setCourse(1);
    await student19.setDivision(4);
    await student19.setShift(2);
    const student20 = await Student.create({
      name: "Ezequiel",
      lastname: "Olmos",
      dni: "32683328",
      email: "mail@gmail.com",
      adress: "Sagrada Familia 111",
      city: "Córdoba",
      province: "Córdoba",
      postalcode: "5009",
      password: "123456",
    });
    await student20.setCourse(1);
    await student20.setDivision(4);
    await student20.setShift(2);
    const student21 = await Student.create({
      name: "Ana",
      lastname: "Olmos",
      dni: "32683329",
      email: "mail@gmail.com",
      adress: "Sagrada Familia 111",
      city: "Córdoba",
      province: "Córdoba",
      postalcode: "5009",
      password: "123456",
    });
    await student21.setCourse(2);
    await student21.setDivision(1);
    await student21.setShift(1);
    const student22 = await Student.create({
      name: "Agostina",
      lastname: "Rubio",
      dni: "32683330",
      email: "mail@gmail.com",
      adress: "ANdres Lamas 2868",
      city: "Córdoba",
      province: "Córdoba",
      postalcode: "5009",
      password: "123456",
    });
    await student22.setCourse(2);
    await student22.setDivision(1);
    await student22.setShift(1);
    const student23 = await Student.create({
      name: "Candela",
      lastname: "Rubio",
      dni: "32683331",
      email: "mail@gmail.com",
      adress: "ANdres Lamas 2868",
      city: "Córdoba",
      province: "Córdoba",
      postalcode: "5009",
      password: "123456",
    });
    await student23.setCourse(2);
    await student23.setDivision(1);
    await student23.setShift(1);
    const student24 = await Student.create({
      name: "Roberto",
      lastname: "Mesias",
      dni: "32683332",
      email: "mail@gmail.com",
      adress: "Sagrada Familia 500",
      city: "Córdoba",
      province: "Córdoba",
      postalcode: "5009",
      password: "123456",
    });
    await student24.setCourse(2);
    await student24.setDivision(1);
    await student24.setShift(1);
    const student25 = await Student.create({
      name: "Sebastian",
      lastname: "Palermo",
      dni: "32683333",
      email: "mail@gmail.com",
      adress: "Sagrada Familia 300",
      city: "Córdoba",
      province: "Córdoba",
      postalcode: "5009",
      password: "123456",
    });
    await student25.setCourse(2);
    await student25.setDivision(1);
    await student25.setShift(1);
    const student26 = await Student.create({
      name: "Dario",
      lastname: "Gerbaudo",
      dni: "32683334",
      email: "mail@gmail.com",
      adress: "Sagrada Familia 320",
      city: "Córdoba",
      province: "Córdoba",
      postalcode: "5009",
      password: "123456",
    });
    await student26.setCourse(2);
    await student26.setDivision(2);
    await student26.setShift(1);
    const student27 = await Student.create({
      name: "Evangelina",
      lastname: "Ficeti",
      dni: "32683335",
      email: "mail@gmail.com",
      adress: "Sagrada Familia 320",
      city: "Córdoba",
      province: "Córdoba",
      postalcode: "5009",
      password: "123456",
    });
    await student27.setCourse(2);
    await student27.setDivision(2);
    await student27.setShift(1);
    const student28 = await Student.create({
      name: "Sebastian",
      lastname: "Salazar",
      dni: "32683336",
      email: "mail@gmail.com",
      adress: "Sagrada Familia 322",
      city: "Córdoba",
      province: "Córdoba",
      postalcode: "5009",
      password: "123456",
    });
    await student28.setCourse(2);
    await student28.setDivision(2);
    await student28.setShift(1);
    const student29 = await Student.create({
      name: "Fernando",
      lastname: "Paez",
      dni: "32683337",
      email: "mail@gmail.com",
      adress: "Sagrada Familia 1320",
      city: "Córdoba",
      province: "Córdoba",
      postalcode: "5009",
      password: "123456",
    });
    await student29.setCourse(2);
    await student29.setDivision(2);
    await student29.setShift(1);
    const student30 = await Student.create({
      name: "Omar",
      lastname: "Fuentes",
      dni: "32683338",
      email: "mail@gmail.com",
      adress: "Lino Spilimbergo 456",
      city: "Córdoba",
      province: "Córdoba",
      postalcode: "5009",
      password: "123456",
    });
    await student30.setCourse(2);
    await student30.setDivision(2);
    await student30.setShift(1);
    const student31 = await Student.create({
      name: "Gabriel",
      lastname: "Fuentes",
      dni: "32683339",
      email: "mail@gmail.com",
      adress: "Lino Spilimbergo 456",
      city: "Córdoba",
      province: "Córdoba",
      postalcode: "5009",
      password: "123456",
    });
    await student31.setCourse(2);
    await student31.setDivision(3);
    await student31.setShift(2);
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = fillStudents;
