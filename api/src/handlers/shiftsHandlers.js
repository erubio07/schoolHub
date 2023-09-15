const { postShift, getShift } = require("../controllers/shiftsControllers");

const postShiftHandler = async (req, res) => {
  const { name } = req.body;
  try {
    if (!name) {
      res.status(400).json({ error: "Name is required" });
    }
    if (name) {
      const newShift = await postShift(name);
      res.status(200).json(newShift);
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getShiftHandler = async (req, res) => {
  try {
    const allShifts = await getShift();
    res.status(200).json(allShifts);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { postShiftHandler, getShiftHandler };
