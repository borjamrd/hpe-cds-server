const express = require("express");
const authMiddleware = require("../authMiddleware");
const cities = require("../cities.json");
const router = express.Router();
const fetch = require("node-fetch");

router.get("/", authMiddleware, (req, res) => {
  res.json({ cities: cities, message: "cities called properly" });
});
const api = "5b4a5fb7fff1a8f5a3c0cd68dc4e9a5b";


router.get("/:city", authMiddleware, (req, res) => {
  fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${req.params.city}&appid=${api}`
  )
    .then((res) => Promise.all([res.status, res.json()]))
    .then(([status, jsonData]) => {
      console.log(api)
      // console.log(jsonData);
      // console.log(status);
      res.json({ cityInfo: jsonData, status: status, searchedCity: req.params.city});
    });
});
module.exports = router;
