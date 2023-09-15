const { Router } = require("express");
const { Shift } = require("../db");

const router = Router();

router.post("/", async (req, res) => {
  const { name } = req.body;
  try {
    if (!name) {
      res.status(400).json({ error: "Name is required" });
    }
    if (name) {
      const newShift = await Shift.create({ name });
      res.status(200).json(newShift);
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.get("/", async (req, res) => {
  try{
    const allShifts = await Shift.findAll();
    res.status(200).json(allShifts)
  } catch (error){
    res.status(400).json({error: error.message})
  }
})

module.exports = router;
