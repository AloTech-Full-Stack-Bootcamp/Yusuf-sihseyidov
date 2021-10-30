const express = require("express");


const app = express();

app.get("/", (req, res) => {
  res.status(200).send("<h3>Index Sayfasi</h3>");
});

app.get("/about", (req, res) => {
  res.status(200).send("<h3>Hakkimizda</h3>");
});

app.get("/contact", (req, res) => {
  res.status(200).send("<h3>Iletisim</h3>");
});

app.get("*", (req, res) => {
  res.status(404).send("<h3>404-Sayfa bulunamadi</h3>");
});

const port = 5000;

app.listen(port, () => {
  console.log(`Sunucu port ${port}\'de acildi...`);
});
