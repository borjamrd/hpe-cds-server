const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const router = express.Router();

//delete after checking everithing's allright
const secretKey = "mi_clave_secreta";

router.post("/", (req, res) => {
  const { username, password } = req.body;
  console.log(req.body.password);
  if (username === "usuarioAdmin" && password === "test") {
    const token = jwt.sign({ username }, secretKey);

    const user = {
      username: "usuarioAdmin",
      id: "12981291212",
      email: "admin@gmail.com",
      rol: "admin",
      token: token,
    };
    res.json({ user });
  } else if (username === "usuario" && password === "test") {
    const token = jwt.sign({ username }, secretKey);
    const user = {
      username: "usuario",
      id: "12981291212",
      email: "regular@gmail.com",
      rol: "regular",
      token: token,
    };
    res.json({ user });
  } else {
    res.status(401).json({ message: "Usuario o contraseña incorrectos" });
  }
});

module.exports = router;
