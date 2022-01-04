const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000; // bardzo istotna linijka - port zostaje przydzielony przez Heroku

app.get("/", function (req, res) {
  res.send("<h1>my app on heroku!</h1>");
});

app.get("/data", function (req, res) {
  const context = {
    imie: "Emil",
    nazwisko: "Siatka",
    klasa: "3i1",
    grupa: "a",
  };
  res.send(context);
});

app.listen(PORT, function () {
  console.log("start serwera na porcie " + PORT);
});
