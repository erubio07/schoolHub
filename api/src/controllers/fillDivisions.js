const { Division, Shift } = require("../db");

const fillDivision = async () => {
  try {
    const division1 = await Division.create({
      name: "A",
    });
    await division1.setShift(1);
    const division2 = await Division.create({
      name: "B",
    });
    await division2.setShift(1);
    const division3 = await Division.create({
      name: "C",
    });
    await division3.setShift(2);
    const division4 = await Division.create({
      name: "C",
    });
    await division4.setShift(2);
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = fillDivision;
