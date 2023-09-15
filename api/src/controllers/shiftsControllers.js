const { Shift } = require("../db");

const postShift = async (name) => {
  try {
    const newShift = await Shift.create({ name });
    return newShift;
  } catch (error) {
    throw new Error(error.message);
  }
};

const getShift = async () => {
  const allShifts = await Shift.findAll();
  return allShifts;
};

module.exports = { postShift, getShift };
