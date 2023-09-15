const { Shift } = require("../db");

const fillShifts = async () => {
  try {
    const shift1 = await Shift.create({
      name: "Mañana",
    });
    const shift2 = await Shift.create({
      name: "Tarde",
    });
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = fillShifts;
