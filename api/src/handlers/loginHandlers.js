const {
  loginStudent,
  loginProfessor,
  loginPreceptor,
} = require("../controllers/loginControllers");

const studentLoginHandler = async (req, res) => {
  const { dni, password } = req.body;
  try {
    const studentLogin = await loginStudent(dni, password);
    res.status(200).json(studentLogin);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const professorLoginHandler = async (req, res) => {
  const { dni, password } = req.body;
  try {
    const professorLogin = await loginProfessor(dni, password);
    res.status(200).json(professorLogin);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const preceptorLoginHandler = async (req, res) => {
  const { dni, password } = req.body;
  try {
    const preceptorLogin = await loginPreceptor(dni, password);
    res.status(200).json(preceptorLogin);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  studentLoginHandler,
  professorLoginHandler,
  preceptorLoginHandler,
};
