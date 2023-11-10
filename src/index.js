//exercice 0:
console.log("message javascript du serveur");

var myApp = require("simple-hello-world-example");

var msg = myApp.printMsg();

const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.listen(3000);

app.use("/dream", express.static("public"));

// app.get("/tva", function (req, res) {
//   res.sendfile("public/tva.html");
// });

// app.get("/form", function (req, res) {
//   const prixHT = parseFloat(req.query.HT);
//   const tauxTVA = parseFloat(req.query.tva);

//   const tva = (prixHT * tauxTVA) / 100;

//   res.send("Le montant de la TVA est de : " + tva);
// });

app.post("/form", function (req, res) {
  res.json(req.body.tva.html);
});

app.listen(5000);
