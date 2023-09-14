const { Router } = require("express");

const router = Router();

router.get("/", (req, res) => {
  res.status(200).send("Estamos probando la ruta de alumnos");
});

module.exports = router;
