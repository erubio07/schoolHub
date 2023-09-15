const {Router} = require("express");
const {Division, Shift} = require("../db")
const router = Router();

router.post("/", async (req, res) => {
    const {name, shift} = req.body;
    try {
        if (!name) res.status(400).json({error: error.message})
        if (name) {
            const newDivision = await Division.create({
                name,
                shift
            });
            await newDivision.setShift(shift)
            res.status(201).json(newDivision);
        }
    } catch (e) {
        res.status(400).json({error: e.message});
    }
});

router.get("/", async (req, res) => {
    try {
        const allDivision = await Division.findAll({
            include: [{
                model: Shift
            }]
        })
        res.status(200).json(allDivision)
    } catch (e) {
        res.status(400).json({error: e.message})
    }
})

module.exports = router;