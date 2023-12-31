require("dotenv").config();
const { Sequelize } = require("sequelize");
const fs = require("fs");
const path = require("path");
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;

const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/schoolsName`,
  {
    logging: false, // set to console.log to see the raw SQL queries
    native: false, // lets Sequelize know we can use pg-native for ~30% more speed
  },
);
const basename = path.basename(__filename);

const modelDefiners = [];

// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, "/models"))
  .filter(
    (file) =>
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js",
  )
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, "/models", file)));
  });

// Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach((model) => model(sequelize));
// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [
  entry[0][0].toUpperCase() + entry[0].slice(1),
  entry[1],
]);
sequelize.models = Object.fromEntries(capsEntries);

// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring
const {
  Student,
  Shift,
  Division,
  Course,
  Subject,
  Professor,
  Note,
  Preceptor,
  Assists,
} = sequelize.models;

// Aca vendrian las relaciones
// Product.hasMany(Reviews);
Student.belongsTo(Shift);
Shift.hasMany(Student);
Student.belongsTo(Division);
Division.hasMany(Student);
Division.belongsTo(Shift);
Shift.hasMany(Division);
Student.belongsTo(Course);
Course.hasMany(Student);
Course.belongsTo(Division);
Division.hasMany(Course);
Course.belongsTo(Shift);
Shift.hasMany(Course);
Student.belongsToMany(Subject, { through: "subject_student" });
Subject.belongsToMany(Student, { through: "subject_student" });
Professor.belongsToMany(Subject, { through: "subject_professor" });
Subject.belongsToMany(Professor, { through: "subject_professor" });
Student.belongsToMany(Note, { through: "notes_students" });
Note.belongsToMany(Student, { through: "notes_students" });
Note.belongsToMany(Subject, { through: "subjects_note" });
Subject.belongsToMany(Note, { through: "subjects_note" });
Course.hasOne(Preceptor);
Preceptor.belongsTo(Course);
Student.belongsToMany(Assists, { through: "assists_students" });
Assists.belongsToMany(Student, { through: "assists_students" });

module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize, // para importart la conexión { conn } = require('./db.js');
};
