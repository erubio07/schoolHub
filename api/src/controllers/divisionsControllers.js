const { Division, Shift } = require("../db");

const postDivision = async (name, shift) => {
  try {
    if (!name || !shift) throw new Error("Todos los campos son requerido");
    if (name && shift) {
      const newDivision = await Division.create({
        name,
        shift,
      });
      await newDivision.setShift(shift);
      return newDivision;
    }
  } catch (error) {
    throw new Error(error.message);
  }
};

const getDivisions = async () => {
  try {
    const allDivision = await Division.findAll({
      include: [
        {
          model: Shift,
        },
      ],
    });
    return allDivision;
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = { postDivision, getDivisions };
