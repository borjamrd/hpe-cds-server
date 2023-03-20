const express = require("express");
const authRouter = require("./routes/auth");
const citiesRouter = require("./routes/cities");

const app = express();
const dotenv = require('dotenv')
var cors = require('cors')
app.use(express.json());
app.use(cors())
app.use("/login", authRouter);
app.use("/cities", citiesRouter);

const port = 3000;

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
