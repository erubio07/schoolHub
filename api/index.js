const server = require("./src/app");
const fillCourses = require("./src/controllers/fillCourses");
const fillDivision = require("./src/controllers/fillDivisions");
const fillShifts = require("./src/controllers/fillShifts");
const fillStudents = require("./src/controllers/fillStudents");
const { conn } = require("./src/db.js");
const port = 3001;

conn.sync({ force: true }).then(() => {
  server.listen(port, () => {
    console.log(`Servidor iniciado en el puerto ${port}`);
    fillShifts();
    fillDivision();
    fillCourses();
    fillStudents();
  });
});
