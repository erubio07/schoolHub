const {
  postDivision,
  getDivisions,
} = require("../controllers/divisionsControllers");

const postHandlerDivision = async (req, res) => {
  const { name, shift } = req.body;
  try {
    const newDivision = await postDivision(name, shift);
    res.status(201).json(newDivision);
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
};

const getDivisionHandler = async (req, res) => {
  try {
    const allDivision = await getDivisions();
    res.status(200).json(allDivision);
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
};

module.exports = { postHandlerDivision, getDivisionHandler };
