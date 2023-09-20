const { DataTypes, Sequelize } = require("sequelize");
const bcrypt = require("bcrypt");

module.exports = (sequelize) => {
  const Professor = sequelize.define(
    "professor",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      lastname: {
        type: DataTypes.STRING,
        allowNull: false,
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
    },
  );
  Professor.beforeCreate(async (professor, options) => {
    const hashedPassword = await bcrypt.hash(professor.password, 10);
    professor.password = hashedPassword;
  });
  return Professor;
};