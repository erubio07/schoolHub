const { Student, Professor, Preceptor } = require("../db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const generateAccessToken = (student) => {
  return jwt.sign({ id: student.id }, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: process.env.ACCESS_TOKEN_EXPIRATION,
  });
};

const loginStudent = async (dni, password) => {
  try {
    if (!dni || !password) {
      throw new Error("todos los campos son requeridos");
    } else {
      if (dni && password) {
        const studentExisting = await Student.findOne({
          where: {
            dni: dni,
          },
        });
        if (studentExisting) {
          const passwordCompare = await bcrypt.compare(
            password,
            studentExisting.password
          );
          if (passwordCompare) {
            const accessToken = generateAccessToken(studentExisting);
            return {
              accessToken: accessToken,
              student: {
                id: studentExisting.id,
                name: studentExisting.name,
                lastname: studentExisting.lastname,
                dni: studentExisting.dni,
                email: studentExisting.email,
                adress: studentExisting.adress,
                city: studentExisting.city,
                province: studentExisting.province,
              },
            };
          } else {
            throw new Error("algunas de las credenciales son invalidas");
          }
        } else {
          throw new Error("credenciales inválidas");
        }
      }
    }
  } catch (error) {
    throw new Error(error.message);
  }
};

const loginProfessor = async (dni, password) => {
  try {
    if (!dni || !password) {
      throw new Error("todos los campos son requeridos");
    } else {
      if (dni && password) {
        const preceptorExisting = await Professor.findOne({
          where: {
            dni: dni,
          },
        });
        if (preceptorExisting) {
          const passwordCompare = await bcrypt.compare(
            password,
            preceptorExisting.password
          );
          if (passwordCompare) {
            const accessToken = generateAccessToken(preceptorExisting);
            return {
              accessToken: accessToken,
              professor: {
                id: preceptorExisting.id,
                name: preceptorExisting.name,
                lastname: preceptorExisting.lastname,
                dni: preceptorExisting.dni,
                email: preceptorExisting.email,
                adress: preceptorExisting.adress,
                city: preceptorExisting.city,
                province: preceptorExisting.province,
              },
            };
          } else {
            throw new Error("algunas de las credenciales son invalidas");
          }
        } else {
          throw new Error("credenciales inválidas");
        }
      }
    }
  } catch (error) {
    throw new Error(error.message);
  }
};

const loginPreceptor = async (dni, password) => {
  try {
    if (!dni || !password) {
      throw new Error("todos los campos son requeridos");
    } else {
      if (dni && password) {
        const preceptorExisting = await Preceptor.findOne({
          where: {
            dni: dni,
          },
        });
        if (preceptorExisting) {
          const passwordCompare = await bcrypt.compare(
            password,
            preceptorExisting.password
          );
          if (passwordCompare) {
            const accessToken = generateAccessToken(preceptorExisting);
            return {
              accessToken: accessToken,
              preceptor: {
                id: preceptorExisting.id,
                name: preceptorExisting.name,
                lastname: preceptorExisting.lastname,
                dni: preceptorExisting.dni,
                email: preceptorExisting.email,
                adress: preceptorExisting.adress,
                city: preceptorExisting.city,
                province: preceptorExisting.province,
              },
            };
          } else {
            throw new Error("algunas de las credenciales son invalidas");
          }
        } else {
          throw new Error("credenciales inválidas");
        }
      }
    }
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = { loginStudent, loginProfessor, loginPreceptor };
