const { DataTypes, Sequelize } = require("sequelize");
const bcrypt = require("bcrypt");

module.exports = (sequelize) => {
  const Student = sequelize.define(
    "student",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
        required: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        required: true,
      },
      lastname: {
        type: DataTypes.STRING,
        allowNull: false,
        required: true,
      },
      dni: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        required: true,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        required: true,
      },
      adress: {
        type: DataTypes.STRING,
        allowNull: false,
        required: true,
      },
      city: {
        type: DataTypes.STRING,
        allowNull: false,
        required: true,
      },
      province: {
        type: DataTypes.STRING,
        allowNull: false,
        required: true,
      },
      postalcode: {
        type: DataTypes.STRING,
        allowNull: false,
        required: true,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        required: true,
      },
    },
    {
      timestamps: false,
    }
  );
  Student.beforeCreate(async (student, options) => {
    const hashedPassword = await bcrypt.hash(student.password, 10);
    student.password = hashedPassword;
  });
  return Student;
};
